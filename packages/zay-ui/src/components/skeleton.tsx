import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** A loading placeholder: size it with a class or style (<Skeleton className="h-4 w-40" />). */
export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return <div aria-hidden className={cx("zay-skeleton", className)} {...props} />;
}
