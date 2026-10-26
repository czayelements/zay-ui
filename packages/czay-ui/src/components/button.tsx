import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export type ButtonVariant = "primary" | "brand" | "outline" | "ghost" | "destructive" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyle = {
  /** primary: solid ink, the main action. brand: sage fill, one per page. Default: outline. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** A square button holding only an icon. Give it an aria-label. */
  icon?: boolean;
};

/**
 * The class string of a button, to give a link or any other element the look:
 *
 *   <a href="/contact" className={buttonClass({ variant: "primary" })}>Contact</a>
 */
export function buttonClass({ variant = "outline", size = "md", icon = false }: ButtonStyle = {}, className?: string): string {
  return cx("zay-btn", `zay-btn-${variant}`, size !== "md" && `zay-btn-${size}`, icon && "zay-btn-icon", className);
}

/** A button. The type defaults to "button" so it never submits a form by accident. */
export function Button({ variant, size, icon, className, type = "button", ...props }: ComponentProps<"button"> & ButtonStyle) {
  return <button type={type} className={buttonClass({ variant, size, icon }, className)} {...props} />;
}
