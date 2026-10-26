"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";
import { CheckIcon, MinusIcon } from "./icons.js";

/** A checkbox (Base UI Checkbox). Wrap it and its text in a <label> to make the text clickable. */
export function Checkbox({ className, ...props }: Omit<ComponentProps<typeof BaseCheckbox.Root>, "className"> & { className?: string }) {
  return (
    <BaseCheckbox.Root className={cx("zay-checkbox", className)} {...props}>
      <BaseCheckbox.Indicator className="zay-checkbox-indicator" keepMounted>
        {props.indeterminate ? <MinusIcon /> : <CheckIcon />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
