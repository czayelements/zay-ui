import Link from "next/link";

import { GithubIcon } from "@czayelements/zay-ui";

import { searchItems } from "@/lib/nav";

import { MobileNav } from "./mobile-nav";
import { Search } from "./search";
import { ThemeControls } from "./theme-controls";

export function SiteHeader() {
  return (
    <header className="dx-header">
      <div className="zay-container dx-header-inner">
        <Link href="/" className="dx-logo" aria-label="zay-ui home">
          <span className="dx-logo-mark">z</span>
          zay-ui
        </Link>
        <nav className="dx-header-nav" aria-label="Main">
          <Link href="/docs/">Docs</Link>
          <Link href="/docs/components/">Components</Link>
          <Link href="/docs/blocks/">Blocks</Link>
          <Link href="/docs/theming/">Theming</Link>
        </nav>
        <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-1.5">
          <Search items={searchItems()} />
          <a
            href="https://github.com/czayelements/zay-ui"
            className="zay-btn zay-btn-ghost zay-btn-sm zay-btn-icon"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <ThemeControls />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
