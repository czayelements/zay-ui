"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";

/** Wrap your app (or a region) once: tooltips then share open/close delays. */
export const TooltipProvider = BaseTooltip.Provider;
export const Tooltip = BaseTooltip.Root;
export const TooltipTrigger = BaseTooltip.Trigger;

export function TooltipContent({
  className,
  children,
  side = "top",
  align = "center",
  sideOffset = 6,
  ...props
}: Cn<ComponentProps<typeof BaseTooltip.Popup>> & {
  children?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner className="zay-positioner" side={side} align={align} sideOffset={sideOffset}>
        <BaseTooltip.Popup className={cx("zay-tooltip", className)} {...props}>
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
