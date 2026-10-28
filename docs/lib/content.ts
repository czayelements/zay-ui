import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import matter from "gray-matter";

const dir = join(process.cwd(), "content", "docs");

export type Page = { slug: string; title: string; description: string; body: string };

export function allPages(): Page[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data, content } = matter(readFileSync(join(dir, f), "utf8"));
      return { slug: f.slice(0, -4), title: String(data.title ?? f), description: String(data.description ?? ""), body: content.replace(/^\n+/, "") };
    });
}

export function getPage(slug: string): Page | undefined {
  return allPages().find((p) => p.slug === slug);
}
