import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A one-line strip above the header: news, a launch, a notice. Put a link inside. */
export function AnnouncementBar({ className, children, ...props }: ComponentProps<"div"> & { children: ReactNode }) {
  return (
    <div role="region" aria-label="Announcement" className={cx("zay-announcement", className)} {...props}>
      {children}
    </div>
  );
}
