import { demoSource, highlight } from "@/lib/code";
import type { BlockDemo } from "@/lib/blocks";

import { BlockFrame } from "./block-frame";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** One block demo: an iframe preview next to its source. */
export async function BlockDemoView({ slug, demo }: { slug: string; demo: BlockDemo }) {
  const code = await demoSource("blocks", demo.name);
  const codeHtml = await highlight(code);
  return <BlockFrame src={`${base}/preview/${slug}/${demo.name}/`} height={demo.height} codeHtml={codeHtml} code={code} title={demo.name} />;
}
