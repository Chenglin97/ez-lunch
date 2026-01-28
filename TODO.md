# ez-lunch TODO

## Now (UI-first)
1. Preferences page: refactor into small reusable components (FormCard, ToggleRow, FieldLabel, etc.).
2. Preferences page: add a "Save" button with proper loading/success/error UI states (UI-only; no DB yet).
3. Preferences page: add basic validation for numeric fields (max price, radius) with inline error text.
4. Preferences page: add "Reset" action.

## Next (still mostly UI)
5. Add Preferences link in global nav (extract shared header/nav component used across pages).
6. Add a simple settings dashboard page (links to Preferences, Subscription, etc.).

## Later (wiring)
7. Persist preferences to DB (Prisma model + API route + server action).
8. Load saved preferences on page load.
9. Add auth/user identity (even a demo "user" seed) so preferences are per-user.

## Fixes discovered
- [x] Fix preferences page parse error introduced during refactor (6f693bf).
