import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** Centers content at a readable maximum width with responsive side padding. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-container", className)} {...props} />;
}

/** A page section with generous vertical rhythm. `band` tints the background. */
export function Section({ band, className, ...props }: ComponentProps<"section"> & { band?: boolean }) {
  return <section className={cx("zay-section", band && "zay-band", className)} {...props} />;
}
