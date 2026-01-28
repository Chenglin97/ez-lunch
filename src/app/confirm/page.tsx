"use client";

import { SiteHeader } from "../../components/SiteHeader";
import Link from "next/link";
import { useMemo, useState } from "react";

const SUGGESTIONS = [
  "Teriyaki salmon + rice + broccoli",
  "Chicken shawarma bowl (GF option)",
  "Tofu bibimbap + kimchi",
  "Turkey chili + cornbread",
  "Pesto pasta + roasted veggies",
];

export default function ConfirmPage() {
  const suggestion = useMemo(() => {
    // Deterministic-ish pick so it feels stable within a session.
    const idx = new Date().getDay() % SUGGESTIONS.length;
    return SUGGESTIONS[idx];
  }, []);

  const [choice, setChoice] = useState<string>(suggestion);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/confirm" />

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Confirm tomorrow’s meal
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Demo flow. Next task will add real meal plan data + overrides.
        </p>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          <div className="text-sm font-medium text-zinc-500">Suggested</div>
          <div className="mt-2 text-xl font-semibold">{suggestion}</div>

          <div className="mt-6">
            <label className="text-sm font-medium">Override (optional)</label>
            <select
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-900"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              {SUGGESTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              href={{
                pathname: "/delivery",
                query: { meal: choice },
              }}
            >
              Confirm
            </Link>
            <Link
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
              href="/preferences"
            >
              Edit preferences
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link className="text-sm hover:underline" href="/">
            ← Back
          </Link>
        </div>
      </main>
    </div>
  );
}
