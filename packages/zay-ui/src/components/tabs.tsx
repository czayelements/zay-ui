"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { createContext, useContext, type ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

type Variant = "line" | "pill";
const VariantContext = createContext<Variant>("line");

/**
 * Tabs (Base UI Tabs): arrow-key navigation and aria roles included.
 * `variant="pill"` makes a segmented control instead of an underlined row.
 */
export function Tabs({ variant = "line", ...props }: ComponentProps<typeof BaseTabs.Root> & { variant?: Variant }) {
  return (
    <VariantContext.Provider value={variant}>
      <BaseTabs.Root {...props} />
    </VariantContext.Provider>
  );
}

/** The row of tabs, with the sliding indicator. */
export function TabsList({ className, children, ...props }: Cn<ComponentProps<typeof BaseTabs.List>>) {
  const variant = useContext(VariantContext);
  return (
    <BaseTabs.List className={cx("zay-tabs-list", variant === "pill" && "zay-tabs-list-pill", className)} {...props}>
      {children}
      <BaseTabs.Indicator className={cx("zay-tab-indicator", variant === "pill" && "zay-tab-indicator-pill")} />
    </BaseTabs.List>
  );
}

export function TabsTab({ className, ...props }: Cn<ComponentProps<typeof BaseTabs.Tab>>) {
  const variant = useContext(VariantContext);
  return <BaseTabs.Tab className={cx("zay-tab", variant === "pill" && "zay-tab-pill", className)} {...props} />;
}

export function TabsPanel({ className, ...props }: Cn<ComponentProps<typeof BaseTabs.Panel>>) {
  return <BaseTabs.Panel className={cx("zay-tab-panel", className)} {...props} />;
}
