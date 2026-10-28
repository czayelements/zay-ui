import type { ComponentProps } from "react";

import { cx } from "../cx.js";

export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardStyle = {
  /** Inner padding. Default md. */
  padding?: CardPadding;
  /** Hover feedback, for cards that are links. */
  interactive?: boolean;
  /** surface: a flat tinted card. raised: a card that lifts off the page. */
  tone?: "default" | "surface" | "raised" | "dark";
};

export function cardClass({ padding = "md", interactive = false, tone = "default" }: CardStyle = {}, className?: string): string {
  return cx(
    "zay-card",
    tone === "surface" && "zay-card-surface",
    tone === "raised" && "zay-card-raised",
    tone === "dark" && "zay-card-dark",
    padding !== "none" && `zay-card-pad-${padding}`,
    interactive && "zay-card-interactive",
    className,
  );
}

export function Card({ padding, interactive, tone, className, ...props }: ComponentProps<"div"> & CardStyle) {
  return <div className={cardClass({ padding, interactive, tone }, className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-card-header", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cx("zay-card-title", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cx("zay-card-description", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-card-content", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-card-footer", className)} {...props} />;
}
