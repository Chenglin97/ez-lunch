import { SiteHeader } from "../../components/SiteHeader";
import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";
import { BAY_AREA_RESTAURANTS } from "../../data/bayAreaRestaurants";
import { MapClient } from "./MapClient";
import { MapControls } from "./MapControls";

function uniqSorted(xs: string[]) {
  return Array.from(new Set(xs)).sort((a, b) => a.localeCompare(b));
}

export default function MapPage() {
  const restaurantKeys = uniqSorted(
    BAY_AREA_MEALS.map((m) => `${m.restaurant} • ${m.city}`)
  );

  const geocodedKeys = uniqSorted(
    BAY_AREA_RESTAURANTS.map((r) => `${r.restaurant} • ${r.city}`)
  );

  const geocodedSet = new Set(geocodedKeys);
  const missingKeys = restaurantKeys.filter((k) => !geocodedSet.has(k));

  const cities = uniqSorted(BAY_AREA_MEALS.map((m) => m.city));

  // radius state is in a client component; MapClient is also client.
  // We render the map in a client island so SSR/build stays happy.

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/map" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Restaurants & delivery area
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Multi-pin map + delivery-area visualization. Geocode coverage:{" "}
          <span className="font-medium">
            {geocodedKeys.length} / {restaurantKeys.length}
          </span>
          .
        </p>

        <div className="mt-6 rounded-2xl border bg-white p-4">
          <MapControls
            onRadiusKm={(km) => {
              // The map listens to this via a global; see below.
              (window as any).__EZLUNCH_RADIUS_KM__ = km;
            }}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Restaurants (dataset)</h2>
            <p className="mt-2 text-xs text-zinc-500">
              {restaurantKeys.length} restaurant locations across {cities.length} cities.
            </p>

            <div className="mt-4 max-h-[360px] overflow-auto rounded-xl border">
              <ul className="divide-y text-sm">
                {restaurantKeys.map((r) => (
                  <li key={r} className="px-4 py-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {missingKeys.length ? (
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-sm font-medium text-amber-900">
                  Missing geocodes ({missingKeys.length})
                </div>
                <div className="mt-2 text-xs text-amber-900/80">
                  These restaurants will show as approximate city pins until we add lat/lng.
                </div>
              </div>
            ) : null}
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Map</h2>
            <div className="mt-4 overflow-hidden rounded-xl border">
              {/* We pass radius via a tiny client bridge (MapClient reads window value). */}
              <MapClient radiusKm={2} />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Next: compute real delivery zones from route planning.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
