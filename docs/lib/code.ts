import { readFile } from "node:fs/promises";
import path from "node:path";

import { codeToHtml } from "shiki";

import * as ui from "@czayelements/zay-ui";
import * as blocks from "@czayelements/zay-ui/blocks";

const uiNames = new Set(Object.keys(ui));
const blockNames = new Set(Object.keys(blocks));

/** Highlights code at build time with light and dark themes (switched with CSS variables). */
export async function highlight(code: string, lang = "tsx"): Promise<string> {
  return codeToHtml(code, {
    lang,
    themes: { light: "vitesse-light", dark: "vitesse-dark" },
    defaultColor: false,
  });
}

const cache = new Map<string, string>();

/**
 * The source of one demo function, read from demos/<file>.tsx, with the import
 * lines a reader needs. The code shown is the code that runs.
 */
export async function demoSource(file: string, name: string): Promise<string> {
  const key = `${file}:${name}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const text = await readFile(path.join(process.cwd(), "demos", `${file}.tsx`), "utf8");
  const start = text.search(new RegExp(`export function ${name}\\b`));
  if (start < 0) throw new Error(`Demo ${name} not found in demos/${file}.tsx`);
  const rest = text.slice(start);
  const end = rest.search(/\n}\n/);
  const body = rest.slice(0, end + 2).replace(/^export function/, "export default function");

  const used = (names: Set<string>) =>
    [...names].filter((n) => new RegExp(`(<${n}[\\s/>.]|\\b${n}\\()`).test(body)).sort();
  const uiUsed = used(uiNames);
  const blockUsed = used(blockNames);
  const react = [...new Set(body.match(/\buse(?:State|Id|Ref|Effect|Memo|Callback)\b/g) ?? [])].sort();

  const lines: string[] = [];
  if (/\buse(?:State|Id|Ref|Effect|Memo|Callback)\b/.test(body) || /^"use client"/.test(text)) lines.push(`"use client";\n`);
  if (react.length) lines.push(`import { ${react.join(", ")} } from "react";`);
  if (uiUsed.length) lines.push(`import { ${uiUsed.join(", ")} } from "@czayelements/zay-ui";`);
  if (blockUsed.length) lines.push(`import { ${blockUsed.join(", ")} } from "@czayelements/zay-ui/blocks";`);

  const out = `${lines.join("\n")}\n\n${body.trim()}`.trim();
  cache.set(key, out);
  return out;
}
