import type { Metadata } from "next";
import Link from "next/link";

import { BlockThumb } from "@/components/block-thumb";
import { blockCategories, blocks } from "@/lib/blocks";

export const metadata: Metadata = { title: "Blocks" };

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BlocksIndex() {
  return (
    <>
      <h1>Blocks</h1>
      <p className="dx-lead">
        {blocks.length} ready-made sections and pages, built from the components. Copy the code, change the content, ship.
      </p>
      {blockCategories.map((category) => (
        <section key={category}>
          <h2 id={category.toLowerCase()}>{category}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {blocks
              .filter((b) => b.category === category)
              .map((b) => (
                <Link key={b.slug} href={`/docs/blocks/${b.slug}/`} className="dx-block-card">
                  <BlockThumb src={`${base}/preview/${b.slug}/${b.demos[0]!.name}/`} />
                  <div>
                    <strong>{b.title}</strong>
                    <span>{b.description.split(". ")[0]!.replace(/\.$/, "")}.</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
