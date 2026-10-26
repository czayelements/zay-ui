import type { ComponentType } from "react";

import { demoSource, highlight } from "@/lib/code";

import { DemoFrame } from "./demo-frame";

/** Renders one demo component live next to its own source. */
export async function Demo({
  file,
  name,
  component: Component,
  layout,
}: {
  file: string;
  name: string;
  component: ComponentType;
  layout?: "center" | "block" | "tall";
}) {
  const code = await demoSource(file, name);
  const codeHtml = await highlight(code);
  return <DemoFrame preview={<Component />} codeHtml={codeHtml} code={code} layout={layout} />;
}
