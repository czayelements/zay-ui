import type { Metadata } from "next";
import Link from "next/link";

import { categories, components } from "@/lib/entries";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsIndex() {
  return (
    <>
      <h1>Components</h1>
      <p className="dx-lead">{components.length} accessible components. Each page has live examples, the code behind them and an API reference.</p>
      {categories.map((category) => (
        <section key={category}>
          <h2 id={category.toLowerCase()}>{category}</h2>
          <div className="dx-card-grid">
            {components
              .filter((c) => c.category === category)
              .map((c) => (
                <Link key={c.slug} className="dx-index-card" href={`/docs/components/${c.slug}/`}>
                  <strong>{c.title}</strong>
                  <span>{c.description.split(". ")[0]!.replace(/\.$/, "")}.</span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
