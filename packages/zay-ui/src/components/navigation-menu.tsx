"use client";

import { NavigationMenu as BaseNav } from "@base-ui/react/navigation-menu";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { ChevronDownIcon } from "./icons.js";

/**
 * A site navigation bar whose triggers open a shared, morphing panel (Base UI NavigationMenu).
 * The panel is rendered once by NavigationMenu itself; put each item's content in NavigationMenuContent.
 *
 *   <NavigationMenu>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Product</NavigationMenuTrigger>
 *       <NavigationMenuContent>…links…</NavigationMenuContent>
 *     </NavigationMenuItem>
 *     <NavigationMenuItem><NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink></NavigationMenuItem>
 *   </NavigationMenu>
 */
export function NavigationMenu({ className, children, ...props }: Cn<ComponentProps<typeof BaseNav.Root>> & { children?: ReactNode }) {
  return (
    <BaseNav.Root className={cx("zay-nav", className)} {...props}>
      <BaseNav.List className="zay-nav-list">{children}</BaseNav.List>
      <BaseNav.Portal>
        <BaseNav.Positioner className="zay-nav-positioner" sideOffset={10} collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }} collisionAvoidance={{ side: "none" }}>
          <BaseNav.Popup className="zay-nav-popup">
            <BaseNav.Viewport className="zay-nav-viewport" />
          </BaseNav.Popup>
        </BaseNav.Positioner>
      </BaseNav.Portal>
    </BaseNav.Root>
  );
}

export const NavigationMenuItem = BaseNav.Item;

export function NavigationMenuTrigger({ className, children, ...props }: Cn<ComponentProps<typeof BaseNav.Trigger>>) {
  return (
    <BaseNav.Trigger className={cx("zay-nav-trigger", className)} {...props}>
      {children}
      <BaseNav.Icon className="zay-nav-icon">
        <ChevronDownIcon />
      </BaseNav.Icon>
    </BaseNav.Trigger>
  );
}

export function NavigationMenuContent({ className, ...props }: Cn<ComponentProps<typeof BaseNav.Content>>) {
  return <BaseNav.Content className={cx("zay-nav-content", className)} {...props} />;
}

/** A top-level link in the bar. */
export function NavigationMenuLink({ className, ...props }: Cn<ComponentProps<typeof BaseNav.Link>>) {
  return <BaseNav.Link className={cx("zay-nav-link", className)} {...props} />;
}

/** A rich link for the panel: title and description. */
export function NavigationMenuCard({ title, description, className, ...props }: Omit<Cn<ComponentProps<typeof BaseNav.Link>>, "title"> & { title: ReactNode; description?: ReactNode }) {
  return (
    <BaseNav.Link className={cx("zay-nav-item-link", className)} {...props}>
      <p className="zay-nav-item-title">{title}</p>
      {description ? <p className="zay-nav-item-description">{description}</p> : null}
    </BaseNav.Link>
  );
}
