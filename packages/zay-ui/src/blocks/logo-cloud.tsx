import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A row of customer or partner logos under a short line. Pass any inline SVG or <img> as items. */
export function LogoCloud({ title, items, className, ...props }: Omit<ComponentProps<"div">, "title"> & { title?: ReactNode; items: ReactNode[] }) {
  return (
    <div className={cx("zay-logos", className)} {...props}>
      {title ? <p className="zay-logos-title">{title}</p> : null}
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
