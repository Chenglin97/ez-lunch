import { cookies } from "next/headers";

import { db } from "./db";

const EMAIL_COOKIE = "ezlunch_email";

export async function getOrCreateCurrentUserId(): Promise<string> {
  const cookieStore = await cookies();
  const email = cookieStore.get(EMAIL_COOKIE)?.value || "demo@ezlunch.local";

  const user = await db.user.upsert({
    where: { email },
    create: { email, name: email === "demo@ezlunch.local" ? "Demo User" : null },
    update: {},
    select: { id: true },
  });

  return user.id;
}

export const CURRENT_USER_EMAIL_COOKIE = EMAIL_COOKIE;
