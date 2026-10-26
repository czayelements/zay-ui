"use client";

import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** A progress bar (Base UI Progress). `value` is 0-100; null shows an indeterminate state. */
export function Progress({ className, ...props }: Omit<ComponentProps<typeof BaseProgress.Root>, "className"> & { className?: string }) {
  return (
    <BaseProgress.Root className={className} {...props}>
      <BaseProgress.Track className={cx("zay-progress")}>
        <BaseProgress.Indicator className="zay-progress-indicator" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
