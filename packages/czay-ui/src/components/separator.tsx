"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** A hairline divider (Base UI Separator). */
export function Separator({ className, ...props }: Omit<ComponentProps<typeof BaseSeparator>, "className"> & { className?: string }) {
  return <BaseSeparator className={cx("zay-separator", className)} {...props} />;
}
