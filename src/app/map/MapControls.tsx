"use client";

import { useState } from "react";

export function MapControls({
  onRadiusKm,
}: {
  onRadiusKm: (km: number) => void;
}) {
  const [km, setKm] = useState(2);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="text-sm font-medium text-zinc-700">Delivery radius</div>
      <select
        className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm"
        value={km}
        onChange={(e) => {
          const next = Number(e.target.value);
          setKm(next);
          onRadiusKm(next);
        }}
      >
        {[1, 2, 3, 5, 8].map((v) => (
          <option key={v} value={v}>
            {v} km
          </option>
        ))}
      </select>
      <div className="text-xs text-zinc-500">
        Placeholder visualization (not true route optimization yet).
      </div>
    </div>
  );
}
