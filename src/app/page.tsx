import Link from "next/link";

import { SiteHeader } from "../components/SiteHeader";

const SAMPLE_LINEUP = [
  "Teriyaki salmon + rice + broccoli",
  "Chicken shawarma bowl (GF option)",
  "Tofu bibimbap + kimchi",
  "Turkey chili + cornbread",
  "Pesto pasta + roasted veggies",
];

function CardLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow"
    >
      <div className="text-sm font-semibold text-zinc-900 group-hover:underline">
        {title}
      </div>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
      <div className="mt-4 text-xs font-medium text-zinc-500">Open →</div>
    </Link>
  );
}

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
              Subscription lunch delivery with preferences → confirmation →
              reliable dropoff.
            </p>

            <div className="rounded-2xl border bg-white p-5">
              <div className="text-sm font-semibold">$300 / month (demo)</div>
              <p className="mt-1 text-sm text-zinc-600">
                Pick defaults once, confirm tomorrow in seconds.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800"
                href="/subscribe"
              >
                Start subscription
              </Link>
              <Link
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/confirm"
              >
                Confirm tomorrow
              </Link>
              <Link
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 font-medium hover:bg-zinc-100"
                href="/menu"
              >
                Browse meals
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              Bay Area-friendly • Subscription-based • Personalized meals •
              Efficient delivery
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-zinc-500">Try a meal</div>
            <div className="mt-2 text-2xl font-semibold">Sample lineup</div>
            <p className="mt-2 text-sm text-zinc-600">
              Click a card to jump into tomorrow’s confirmation flow.
            </p>

            <div className="mt-4 grid gap-3 text-sm">
              {SAMPLE_LINEUP.map((m) => (
                <Link
                  key={m}
                  href={`/confirm?meal=${encodeURIComponent(m)}`}
                  className="rounded-xl border bg-white px-4 py-3 transition hover:bg-zinc-50 hover:shadow-sm"
                >
                  <div className="font-medium">{m}</div>
                  <div className="mt-1 text-xs text-zinc-500">
                    Tap to preselect →
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
                href="/subscribe"
              >
                Subscribe
              </Link>
              <Link
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
                href="/preferences"
              >
                Set preferences
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">
            Start here (end-to-end)
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Four steps. Each card is clickable.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <CardLink
              href="/subscribe"
              title="1) Subscribe"
              desc="Demo signup (no payment) → continue."
            />
            <CardLink
              href="/preferences"
              title="2) Preferences"
              desc="Diet, cuisines, allergies, budget."
            />
            <CardLink
              href="/confirm"
              title="3) Confirm"
              desc="Pick tomorrow’s meal and lock it in."
            />
            <CardLink
              href="/delivery"
              title="4) Delivery"
              desc="See status + go back to change tomorrow."
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">
            Why it’s better than ad-hoc delivery
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Traditional delivery is expensive and inefficient. EZ Lunch uses a
            subscription model + personalization + delivery optimization.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <CardLink
              href="/subscribe"
              title="Customer value"
              desc="Lower cost per meal with predictable service."
            />
            <CardLink
              href="/how-it-works"
              title="Restaurant value"
              desc="Batch demand to reduce variability and waste."
            />
            <CardLink
              href="/map"
              title="Delivery efficiency"
              desc="Plan routes and zones to cut driver miles."
            />
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
