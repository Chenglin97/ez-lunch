import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/" />

      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium text-zinc-700">
              AI-powered meal delivery subscription
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              EZ Lunch — deliver delicious.
            </h1>
            <p className="text-lg text-zinc-600">
              Subscribe to daily lunch delivery (lunch or dinner) cheaply and
              conveniently.
            </p>

            <div className="rounded-2xl border bg-white p-5">
              <div className="text-sm font-semibold">For only $300 / month</div>
              <p className="mt-1 text-sm text-zinc-600">
                Get your lunch delivered every day.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800"
                href="/subscribe"
              >
                Start subscription
              </a>
              <a
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/confirm"
              >
                Confirm tomorrow
              </a>
              <a
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/menu"
              >
                View sample menu
              </a>
            </div>

            <p className="text-sm text-zinc-500">
              Bay Area-friendly • Subscription-based • Personalized meals •
              Efficient delivery
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
                href="/preferences"
              >
                Preferences
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">
            Problem → Solution
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Traditional delivery is expensive and inefficient. EZ Lunch uses a
            subscription model + personalization + delivery optimization.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">Value Proposition 1</div>
              <p className="mt-2 text-sm text-zinc-600">
                Cheap and convenient meals for customers.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">Value Proposition 2</div>
              <p className="mt-2 text-sm text-zinc-600">
                Restaurants receive more orders, increasing revenue and reducing
                cost.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">Value Proposition 3</div>
              <p className="mt-2 text-sm text-zinc-600">
                Path planning to maximize delivery efficiency and reduce
                uncertainty.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <a
              className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
              href="/subscribe"
            >
              <div className="text-sm font-semibold">Start a subscription</div>
              <p className="mt-2 text-sm text-zinc-600">
                Sign up for the monthly meal plan.
              </p>
            </a>
            <a
              className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
              href="/preferences"
            >
              <div className="text-sm font-semibold">Customize preferences</div>
              <p className="mt-2 text-sm text-zinc-600">
                Set dietary restrictions and food preferences.
              </p>
            </a>
            <a
              className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
              href="/confirm"
            >
              <div className="text-sm font-semibold">Confirm your meal</div>
              <p className="mt-2 text-sm text-zinc-600">
                Opt to change the meal for the next day.
              </p>
            </a>
            <a
              className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
              href="/delivery"
            >
              <div className="text-sm font-semibold">Enjoy delivery</div>
              <p className="mt-2 text-sm text-zinc-600">
                Receive the food effortlessly and timely.
              </p>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500">
          EZ Lunch — demo
        </div>
      </footer>
    </div>
  );
}
