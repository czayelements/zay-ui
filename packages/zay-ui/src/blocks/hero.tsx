import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/**
 * The opening of a page: heading, one paragraph, actions and an optional media area
 * (a product screenshot, a diagram). `split` puts the media beside the text.
 */
export function Hero({
  badge,
  title,
  lead,
  actions,
  note,
  media,
  align = "center",
  split,
  className,
  ...props
}: Omit<ComponentProps<"section">, "title"> & {
  /** Something small above the title, usually a <Badge>. */
  badge?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  /** A line of small print under the actions. */
  note?: ReactNode;
  media?: ReactNode;
  align?: "center" | "start";
  split?: boolean;
}) {
  const centered = !split && align === "center";
  return (
    <section className={cx("zay-hero", centered && "zay-hero-centered", split && "zay-hero-split", className)} {...props}>
      <div aria-hidden className="zay-hero-bg" />
      <div className="zay-container">
        <div className="zay-hero-copy">
          {badge ? <div className="zay-hero-badge">{badge}</div> : null}
          <h1 className="zay-hero-title">{title}</h1>
          {lead ? <p className="zay-hero-lead">{lead}</p> : null}
          {actions ? <div className="zay-hero-actions">{actions}</div> : null}
          {note ? <p className="zay-hero-note">{note}</p> : null}
        </div>
        {media ? <div className="zay-hero-media">{media}</div> : null}
      </div>
    </section>
  );
}

/** A window with a title bar, for showing a product screenshot or a live demo. */
export function BrowserFrame({ url, className, children, ...props }: ComponentProps<"div"> & { url?: string }) {
  return (
    <div className={cx("zay-frame", className)} {...props}>
      <div className="zay-frame-bar">
        <span aria-hidden className="zay-frame-dots">
          <i />
          <i />
          <i />
        </span>
        {url ? <span className="zay-frame-url">{url}</span> : null}
      </div>
      <div className="zay-frame-body">{children}</div>
    </div>
  );
}
