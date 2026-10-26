import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export const tagClass = (className?: string) => cx("zay-tag", className);

/** A small label for a topic or a technology. */
export function Tag({ className, ...props }: ComponentProps<"span">) {
  return <span className={tagClass(className)} {...props} />;
}
