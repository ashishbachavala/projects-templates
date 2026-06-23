# projects-templates

`projects-templates` contains Stripe-maintained starter apps for `stripe projects build`.

Each top-level directory is a build template variant with working app code, provider configuration, deployment wiring, and template metadata. These templates are one source of entries in [`projects-template-registry`](https://github.com/stripe/projects-template-registry), which is the shared registry that `stripe projects build` uses for discovery.

Community or partner templates should not live in this repository. If you maintain your own template, host it in your own public GitHub repository and submit a manifest to `projects-template-registry`.

## What lives here

- Next.js SaaS starters
- Next.js one-time payment starters
- Static site starters
- Additional starter variants used by Stripe Projects

Every template is expected to:

- Run after scaffolding with a standard install command
- Use the Stripe Projects services declared in its manifest
- Document local setup in its own `README.md`
- Keep example environment variables in `.env.example` or `.env.local.example`

## Repository layout

- `*/projects-template.yaml`: template metadata for the starter variant
- `*/README.md`: variant-specific setup and usage instructions
- `*/infra/`: provider or Stripe infrastructure setup, when required
- `*/scripts/`: deploy or helper scripts used by the starter
- `*/prompts/`: optional prompts for AI-assisted customization

## Contributing

Open an issue or pull request if you want to fix a bug or improve one of Stripe's templates in this repository. See [CONTRIBUTING.md](CONTRIBUTING.md) for the expected workflow.

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting instructions.
