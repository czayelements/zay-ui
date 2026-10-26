import type { ComponentProps, CSSProperties, ReactNode } from "react";

import { cx } from "../cx.js";

export type FooterColumn = { title: ReactNode; links: { label: ReactNode; href: string }[] };

/** A site footer: brand and blurb on the left, columns of links, a bottom line. */
export function Footer({
  brand,
  description,
  columns = [],
  bottom,
  className,
  style,
  ...props
}: ComponentProps<"footer"> & { brand?: ReactNode; description?: ReactNode; columns?: FooterColumn[]; bottom?: ReactNode }) {
  return (
    <footer className={cx("zay-footer", className)} style={{ "--zay-footer-cols": columns.length, ...style } as CSSProperties} {...props}>
      <div className="zay-container">
        <div className="zay-footer-top">
          <div className="zay-footer-brand">
            {brand}
            {description ? <p>{description}</p> : null}
          </div>
          {columns.map((column, i) => (
            <nav key={i} aria-label={typeof column.title === "string" ? column.title : undefined}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        {bottom ? <div className="zay-footer-bottom">{bottom}</div> : null}
      </div>
    </footer>
  );
}
