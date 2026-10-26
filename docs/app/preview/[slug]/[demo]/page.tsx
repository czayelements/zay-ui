import { notFound } from "next/navigation";

import { blockBySlug, blocks } from "@/lib/blocks";
import { demoModules } from "@/lib/demo-map";

type Props = { params: Promise<{ slug: string; demo: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => blocks.flatMap((b) => b.demos.map((d) => ({ slug: b.slug, demo: d.name })));

export const metadata = { robots: { index: false } };

/** A block rendered alone, loaded in an iframe by the docs so that media queries see the iframe's width. */
export default async function Preview({ params }: Props) {
  const { slug, demo } = await params;
  const entry = blockBySlug(slug);
  const meta = entry?.demos.find((d) => d.name === demo);
  if (!entry || !meta) notFound();
  const Component = (await demoModules.blocks!())[demo];
  if (!Component) notFound();
  return (
    <div data-preview style={meta.fill ? { height: "100vh" } : undefined}>
      <Component />
    </div>
  );
}
