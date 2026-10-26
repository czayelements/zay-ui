import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { IconBox } from "../components/icon-box.js";

export type Feature = {
  title: ReactNode;
  description?: ReactNode;
  /** An <svg> icon; it is placed on an IconBox. */
  icon?: ReactNode;
  /** Makes the whole feature a link. */
  href?: string;
};

/** A responsive grid of features: icon, title, description. `variant="cards"` boxes each one. */
export function FeatureGrid({
  items,
  columns = 3,
  variant = "plain",
  className,
  ...props
}: ComponentProps<"div"> & { items: Feature[]; columns?: 2 | 3 | 4; variant?: "plain" | "cards" }) {
  return (
    <div className={cx("zay-features", `zay-features-${columns}`, variant === "cards" && "zay-features-cards", className)} {...props}>
      {items.map((item, i) => {
        const body = (
          <>
            {item.icon ? (
              <IconBox solid={variant === "plain"} size={variant === "plain" ? "md" : "md"}>
                {item.icon}
              </IconBox>
            ) : null}
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
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

/** Text beside a visual, for explaining one thing well. `reverse` swaps the sides. */
export function FeatureSplit({
  eyebrow,
  title,
  description,
  points,
  actions,
  media,
  reverse,
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  points?: ReactNode[];
  actions?: ReactNode;
  media: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={cx("zay-split", reverse && "zay-split-reverse", className)} {...props}>
      <div className="zay-split-copy">
        {eyebrow ? <p className="zay-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="zay-split-description">{description}</p> : null}
        {points?.length ? (
          <ul className="zay-split-points">
            {points.map((point, i) => (
              <li key={i}>
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 8.5 6.5 12 13 4.5" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        ) : null}
        {actions ? <div className="zay-split-actions">{actions}</div> : null}
      </div>
      <div className="zay-split-media">{media}</div>
    </div>
  );
}
