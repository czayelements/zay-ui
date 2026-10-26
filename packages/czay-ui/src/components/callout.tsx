import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { AlertIcon, CheckCircleIcon, InfoIcon } from "./icons.js";

export type CalloutTone = "info" | "success" | "warning" | "danger";

const icons = { info: InfoIcon, success: CheckCircleIcon, warning: AlertIcon, danger: AlertIcon } as const;

/** A highlighted note. */
export function Callout({
  tone = "info",
  title,
  icon,
  className,
  children,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { tone?: CalloutTone; title?: ReactNode; icon?: ReactNode | false }) {
  const Icon = icons[tone];
  return (
    <div role={tone === "danger" || tone === "warning" ? "alert" : "note"} className={cx("zay-callout", tone !== "info" && `zay-callout-${tone}`, className)} {...props}>
      {icon === false ? null : (icon ?? <Icon />)}
      <div>
        {title ? <p className="zay-callout-title">{title}</p> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
