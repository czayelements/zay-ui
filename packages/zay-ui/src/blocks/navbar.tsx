"use client";

import { useState, type ComponentProps, type ReactNode } from "react";

import { cx } from "../cx.js";
import { Button } from "../components/button.js";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../components/drawer.js";
import { MenuIcon } from "../components/icons.js";

export type NavbarLink = { label: ReactNode; href: string; active?: boolean };

/**
 * A site header: brand on the left, links in the middle, actions on the right.
 * Below the `md` breakpoint the links move into a drawer.
 */
export function Navbar({
  brand,
  links = [],
  actions,
  sticky,
  className,
  ...props
}: ComponentProps<"header"> & { brand: ReactNode; links?: NavbarLink[]; actions?: ReactNode; sticky?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cx("zay-navbar", sticky && "zay-navbar-sticky", className)} {...props}>
      <div className="zay-container zay-navbar-inner">
        <div className="zay-navbar-brand">{brand}</div>
        <nav className="zay-navbar-links" aria-label="Main">
          {links.map((link, i) => (
            <a key={i} href={link.href} aria-current={link.active ? "page" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="zay-navbar-actions">{actions}</div>
        <Drawer open={open} onOpenChange={setOpen} side="right">
          <DrawerTrigger render={<Button variant="ghost" icon aria-label="Open menu" className="zay-navbar-menu-btn" />}>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent side="right">
            <DrawerTitle>Menu</DrawerTitle>
            <nav className="zay-navbar-drawer" aria-label="Mobile">
              {links.map((link, i) => (
                <a key={i} href={link.href} aria-current={link.active ? "page" : undefined} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            {actions ? <div className="zay-navbar-drawer-actions">{actions}</div> : null}
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
