import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const DEPLOY_ENV_DENYLIST = new Set([
  'CLOUDFLARE_API_TOKEN',
  'CLOUDFLARE_ACCOUNT_ID',
  'CLOUDFLARE_WORKER_NAME',
  'CLOUDFLARE_WORKERS_URL',
]);

function parseEnvFile(contents) {
  const values = {};

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key) {
      values[key] = value;
    }
  }

  return values;
}

async function loadLocalEnv(rootDirectory) {
  const values = {};

  for (const fileName of ['.env', '.env.local']) {
    try {
      const contents = await fs.readFile(path.join(rootDirectory, fileName), 'utf8');
      Object.assign(values, parseEnvFile(contents));
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
        continue;
      }

      throw error;
    }
  }

  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'string' && !Object.prototype.hasOwnProperty.call(process.env, key)) {
      process.env[key] = value;
    }
  }

  return values;
}

function shouldSyncEnvironmentValue(key, value) {
  if (DEPLOY_ENV_DENYLIST.has(key)) {
    return false;
  }

  if (
    key === 'NEXT_PUBLIC_APP_URL' &&
    /^(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?(\/.*)?$/i.test(value)
  ) {
    return false;
  }

  return true;
}

function collectDeploymentEnvironmentValues(sourceValues) {
  const values = {};

  for (const [key, rawValue] of Object.entries(sourceValues)) {
    if (typeof rawValue !== 'string') {
      continue;
    }

    const trimmed = rawValue.trim();
    if (trimmed === '' || !shouldSyncEnvironmentValue(key, trimmed)) {
      continue;
    }

    values[key] = trimmed;
  }

  return values;
}

async function runCommand(command, args, options = {}) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd ?? process.cwd(),
      env: options.env ?? process.env,
      stdio: ['pipe', 'inherit', 'inherit'],
    });

    if (options.stdin) {
      child.stdin.write(options.stdin);
    }
    child.stdin.end();

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve(undefined);
        return;
      }

      reject(new Error(`Command failed: ${command} ${args.join(' ')}`));
    });
  });
}

async function ensureWranglerConfig(rootDirectory, workerName) {
  const configPath = path.join(rootDirectory, 'wrangler.jsonc');
  const contents = await fs.readFile(configPath, 'utf8');
  const nextContents = contents.replace(
    /"name"\s*:\s*"[^"]*"/,
    `"name": ${JSON.stringify(workerName)}`,
  );

  if (nextContents !== contents) {
    await fs.writeFile(configPath, nextContents, 'utf8');
  }
}

async function syncCloudflareEnvironment({ accountId, rootDirectory, token, values, workerName }) {
  const syncedKeys = [];

  for (const [key, value] of Object.entries(values)) {
    await runCommand(
      'npx',
      [
        'wrangler',
        'secret',
        'put',
        key,
        '--name',
        workerName,
        '--config',
        path.join(rootDirectory, 'wrangler.jsonc'),
      ],
      {
        env: {
          ...process.env,
          CLOUDFLARE_ACCOUNT_ID: accountId,
          CLOUDFLARE_API_TOKEN: token,
        },
        stdin: `${value}\n`,
      },
    );
    syncedKeys.push(key);
  }

  return syncedKeys;
}

async function main() {
  const rootDirectory = process.cwd();
  const localEnvValues = await loadLocalEnv(rootDirectory);

  const token = process.env.CLOUDFLARE_API_TOKEN?.trim();
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
  const workerName = process.env.CLOUDFLARE_WORKER_NAME?.trim();

  if (!token || !accountId || !workerName) {
    throw new Error(
      'Cloudflare Workers is not configured yet. Pull your Stripe project env again so the Cloudflare API token, account id, and worker name are available.',
    );
  }

  await ensureWranglerConfig(rootDirectory, workerName);

  const deploymentEnvironment = collectDeploymentEnvironmentValues(localEnvValues);
  const syncedEnvironmentKeys = await syncCloudflareEnvironment({
    accountId,
    rootDirectory,
    token,
    values: deploymentEnvironment,
    workerName,
  });

  await runCommand('npx', ['opennextjs-cloudflare', 'build'], {
    cwd: rootDirectory,
    env: {
      ...process.env,
      CLOUDFLARE_ACCOUNT_ID: accountId,
      CLOUDFLARE_API_TOKEN: token,
    },
  });

  await runCommand('npx', ['opennextjs-cloudflare', 'deploy'], {
    cwd: rootDirectory,
    env: {
      ...process.env,
      CLOUDFLARE_ACCOUNT_ID: accountId,
      CLOUDFLARE_API_TOKEN: token,
    },
  });

  const deploymentUrl =
    process.env.CLOUDFLARE_WORKERS_URL?.trim() || `https://${workerName}.workers.dev`;

  console.log('Deployment completed successfully.');
  if (syncedEnvironmentKeys.length > 0) {
    console.log(`Synced env vars: ${syncedEnvironmentKeys.sort().join(', ')}`);
  }
  console.log(`URL: ${deploymentUrl}`);
}

main().catch((error) => {
  const message =
    error instanceof Error ? error.message : 'Unable to deploy to Cloudflare Workers.';
  console.error(message);
  process.exitCode = 1;
});
