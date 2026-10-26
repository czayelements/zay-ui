import type { ReactNode } from "react";

import { DocsNav } from "@/components/docs-nav";
import { SiteHeader } from "@/components/site-header";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="zay-container docs-shell py-10">
        <aside className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto">
          <DocsNav />
        </aside>
        <main className="docs-prose min-w-0 pb-20">{children}</main>
      </div>
    </>
  );
}
