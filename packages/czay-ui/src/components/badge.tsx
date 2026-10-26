import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

export const badgeClass = (className?: string) => cx("zay-badge", className);

/** A pill. With `label` it gets a sage chip on its left: "New · Something shipped". */
export function Badge({ label, className, children, ...props }: ComponentProps<"span"> & { label?: ReactNode }) {
  return (
    <span className={badgeClass(className)} {...props}>
      {label ? <span className="zay-badge-label">{label}</span> : null}
      {children}
    </span>
  );
}
