import { SiteHeader } from "../../components/SiteHeader";
import { BAY_AREA_MEALS } from "../../data/bayAreaMeals";

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
          We’ll plot pins/zones next. For now, this page is wired to the real
          Bay Area restaurant dataset.
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
            <h2 className="text-lg font-semibold">Map (placeholder)</h2>
            <div className="mt-4 overflow-hidden rounded-xl border">
              <iframe
                title="Bay Area Map"
                className="h-[360px] w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.75%2C37.18%2C-121.75%2C37.95&layer=mapnik"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Next: add lat/lng per restaurant and render pins + delivery radius
              overlays.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
