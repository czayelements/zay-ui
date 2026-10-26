"use client";

import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";
import { ChevronDownIcon } from "./icons.js";

/** A single show/hide region (Base UI Collapsible). For several, use Accordion. */
export const Collapsible = BaseCollapsible.Root;

export function CollapsibleTrigger({ className, children, ...props }: Cn<ComponentProps<typeof BaseCollapsible.Trigger>>) {
  return (
    <BaseCollapsible.Trigger className={cx("zay-collapsible-trigger", className)} {...props}>
      {children}
      <ChevronDownIcon />
    </BaseCollapsible.Trigger>
  );
}

export function CollapsiblePanel({ className, ...props }: Cn<ComponentProps<typeof BaseCollapsible.Panel>>) {
  return <BaseCollapsible.Panel className={cx("zay-collapsible-panel", className)} {...props} />;
}
