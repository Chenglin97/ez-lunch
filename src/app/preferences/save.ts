import type { PreferencesDraft } from "./types";

const STORAGE_KEY = "ez-lunch:preferences";

function hasLocalStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function savePreferencesLocal(draft: PreferencesDraft) {
  if (!hasLocalStorage()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export function loadPreferencesLocal(): PreferencesDraft | null {
  if (!hasLocalStorage()) return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PreferencesDraft;
  } catch {
    return null;
  }
}

export function clearPreferencesLocal() {
  if (!hasLocalStorage()) return;
  localStorage.removeItem(STORAGE_KEY);
}
