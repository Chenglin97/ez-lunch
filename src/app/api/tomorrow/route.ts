import { NextResponse } from "next/server";

import { db } from "../../../lib/db";
import { getOrCreateCurrentUserId } from "../../../lib/currentUser";

const DEFAULT_OPTIONS = [
  "Teriyaki salmon + rice + broccoli",
  "Chicken shawarma bowl (GF option)",
  "Tofu bibimbap + kimchi",
  "Turkey chili + cornbread",
  "Pesto pasta + roasted veggies",
];

function startOfDayUtc(d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function getTomorrowUtc() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCDate(now.getUTCDate() + 1);
  return startOfDayUtc(tomorrow);
}

function getWeekStartMondayUtc(date: Date) {
  // Monday = 1 ... Sunday = 0 in JS getUTCDay().
  const day = date.getUTCDay();
  const diffToMonday = (day + 6) % 7; // 0->6, 1->0, 2->1...
  const monday = new Date(date);
  monday.setUTCDate(date.getUTCDate() - diffToMonday);
  return startOfDayUtc(monday);
}

export async function GET() {
  const userId = await getOrCreateCurrentUserId();

  const date = getTomorrowUtc();
  const weekStart = getWeekStartMondayUtc(date);

  const confirmed = await db.mealEvent.findFirst({
    where: { userId, date },
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
  });

  const plan = await db.mealPlan.findUnique({
    where: { userId_weekStart: { userId, weekStart } },
    select: { id: true },
  });

  const plannedItem = plan
    ? await db.mealPlanItem.findFirst({
        where: { planId: plan.id, date },
        orderBy: { createdAt: "desc" },
        select: { suggestion: true },
      })
    : null;

  const suggestion = plannedItem?.suggestion ?? DEFAULT_OPTIONS[date.getUTCDay() % DEFAULT_OPTIONS.length];

  return NextResponse.json({
    date: date.toISOString(),
    weekStart: weekStart.toISOString(),
    options: DEFAULT_OPTIONS,
    suggestion,
    confirmed: confirmed ? { id: confirmed.id, meal: confirmed.name } : null,
  });
}

export async function POST(req: Request) {
  const userId = await getOrCreateCurrentUserId();
  const body = await req.json().catch(() => null);

  const meal = typeof body?.meal === "string" ? body.meal.trim() : "";
  if (!meal) {
    return NextResponse.json({ error: "meal is required" }, { status: 400 });
  }

  const date = getTomorrowUtc();
  const weekStart = getWeekStartMondayUtc(date);

  const plan = await db.mealPlan.upsert({
    where: { userId_weekStart: { userId, weekStart } },
    create: { userId, weekStart, source: "USER" },
    update: {},
    select: { id: true },
  });

  const existingItem = await db.mealPlanItem.findFirst({
    where: { planId: plan.id, date },
    orderBy: { createdAt: "desc" },
    select: { id: true, suggestion: true },
  });

  const suggestion = existingItem?.suggestion ?? DEFAULT_OPTIONS[date.getUTCDay() % DEFAULT_OPTIONS.length];
  const overridden = meal !== suggestion;

  if (existingItem) {
    await db.mealPlanItem.update({
      where: { id: existingItem.id },
      data: { suggestion: meal, overridden },
    });
  } else {
    await db.mealPlanItem.create({
      data: { planId: plan.id, date, suggestion: meal, overridden },
    });
  }

  // Record as a "confirmed" meal for tomorrow.
  const existingMealEvent = await db.mealEvent.findFirst({
    where: { userId, date },
    orderBy: { createdAt: "desc" },
    select: { id: true },
  });

  const mealEvent = existingMealEvent
    ? await db.mealEvent.update({
        where: { id: existingMealEvent.id },
        data: { name: meal },
        select: { id: true, name: true },
      })
    : await db.mealEvent.create({
        data: { userId, date, name: meal, source: "OTHER" },
        select: { id: true, name: true },
      });

  return NextResponse.json({ ok: true, mealEvent });
}
