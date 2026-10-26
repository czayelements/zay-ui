"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { CheckIcon, MinusIcon } from "./icons.js";

/** A checkbox (Base UI Checkbox). Wrap it and its text in a <label> (or use <Choice>) to make the text clickable. */
export function Checkbox({ className, ...props }: Cn<ComponentProps<typeof BaseCheckbox.Root>>) {
  return (
    <BaseCheckbox.Root className={cx("zay-checkbox", className)} {...props}>
      <BaseCheckbox.Indicator className="zay-checkbox-indicator" keepMounted>
        {props.indeterminate ? <MinusIcon /> : <CheckIcon />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}

/** Several checkboxes sharing one array value (Base UI CheckboxGroup). */
export function CheckboxGroup({ className, ...props }: Cn<ComponentProps<typeof BaseCheckboxGroup>>) {
  return <BaseCheckboxGroup className={cx("zay-radio-group", className)} {...props} />;
}

/** A control with its label and optional description as one click target: <Choice label="…" description="…"><Checkbox /></Choice> */
export function Choice({
  label,
  description,
  className,
  children,
  ...props
}: Omit<ComponentProps<"label">, "children"> & { label: ReactNode; description?: ReactNode; children: ReactNode }) {
  return (
    <label className={cx("zay-choice", className)} {...props}>
      {children}
      <span>
        <span>{label}</span>
        {description ? <span className="zay-choice-description">{description}</span> : null}
      </span>
    </label>
  );
}
