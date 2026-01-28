"use client";

import { useEffect, useRef } from "react";

import L from "leaflet";

import { BAY_AREA_RESTAURANTS } from "../../data/bayAreaRestaurants";

// Fix default marker icons when bundling
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export function LeafletMap() {
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

    const markers: L.LatLngExpression[] = [];

    // Restaurant pins
    for (const r of BAY_AREA_RESTAURANTS) {
      const pos: L.LatLngExpression = [r.lat, r.lng];
      markers.push(pos);
      const marker = L.marker(pos).addTo(map);
      marker.bindPopup(`<b>${r.restaurant}</b><br/>${r.city}`);

      // Placeholder delivery area circle around each restaurant.
      L.circle(pos, {
        radius: 2000,
        color: "#111827",
        weight: 1,
        fillOpacity: 0.05,
      }).addTo(map);
    }

    // Fit bounds to markers if present
    if (markers.length) {
      const bounds = L.latLngBounds(markers as any);
      map.fitBounds(bounds.pad(0.15));
    }

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={ref} className="h-[360px] w-full" />;
}
