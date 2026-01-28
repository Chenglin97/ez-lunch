import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/" />

      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Lunch that’s actually easy.
            </h1>
            <p className="text-lg text-zinc-600">
              ez lunch is a meal subscription demo: pick your plan, set dietary
              prefs, and get a simple weekly lineup. No drama, no scrolling.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800"
                href="/subscribe"
              >
                Get started
              </a>
              <a
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/menu"
              >
                See sample menu
              </a>
              <a
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/settings"
              >
                Settings
              </a>
            </div>
            <p className="text-sm text-zinc-500">
              Bay Area-friendly • Fresh weekly lineup • Pause/cancel anytime
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-zinc-500">This week</div>
            <div className="mt-2 text-2xl font-semibold">Sample lineup</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-xl border px-4 py-3">
                Teriyaki salmon + rice + broccoli
              </li>
              <li className="rounded-xl border px-4 py-3">
                Chicken shawarma bowl (GF option)
              </li>
              <li className="rounded-xl border px-4 py-3">
                Tofu bibimbap + kimchi
              </li>
              <li className="rounded-xl border px-4 py-3">
                Turkey chili + cornbread
              </li>
              <li className="rounded-xl border px-4 py-3">
                Pesto pasta + roasted veggies
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
                href="/subscribe"
              >
                Subscribe
              </a>
              <a
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
                href="/menu"
              >
                Menu
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">Pick a plan</div>
            <p className="mt-2 text-sm text-zinc-600">
              5, 10, or 15 lunches per week. Pause anytime.
            </p>
          </div>
          <a className="rounded-2xl border bg-white p-6 hover:bg-zinc-50" href="/preferences">
            <div className="text-sm font-semibold">Set preferences</div>
            <p className="mt-2 text-sm text-zinc-600">
              High protein, vegetarian, gluten-free — you choose.
            </p>
          </a>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">Delivered</div>
            <p className="mt-2 text-sm text-zinc-600">
              Doorstep dropoff in the Bay Area.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border bg-white p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Want the demo link to feel real?
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Tomorrow we can add: Stripe test checkout, customer dashboard, and an
            admin page to manage the menu.
          </p>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500">
          ez lunch — demo only
        </div>
      </footer>
    </div>
  );
}
