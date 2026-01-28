export function parseOptionalNumber(s: string) {
  const trimmed = s.trim();
  if (!trimmed) return { value: null as number | null, error: null as string | null };

  const n = Number(trimmed);
  if (Number.isNaN(n)) {
    return { value: null, error: "Must be a number" };
  }
  if (!Number.isFinite(n)) {
    return { value: null, error: "Must be a finite number" };
  }
  if (n < 0) {
    return { value: null, error: "Must be ≥ 0" };
  }
  return { value: n, error: null };
}
