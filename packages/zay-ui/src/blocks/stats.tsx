import type { ComponentProps, CSSProperties, ReactNode } from "react";

import { cx } from "../cx.js";
import { Stat } from "../components/stat.js";

export type StatItem = { value: ReactNode; label: ReactNode };

/** Numbers as evidence: a hairline-divided row of value and label pairs. */
export function Stats({ items, className, style, ...props }: ComponentProps<"dl"> & { items: StatItem[] }) {
  return (
    <dl className={cx("zay-stats", className)} style={{ "--zay-stats-cols": items.length, ...style } as CSSProperties} {...props}>
      {items.map((item, i) => (
        <div key={i}>
          <dd>{item.value}</dd>
          <dt>{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export type MetricItem = { label: ReactNode; value: ReactNode; delta?: ReactNode; trend?: "up" | "down"; icon?: ReactNode };

/** A grid of dashboard metric cards: label, figure and change. */
export function MetricCards({ items, className, ...props }: ComponentProps<"div"> & { items: MetricItem[] }) {
  return (
    <div className={cx("zay-metrics", className)} {...props}>
      {items.map((item, i) => (
        <div key={i} className="zay-metric">
          <Stat label={item.label} value={item.value} delta={item.delta} trend={item.trend} />
          {item.icon ? <span className="zay-metric-icon">{item.icon}</span> : null}
        </div>
      ))}
    </div>
  );
}
