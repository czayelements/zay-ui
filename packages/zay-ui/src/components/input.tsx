import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

export type InputSize = "sm" | "md" | "lg";

export const fieldClass = (size: InputSize = "md", className?: string) =>
  cx("zay-input", size !== "md" && `zay-input-${size}`, className);

/** A text input. Pass aria-invalid for the error state. */
export function Input({ size, className, ...props }: Omit<ComponentProps<"input">, "size"> & { size?: InputSize }) {
  return <input className={fieldClass(size, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cx("zay-textarea", className)} {...props} />;
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return <label className={cx("zay-label", className)} {...props} />;
}

/**
 * An input with an icon or text inside it. Pass the input as children and the
 * decoration as `start` / `end`:
 *
 *   <InputGroup start={<SearchIcon />}><Input placeholder="Search" /></InputGroup>
 */
export function InputGroup({ start, end, className, children, ...props }: ComponentProps<"div"> & { start?: ReactNode; end?: ReactNode }) {
  return (
    <div className={cx("zay-input-group", className)} {...props}>
      {start ? <span className="zay-input-addon zay-input-addon-start">{start}</span> : null}
      {children}
      {end ? <span className="zay-input-addon zay-input-addon-end">{end}</span> : null}
    </div>
  );
}
