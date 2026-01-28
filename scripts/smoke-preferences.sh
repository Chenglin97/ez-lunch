#!/usr/bin/env bash
set -euo pipefail

cat <<'MSG'
EZ-LUNCH SMOKE CHECKLIST

1) Start dev server:
   npm run dev

2) Open in browser:
   http://localhost:3000

3) Navigate:
   Home -> Settings -> Preferences

4) Enter some values:
   - Vegetarian: on
   - Liked cuisines: Japanese, Korean
   - Allergies: peanuts
   - Max price: 20

5) Click Save
   - Expect: "Saved" and no error.
   - If DB is configured, expect "Loaded from server" on refresh.

6) Refresh the page
   - Expect values persist (server-first, local fallback).

Notes:
- API route: GET/POST /api/preferences
- Demo user: demo@ezlunch.local
- Requires DATABASE_URL to be set and prisma migrated.
MSG
