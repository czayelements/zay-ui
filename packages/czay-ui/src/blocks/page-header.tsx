import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

export type PageHeaderFact = { label: ReactNode; value: ReactNode };

/** The title block of an inner page: heading, a sentence, actions, and optionally label/value facts on the right. */
export function PageHeader({
  title,
  lead,
  actions,
  facts,
  className,
  ...props
}: Omit<ComponentProps<"header">, "title"> & { title: ReactNode; lead?: ReactNode; actions?: ReactNode; facts?: PageHeaderFact[] }) {
  return (
    <header className={cx("zay-container zay-page-header", className)} {...props}>
      <div className="zay-page-header-copy">
        <h1 className="zay-page-header-title">{title}</h1>
        {lead ? <p className="zay-page-header-lead">{lead}</p> : null}
        {actions ? <div className="zay-page-header-actions">{actions}</div> : null}
      </div>
      {facts && facts.length > 0 ? (
        <dl className="zay-facts zay-page-header-facts">
          {facts.map((fact, i) => (
            <div key={i} className="zay-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </header>
  );
}

/** A heading for a section further down the page. */
export function SectionHeading({
  title,
  description,
  centered,
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { title: ReactNode; description?: ReactNode; centered?: boolean }) {
  return (
    <div className={cx("zay-section-heading", centered && "zay-section-heading-centered", className)} {...props}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
