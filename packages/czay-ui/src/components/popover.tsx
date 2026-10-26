"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/** A floating panel anchored to a trigger (Base UI Popover). */
export const Popover = BasePopover.Root;
export const PopoverTrigger = BasePopover.Trigger;

export function PopoverContent({
  className,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  ...props
}: Cn<ComponentProps<typeof BasePopover.Popup>> & {
  children?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner className="zay-positioner" side={side} align={align} sideOffset={sideOffset}>
        <BasePopover.Popup className={cx("zay-popup", className)} {...props}>
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export function PopoverTitle({ className, ...props }: Cn<ComponentProps<typeof BasePopover.Title>>) {
  return <BasePopover.Title className={cx("zay-card-title", className)} {...props} />;
}

export function PopoverDescription({ className, ...props }: Cn<ComponentProps<typeof BasePopover.Description>>) {
  return <BasePopover.Description className={cx("zay-card-description", className)} {...props} />;
}

export const PopoverClose = BasePopover.Close;
