import { CustomizationToggle } from './customization-toggle';

const starterRows = [
  {
    label: "Home",
    description: "Your default landing page and visual foundation",
    path: "/",
    poweredBy: "Next.js, Tailwind",
  },
];

function StatusBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 rounded-sm border border-emerald-600/30 bg-emerald-600/10 px-1.5 py-1.25 font-mono text-[0.625rem]/[100%] uppercase text-emerald-700">
      <div className="h-2 w-2 rounded-full border border-emerald-600 bg-emerald-500" />
      <p>{label}</p>
    </div>
  );
}

function ClaudeMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className="size-4"
    >
      <path
        fill="currentColor"
        d="m3.14 10.64 3.15-1.76.05-.16-.05-.08h-.16l-.53-.03-1.8-.05-1.56-.08L.72 8.4l-.38-.08L0 7.84l.03-.24.32-.2.47.02 1 .08 1.52.1 1.1.06 1.64.2h.26l.03-.12-.08-.06-.07-.06-1.58-1.06-1.7-1.12-.9-.66-.47-.32-.24-.32-.1-.67.43-.48.6.05.14.03.6.47 1.27.97 1.65 1.25.24.2.1-.07.01-.05-.11-.18L5.28 4l-.96-1.66-.43-.7-.11-.4A2 2 0 0 1 3.7.74L4.2.08 4.48 0l.67.1.26.22.41.96.66 1.49 1.04 2.01.32.61.16.55.05.16h.11v-.08l.08-1.16.16-1.39.16-1.79.05-.51.25-.61.48-.32.42.18.32.46-.05.29-.17 1.23-.42 1.94-.24 1.3h.14l.16-.17.66-.86 1.1-1.38.48-.56.58-.59.37-.29h.69l.5.75-.23.79-.7.9-.6.75-.85 1.13-.5.91.04.07h.11l1.92-.42 1.03-.17 1.21-.21.56.25.07.26-.23.54-1.31.32-1.54.32-2.28.53-.04.02.04.05 1.02.1.45.02h1.09l2.01.16.53.32.3.44-.04.32-.82.41-1.09-.25-2.56-.61-.86-.21h-.13v.06l.74.72 1.32 1.2 1.7 1.56.08.38-.2.32-.23-.03-1.47-1.12-.58-.48-1.28-1.09h-.08v.11l.29.43 1.57 2.36.08.72-.12.22-.41.16-.43-.1-.93-1.28-.96-1.44-.75-1.3-.08.06-.47 4.83-.2.24-.49.19-.4-.32-.22-.48.22-1 .26-1.27.2-1.03.2-1.26.11-.42v-.03h-.11l-.96 1.33-1.44 1.97-1.15 1.21-.27.12-.48-.24.04-.45.26-.37 1.6-2.05.96-1.26.64-.74-.02-.08h-.04l-4.23 2.75-.75.1-.32-.32.03-.48.16-.16 1.28-.88z"
      />
    </svg>
  );
}

function CodexMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className="size-4"
    >
      <path
        fill="currentColor"
        d="M5.39.3a4.1 4.1 0 0 1 4.44.88h.04c.9-.23 1.86-.15 2.7.25l.05.01.1.06a4.1 4.1 0 0 1 2.1 4.69l.03.04a4.05 4.05 0 0 1 .26 5.35l-.11.16A4 4 0 0 1 13 13l-.03.04A4.04 4.04 0 0 1 9 16a4 4 0 0 1-2.85-1.18h-.05q-.51.15-1.07.12a4 4 0 0 1-3.16-1.6q-.2-.26-.37-.54a4.07 4.07 0 0 1-.34-2.95l-.02-.04A4 4 0 0 1 .01 7.28q-.05-.72.13-1.42A4.2 4.2 0 0 1 3 3l.02-.03A4.03 4.03 0 0 1 5.39.3m3.1 9.4a.57.57 0 0 0 0 1.13h3.23a.57.57 0 1 0 0-1.13zM4.85 5.54a.57.57 0 0 0-.98.56L5 8.08l-1.12 1.9a.57.57 0 0 0 .97.57l1.3-2.18a.6.6 0 0 0 0-.57z"
      />
    </svg>
  );
}

function VercelMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 65"
      fill="currentColor"
      className="h-8 w-8 rounded-sm"
    >
      <path d="M37.59 0 75.18 65H0z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full">
      <section className="flex w-full flex-col items-center px-6 pb-15">
        <div className="relative flex w-full max-w-6xl flex-col items-center gap-14 pt-36 sm:gap-20 sm:pt-44">
          <div className="relative flex w-full flex-col items-center gap-4 text-center">
            <div className="rounded-full border border-neutral-950/10 bg-white px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
              Static site starter
            </div>
            <h1 className="max-w-4xl text-balance text-4xl tracking-tight sm:text-6xl">
              Your static site starter is ready to be customized
            </h1>
            <p className="mb-3 max-w-3xl text-xl text-neutral-600 sm:text-2xl">
              Start with a polished landing page, keep the stack lightweight,
              and deploy to Vercel with the included script.
            </p>

            <div className="group/customize relative flex w-full flex-col items-center">
              <div className="relative h-14 w-full max-w-128 rounded-lg border border-neutral-200 bg-neutral-100 p-1">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm border border-neutral-300 bg-neutral-200">
                  <div className="absolute flex h-full w-full -translate-y-14 items-center overflow-hidden whitespace-nowrap px-4 font-mono text-sm opacity-0 transition duration-400 ease-in-out group-has-checked/customize:translate-y-0 group-has-checked/customize:opacity-100">
                    claude &quot;Help me turn this into a real product. Follow
                    prompts/starter-to-product.md.&quot;
                  </div>
                  <div className="absolute flex h-full w-full translate-y-0 items-center overflow-hidden whitespace-nowrap px-4 font-mono text-sm transition duration-400 ease-in-out group-has-checked/customize:translate-y-14 group-has-checked/customize:opacity-0">
                    codex &quot;Help me turn this into a real product. Follow
                    prompts/starter-to-product.md.&quot;
                  </div>
                </div>
              </div>

              <div className="group relative z-10 -mt-0.25 rounded-b-lg border-x border-b border-neutral-200 bg-neutral-100 px-1 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 8"
                  className="absolute -left-2 top-0 ml-0.25 -mt-0.25 size-2 -scale-y-100"
                >
                  <path
                    fill="var(--color-neutral-100)"
                    d="M8 8H0V6a6 6 0 0 0 6-6h2z"
                  />
                  <path
                    fill="var(--color-neutral-200)"
                    d="M7 0a7 7 0 0 1-7 7V6a6 6 0 0 0 6-6z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 8"
                  className="absolute -right-2 top-0 mr-0.25 -mt-0.25 size-2 -scale-x-100 -scale-y-100"
                >
                  <path
                    fill="var(--color-neutral-100)"
                    d="M8 8H0V6a6 6 0 0 0 6-6h2z"
                  />
                  <path
                    fill="var(--color-neutral-200)"
                    d="M7 0a7 7 0 0 1-7 7V6a6 6 0 0 0 6-6z"
                  />
                </svg>
                <div className="relative grid w-full grid-cols-2 sm:w-auto">
                  <div className="absolute left-0 top-0 h-full w-1/2 translate-x-full rounded-sm bg-[#3B3DD7] transition duration-400 ease-in-out group-has-checked:translate-x-0 group-has-checked:bg-[#C47152]" />
                  <div className="relative flex h-9 items-center justify-center gap-2 px-4 text-sm font-medium text-neutral-500 transition duration-400 ease-in-out hover:text-neutral-950 group-has-checked:pointer-events-none group-has-checked:text-white">
                    <ClaudeMark />
                    <span className="hidden sm:inline">
                      Customize with
                    </span>{" "}
                    Claude
                  </div>
                  <div className="relative flex h-9 items-center justify-center gap-2 px-4 text-sm font-medium text-white transition duration-400 ease-in-out group-has-checked:pointer-events-auto group-has-checked:text-neutral-500">
                    <CodexMark />
                    <span className="hidden sm:inline">
                      Customize with
                    </span>{" "}
                    Codex
                  </div>
                  <CustomizationToggle />
                </div>
              </div>
            </div>
          </div>

          <div
            id="starter"
            className="relative flex w-full flex-col items-start overflow-hidden rounded-xl border border-neutral-950/6 text-sm/[100%] text-neutral-600 shadow-xl"
          >
            <div className="flex h-10 w-full items-center justify-between bg-neutral-50 px-3 font-medium">
              <div className="whitespace-nowrap">Starter snapshot</div>
              <div className="hidden items-center sm:flex">
                <div className="rounded-sm border border-neutral-950/10 bg-neutral-200 px-1.5 py-1.25 font-mono text-[0.625rem]/[100%] uppercase text-neutral-600">
                  What&apos;s included
                </div>
              </div>
            </div>
            <div className="relative h-full w-full pb-1 sm:px-2 sm:pb-2">
              <div className="relative h-full w-full border-t border-neutral-950/6 bg-white/25 sm:rounded-md sm:border-x sm:border-b sm:shadow-xl">
                <div className="relative flex h-full w-full flex-col overflow-hidden">
                  <div className="px-4 pb-4 pt-4 text-2xl tracking-tight text-neutral-950 sm:pb-6 sm:pt-6 sm:text-3xl">
                    A focused static starter:
                  </div>
                  <div className="overflow-x-auto px-4 pb-4">
                    <div className="w-full min-w-3xl overflow-hidden rounded-md border border-neutral-950/6 text-sm sm:text-base">
                      <div className="grid h-10 grid-cols-[1fr_1.4fr_1fr_1fr] border-b border-neutral-950/6 bg-neutral-950/2 *:flex *:items-center *:border-r *:border-neutral-950/6 *:px-3 *:font-medium sm:h-12">
                        <div>Item</div>
                        <div>Purpose</div>
                        <div>Path</div>
                        <div className="border-r-0!">Powered by</div>
                      </div>
                      {starterRows.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-[1fr_1.4fr_1fr_1fr] border-b border-neutral-950/6 last:border-b-0"
                        >
                          <div className="border-r border-neutral-950/6 px-3 py-2.5 font-medium text-neutral-950">
                            {row.label}
                          </div>
                          <div className="border-r border-neutral-950/6 px-3 py-2.5">
                            {row.description}
                          </div>
                          <div className="border-r border-neutral-950/6 px-3 py-2.5 font-mono text-[0.8rem] text-neutral-500 sm:text-sm">
                            {row.path}
                          </div>
                          <div className="px-3 py-2.5 font-medium text-neutral-950">
                            {row.poweredBy}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="deploy"
        className="flex w-full flex-col items-center px-6 pb-32 pt-7 sm:pt-15"
      >
        <div className="relative flex w-full max-w-6xl flex-col items-center gap-8 sm:gap-14">
          <div className="grid items-end justify-center gap-4 text-center sm:grid-cols-2 sm:justify-start sm:text-left">
            <h2 className="shrink-0 text-3xl tracking-tight text-neutral-950 sm:text-5xl">
              Connected service
            </h2>
            <div className="sm:flex sm:justify-end">
              <p className="min-w-0 pb-0.5 text-balance text-lg/[120%] text-neutral-600 sm:min-w-96">
                This starter only wires up hosting. Everything else stays
                intentionally open so you can shape the site around the product.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <div className="group relative flex h-full w-full flex-col justify-between rounded-md border border-neutral-950/10 bg-white px-6 pb-5 pt-6 shadow-sm transition-all duration-200 ease-out hover:shadow-lg lg:w-1/2">
              <div>
                <VercelMark />
                <div className="mb-1.5 mt-3 flex items-center gap-2">
                  <h3 className="text-lg font-medium text-neutral-950">
                    Vercel
                  </h3>
                  <StatusBadge label="Ready" />
                </div>
                <p className="mb-5 max-w-2xl text-pretty text-neutral-600">
                  `npm run deploy` uploads the app and starts a production
                  deployment with the Vercel credentials pulled into your Stripe
                  project environment.
                </p>
                <div className="overflow-hidden rounded-md border border-neutral-950/8 bg-neutral-950 text-sm text-neutral-100">
                  <div className="border-b border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-400">
                    Deploy command
                  </div>
                  <div className="px-4 py-3 font-mono text-sm">
                    npm run deploy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex w-full justify-center border-t border-neutral-950/8 px-6">
        <div className="flex w-full max-w-6xl items-center justify-between py-6 text-sm text-neutral-500">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight text-neutral-950 transition-opacity duration-200 ease-out hover:opacity-70"
          >
            Static Site Vercel Starter
          </a>
          <nav className="flex items-center gap-4">
            <a
              href="#starter"
              className="transition-colors duration-200 ease-out hover:text-neutral-950"
            >
              Starter
            </a>
            <a
              href="#deploy"
              className="transition-colors duration-200 ease-out hover:text-neutral-950"
            >
              Deploy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
