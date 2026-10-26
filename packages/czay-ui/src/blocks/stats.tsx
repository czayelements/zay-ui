import type { ComponentProps, CSSProperties, ReactNode } from "react";

import { cx } from "../cx.js";

export type Stat = { value: ReactNode; label: ReactNode };

/** Numbers as evidence: a hairline-divided row of value/label pairs. */
export function Stats({ items, className, style, ...props }: ComponentProps<"dl"> & { items: Stat[] }) {
  return (
    <dl className={cx("zay-stats", className)} style={{ "--zay-stats-cols": items.length, ...style } as CSSProperties} {...props}>
      {items.map((item, i) => (
        <div key={i} className="zay-stat">
          <dd>{item.value}</dd>
          <dt>{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}
