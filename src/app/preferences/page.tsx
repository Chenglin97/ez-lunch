"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

function toList(s: string) {
  return s
    .split(/\n|,/)
    .map((x) => x.trim())
    .filter(Boolean);
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
    // Lazy init avoids react-hooks/set-state-in-effect lint rule.
    return loadPreferencesLocal() ?? defaultDraft;
  });
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-xl font-semibold tracking-tight" href="/">
            ez lunch
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="/menu">
              Menu
            </a>
            <a className="hover:underline" href="/how-it-works">
              How it works
            </a>
            <a className="hover:underline" href="/preferences">
              Preferences
            </a>
          </nav>
        </div>
      </header>

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
            disabled={saveState === "saving"}
            onClick={() => {
              setSaveState("saving");
              setErrorMsg(null);
              try {
                savePreferencesLocal(draft);
                setSaveState("saved");
                setTimeout(() => setSaveState("idle"), 1200);
              } catch {
                setSaveState("error");
                setErrorMsg("Failed to save preferences.");
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
            }}
          >
            Reset
          </button>

          {errorMsg ? (
            <div className="text-sm text-red-600">{errorMsg}</div>
          ) : null}
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

          <Card title="Preview (local only)" className="md:col-span-2">
            <p className="text-sm text-zinc-600">
              This is just a UI preview for now. Next step: wire to DB.
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
