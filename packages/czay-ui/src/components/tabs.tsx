"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/** Tabs (Base UI Tabs): arrow-key navigation and aria roles included. */
export const Tabs = BaseTabs.Root;

/** The row of tabs, with the sliding underline. */
export function TabsList({ className, children, ...props }: Cn<ComponentProps<typeof BaseTabs.List>>) {
  return (
    <BaseTabs.List className={cx("zay-tabs-list", className)} {...props}>
      {children}
      <BaseTabs.Indicator className="zay-tab-indicator" />
    </BaseTabs.List>
  );
}

export function TabsTab({ className, ...props }: Cn<ComponentProps<typeof BaseTabs.Tab>>) {
  return <BaseTabs.Tab className={cx("zay-tab", className)} {...props} />;
}

export function TabsPanel({ className, ...props }: Cn<ComponentProps<typeof BaseTabs.Panel>>) {
  return <BaseTabs.Panel className={cx("zay-tab-panel", className)} {...props} />;
}
