import { cookies } from "next/headers";

import { db } from "./db";

const EMAIL_COOKIE = "ezlunch_email";

export async function getOrCreateCurrentUserId(): Promise<string> {
  // In local/dev environments, the DB may not be configured.
  // Keep the app usable by falling back to a stable demo user id.
  if (!process.env.DATABASE_URL) {
    return "demo-user";
  }

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
