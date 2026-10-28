import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge, Breadcrumb } from "@czayelements/zay-ui";

import { BlockDemoView } from "@/components/block-demo";
import { PropsTable } from "@/components/props-table";
import { blockBySlug, blocks } from "@/lib/blocks";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => blocks.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = blockBySlug(slug);
  return { title: entry?.title, description: entry?.description };
}

export default async function BlockPage({ params }: Props) {
  const { slug } = await params;
  const entry = blockBySlug(slug);
  if (!entry) notFound();
  const index = blocks.findIndex((b) => b.slug === slug);
  const prev = blocks[index - 1];
  const next = blocks[index + 1];

  return (
    <>
      <Breadcrumb items={[{ label: "Blocks", href: "/docs/blocks/" }, { label: entry.category }, { label: entry.title }]} />
      <h1 className="mt-4">{entry.title}</h1>
      <p className="dx-lead">{entry.description}</p>
      <div className="mt-4">
        <Badge variant="secondary">{entry.category}</Badge>
      </div>

      <h2 id="preview">Preview</h2>
      {await Promise.all(
        entry.demos.map(async (demo) => (
          <section key={demo.name}>
            {demo.title ? <h3 id={demo.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>{demo.title}</h3> : null}
            <BlockDemoView slug={slug} demo={demo} />
          </section>
        )),
      )}

      {entry.props?.length ? (
        <>
          <h2 id="api-reference">API reference</h2>
          <PropsTable groups={entry.props} />
        </>
      ) : null}

      {entry.notes?.length ? (
        <>
          <h2 id="notes">Notes</h2>
          <ul>
            {entry.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </>
      ) : null}

      <nav className="mt-14 grid gap-3 sm:grid-cols-2" aria-label="Pagination">
        {prev ? (
          <Link className="dx-index-card" href={`/docs/blocks/${prev.slug}/`}>
            <span>Previous</span>
            <strong>← {prev.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="dx-index-card text-end" href={`/docs/blocks/${next.slug}/`}>
            <span>Next</span>
            <strong>{next.title} →</strong>
          </Link>
        ) : null}
      </nav>
    </>
  );
}
