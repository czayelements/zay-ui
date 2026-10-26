import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { IconBox } from "../components/icon-box.js";

/** What to show when a list has nothing yet: an icon, a heading, a sentence and the next step. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { icon?: ReactNode; title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className={cx("zay-empty", className)} {...props}>
      {icon ? <IconBox size="lg">{icon}</IconBox> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action}
    </div>
  );
}
