import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A heading for a section: an optional eyebrow, a title and a sentence. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode; align?: "center" | "start" }) {
  return (
    <div className={cx("zay-section-heading", align === "center" && "zay-section-heading-centered", className)} {...props}>
      {eyebrow ? <p className="zay-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export type PageHeaderFact = { label: ReactNode; value: ReactNode };

/** The title block of an inner page: heading, a sentence, actions and optional label/value facts. */
export function PageHeader({
  title,
  lead,
  actions,
  facts,
  className,
  ...props
}: Omit<ComponentProps<"header">, "title"> & { title: ReactNode; lead?: ReactNode; actions?: ReactNode; facts?: PageHeaderFact[] }) {
  return (
    <header className={cx("zay-page-header", className)} {...props}>
      <div>
        <h1 className="zay-page-header-title">{title}</h1>
        {lead ? <p className="zay-page-header-lead">{lead}</p> : null}
      </div>
      {actions ? <div className="zay-page-header-actions">{actions}</div> : null}
      {facts && facts.length > 0 ? (
        <dl className="zay-facts">
          {facts.map((fact, i) => (
            <div key={i}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </header>
  );
}
