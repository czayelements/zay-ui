"use client";

import Link from "next/link";
import { useState } from "react";

import { Button, Drawer, DrawerContent, DrawerTitle, DrawerTrigger, MenuIcon } from "@czayelements/zay-ui";

import { navGroups } from "@/lib/nav";

/** The docs menu on small screens: a drawer with the same links as the sidebar. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer side="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="ghost" size="sm" icon aria-label="Open menu" className="lg:!hidden" />}>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerTitle>zay-ui</DrawerTitle>
        <nav className="dx-sidebar !block mt-4" style={{ position: "static", maxHeight: "none" }} aria-label="Documentation">
          {navGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
