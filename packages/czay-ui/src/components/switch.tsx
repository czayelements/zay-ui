"use client";

import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** An on/off switch (Base UI Switch). */
export function Switch({ className, ...props }: Omit<ComponentProps<typeof BaseSwitch.Root>, "className"> & { className?: string }) {
  return (
    <BaseSwitch.Root className={cx("zay-switch", className)} {...props}>
      <BaseSwitch.Thumb className="zay-switch-thumb" />
    </BaseSwitch.Root>
  );
}
