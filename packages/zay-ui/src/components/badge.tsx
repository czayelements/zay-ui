import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

export type BadgeVariant = "outline" | "brand" | "solid" | "ember" | "secondary" | "success" | "warning" | "destructive";

export const badgeClass = (variant: BadgeVariant = "outline", className?: string) =>
  cx("zay-badge", variant !== "outline" && `zay-badge-${variant}`, className);

/**
 * A small pill. `dot` adds a status dot; `label` adds a coloured chip on the left:
 * "New · Something shipped".
 */
export function Badge({
  variant,
  dot,
  label,
  className,
  children,
  ...props
}: ComponentProps<"span"> & { variant?: BadgeVariant; dot?: boolean; label?: ReactNode }) {
  return (
    <span className={cx(badgeClass(variant, className), dot && "zay-badge-dot")} {...props}>
      {label ? <span className="zay-badge-label">{label}</span> : null}
      {children}
    </span>
  );
}
