"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";

type PopupPlacement = {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

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
}: Cn<ComponentProps<typeof BasePopover.Popup>> & PopupPlacement & { children?: ReactNode }) {
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

/** A card that appears when hovering or focusing a link (Base UI PreviewCard): a profile, a link preview. */
export const HoverCard = BasePreviewCard.Root;
export const HoverCardTrigger = BasePreviewCard.Trigger;

export function HoverCardContent({
  className,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  ...props
}: Cn<ComponentProps<typeof BasePreviewCard.Popup>> & PopupPlacement & { children?: ReactNode }) {
  return (
    <BasePreviewCard.Portal>
      <BasePreviewCard.Positioner className="zay-positioner" side={side} align={align} sideOffset={sideOffset}>
        <BasePreviewCard.Popup className={cx("zay-popup zay-popup-hover", className)} {...props}>
          {children}
        </BasePreviewCard.Popup>
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}
