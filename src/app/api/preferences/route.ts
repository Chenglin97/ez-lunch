import { NextResponse } from "next/server";

import { db } from "../../../lib/db";

function toList(s: unknown): string[] {
  if (Array.isArray(s)) {
    return s.map((x) => String(x).trim()).filter(Boolean);
  }
  const str = typeof s === "string" ? s : "";
  return str
    .split(/\n|,/)
    .map((x) => x.trim())
    .filter(Boolean);
}

async function getDemoUserId() {
  const email = "demo@ezlunch.local";
  const user = await db.user.upsert({
    where: { email },
    create: { email, name: "Demo User" },
    update: {},
    select: { id: true },
  });
  return user.id;
}

export async function GET() {
  const userId = await getDemoUserId();
  const preferences = await db.userPreferences.findUnique({
    where: { userId },
  });
  return NextResponse.json({ userId, preferences });
}

export async function POST(req: Request) {
  const userId = await getDemoUserId();
  const body = await req.json();

  const diet = body?.diet ?? {};

  const maxPrice =
    typeof body?.maxPrice === "number"
      ? body.maxPrice
      : typeof body?.maxPrice === "string" && body.maxPrice.trim()
        ? Number(body.maxPrice)
        : null;

  const radiusMiles =
    typeof body?.radiusMiles === "number"
      ? body.radiusMiles
      : typeof body?.radiusMiles === "string" && body.radiusMiles.trim()
        ? Number(body.radiusMiles)
        : null;

  const data = {
    vegetarian: !!diet.vegetarian,
    vegan: !!diet.vegan,
    pescatarian: !!diet.pescatarian,
    glutenFree: !!diet.glutenFree,
    dairyFree: !!diet.dairyFree,
    nutFree: !!diet.nutFree,

    allergies: toList(body?.allergies),
    dislikedIngredients: toList(body?.dislikedIngredients),
    likedCuisines: toList(body?.likedCuisines),
    dislikedCuisines: toList(body?.dislikedCuisines),

    maxPrice: Number.isFinite(maxPrice) ? Math.trunc(maxPrice as number) : null,
    radiusMiles: Number.isFinite(radiusMiles) ? (radiusMiles as number) : null,
  };

  const preferences = await db.userPreferences.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });

  return NextResponse.json({ userId, preferences });
}
