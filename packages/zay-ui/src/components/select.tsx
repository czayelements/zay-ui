"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { CheckIcon, ChevronsUpDownIcon } from "./icons.js";

/** A custom select (Base UI Select). Pass `items={[{ label, value }]}` so the trigger shows the label. */
export const Select = BaseSelect.Root;
export const SelectGroup = BaseSelect.Group;

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
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}

export function SelectLabel({ className, ...props }: Cn<ComponentProps<typeof BaseSelect.GroupLabel>>) {
  return <BaseSelect.GroupLabel className={cx("zay-menu-label", className)} {...props} />;
}
