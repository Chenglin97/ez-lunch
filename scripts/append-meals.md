# Appending Bay Area meals (process)

Goal: add ~10 new meals per 10 minutes to `src/data/bayAreaMeals.ts`.

## What counts as a "meal"
- A named menu item from a real Bay Area restaurant.
- Include restaurant + city.
- Optional: cuisine + source URL.

## Workflow
1) Pick 3–5 Bay Area restaurants (SF / Peninsula / South Bay / East Bay).
2) For each restaurant, add 2–4 popular menu items.
3) Append items to `BAY_AREA_MEALS`.
4) `npm run lint`
5) Commit + push.

## Notes
- We can later replace manual sourcing with a Places/Yelp API if you provide a key.
