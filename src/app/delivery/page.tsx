"use client";

import { SiteHeader } from "../../components/SiteHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const STEPS = [
  { key: "prep", label: "Preparing" },
  { key: "route", label: "Out for delivery" },
  { key: "done", label: "Delivered" },
];

export default function DeliveryPage() {
  const params = useSearchParams();
  const meal = params.get("meal") ?? "(tomorrow’s meal)";

  // Simple deterministic status so it looks dynamic.
  const idx = (new Date().getMinutes() % STEPS.length) as 0 | 1 | 2;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/delivery" />

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Delivery status</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Demo tracking for: <span className="font-medium">{meal}</span>
        </p>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          <div className="text-sm font-medium text-zinc-500">Status</div>
          <div className="mt-2 text-xl font-semibold">{STEPS[idx].label}</div>

          <ol className="mt-6 space-y-3 text-sm">
            {STEPS.map((s, i) => {
              const done = i < idx;
              const active = i === idx;
              const cls = active
                ? "border-zinc-900"
                : done
                  ? "border-zinc-300 opacity-70"
                  : "border-zinc-200 opacity-60";
              return (
                <li
                  key={s.key}
                  className={`rounded-xl border px-4 py-3 ${cls}`}
                >
                  {i + 1}. {s.label}
                </li>
              );
            })}
          </ol>

          <div className="mt-6 flex gap-3">
            <Link
              className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              href="/confirm"
            >
              Change tomorrow’s meal
            </Link>
            <Link
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
              href="/"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
