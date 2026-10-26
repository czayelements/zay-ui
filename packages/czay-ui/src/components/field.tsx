"use client";

import { Field as BaseField } from "@base-ui/react/field";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/**
 * A form field: label, control, description and validation message wired together
 * (Base UI Field). Use FieldControl for the input; it is a styled <input>.
 *
 *   <Field name="email"><FieldLabel>Email</FieldLabel><FieldControl type="email" required />
 *   <FieldError match="valueMissing">Required</FieldError></Field>
 */
export function Field({ className, ...props }: Cn<ComponentProps<typeof BaseField.Root>>) {
  return <BaseField.Root className={cx("zay-field", className)} {...props} />;
}

export function FieldLabel({ className, ...props }: Cn<ComponentProps<typeof BaseField.Label>>) {
  return <BaseField.Label className={cx("zay-label", className)} {...props} />;
}

export function FieldControl({ className, ...props }: Cn<ComponentProps<typeof BaseField.Control>>) {
  return <BaseField.Control className={cx("zay-input", className)} {...props} />;
}

export function FieldDescription({ className, ...props }: Cn<ComponentProps<typeof BaseField.Description>>) {
  return <BaseField.Description className={cx("zay-field-description", className)} {...props} />;
}

export function FieldError({ className, ...props }: Cn<ComponentProps<typeof BaseField.Error>>) {
  return <BaseField.Error className={cx("zay-field-error", className)} {...props} />;
}
