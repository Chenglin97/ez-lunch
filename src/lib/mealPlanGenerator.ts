import type { UserPreferences } from "../generated/prisma";

import type { MenuItem } from "./menu";

function dayKeyUtc(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addDaysUtc(date: Date, days: number) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + days);
  return dayKeyUtc(d);
}

function hashStringToInt(input: string) {
  // Simple deterministic hash (djb2-ish) for stable rotation.
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(h);
}

function matchesDiet(item: MenuItem, prefs: UserPreferences | null) {
  if (!prefs) return true;

  if (prefs.vegan) return item.diet === "vegan";
  if (prefs.vegetarian) return item.diet === "vegan" || item.diet === "vegetarian";
  if (prefs.pescatarian)
    return (
      item.diet === "vegan" ||
      item.diet === "vegetarian" ||
      item.diet === "pescatarian"
    );

  return true;
}

export function generateWeeklyPlan(args: {
  userId: string;
  weekStartMondayUtc: Date;
  menu: MenuItem[];
  prefs: UserPreferences | null;
}) {
  const lunchDays = args.prefs?.lunchDays?.length ? args.prefs.lunchDays : [1, 2, 3, 4, 5];

  const filtered = args.menu.filter((item) => matchesDiet(item, args.prefs));
  const candidates = filtered.length ? filtered : args.menu;

  const rotation = hashStringToInt(`${args.userId}:${args.weekStartMondayUtc.toISOString()}`);

  return lunchDays
    .slice()
    .sort((a, b) => a - b)
    .map((weekdayNumber, idx) => {
      // weekdayNumber matches JS getUTCDay: Sunday=0, Monday=1 ... Saturday=6.
      // weekStartMondayUtc is always a Monday.
      const offsetDays = weekdayNumber === 0 ? 6 : weekdayNumber - 1;
      const date = addDaysUtc(args.weekStartMondayUtc, offsetDays);
      const pick = candidates[(rotation + idx) % candidates.length];
      return { date, suggestion: pick.name };
    });
}
