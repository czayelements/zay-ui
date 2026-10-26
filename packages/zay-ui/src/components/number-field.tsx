"use client";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";
import { MinusIcon, PlusIcon } from "./icons.js";

/** A number input with stepper buttons, keyboard and wheel support (Base UI NumberField). */
export function NumberField({ className, ...props }: Cn<ComponentProps<typeof BaseNumberField.Root>>) {
  return (
    <BaseNumberField.Root className={className} {...props}>
      <BaseNumberField.Group className={cx("zay-number")}>
        <BaseNumberField.Decrement className="zay-number-step" aria-label="Decrease">
          <MinusIcon />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input className="zay-number-input" />
        <BaseNumberField.Increment className="zay-number-step" aria-label="Increase">
          <PlusIcon />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}
