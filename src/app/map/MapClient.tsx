"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LeafletMap = dynamic(
  () => import("./LeafletMap").then((m) => m.LeafletMap),
  { ssr: false }
);

export function MapClient({ radiusKm }: { radiusKm: number }) {
  const [km, setKm] = useState(radiusKm);

  useEffect(() => {
    // Poll the global set by MapControls (simple and dependency-free).
    const id = setInterval(() => {
      const next = (window as any).__EZLUNCH_RADIUS_KM__;
      if (typeof next === "number" && next !== km) setKm(next);
    }, 250);
    return () => clearInterval(id);
  }, [km]);

  return <LeafletMap radiusKm={km} />;
}
