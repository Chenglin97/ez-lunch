import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/settings" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Quick links to manage your ez lunch experience.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
            href="/preferences"
          >
            <div className="text-sm font-semibold">Preferences</div>
            <p className="mt-2 text-sm text-zinc-600">
              Diet, allergies, cuisines, budget.
            </p>
          </Link>

          <Link
            className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
            href="/subscribe"
          >
            <div className="text-sm font-semibold">Subscription</div>
            <p className="mt-2 text-sm text-zinc-600">
              Plan, delivery cadence (demo).
            </p>
          </Link>

          <Link
            className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
            href="/menu"
          >
            <div className="text-sm font-semibold">Menu</div>
            <p className="mt-2 text-sm text-zinc-600">
              Sample weekly lineup.
            </p>
          </Link>

          <Link
            className="rounded-2xl border bg-white p-6 hover:bg-zinc-50"
            href="/how-it-works"
          >
            <div className="text-sm font-semibold">How it works</div>
            <p className="mt-2 text-sm text-zinc-600">
              Explain the flow.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
