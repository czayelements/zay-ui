"use client";

import { useState, type ComponentProps, type ReactNode } from "react";

import { cx } from "../cx.js";
import { Badge } from "../components/badge.js";
import { Button } from "../components/button.js";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../components/drawer.js";
import { MenuIcon } from "../components/icons.js";

export type SidebarItem = { label: ReactNode; href: string; icon?: ReactNode; active?: boolean; badge?: ReactNode };
export type SidebarGroup = { label?: ReactNode; items: SidebarItem[] };

/** The navigation column of an app: brand, grouped links and a footer (usually the account). */
export function Sidebar({
  brand,
  groups,
  footer,
  className,
  ...props
}: ComponentProps<"div"> & { brand?: ReactNode; groups: SidebarGroup[]; footer?: ReactNode }) {
  return (
    <div className={cx("zay-sidebar", className)} {...props}>
      {brand ? <div className="zay-sidebar-brand">{brand}</div> : null}
      <nav className="zay-sidebar-nav" aria-label="Sidebar">
        {groups.map((group, i) => (
          <div key={i} className="zay-sidebar-group">
            {group.label ? <p className="zay-sidebar-label">{group.label}</p> : null}
            {group.items.map((item, j) => (
              <a key={j} href={item.href} aria-current={item.active ? "page" : undefined}>
                {item.icon}
                <span>{item.label}</span>
                {item.badge ? <Badge variant="secondary">{item.badge}</Badge> : null}
              </a>
            ))}
          </div>
        ))}
      </nav>
      {footer ? <div className="zay-sidebar-footer">{footer}</div> : null}
    </div>
  );
}

/**
 * The frame of an application: a sidebar, a top bar and the page content.
 * On small screens the sidebar moves into a drawer opened from the top bar.
 */
export function AppShell({
  sidebar,
  header,
  className,
  children,
  ...props
}: ComponentProps<"div"> & { sidebar: ReactNode; header?: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cx("zay-shell", className)} {...props}>
      <aside className="zay-shell-aside">{sidebar}</aside>
      <div className="zay-shell-main">
        <div className="zay-shell-header">
          <Drawer open={open} onOpenChange={setOpen} side="left">
            <DrawerTrigger render={<Button variant="ghost" size="sm" icon aria-label="Open navigation" className="zay-shell-menu-btn" />}>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent side="left" showClose={false} className="zay-shell-drawer">
              <DrawerTitle className="zay-sr-only">Navigation</DrawerTitle>
              {sidebar}
            </DrawerContent>
          </Drawer>
          <div className="zay-shell-header-content">{header}</div>
        </div>
        <main className="zay-shell-content">{children}</main>
      </div>
    </div>
  );
}
