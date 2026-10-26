import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export type ButtonVariant = "primary" | "brand" | "secondary" | "outline" | "ghost" | "destructive" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyle = {
  /** primary: solid ink, the main action. brand: the accent, once per page. Default: outline. */
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

/**
 * A button. The type defaults to "button" so it never submits a form by accident.
 * `loading` swaps nothing in the layout: it shows a spinner before the label and ignores clicks.
 */
export function Button({
  variant,
  size,
  icon,
  loading,
  className,
  type = "button",
  children,
  ...props
}: ComponentProps<"button"> & ButtonStyle & { loading?: boolean }) {
  return (
    <button
      type={type}
      className={buttonClass({ variant, size, icon }, className)}
      data-loading={loading ? "" : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="zay-spinner" aria-hidden /> : null}
      {children}
    </button>
  );
}

/** Joins buttons into one segmented control. */
export function ButtonGroup({ className, ...props }: ComponentProps<"div">) {
  return <div role="group" className={cx("zay-btn-group", className)} {...props} />;
}

/** A small spinner that inherits the text colour: size it with font-size. */
export function Spinner({ className, ...props }: ComponentProps<"span">) {
  return <span role="status" aria-label="Loading" className={cx("zay-spinner", className)} {...props} />;
}
