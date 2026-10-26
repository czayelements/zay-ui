import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/**
 * The opening of a page: a heading, one paragraph and the actions. `visual` adds a
 * right-hand column (a diagram, a screenshot); `centered` stacks and centres everything.
 */
export function Hero({
  title,
  lead,
  actions,
  badge,
  visual,
  centered,
  grid = true,
  className,
  ...props
}: Omit<ComponentProps<"header">, "title"> & {
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  /** Something small above the title, usually a <Badge>. */
  badge?: ReactNode;
  visual?: ReactNode;
  centered?: boolean;
  /** The faint construction grid behind the hero. Default on. */
  grid?: boolean;
}) {
  return (
    <header className={cx("zay-hero", visual && "zay-hero-with-visual", centered && "zay-hero-centered", className)} {...props}>
      {grid ? <div aria-hidden className="zay-hero-grid-bg" /> : null}
      <div className="zay-container zay-hero-inner">
        <div className="zay-hero-copy">
          {badge}
          <h1 className="zay-hero-title">{title}</h1>
          {lead ? <p className="zay-hero-lead">{lead}</p> : null}
          {actions ? <div className="zay-hero-actions">{actions}</div> : null}
        </div>
        {visual ? <div className="zay-hero-visual">{visual}</div> : null}
      </div>
    </header>
  );
}
