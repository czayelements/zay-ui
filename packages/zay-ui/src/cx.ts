import { clsx, type ClassValue } from "clsx";

/** Joins class names, skipping falsy values: cx("zay-btn", isOn && "is-on", className). */
export function cx(...values: ClassValue[]): string {
  return clsx(values);
}

/** The props of a Base UI part with `className` narrowed to a plain string. */
export type Cn<T> = Omit<T, "className"> & { className?: string };
