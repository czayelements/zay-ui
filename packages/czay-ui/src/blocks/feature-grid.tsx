import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { IconBox } from "../components/icon-box.js";

export type Feature = {
  title: ReactNode;
  description?: ReactNode;
  /** An <svg> icon; it is placed on an IconBox. */
  icon?: ReactNode;
  /** Makes the whole card a link. */
  href?: string;
};

/** A responsive grid of cards: icon, title, description. */
export function FeatureGrid({
  items,
  columns = 3,
  className,
  ...props
}: ComponentProps<"div"> & { items: Feature[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={cx("zay-feature-grid", columns === 3 && "zay-feature-grid-3", columns === 4 && "zay-feature-grid-4", className)} {...props}>
      {items.map((item, i) => {
        const body = (
          <>
            {item.icon ? <IconBox>{item.icon}</IconBox> : null}
            <div>
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </>
        );
        return item.href ? (
          <a key={i} href={item.href} className="zay-feature">
            {body}
          </a>
        ) : (
          <div key={i} className="zay-feature">
            {body}
          </div>
        );
      })}
    </div>
  );
}
