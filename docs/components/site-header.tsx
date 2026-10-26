import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="zay-container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-medium tracking-tight no-underline">
          czay<span className="text-link">-ui</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link className="zay-btn zay-btn-ghost zay-btn-sm" href="/docs">
            Docs
          </Link>
          <Link className="zay-btn zay-btn-ghost zay-btn-sm" href="/docs/components/button">
            Components
          </Link>
          <Link className="zay-btn zay-btn-ghost zay-btn-sm" href="/docs/blocks/hero">
            Blocks
          </Link>
          <a className="zay-btn zay-btn-ghost zay-btn-sm" href="https://github.com/czayelements/zay-ui">
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
