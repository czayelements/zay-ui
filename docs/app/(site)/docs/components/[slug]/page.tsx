import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge, Breadcrumb } from "@czayelements/zay-ui";
import * as ui from "@czayelements/zay-ui";

import { CodeBlock } from "@/components/code-block";
import { Demo } from "@/components/demo";
import { PropsTable } from "@/components/props-table";
import { demoModules } from "@/lib/demo-map";
import { bySlug, components } from "@/lib/entries";
import { demoSource } from "@/lib/code";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => components.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = bySlug(slug);
  return { title: entry?.title, description: entry?.description };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const entry = bySlug(slug);
  if (!entry) notFound();

  const mod = await demoModules[entry.file]!();
  const index = components.findIndex((c) => c.slug === slug);
  const prev = components[index - 1];
  const next = components[index + 1];

  const sources = await Promise.all(entry.demos.map((d) => demoSource(entry.file, d.name)));
  const parts = [...new Set(sources.flatMap((src) => [...src.matchAll(/<([A-Z]\w+)/g)].map((m) => m[1]!)))].filter((n) => n in ui).sort();

  return (
    <>
      <Breadcrumb items={[{ label: "Components", href: "/docs/components/" }, { label: entry.category }, { label: entry.title }]} />
      <h1 className="mt-4">{entry.title}</h1>
      <p className="dx-lead">{entry.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.baseUi ? (
          <a className="zay-badge" href={`https://base-ui.com/react/components/${entry.baseUi}`} target="_blank" rel="noreferrer">
            Built on Base UI ↗
          </a>
        ) : null}
        <Badge variant={entry.server ? "success" : "secondary"}>{entry.server ? "Server component" : "Client component"}</Badge>
      </div>

      <h2 id="examples">Examples</h2>
      {await Promise.all(
        entry.demos.map(async (demo) => {
          const Component = mod[demo.name];
          if (!Component) throw new Error(`Missing demo ${demo.name} in demos/${entry.file}.tsx`);
          return (
            <section key={demo.name}>
              {demo.title ? <h3 id={demo.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>{demo.title}</h3> : null}
              {demo.description ? <p>{demo.description}</p> : null}
              <Demo file={entry.file} name={demo.name} component={Component} layout={demo.layout} />
            </section>
          );
        }),
      )}

      <h2 id="usage">Usage</h2>
      <p>
        Import the parts you need from <code>@czayelements/zay-ui</code>:
      </p>
      <CodeBlock code={`import {\n${parts.map((n) => `  ${n},`).join("\n")}\n} from "@czayelements/zay-ui";`} />

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
              <li key={i} dangerouslySetInnerHTML={{ __html: note.replace(/`([^`]+)`/g, "<code>$1</code>") }} />
            ))}
          </ul>
        </>
      ) : null}

      <nav className="mt-14 grid gap-3 sm:grid-cols-2" aria-label="Pagination">
        {prev ? (
          <Link className="dx-index-card" href={`/docs/components/${prev.slug}/`}>
            <span>Previous</span>
            <strong>← {prev.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="dx-index-card text-end" href={`/docs/components/${next.slug}/`}>
            <span>Next</span>
            <strong>{next.title} →</strong>
          </Link>
        ) : null}
      </nav>
    </>
  );
}
