import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export const fieldClass = (className?: string) => cx("zay-input", className);

/** A text input. Pass aria-invalid for the error state. */
export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={fieldClass(className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cx("zay-textarea", className)} {...props} />;
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return <label className={cx("zay-label", className)} {...props} />;
}
