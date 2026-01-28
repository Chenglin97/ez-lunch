import Link from "next/link";

import { SiteHeader } from "../../components/SiteHeader";
import { MENU } from "../../lib/menu";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/menu" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Sample menu</h1>
        <p className="mt-2 text-sm text-zinc-600">
          This is demo data. Tomorrow we can wire this to an admin tool.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {MENU.map((item) => (
            <div key={item.name} className="rounded-2xl border bg-white p-6">
              <div className="text-base font-semibold">{item.name}</div>
              {item.restaurant ? (
                <div className="mt-1 text-xs text-zinc-500">
                  {item.restaurant}{item.city ? ` • ` : ""}
                </div>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link className="text-sm hover:underline" href="/">← Back</Link>
        </div>
      </main>
    </div>
  );
}
