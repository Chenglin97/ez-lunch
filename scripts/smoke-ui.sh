#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-3005}
BASE_URL=${BASE_URL:-http://127.0.0.1:$PORT}

echo "Starting dev server on $BASE_URL ..."

# Start dev server in background
PORT=$PORT npm run -s dev >/tmp/ezlunch-dev.log 2>&1 &
DEV_PID=$!

cleanup() {
  echo "Stopping dev server (pid=$DEV_PID)"
  kill $DEV_PID >/dev/null 2>&1 || true
}
trap cleanup EXIT

# Wait for server
for i in {1..60}; do
  if curl -sS -o /dev/null "$BASE_URL/"; then
    break
  fi
  sleep 0.5
done

routes=(
  "/"
  "/login"
  "/menu"
  "/map"
  "/preferences"
  "/settings"
  "/subscribe"
  "/how-it-works"
  "/delivery"
  "/confirm"
  "/confirm-tomorrow"
)

for p in "${routes[@]}"; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE_URL$p")
  echo "$p -> $code"
  if [[ "$p" == "/confirm-tomorrow" ]]; then
    # Expected redirect to /confirm.
    [[ "$code" == "307" || "$code" == "200" ]] || exit 1
  else
    [[ "$code" == "200" ]] || exit 1
  fi
done

# API health
code=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE_URL/api/tomorrow")
echo "/api/tomorrow (GET) -> $code"
[[ "$code" == "200" ]] || exit 1

code=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE_URL/api/tomorrow" \
  -H 'content-type: application/json' \
  -X POST \
  --data '{"meal":"Test Meal"}')
echo "/api/tomorrow (POST) -> $code"
[[ "$code" == "200" ]] || exit 1

code=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE_URL/api/preferences")
echo "/api/preferences (GET) -> $code"
[[ "$code" == "200" ]] || exit 1

echo "Smoke UI OK"
