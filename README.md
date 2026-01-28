# ez-lunch

A Next.js prototype for an “EZ Lunch” flow:

1. Subscribe
2. Set preferences
3. Confirm tomorrow’s meal
4. Delivery status

## Prerequisites

- Node.js (see `package.json` engines if present)
- A Postgres database (local Docker, Supabase, Railway, etc.)

## Run locally

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Copy the example env file and update your database connection string:

```bash
cp .env.example .env
```

Required variables:

- `DATABASE_URL` – Postgres connection string, including `?schema=public`

Example:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ez_lunch?schema=public"
```

### 3) Set up the database schema (Prisma)

Run migrations:

```bash
npx prisma migrate dev
```

Optional helpers:

```bash
npx prisma studio
```

### 4) Start the dev server

```bash
npm run dev
```

Then open:

- http://localhost:3000

## Demo auth

This app uses a lightweight demo login so preferences/meal choices can be stored per-user.

- Visit `/login` and set an email (stored in an httpOnly cookie).
- APIs fall back to a demo user if no cookie is present.

## Useful scripts

- `npm run lint`
- `npm run typecheck`

There is also a manual smoke script:

```bash
bash scripts/smoke-preferences.sh
```
