"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";

/** A user image with initials as the fallback (Base UI Avatar). */
export function Avatar({
  src,
  alt = "",
  fallback,
  size,
  className,
  ...props
}: Cn<ComponentProps<typeof BaseAvatar.Root>> & { src?: string; alt?: string; fallback?: ReactNode; size?: "sm" | "md" | "lg" }) {
  return (
    <BaseAvatar.Root className={cx("zay-avatar", size && size !== "md" && `zay-avatar-${size}`, className)} {...props}>
      {src ? <BaseAvatar.Image src={src} alt={alt} className="zay-avatar-image" /> : null}
      <BaseAvatar.Fallback delay={src ? 400 : undefined}>{fallback}</BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}

/** Overlaps its Avatars into a stack. */
export function AvatarGroup({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-avatar-group", className)} {...props} />;
}
