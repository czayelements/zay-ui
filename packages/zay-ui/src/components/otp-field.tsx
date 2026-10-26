"use client";

import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";

/** A one-time-code input: one box per character, with paste and auto-advance (Base UI OTPField). */
export function OtpField({ length = 6, className, ...props }: Cn<ComponentProps<typeof BaseOTPField.Root>> & { length?: number }) {
  return (
    <BaseOTPField.Root length={length} className={cx("zay-otp", className)} {...props}>
      {Array.from({ length }, (_, i) => (
        <BaseOTPField.Input key={i} className="zay-otp-input" aria-label={`Character ${i + 1} of ${length}`} />
      ))}
    </BaseOTPField.Root>
  );
}
