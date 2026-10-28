import type { NextConfig } from "next";

/*
 * `pnpm build:pages` produces the static export GitHub Pages serves: the
 * editing panel and its API need a server, so scripts/build-pages.mjs sets
 * them aside for that build. A project page lives under /<repo>: the deploy
 * workflow sets NEXT_PUBLIC_BASE_PATH=/zay-ui; locally it stays empty.
 */
const exporting = process.env.ZAYSTATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(exporting && {
    output: "export" as const,
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
