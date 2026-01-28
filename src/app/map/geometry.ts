export type Point = { x: number; y: number };

function cross(o: Point, a: Point, b: Point) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

/**
 * Monotonic chain convex hull. Returns hull points in CCW order.
 * If points < 3, returns the input.
 */
export function convexHull(points: Point[]): Point[] {
  const pts = Array.from(points);
  pts.sort((p, q) => (p.x === q.x ? p.y - q.y : p.x - q.x));
  if (pts.length <= 2) return pts;

  const lower: Point[] = [];
  for (const p of pts) {
    while (lower.length >= 2) {
      const a = lower[lower.length - 2];
      const b = lower[lower.length - 1];
      if (cross(a, b, p) <= 0) lower.pop();
      else break;
    }
    lower.push(p);
  }

  const upper: Point[] = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2) {
      const a = upper[upper.length - 2];
      const b = upper[upper.length - 1];
      if (cross(a, b, p) <= 0) upper.pop();
      else break;
    }
    upper.push(p);
  }

  // Remove last because it repeats first point
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}
