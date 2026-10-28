import { defineCollection, defineSchema } from "@czayelements/zaystatic";
import { markdown, str, text } from "@czayelements/zaystatic/schema";

/**
 * The content model of the zay-ui docs. The written pages (introduction,
 * installation, theming, dark mode) are edited with zaystatic itself: open
 * /zaystatic while running `pnpm dev:docs`. Component and block pages are
 * generated from code (lib/entries.ts) so their demos stay real.
 */
export default defineSchema({
  collections: {
    docs: defineCollection({
      label: "Docs pages",
      dir: "content/docs",
      ext: "mdx",
      identifier: "title",
      summary: "{{description}}",
      fields: {
        title: str("Title", { required: true, maxLength: 80, hint: "Shown at the top of the page, in the sidebar and in search." }),
        description: text("Description", { maxLength: 220, hint: "One or two sentences; also used by search engines." }),
        body: markdown("Body", { hint: "MDX: Markdown plus <Alert>, <CodeBlock>, <InstallTabs>, <Tokens> and <Cards>." }),
      },
    }),
  },
});
