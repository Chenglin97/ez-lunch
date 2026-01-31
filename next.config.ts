import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This repo is nested under a larger workspace. Without this, Next may infer the
  // wrong workspace root (because of multiple lockfiles) and warn on every dev start.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
