import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A figure with a label and an optional change: <Stat label="Revenue" value="$48,200" delta="+12%" trend="up" /> */
export function Stat({
  label,
  value,
  delta,
  trend = "up",
  className,
  ...props
}: Omit<ComponentProps<"div">, "children"> & { label: ReactNode; value: ReactNode; delta?: ReactNode; trend?: "up" | "down" }) {
  return (
    <div className={className} {...props}>
      <div className="zay-stat-label">{label}</div>
      <div className="zay-stat-value">{value}</div>
      {delta ? <div className={cx("zay-stat-delta", `zay-stat-delta-${trend}`)}>{delta}</div> : null}
    </div>
  );
}
