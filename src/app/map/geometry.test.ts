import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { convexHull, polygonArea } from "./geometry";

function round(n: number, digits = 6) {
  const p = 10 ** digits;
  return Math.round(n * p) / p;
}

describe("geometry", () => {
  it("polygonArea: triangle", () => {
    const a = polygonArea([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]);
    assert.equal(round(a), 0.5);
  });

  it("convexHull: returns all points for a square with interior point", () => {
    const pts = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0.5, y: 0.5 },
    ];

    const hull = convexHull(pts);
    // Hull should be the 4 corners (order CCW, but starting point can vary)
    assert.equal(hull.length, 4);

    const set = new Set(hull.map((p) => `${p.x},${p.y}`));
    assert.equal(set.size, 4);
    for (const corner of [
      "0,0",
      "1,0",
      "1,1",
      "0,1",
    ]) {
      assert.ok(set.has(corner));
    }
  });

  it("convexHull: collinear points collapse to endpoints", () => {
    const pts = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ];

    const hull = convexHull(pts);
    assert.equal(hull.length, 2);

    const set = new Set(hull.map((p) => `${p.x},${p.y}`));
    assert.ok(set.has("0,0"));
    assert.ok(set.has("3,0"));
  });
});
