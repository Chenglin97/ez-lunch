import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { CURRENT_USER_EMAIL_COOKIE } from "../../../lib/currentUser";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email) {
    return NextResponse.json({ ok: false, error: "Email is required" }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set(CURRENT_USER_EMAIL_COOKIE, email, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ ok: true, email });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.set(CURRENT_USER_EMAIL_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return NextResponse.json({ ok: true });
}
