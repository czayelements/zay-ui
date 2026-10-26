"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

/**
 * A slider (Base UI Slider). A number value gives one thumb, an array gives a range.
 * Give it an aria-label (it is passed to each thumb).
 */
export function Slider({
  className,
  "aria-label": ariaLabel,
  ...props
}: Cn<ComponentProps<typeof BaseSlider.Root>> & { "aria-label"?: string }) {
  const value = props.value ?? props.defaultValue ?? 0;
  const thumbs = Array.isArray(value) ? value.length : 1;
  return (
    <BaseSlider.Root className={cx("zay-slider", className)} {...props}>
      <BaseSlider.Control className="zay-slider-control">
        <BaseSlider.Track className="zay-slider-track">
          <BaseSlider.Indicator className="zay-slider-indicator" />
          {Array.from({ length: thumbs }, (_, i) => (
            <BaseSlider.Thumb key={i} index={thumbs > 1 ? i : undefined} aria-label={ariaLabel} className="zay-slider-thumb" />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
