"use client";

import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { CheckIcon, ChevronRightIcon } from "./icons.js";

type PopupPlacement = {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

/** A dropdown menu (Base UI Menu): typeahead, arrow keys and submenus included. */
export const Menu = BaseMenu.Root;
export const MenuTrigger = BaseMenu.Trigger;
export const MenuGroup = BaseMenu.Group;

export function MenuContent({
  className,
  children,
  side = "bottom",
  align = "start",
  sideOffset = 6,
  ...props
}: Cn<ComponentProps<typeof BaseMenu.Popup>> & PopupPlacement & { children?: ReactNode }) {
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

/** An action. Put an icon first and a <MenuShortcut> last if you like. */
export function MenuItem({ className, destructive, ...props }: Cn<ComponentProps<typeof BaseMenu.Item>> & { destructive?: boolean }) {
  return <BaseMenu.Item className={cx("zay-menu-item", destructive && "zay-menu-item-destructive", className)} {...props} />;
}

/** A menu entry that is a real link. */
export function MenuLinkItem({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.LinkItem>>) {
  return <BaseMenu.LinkItem className={cx("zay-menu-item", className)} {...props} />;
}

export function MenuCheckboxItem({ className, children, ...props }: Cn<ComponentProps<typeof BaseMenu.CheckboxItem>>) {
  return (
    <BaseMenu.CheckboxItem className={cx("zay-menu-item zay-menu-check", className)} {...props}>
      <BaseMenu.CheckboxItemIndicator className="zay-menu-indicator">
        <CheckIcon />
      </BaseMenu.CheckboxItemIndicator>
      {children}
    </BaseMenu.CheckboxItem>
  );
}

export const MenuRadioGroup = BaseMenu.RadioGroup;

export function MenuRadioItem({ className, children, ...props }: Cn<ComponentProps<typeof BaseMenu.RadioItem>>) {
  return (
    <BaseMenu.RadioItem className={cx("zay-menu-item zay-menu-check", className)} {...props}>
      <BaseMenu.RadioItemIndicator className="zay-menu-indicator">
        <CheckIcon />
      </BaseMenu.RadioItemIndicator>
      {children}
    </BaseMenu.RadioItem>
  );
}

export function MenuSeparator({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.Separator>>) {
  return <BaseMenu.Separator className={cx("zay-menu-separator", className)} {...props} />;
}

export function MenuLabel({ className, ...props }: Cn<ComponentProps<typeof BaseMenu.GroupLabel>>) {
  return <BaseMenu.GroupLabel className={cx("zay-menu-label", className)} {...props} />;
}

export function MenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return <span className={cx("zay-menu-shortcut", className)} {...props} />;
}

/** A nested menu: <MenuSub><MenuSubTrigger>More</MenuSubTrigger><MenuSubContent>…</MenuSubContent></MenuSub> */
export const MenuSub = BaseMenu.SubmenuRoot;

export function MenuSubTrigger({ className, children, ...props }: Cn<ComponentProps<typeof BaseMenu.SubmenuTrigger>>) {
  return (
    <BaseMenu.SubmenuTrigger className={cx("zay-menu-item", className)} {...props}>
      {children}
      <ChevronRightIcon style={{ marginInlineStart: "auto" }} />
    </BaseMenu.SubmenuTrigger>
  );
}

export function MenuSubContent({ className, children, ...props }: Cn<ComponentProps<typeof BaseMenu.Popup>> & { children?: ReactNode }) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className="zay-positioner" side="right" align="start" sideOffset={4}>
        <BaseMenu.Popup className={cx("zay-menu", className)} {...props}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

/** A menu opened by right-click (or long-press) on the trigger area. Use MenuItem etc. inside ContextMenuContent. */
export const ContextMenu = BaseContextMenu.Root;
export const ContextMenuTrigger = BaseContextMenu.Trigger;

export function ContextMenuContent({ className, children, ...props }: Cn<ComponentProps<typeof BaseContextMenu.Popup>> & { children?: ReactNode }) {
  return (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner className="zay-positioner">
        <BaseContextMenu.Popup className={cx("zay-menu", className)} {...props}>
          {children}
        </BaseContextMenu.Popup>
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  );
}
