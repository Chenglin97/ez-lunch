"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SiteHeader } from "../../components/SiteHeader";
import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";
import { MENU, type MenuItem } from "../../lib/menu";
import { MealDetailsModal } from "./MealDetailsModal";

function emojiFor(item: MenuItem): string {
  const name = item.name.toLowerCase();
  const tagStr = item.tags.join(" ").toLowerCase();

  if (item.diet === "vegan") return "🥗";
  if (item.diet === "vegetarian") return "🥬";
  if (item.diet === "pescatarian") return "🐟";

  if (name.includes("ramen")) return "🍜";
  if (name.includes("burrito") || name.includes("taco")) return "🌯";
  if (name.includes("pizza")) return "🍕";
  if (name.includes("burger")) return "🍔";
  if (name.includes("salad") || tagStr.includes("salad")) return "🥗";
  if (name.includes("chicken")) return "🍗";
  if (name.includes("coffee") || tagStr.includes("cafe")) return "☕";

  return "🍱";
}

export default function MenuPage() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState(false);

  const items = useMemo(() => MENU, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/menu" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Sample menu</h1>
        <p className="mt-2 text-sm text-zinc-600">
          This is demo data. We also have a growing Bay Area meals dataset ( <span className="font-medium">{BAY_AREA_MEALS.length}</span> items)
          used by the map page.
        </p>

        <div className="mt-6 text-sm text-zinc-600">
          Tip: click a meal card to view details.
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <button
              key={item.name}
              type="button"
              className="group rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow"
              onClick={() => {
                setSelected(item);
                setOpen(true);
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-2xl">
                  {emojiFor(item)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-base font-semibold text-zinc-900 group-hover:underline">
                    {item.name}
                  </div>
                  {item.restaurant ? (
                    <div className="mt-1 text-xs text-zinc-500">
                      {item.restaurant}
                      {item.city ? ` • ${item.city}` : ""}
                    </div>
                  ) : null}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                    {item.tags.length > 5 ? (
                      <span className="text-xs text-zinc-500">+{item.tags.length - 5} more</span>
                    ) : null}
                  </div>

                  <div className="mt-4 text-xs font-medium text-zinc-500">
                    View details →
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10">
          <Link className="text-sm hover:underline" href="/">
            ← Back
          </Link>
        </div>
      </main>

      <MealDetailsModal
        open={open}
        item={selected}
        onClose={() => {
          setOpen(false);
          setSelected(null);
        }}
      />
    </div>
  );
}
