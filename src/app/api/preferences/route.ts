import { NextResponse } from "next/server";

import { getOrCreateCurrentUserId } from "../../../lib/currentUser";
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

export async function GET() {
  const userId = await getOrCreateCurrentUserId();
  const preferences = await db.userPreferences.findUnique({
    where: { userId },
  });
  return NextResponse.json({ userId, preferences });
}

export async function POST(req: Request) {
  const userId = await getOrCreateCurrentUserId();
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
