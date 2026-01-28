import type { PreferencesDraft } from "./types";

const STORAGE_KEY = "ez-lunch:preferences";

export function savePreferencesLocal(draft: PreferencesDraft) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export function loadPreferencesLocal(): PreferencesDraft | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PreferencesDraft;
  } catch {
    return null;
  }
}

export function clearPreferencesLocal() {
  localStorage.removeItem(STORAGE_KEY);
}
