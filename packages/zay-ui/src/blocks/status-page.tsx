import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/**
 * The page for a 404 or an error: a large faded code, a heading, one sentence and
 * the ways out. It tells visitors what to do, not what broke.
 */
export function StatusPage({
  code,
  title,
  body,
  actions,
  children,
  className,
  ...props
}: Omit<ComponentProps<"main">, "title"> & { code?: string; title: ReactNode; body?: ReactNode; actions?: ReactNode; children?: ReactNode }) {
  return (
    <main className={cx("zay-status", className)} {...props}>
      {code ? (
        <p aria-hidden className="zay-status-code">
          {code}
        </p>
      ) : null}
      <h1 className="zay-status-title">{title}</h1>
      {body ? <p className="zay-status-body">{body}</p> : null}
      {actions ? <div className="zay-status-actions">{actions}</div> : null}
      {children}
    </main>
  );
}
