"use client";

import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { Button } from "./button.js";
import { XIcon } from "./icons.js";

export type DrawerSide = "right" | "left" | "bottom";

/**
 * A panel that slides in from an edge and can be swiped away (Base UI Drawer).
 * `side` picks the edge: right (default), left or bottom.
 */
export function Drawer({ side = "right", ...props }: ComponentProps<typeof BaseDrawer.Root> & { side?: DrawerSide }) {
  const swipeDirection = side === "bottom" ? "down" : side;
  return <BaseDrawer.Root swipeDirection={swipeDirection} {...props} data-side={side} />;
}

export const DrawerTrigger = BaseDrawer.Trigger;
export const DrawerClose = BaseDrawer.Close;

export function DrawerContent({
  className,
  children,
  side = "right",
  showClose = true,
  ...props
}: Cn<ComponentProps<typeof BaseDrawer.Popup>> & { children?: ReactNode; side?: DrawerSide; showClose?: boolean }) {
  return (
    <BaseDrawer.Portal>
      <BaseDrawer.Backdrop className="zay-backdrop" />
      <BaseDrawer.Viewport className="zay-drawer-viewport">
        <BaseDrawer.Popup className={cx("zay-drawer", `zay-drawer-${side}`, className)} {...props}>
          {side === "bottom" ? <div className="zay-drawer-handle" aria-hidden /> : null}
          <BaseDrawer.Content>{children}</BaseDrawer.Content>
          {showClose && side !== "bottom" ? (
            <BaseDrawer.Close render={<Button variant="ghost" size="sm" icon aria-label="Close" className="zay-dialog-close" />}>
              <XIcon />
            </BaseDrawer.Close>
          ) : null}
        </BaseDrawer.Popup>
      </BaseDrawer.Viewport>
    </BaseDrawer.Portal>
  );
}

export function DrawerTitle({ className, ...props }: Cn<ComponentProps<typeof BaseDrawer.Title>>) {
  return <BaseDrawer.Title className={cx("zay-dialog-title", className)} {...props} />;
}

export function DrawerDescription({ className, ...props }: Cn<ComponentProps<typeof BaseDrawer.Description>>) {
  return <BaseDrawer.Description className={cx("zay-dialog-description", className)} {...props} />;
}
