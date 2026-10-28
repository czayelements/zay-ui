import type { ReactNode } from "react";

import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Toc } from "@/components/toc";
import { navGroups } from "@/lib/nav";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="zay-container dx-shell">
        <aside className="dx-sidebar">
          <DocsSidebar groups={navGroups} />
        </aside>
        <main className="dx-prose">{children}</main>
        <Toc />
      </div>
    </>
  );
}
