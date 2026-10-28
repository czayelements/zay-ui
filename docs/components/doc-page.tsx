import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { docComponents } from "@/components/doc-mdx";
import { getPage } from "@/lib/content";

export function pageMetadata(slug: string): Metadata {
  const page = getPage(slug);
  return page ? { title: page.title, description: page.description } : {};
}

/** A written docs page, read from content/docs/<slug>.mdx (edited with zaystatic). */
export async function DocPage({ slug }: { slug: string }) {
  const page = getPage(slug);
  if (!page) notFound();
  return (
    <>
      <h1>{page.title}</h1>
      {page.description && <p className="dx-lead">{page.description}</p>}
      <MDXRemote
        source={page.body}
        components={docComponents}
        /* The pages live in this repository, so JS expressions in props (the <Tokens> table) are trusted. */
        options={{ blockJS: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
      />
      {process.env.NODE_ENV === "development" && (
        <p className="!mt-10 text-sm text-muted-foreground">
          <a href={`/zaystatic/c/docs/${slug}`}>Edit with zaystatic</a>
        </p>
      )}
    </>
  );
}
