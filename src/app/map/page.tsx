"use client";

import { SiteHeader } from "../../components/SiteHeader";
import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";
import { BAY_AREA_RESTAURANTS } from "../../data/bayAreaRestaurants";

import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";

function uniqSorted(xs: string[]) {
  return Array.from(new Set(xs)).sort((a, b) => a.localeCompare(b));
}

export default function MapPage() {
  const restaurants = uniqSorted(
    BAY_AREA_MEALS.map((m) => `${m.restaurant} • ${m.city}`)
  );

  const cities = uniqSorted(BAY_AREA_MEALS.map((m) => m.city));

  const center: [number, number] = [37.78, -122.42];
  const radiusMeters = 5000; // placeholder delivery radius

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/map" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Restaurants & delivery area
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Leaflet map with restaurant pins + a placeholder delivery radius. Next:
          compute delivery zones per driver/route.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Restaurants (dataset)</h2>
            <p className="mt-2 text-xs text-zinc-500">
              {restaurants.length} restaurant locations across {cities.length} cities.
            </p>

            <div className="mt-4 max-h-[360px] overflow-auto rounded-xl border">
              <ul className="divide-y text-sm">
                {restaurants.map((r) => (
                  <li key={r} className="px-4 py-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Map</h2>
            <div className="mt-4 overflow-hidden rounded-xl border">
              <div className="h-[360px] w-full">
                <MapContainer
                  center={center}
                  zoom={10}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {BAY_AREA_RESTAURANTS.map((r) => (
                    <Marker key={`${r.restaurant}-${r.city}`} position={[r.lat, r.lng]}>
                      <Popup>
                        <div className="text-sm font-medium">{r.restaurant}</div>
                        <div className="text-xs text-zinc-600">{r.city}</div>
                      </Popup>
                    </Marker>
                  ))}

                  <Circle center={center} radius={radiusMeters} />
                </MapContainer>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Pins show a small geocoded seed list. We’ll expand geocoding as we
              expand the meal dataset.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
