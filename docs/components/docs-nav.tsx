"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { blocks, components } from "@/lib/registry";

const link = (href: string, label: string, path: string) => (
  <Link key={href} href={href} aria-current={path === href || path === href.replace(/\/$/, "") ? "page" : undefined}>
    {label}
  </Link>
);

export function DocsNav() {
  const path = (usePathname() ?? "").replace(/\/?$/, "/");
  return (
    <nav className="docs-nav" aria-label="Documentation">
      <h2>Start</h2>
      {link("/docs/", "Getting started", path)}
      {link("/docs/theming/", "Theming", path)}
      <h2>Components</h2>
      {components.map((c) => link(`/docs/components/${c.slug}/`, c.title, path))}
      <h2>Blocks</h2>
      {blocks.map((b) => link(`/docs/blocks/${b.slug}/`, b.title, path))}
    </nav>
  );
}
