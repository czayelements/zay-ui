"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavGroup } from "@/lib/nav";

export function DocsSidebar({ groups }: { groups: NavGroup[] }) {
  const path = (usePathname() ?? "").replace(/\/?$/, "/");
  return (
    <nav aria-label="Documentation">
      {groups.map((group) => (
        <div key={group.title}>
          <h2>{group.title}</h2>
          {group.links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined}>
              {link.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
