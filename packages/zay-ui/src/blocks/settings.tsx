import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A page of settings: stacked sections separated by hairlines. */
export function SettingsLayout({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-settings", className)} {...props} />;
}

/**
 * One group of settings: the title and an explanation on the left, the controls in a
 * card on the right. Put a `footer` (usually a Save button) under the controls.
 */
export function SettingsSection({
  title,
  description,
  footer,
  className,
  children,
  ...props
}: Omit<ComponentProps<"section">, "title"> & { title: ReactNode; description?: ReactNode; footer?: ReactNode }) {
  return (
    <section className={cx("zay-settings-section", className)} {...props}>
      <div className="zay-settings-copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="zay-settings-card">
        <div className="zay-settings-fields">{children}</div>
        {footer ? <div className="zay-settings-footer">{footer}</div> : null}
      </div>
    </section>
  );
}
