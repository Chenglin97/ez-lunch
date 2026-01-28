"use client";

import { SiteHeader } from "../../components/SiteHeader";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Card,
  FieldLabel,
  HelpText,
  TextArea,
  TextInput,
  ToggleRow,
} from "./components";
import type { DietFlags, PreferencesDraft } from "./types";
import {
  clearPreferencesLocal,
  loadPreferencesLocal,
  savePreferencesLocal,
} from "./save";
import { loadPreferencesApi, savePreferencesApi } from "./api";
import { parseOptionalNumber } from "./validation";

function toList(s: string) {
  return s
    .split(/\n|,/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function toTextList(arr: unknown): string {
  if (!Array.isArray(arr)) return "";
  return arr.map((x) => String(x)).join(", ");
}

const defaultDraft: PreferencesDraft = {
  diet: {
    vegetarian: false,
    vegan: false,
    pescatarian: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
  },
  likedCuisines: "",
  dislikedCuisines: "",
  dislikedIngredients: "",
  allergies: "",
  maxPrice: "",
  radiusMiles: "",
};

export default function PreferencesPage() {
  const [draft, setDraft] = useState<PreferencesDraft>(() => {
    return loadPreferencesLocal() ?? defaultDraft;
  });
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  useEffect(() => {
    // Try API first; fallback to local.
    let cancelled = false;
    (async () => {
      try {
        const data = await loadPreferencesApi();
        if (cancelled) return;
        if (data?.preferences) {
          const p = data.preferences;
          setDraft({
            diet: {
              vegetarian: !!p.vegetarian,
              vegan: !!p.vegan,
              pescatarian: !!p.pescatarian,
              glutenFree: !!p.glutenFree,
              dairyFree: !!p.dairyFree,
              nutFree: !!p.nutFree,
            },
            likedCuisines: toTextList(p.likedCuisines),
            dislikedCuisines: toTextList(p.dislikedCuisines),
            dislikedIngredients: toTextList(p.dislikedIngredients),
            allergies: toTextList(p.allergies),
            maxPrice: p.maxPrice != null ? String(p.maxPrice) : "",
            radiusMiles: p.radiusMiles != null ? String(p.radiusMiles) : "",
          });
          setInfoMsg("Loaded from server");
          setTimeout(() => setInfoMsg(null), 1500);
        }
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const preview = useMemo(() => {
    return {
      diet: Object.fromEntries(
        Object.entries(draft.diet).filter(([, v]) => v)
      ) as Partial<DietFlags>,
      likedCuisines: toList(draft.likedCuisines),
      dislikedCuisines: toList(draft.dislikedCuisines),
      dislikedIngredients: toList(draft.dislikedIngredients),
      allergies: toList(draft.allergies),
      maxPrice: draft.maxPrice ? Number(draft.maxPrice) : null,
      radiusMiles: draft.radiusMiles ? Number(draft.radiusMiles) : null,
    };
  }, [draft]);

  const maxPriceErr = parseOptionalNumber(draft.maxPrice).error;
  const radiusErr = parseOptionalNumber(draft.radiusMiles).error;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <SiteHeader activeHref="/preferences" />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Preferences</h1>
          <p className="text-sm text-zinc-600">
            Set your defaults. We’ll use these to generate weekly lunch
            suggestions.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50"
            disabled={saveState === "saving" || !!maxPriceErr || !!radiusErr}
            onClick={async () => {
              setSaveState("saving");
              setErrorMsg(null);
              try {
                // Server-first
                await savePreferencesApi(draft);
                // Local fallback copy
                savePreferencesLocal(draft);
                setSaveState("saved");
                setTimeout(() => setSaveState("idle"), 1200);
              } catch {
                // Fallback to local only
                try {
                  savePreferencesLocal(draft);
                  setSaveState("saved");
                  setTimeout(() => setSaveState("idle"), 1200);
                  setInfoMsg("Saved locally (server unavailable)");
                  setTimeout(() => setInfoMsg(null), 2000);
                } catch {
                  setSaveState("error");
                  setErrorMsg("Failed to save preferences.");
                }
              }
            }}
          >
            {saveState === "saving"
              ? "Saving…"
              : saveState === "saved"
                ? "Saved"
                : "Save"}
          </button>

          <button
            type="button"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-100"
            onClick={() => {
              clearPreferencesLocal();
              setDraft(defaultDraft);
              setSaveState("idle");
              setErrorMsg(null);
              setInfoMsg(null);
            }}
          >
            Reset
          </button>

          <Link
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-100"
            href="/confirm"
          >
            Next: confirm tomorrow →
          </Link>

          {errorMsg ? (
            <div className="text-sm text-red-600">{errorMsg}</div>
          ) : null}
          {infoMsg ? <div className="text-sm text-zinc-600">{infoMsg}</div> : null}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="Diet">
            <div className="grid gap-3">
              <ToggleRow
                label="Vegetarian"
                checked={draft.diet.vegetarian}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    diet: { ...d.diet, vegetarian: next },
                  }))
                }
              />
              <ToggleRow
                label="Vegan"
                checked={draft.diet.vegan}
                onChange={(next) =>
                  setDraft((d) => ({ ...d, diet: { ...d.diet, vegan: next } }))
                }
              />
              <ToggleRow
                label="Pescatarian"
                checked={draft.diet.pescatarian}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    diet: { ...d.diet, pescatarian: next },
                  }))
                }
              />
              <ToggleRow
                label="Gluten-free"
                checked={draft.diet.glutenFree}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    diet: { ...d.diet, glutenFree: next },
                  }))
                }
              />
              <ToggleRow
                label="Dairy-free"
                checked={draft.diet.dairyFree}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    diet: { ...d.diet, dairyFree: next },
                  }))
                }
              />
              <ToggleRow
                label="Nut-free"
                checked={draft.diet.nutFree}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    diet: { ...d.diet, nutFree: next },
                  }))
                }
              />
            </div>
          </Card>

          <Card title="Budget & logistics">
            <div className="grid gap-4">
              <div>
                <FieldLabel>Max lunch price (USD)</FieldLabel>
                <TextInput
                  inputMode="numeric"
                  placeholder="e.g. 20"
                  value={draft.maxPrice}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, maxPrice: e.target.value }))
                  }
                />
                <HelpText>Leave blank if you don’t care.</HelpText>
                {maxPriceErr ? (
                  <div className="mt-2 text-xs text-red-600">{maxPriceErr}</div>
                ) : null}
              </div>

              <div>
                <FieldLabel>Search radius (miles)</FieldLabel>
                <TextInput
                  inputMode="decimal"
                  placeholder="e.g. 3"
                  value={draft.radiusMiles}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, radiusMiles: e.target.value }))
                  }
                />
                <HelpText>Used for nearby restaurant suggestions.</HelpText>
                {radiusErr ? (
                  <div className="mt-2 text-xs text-red-600">{radiusErr}</div>
                ) : null}
              </div>
            </div>
          </Card>

          <Card title="Cuisines & ingredients" className="md:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Liked cuisines</FieldLabel>
                <TextArea
                  rows={4}
                  placeholder="Japanese, Korean, Mediterranean"
                  value={draft.likedCuisines}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, likedCuisines: e.target.value }))
                  }
                />
                <HelpText>Comma or newline separated.</HelpText>
              </div>
              <div>
                <FieldLabel>Disliked cuisines</FieldLabel>
                <TextArea
                  rows={4}
                  placeholder="(optional)"
                  value={draft.dislikedCuisines}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, dislikedCuisines: e.target.value }))
                  }
                />
                <HelpText>Comma or newline separated.</HelpText>
              </div>
              <div>
                <FieldLabel>Disliked ingredients</FieldLabel>
                <TextArea
                  rows={4}
                  placeholder="cilantro, olives"
                  value={draft.dislikedIngredients}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      dislikedIngredients: e.target.value,
                    }))
                  }
                />
                <HelpText>We’ll avoid these when generating suggestions.</HelpText>
              </div>
              <div>
                <FieldLabel>Allergies</FieldLabel>
                <TextArea
                  rows={4}
                  placeholder="peanuts"
                  value={draft.allergies}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, allergies: e.target.value }))
                  }
                />
                <HelpText>Comma or newline separated.</HelpText>
              </div>
            </div>
          </Card>

          <Card title="Preview" className="md:col-span-2">
            <p className="text-sm text-zinc-600">
              Preview of what will be saved. (We save to the server when available, and keep a local copy as a fallback.)
            </p>
            <pre className="mt-4 overflow-auto rounded-xl bg-zinc-900 p-4 text-xs text-zinc-100">
              {JSON.stringify(preview, null, 2)}
            </pre>
          </Card>
        </div>
      </main>
    </div>
  );
}
