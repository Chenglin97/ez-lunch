import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// next.config.ts is executed as an ES module, so __dirname is not defined.
const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // This repo is nested under a larger workspace. Without this, Next may infer the
  // wrong workspace root (because of multiple lockfiles) and warn on every dev start.
  turbopack: {
    root: dirname,
  },
};

export default nextConfig;
