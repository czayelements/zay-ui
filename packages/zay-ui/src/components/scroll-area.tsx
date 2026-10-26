"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

/** A scrollable region with a slim, auto-hiding scrollbar (Base UI ScrollArea). Give it a height or max-height. */
export function ScrollArea({ className, children, ...props }: Cn<ComponentProps<typeof BaseScrollArea.Root>>) {
  return (
    <BaseScrollArea.Root className={cx("zay-scroll", className)} {...props}>
      <BaseScrollArea.Viewport className="zay-scroll-viewport">
        <BaseScrollArea.Content>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar className="zay-scrollbar" orientation="vertical">
        <BaseScrollArea.Thumb className="zay-scrollbar-thumb" />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Scrollbar className="zay-scrollbar" orientation="horizontal">
        <BaseScrollArea.Thumb className="zay-scrollbar-thumb" />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>
  );
}
