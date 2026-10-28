import { defineConfig, repoMedia } from "@czayelements/zaystatic";

import schema from "./zaystatic.schema";

export default defineConfig({
  name: "zay-ui docs",
  basePath: "/zaystatic",
  apiPath: "/api/zaystatic",
  locales: ["en"],
  defaultLocale: "en",
  language: "en",
  repo: { owner: "czayelements", name: "zay-ui", branch: "main" },
  media: { adapter: repoMedia({ dir: "docs/public/uploads", urlPrefix: "/uploads" }) },
  schema,
});
