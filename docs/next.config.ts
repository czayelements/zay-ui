import type { NextConfig } from "next";

/*
 * The site is a static export, so it can be served by GitHub Pages.
 * A project page lives under /<repo>: the deploy workflow sets
 * NEXT_PUBLIC_BASE_PATH=/zay-ui; locally it stays empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
