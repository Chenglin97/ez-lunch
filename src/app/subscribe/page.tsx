import { SiteHeader } from "../../../components/SiteHeader";
'use client';

import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/subscribe" />

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Subscribe</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Demo form — no payment. Tomorrow we can wire Stripe test checkout.
        </p>

        <form className="mt-8 space-y-4 rounded-2xl border bg-white p-6" action="#">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900"
              placeholder="you@domain.com"
              type="email"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Plan</label>
              <select className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900">
                <option>5 lunches / week</option>
                <option>10 lunches / week</option>
                <option>15 lunches / week</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Diet</label>
              <select className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900">
                <option>No preference</option>
                <option>High protein</option>
                <option>Vegetarian</option>
                <option>Gluten-free</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Delivery neighborhood</label>
            <input
              className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900"
              placeholder="e.g., Mission, SOMA, Santa Clara"
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            onClick={() => alert("Demo: subscription saved (not really).")}
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <Link className="text-sm hover:underline" href="/">← Back</Link>
        </div>
      </main>
    </div>
  );
}
