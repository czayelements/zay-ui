import { clsx, type ClassValue } from "clsx";

/** Joins class names, skipping falsy values: cx("zay-btn", isOn && "is-on", className). */
export function cx(...values: ClassValue[]): string {
  return clsx(values);
}
