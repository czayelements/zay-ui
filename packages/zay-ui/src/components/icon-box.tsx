import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export type IconBoxStyle = {
  size?: "sm" | "md" | "lg";
  /** Tinted with the accent instead of the neutral plate. */
  solid?: boolean;
};

export const iconBoxClass = ({ size = "md", solid = false }: IconBoxStyle = {}, className?: string) =>
  cx("zay-icon-box", size !== "md" && `zay-icon-box-${size}`, solid && "zay-icon-box-solid", className);

/** A plate for an icon: put an <svg> inside. */
export function IconBox({ size, solid, className, ...props }: ComponentProps<"span"> & IconBoxStyle) {
  return <span className={iconBoxClass({ size, solid }, className)} {...props} />;
}
