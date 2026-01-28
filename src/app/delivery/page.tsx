"use client";

import { SiteHeader } from "../../components/SiteHeader";
import Link from "next/link";
import { useEffect, useState } from "react";

type TomorrowResponse = {
  date: string;
  suggestion: string;
  confirmed: null | { id: string; meal: string };
};

export default function DeliveryPage() {
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "error"; message: string }
    | { kind: "ready"; data: TomorrowResponse }
  >({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/tomorrow", { cache: "no-store" });
        if (!res.ok) throw new Error(`GET /api/tomorrow failed (${res.status})`);
        const data = (await res.json()) as TomorrowResponse;
        if (cancelled) return;
        setState({ kind: "ready", data });
      } catch (err) {
        if (cancelled) return;
        setState({
          kind: "error",
          message: err instanceof Error ? err.message : "Failed to load",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const mealLabel =
    state.kind === "ready"
      ? state.data.confirmed?.meal ?? state.data.suggestion
      : "…";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/delivery" />

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Delivery status</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Demo tracking. We’ll wire real events later.
        </p>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          {state.kind === "loading" ? (
            <div className="text-sm text-zinc-600">Loading…</div>
          ) : state.kind === "error" ? (
            <div className="text-sm text-red-600">{state.message}</div>
          ) : null}

          <div className="text-sm font-medium text-zinc-500">Tomorrow’s meal</div>
          <div className="mt-2 text-lg font-semibold">{mealLabel}</div>

          <ol className="mt-6 space-y-3 text-sm">
            <li className="rounded-xl border px-4 py-3">
              <div className="font-medium">Confirmed</div>
              <div className="text-zinc-600">We’ve locked your choice in.</div>
            </li>
            <li className="rounded-xl border px-4 py-3">
              <div className="font-medium">Preparing</div>
              <div className="text-zinc-600">Kitchen is prepping ingredients.</div>
            </li>
            <li className="rounded-xl border px-4 py-3">
              <div className="font-medium">Out for delivery</div>
              <div className="text-zinc-600">Courier pickup → ETA TBD.</div>
            </li>
            <li className="rounded-xl border px-4 py-3">
              <div className="font-medium">Delivered</div>
              <div className="text-zinc-600">Enjoy your lunch.</div>
            </li>
          </ol>

          <div className="mt-6 flex gap-3">
            <Link
              className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              href="/menu"
            >
              See menu
            </Link>
            <Link
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
              href="/confirm"
            >
              Change tomorrow
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
