"use client";

import { SiteHeader } from "../../components/SiteHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type TomorrowResponse = {
  date: string;
  weekStart: string;
  options: string[];
  suggestion: string;
  confirmed: null | { id: string; meal: string };
};

export default function ConfirmPage() {
  const router = useRouter();

  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "error"; message: string }
    | { kind: "ready"; data: TomorrowResponse }
  >({ kind: "loading" });

  const options = useMemo(() => {
    if (state.kind !== "ready") return [];
    return state.data.options;
  }, [state]);

  const [choice, setChoice] = useState<string>("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Support deep-linking from /menu details modal.
    const mealParam = new URLSearchParams(window.location.search).get("meal");

    (async () => {
      try {
        const res = await fetch("/api/tomorrow", { cache: "no-store" });
        if (!res.ok) throw new Error(`GET /api/tomorrow failed (${res.status})`);
        const data = (await res.json()) as TomorrowResponse;
        if (cancelled) return;
        setState({ kind: "ready", data });
        setChoice(mealParam ?? data.confirmed?.meal ?? data.suggestion);
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

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/confirm" />

      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Confirm tomorrow’s meal
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Pick the suggestion or override it. This writes to your demo meal plan.
        </p>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          {state.kind === "loading" ? (
            <div className="text-sm text-zinc-600">Loading…</div>
          ) : state.kind === "error" ? (
            <div className="text-sm text-red-600">{state.message}</div>
          ) : (
            <>
              <div className="text-sm font-medium text-zinc-500">Suggested</div>
              <div className="mt-2 text-xl font-semibold">
                {state.data.suggestion}
              </div>

              {state.data.confirmed ? (
                <div className="mt-2 text-sm text-zinc-600">
                  Already confirmed: <span className="font-medium">{state.data.confirmed.meal}</span>
                </div>
              ) : null}

              <div className="mt-6">
                <label className="text-sm font-medium">Choose meal</label>
                <select
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-900"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                >
                  {options.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-zinc-500">
                  In a later task we’ll populate this from the menu + generated plan.
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50"
                  disabled={saving || !choice}
                  onClick={async () => {
                    setSaving(true);
                    try {
                      const res = await fetch("/api/tomorrow", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ meal: choice }),
                      });
                      if (!res.ok) throw new Error(`POST /api/tomorrow failed (${res.status})`);
                      router.push("/delivery");
                    } catch {
                      setSaving(false);
                      alert("Failed to confirm (demo)");
                    }
                  }}
                >
                  {saving ? "Confirming…" : "Confirm"}
                </button>
                <Link
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
                  href="/preferences"
                >
                  Edit preferences
                </Link>
              </div>
            </>
          )}
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
