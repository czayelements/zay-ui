import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A placeholder for a list or panel with nothing in it yet. */
export function Empty({
  icon,
  title,
  description,
  className,
  children,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { icon?: ReactNode; title: ReactNode; description?: ReactNode }) {
  return (
    <div className={cx("zay-empty", className)} {...props}>
      {icon}
      <h3 className="zay-empty-title">{title}</h3>
      {description ? <p className="zay-empty-description">{description}</p> : null}
      {children}
    </div>
  );
}
