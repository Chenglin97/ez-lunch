import { SiteHeader } from "../../components/SiteHeader";
import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";
import { BAY_AREA_RESTAURANTS } from "../../data/bayAreaRestaurants";
import { MapClient } from "./MapClient";

function uniqSorted(xs: string[]) {
  return Array.from(new Set(xs)).sort((a, b) => a.localeCompare(b));
}

export default function MapPage() {
  const restaurants = uniqSorted(
    BAY_AREA_MEALS.map((m) => `${m.restaurant} • ${m.city}`)
  );

  const cities = uniqSorted(BAY_AREA_MEALS.map((m) => m.city));

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/map" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Restaurants & delivery area
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Leaflet pins + a placeholder delivery radius. (Geocoded: {BAY_AREA_RESTAURANTS.length} / {restaurants.length})
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
              <MapClient />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Next: geocode every restaurant and compute real delivery zones.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
