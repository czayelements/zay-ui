"use client";

import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/** A dropdown menu (Base UI Menu): typeahead, arrow keys and submenus included. */
export const Menu = BaseMenu.Root;
export const MenuTrigger = BaseMenu.Trigger;

export function MenuContent({
  className,
  children,
  side = "bottom",
  align = "start",
  sideOffset = 6,
  ...props
}: Cn<ComponentProps<typeof BaseMenu.Popup>> & {
  children?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className="zay-positioner" side={side} align={align} sideOffset={sideOffset}>
        <BaseMenu.Popup className={cx("zay-menu", className)} {...props}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export function MenuItem({ className, destructive, ...props }: Cn<ComponentProps<typeof BaseMenu.Item>> & { destructive?: boolean }) {
  return <BaseMenu.Item className={cx("zay-menu-item", destructive && "zay-menu-item-destructive", className)} {...props} />;
}

/** A menu entry that is a real link. */
export function MenuLinkItem({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.LinkItem>>) {
  return <BaseMenu.LinkItem className={cx("zay-menu-item", className)} {...props} />;
}

export function MenuSeparator({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.Separator>>) {
  return <BaseMenu.Separator className={cx("zay-menu-separator", className)} {...props} />;
}

export const MenuGroup = BaseMenu.Group;

export function MenuLabel({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.GroupLabel>>) {
  return <BaseMenu.GroupLabel className={cx("zay-menu-label", className)} {...props} />;
}
