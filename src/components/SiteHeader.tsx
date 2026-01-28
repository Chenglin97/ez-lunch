import Link from "next/link";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/menu", label: "Menu" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/preferences", label: "Preferences" },
  { href: "/confirm", label: "Confirm" },
  { href: "/delivery", label: "Delivery" },
  { href: "/settings", label: "Settings" },
  { href: "/login", label: "Login" },
];

export function SiteHeader({
  activeHref,
}: {
  activeHref?: string;
}) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link className="text-xl font-semibold tracking-tight" href="/">
          ez lunch
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {NAV.map((item) => {
            const isActive = activeHref === item.href;
            const base = "hover:underline";
            const cls = isActive ? `${base} font-semibold` : base;
            return (
              <Link key={item.href} className={cls} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
