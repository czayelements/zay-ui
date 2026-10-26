"use client";

import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

/** A group of mutually exclusive options (Base UI RadioGroup). */
export function RadioGroup({ className, ...props }: Cn<ComponentProps<typeof BaseRadioGroup>>) {
  return <BaseRadioGroup className={cx("zay-radio-group", className)} {...props} />;
}

export function Radio({ className, ...props }: Cn<ComponentProps<typeof BaseRadio.Root>>) {
  return (
    <BaseRadio.Root className={cx("zay-radio", className)} {...props}>
      <BaseRadio.Indicator className="zay-radio-indicator" />
    </BaseRadio.Root>
  );
}
