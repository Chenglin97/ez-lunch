"use client";

import { useEffect } from "react";

import type { MenuItem } from "../../lib/menu";

export function MealDetailsModal({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: MenuItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Meal details"
      onMouseDown={(e) => {
        // Close when clicking the backdrop.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl border bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b px-6 py-5">
          <div>
            <div className="text-xs font-medium text-zinc-500">Meal details</div>
            <div className="mt-1 text-lg font-semibold">{item.name}</div>
            {item.restaurant ? (
              <div className="mt-1 text-sm text-zinc-600">
                {item.restaurant}
                {item.city ? ` • ${item.city}` : ""}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm hover:bg-zinc-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="text-sm font-medium text-zinc-700">Tags</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.length ? (
              item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                >
                  {t}
                </span>
              ))
            ) : (
              <span className="text-sm text-zinc-500">None</span>
            )}
          </div>

          <div className="mt-5 text-sm text-zinc-600">
            Diet: <span className="font-medium text-zinc-900">{item.diet}</span>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
              href={`/confirm?meal=${encodeURIComponent(item.name)}`}
            >
              Confirm for tomorrow
            </a>
            <a
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium hover:bg-zinc-100"
              href="/confirm"
            >
              Go to confirm
            </a>
          </div>

          <div className="mt-4 text-xs text-zinc-500">
            (Demo) Confirming will use the current /api/tomorrow flow.
          </div>
        </div>
      </div>
    </div>
  );
}
