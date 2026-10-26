import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A reversed closing panel: heading, one sentence, actions. Use `grid` for the construction grid. */
export function CtaPanel({
  title,
  description,
  actions,
  grid = true,
  className,
  ...props
}: Omit<ComponentProps<"section">, "title"> & { title: ReactNode; description?: ReactNode; actions?: ReactNode; grid?: boolean }) {
  return (
    <section className={cx("zay-panel zay-cta", actions && "zay-cta-split", className)} {...props}>
      {grid ? <div aria-hidden className="zay-grid-lines" /> : null}
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="zay-cta-actions">{actions}</div> : null}
    </section>
  );
}
