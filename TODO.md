# ez-lunch TODO

## Now (UI-first)
- [x] Preferences page: refactor into small reusable components.
- [x] Preferences page: add Save button with loading/success/error states (local only).
- [x] Preferences page: add Reset action.
- [x] Preferences page: add basic validation for numeric fields (max price, radius) with inline error text.

## Next (still mostly UI)
- [x] Extract shared header/nav component used across pages.
- [x] Add a simple settings/dashboard page (links to Preferences, Subscription, etc.).
- [x] Add Settings link/entry point on home page CTA section.

## Later (wiring)
- [x] Persist preferences to DB (Prisma model + API route).
- [x] Load saved preferences from DB on page load (API client).
- [x] Add auth/user identity (even a demo "user" seed) so preferences are per-user.

## Fixes discovered
- [x] Fix preferences page parse error introduced during refactor (6f693bf).

## Ongoing
- [x] Task 13: Expand Bay Area meals dataset (+10 items)
- [x] Map: add geocodes for newly added restaurants (so pins are exact, not city-center)
- [x] Add minimal tests for map geometry helpers (convex hull + area)
- [x] Task 13: Expand Bay Area meals dataset (+10 items)
