import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Demo } from "@/components/demo";
import { blocks } from "@/lib/registry";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => blocks.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = blocks.find((c) => c.slug === slug);
  return { title: entry?.title };
}

export default async function BlockPage({ params }: Props) {
  const { slug } = await params;
  const entry = blocks.find((c) => c.slug === slug);
  if (!entry) notFound();
  return (
    <>
      <h1>{entry.title}</h1>
      <p>{entry.description}</p>
      {entry.demos.map((demo, i) => (
        <Demo key={i} code={demo.code} block={demo.block}>
          {demo.node}
        </Demo>
      ))}
      {entry.notes?.length ? (
        <>
          <h2>Notes</h2>
          <ul>
            {entry.notes.map((note, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: note.replace(/`([^`]+)`/g, "<code>$1</code>") }} />
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}
