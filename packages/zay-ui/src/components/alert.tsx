import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { AlertIcon, CheckCircleIcon, InfoIcon } from "./icons.js";

export type AlertTone = "neutral" | "info" | "success" | "warning" | "danger";

const icons = { neutral: InfoIcon, info: InfoIcon, success: CheckCircleIcon, warning: AlertIcon, danger: AlertIcon } as const;

/** A highlighted note or message. */
export function Alert({
  tone = "neutral",
  title,
  icon,
  className,
  children,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { tone?: AlertTone; title?: ReactNode; icon?: ReactNode | false }) {
  const Icon = icons[tone];
  return (
    <div
      role={tone === "danger" || tone === "warning" ? "alert" : "note"}
      className={cx("zay-alert", tone !== "neutral" && `zay-alert-${tone}`, className)}
      {...props}
    >
      {icon === false ? null : (icon ?? <Icon />)}
      <div>
        {title ? <p className="zay-alert-title">{title}</p> : null}
        {children ? <div className="zay-alert-body">{children}</div> : null}
      </div>
    </div>
  );
}
