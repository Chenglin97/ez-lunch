import type { PreferencesDraft } from "./types";

export async function loadPreferencesApi() {
  const res = await fetch("/api/preferences", { method: "GET" });
  if (!res.ok) throw new Error("Failed to load preferences");
  return (await res.json()) as { userId: string; preferences: any };
}

export async function savePreferencesApi(draft: PreferencesDraft) {
  const res = await fetch("/api/preferences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(draft),
  });
  if (!res.ok) throw new Error("Failed to save preferences");
  return (await res.json()) as { userId: string; preferences: any };
}
