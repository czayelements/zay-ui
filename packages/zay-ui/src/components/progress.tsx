"use client";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";

/** A progress bar (Base UI Progress). `value` is 0-100; null shows an indeterminate state. */
export function Progress({ className, ...props }: Cn<ComponentProps<typeof BaseProgress.Root>>) {
  return (
    <BaseProgress.Root className={className} {...props}>
      <BaseProgress.Track className="zay-progress">
        <BaseProgress.Indicator className="zay-progress-indicator" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

/** A bar for a known quantity within a range, like disk usage (Base UI Meter). */
export function Meter({ label, className, ...props }: Cn<ComponentProps<typeof BaseMeter.Root>> & { label?: ReactNode }) {
  return (
    <BaseMeter.Root className={className} {...props}>
      <div className="zay-meter-header">
        {label ? <BaseMeter.Label className="zay-meter-label">{label}</BaseMeter.Label> : <span />}
        <BaseMeter.Value />
      </div>
      <BaseMeter.Track className="zay-progress">
        <BaseMeter.Indicator className="zay-progress-indicator" />
      </BaseMeter.Track>
    </BaseMeter.Root>
  );
}
