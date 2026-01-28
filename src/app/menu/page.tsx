const MENU = [
  {
    name: "Teriyaki salmon + rice + broccoli",
    tags: ["high-protein"],
  },
  {
    name: "Chicken shawarma bowl (GF option)",
    tags: ["high-protein", "gluten-free option"],
  },
  {
    name: "Tofu bibimbap + kimchi",
    tags: ["vegetarian"],
  },
  {
    name: "Turkey chili + cornbread",
    tags: ["comfort"],
  },
  {
    name: "Pesto pasta + roasted veggies",
    tags: ["vegetarian option"],
  },
];

import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-xl font-semibold tracking-tight" href="/">ez lunch</Link>
          <div className="flex items-center gap-3">
            <a className="text-sm hover:underline" href="/how-it-works">
              How it works
            </a>
            <a
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              href="/subscribe"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Sample menu</h1>
        <p className="mt-2 text-sm text-zinc-600">
          This is demo data. Tomorrow we can wire this to an admin tool.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {MENU.map((item) => (
            <div key={item.name} className="rounded-2xl border bg-white p-6">
              <div className="text-base font-semibold">{item.name}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a className="text-sm hover:underline" href="/">
            ← Back
          </a>
        </div>
      </main>
    </div>
  );
}
