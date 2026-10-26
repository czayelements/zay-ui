"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { CheckIcon, ChevronsUpDownIcon } from "./icons.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/** A custom select (Base UI Select). Pass `items={[{ label, value }]}` so the trigger shows the label. */
export const Select = BaseSelect.Root;

export function SelectTrigger({ className, placeholder, children, ...props }: Cn<ComponentProps<typeof BaseSelect.Trigger>> & { placeholder?: string }) {
  return (
    <BaseSelect.Trigger className={cx("zay-select-trigger", className)} {...props}>
      {children ?? <BaseSelect.Value placeholder={placeholder} />}
      <BaseSelect.Icon className="zay-select-icon">
        <ChevronsUpDownIcon />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export function SelectContent({ className, children, sideOffset = 4, ...props }: Cn<ComponentProps<typeof BaseSelect.Popup>> & { children?: ReactNode; sideOffset?: number }) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner className="zay-positioner" sideOffset={sideOffset}>
        <BaseSelect.Popup className={cx("zay-select-popup", className)} {...props}>
          <BaseSelect.List>{children}</BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export function SelectItem({ className, children, ...props }: Cn<ComponentProps<typeof BaseSelect.Item>>) {
  return (
    <BaseSelect.Item className={cx("zay-select-item", className)} {...props}>
      <BaseSelect.ItemIndicator className="zay-select-item-indicator">
        <CheckIcon />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText className="zay-select-item-text">{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}
