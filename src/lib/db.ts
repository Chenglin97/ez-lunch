import { PrismaClient } from "../generated/prisma";

// Next.js hot-reload in dev can create many PrismaClient instances.
// Use a global singleton to avoid exhausting connections.

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const db: PrismaClient = globalThis.__prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = db;
}
