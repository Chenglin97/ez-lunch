"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { SiteHeader } from "../../components/SiteHeader";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/login" />

      <main className="mx-auto max-w-md px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Login</h1>
        <p className="mt-2 text-sm text-zinc-600">
          This is a lightweight demo login to keep preferences per user.
        </p>

        <form
          className="mt-8 grid gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setState("saving");
            setErrorMsg(null);
            try {
              const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });
              if (!res.ok) {
                const data = (await res.json().catch(() => null)) as
                  | { error?: string }
                  | null;
                throw new Error(data?.error || "Login failed");
              }
              router.push("/preferences");
            } catch (err) {
              setState("error");
              setErrorMsg(err instanceof Error ? err.message : "Login failed");
            } finally {
              setTimeout(() => setState("idle"), 600);
            }
          }}
        >
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50"
            disabled={state === "saving"}
          >
            {state === "saving" ? "Logging in…" : "Continue"}
          </button>

          {errorMsg ? (
            <div className="text-sm text-red-600">{errorMsg}</div>
          ) : null}

          <p className="mt-4 text-xs text-zinc-500">
            Tip: leave this page and you’ll still be “logged in” via a cookie.
          </p>
        </form>
      </main>
    </div>
  );
}
