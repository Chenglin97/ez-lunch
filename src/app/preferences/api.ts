import type { PreferencesDraft } from "./types";

type PreferencesApiResponse = {
  userId: string;
  // Prisma returns null if no record yet.
  preferences: null | Record<string, unknown>;
};

export async function loadPreferencesApi(): Promise<PreferencesApiResponse> {
  const res = await fetch("/api/preferences", { method: "GET" });
  if (!res.ok) throw new Error("Failed to load preferences");
  return (await res.json()) as PreferencesApiResponse;
}

export async function savePreferencesApi(
  draft: PreferencesDraft
): Promise<PreferencesApiResponse> {
  const res = await fetch("/api/preferences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(draft),
  });
  if (!res.ok) throw new Error("Failed to save preferences");
  return (await res.json()) as PreferencesApiResponse;
}
