"use client";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

/** A two-state button (Base UI Toggle): bold, mute, favourite. */
export function Toggle({ outline, className, ...props }: Cn<ComponentProps<typeof BaseToggle>> & { outline?: boolean }) {
  return <BaseToggle className={cx("zay-toggle", outline && "zay-toggle-outline", className)} {...props} />;
}

/** A row of toggles that behaves like a segmented control or a set of options (Base UI ToggleGroup). */
export function ToggleGroup({ className, ...props }: Cn<ComponentProps<typeof BaseToggleGroup>>) {
  return <BaseToggleGroup className={cx("zay-toggle-group", className)} {...props} />;
}
