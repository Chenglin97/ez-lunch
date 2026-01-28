"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./LeafletMap").then((m) => m.LeafletMap),
  { ssr: false }
);

export function MapClient() {
  return <LeafletMap />;
}
