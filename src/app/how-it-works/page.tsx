import { SiteHeader } from "../../../components/SiteHeader";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/how-it-works" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">How it works</h1>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">1) Choose your plan</div>
            <p className="mt-2 text-sm text-zinc-600">
              5 / 10 / 15 lunches per week.
            </p>
          </li>
          <li className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">2) Set preferences</div>
            <p className="mt-2 text-sm text-zinc-600">
              Vegetarian, high-protein, gluten-free — whatever you want.
            </p>
          </li>
          <li className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">3) Delivered weekly</div>
            <p className="mt-2 text-sm text-zinc-600">
              A simple lineup shows up. You eat. Done.
            </p>
          </li>
        </ol>

        <div className="mt-10 flex gap-3">
          <a
            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            href="/subscribe"
          >
            Subscribe
          </a>
          <a
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-100"
            href="/menu"
          >
            View menu
          </a>
        </div>
      </main>
    </div>
  );
}
