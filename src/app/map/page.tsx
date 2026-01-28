import { SiteHeader } from "../../components/SiteHeader";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/map" />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Restaurants & delivery area
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Demo map. Next iteration will plot real restaurant pins + delivery
          zones.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Delivery area (Bay Area)</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>San Francisco</li>
              <li>San Mateo</li>
              <li>Redwood City / Palo Alto</li>
              <li>Mountain View / Sunnyvale</li>
              <li>San Jose</li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Placeholder only — we’ll compute zones once we have real restaurant
              locations.
            </p>
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
              Uses OpenStreetMap embed. No API key required.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
