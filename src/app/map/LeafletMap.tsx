"use client";

import { useEffect, useRef } from "react";

import L from "leaflet";

import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";
import { BAY_AREA_RESTAURANTS } from "../../data/bayAreaRestaurants";
import { convexHull } from "./geometry";

// Fix default marker icons when bundling
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const CITY_CENTERS: Record<string, { lat: number; lng: number }> = {
  "San Francisco": { lat: 37.7749, lng: -122.4194 },
  "South San Francisco": { lat: 37.6547, lng: -122.4077 },
  "Burlingame": { lat: 37.5779, lng: -122.3481 },
  "Palo Alto": { lat: 37.4419, lng: -122.143 },
  "Sunnyvale": { lat: 37.3688, lng: -122.0363 },
  "San Jose": { lat: 37.3382, lng: -121.8863 },
  "Oakland": { lat: 37.8044, lng: -122.2711 },
  "Berkeley": { lat: 37.8715, lng: -122.273 },
};

function uniqKeys(xs: string[]) {
  return Array.from(new Set(xs));
}

export function LeafletMap({ radiusKm = 2 }: { radiusKm?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const defaultCenter: L.LatLngExpression = [37.78, -122.42];

    const map = L.map(ref.current, {
      center: defaultCenter,
      zoom: 10,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const byKey = new Map<string, { lat: number; lng: number }>();
    for (const r of BAY_AREA_RESTAURANTS) {
      byKey.set(`${r.restaurant} • ${r.city}`, { lat: r.lat, lng: r.lng });
    }

    const allKeys = uniqKeys(
      BAY_AREA_MEALS.map((m) => `${m.restaurant} • ${m.city}`)
    );

    const markers: L.LatLngExpression[] = [];
    const geocodedByCity = new Map<string, { lat: number; lng: number }[]>();

    const approxIcon = L.divIcon({
      className: "",
      html:
        '<div style="width:10px;height:10px;border-radius:999px;background:#f59e0b;border:2px solid #111827"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    const geoIcon = L.divIcon({
      className: "",
      html:
        '<div style="width:10px;height:10px;border-radius:999px;background:#3b82f6;border:2px solid #111827"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    for (const key of allKeys) {
      const [restaurant, city] = key.split(" • ");
      const exact = byKey.get(key);
      const center = CITY_CENTERS[city];

      const pos: L.LatLngExpression = exact
        ? [exact.lat, exact.lng]
        : center
          ? [center.lat, center.lng]
          : [37.78, -122.42];

      markers.push(pos);

      if (exact) {
        const arr = geocodedByCity.get(city) ?? [];
        arr.push({ lat: exact.lat, lng: exact.lng });
        geocodedByCity.set(city, arr);
      }

      const marker = exact
        ? L.marker(pos, { icon: geoIcon })
        : L.marker(pos, { icon: approxIcon, opacity: 0.9 });

      marker.addTo(map);

      marker.bindPopup(
        `<b>${restaurant}</b><br/>${city}<br/><span style="font-size:12px;opacity:.8">${exact ? "geocoded" : "approx (city center)"}</span>`
      );

      L.circle(pos, {
        radius: radiusKm * 1000,
        color: "#111827",
        weight: 1,
        fillOpacity: 0.05,
      }).addTo(map);
    }

    // Simple zone visualization: convex hull per-city (only when enough geocoded points exist).
    for (const [city, pts] of geocodedByCity.entries()) {
      if (pts.length < 3) continue;
      const hull = convexHull(pts.map((p) => ({ x: p.lng, y: p.lat })));
      const latlngs = hull.map((p) => [p.y, p.x] as [number, number]);
      const poly = L.polygon(latlngs, {
        color: "#10b981",
        weight: 2,
        fillColor: "#10b981",
        fillOpacity: 0.08,
      }).addTo(map);
      poly.bindTooltip(`${city} zone (convex hull)`, { sticky: true });
    }

    if (markers.length) {
      const bounds = L.latLngBounds(markers);
      map.fitBounds(bounds.pad(0.15));
    }

    return () => {
      map.remove();
    };
  }, [radiusKm]);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-3 top-3 z-[1000] rounded-xl border bg-white/90 px-3 py-2 text-xs text-zinc-800 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#f59e0b",
              border: "2px solid #111827",
              display: "inline-block",
            }}
          />
          <span>Approx (city center)</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#3b82f6",
              border: "2px solid #111827",
              display: "inline-block",
            }}
          />
          <span>Geocoded (restaurant)</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: "#10b981",
              border: "2px solid #10b981",
              display: "inline-block",
              opacity: 0.35,
            }}
          />
          <span>Zone (convex hull of geocoded pins, per-city)</span>
        </div>
        <div className="mt-1 text-[11px] text-zinc-600">Radius: {radiusKm} km</div>
      </div>
      <div ref={ref} className="h-[360px] w-full" />
    </div>
  );
}
