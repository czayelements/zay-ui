import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** A keyboard key: <Kbd>⌘K</Kbd>. */
export function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return <kbd className={cx("zay-kbd", className)} {...props} />;
}
