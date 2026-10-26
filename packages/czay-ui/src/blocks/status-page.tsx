import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/**
 * The page for a 404 or an error: a huge faded code, a two-line heading, one
 * sentence and the ways out. It tells visitors what to do, not what broke.
 *
 *   <StatusPage code="404" title={["This page", "is not here"]} body="…" actions={<a …>Home</a>} />
 */
export function StatusPage({
  code,
  title,
  body,
  actions,
  children,
  className,
  ...props
}: Omit<ComponentProps<"main">, "title"> & {
  code?: string;
  title: [ReactNode, ReactNode] | ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  /** Quick links under the actions. */
  children?: ReactNode;
}) {
  return (
    <main className={cx("zay-status", className)} {...props}>
      {code ? (
        <p aria-hidden className="zay-status-code">
          {code}
        </p>
      ) : null}
      <h1 className="zay-status-title">
        {Array.isArray(title) ? (
          <>
            {title[0]}
            <br />
            <span>{title[1]}</span>
          </>
        ) : (
          title
        )}
      </h1>
      {body ? <p className="zay-status-body">{body}</p> : null}
      {actions ? <div className="zay-status-actions">{actions}</div> : null}
      {children}
    </main>
  );
}
