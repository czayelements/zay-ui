"use client";

import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { CheckIcon, ChevronDownIcon, XIcon } from "./icons.js";

/**
 * A text input with a filtered list of options (Base UI Combobox). Pass the
 * options as `items={[{ label, value }]}` and render them with ComboboxList:
 *
 *   <Combobox items={items}>
 *     <ComboboxInput placeholder="Search…" />
 *     <ComboboxContent>
 *       <ComboboxEmpty>No results</ComboboxEmpty>
 *       <ComboboxList>{(item) => <ComboboxItem key={item.value} value={item}>{item.label}</ComboboxItem>}</ComboboxList>
 *     </ComboboxContent>
 *   </Combobox>
 */
export const Combobox = BaseCombobox.Root;

export function ComboboxInput({ className, clearable = true, ...props }: Cn<ComponentProps<typeof BaseCombobox.Input>> & { clearable?: boolean }) {
  return (
    <BaseCombobox.InputGroup className="zay-combobox-group">
      <BaseCombobox.Input className={cx("zay-input", className)} {...props} />
      <div className="zay-combobox-actions">
        {clearable ? (
          <BaseCombobox.Clear className="zay-combobox-action" aria-label="Clear">
            <XIcon />
          </BaseCombobox.Clear>
        ) : null}
        <BaseCombobox.Trigger className="zay-combobox-action" aria-label="Open options">
          <ChevronDownIcon />
        </BaseCombobox.Trigger>
      </div>
    </BaseCombobox.InputGroup>
  );
}

export function ComboboxContent({ className, children, sideOffset = 4, ...props }: Cn<ComponentProps<typeof BaseCombobox.Popup>> & { children?: ReactNode; sideOffset?: number }) {
  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner className="zay-positioner" sideOffset={sideOffset}>
        <BaseCombobox.Popup className={cx("zay-combobox-popup", className)} {...props}>
          {children}
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
}

export function ComboboxList({ className, ...props }: Cn<ComponentProps<typeof BaseCombobox.List>>) {
  return <BaseCombobox.List className={className} {...props} />;
}

export function ComboboxEmpty({ className, ...props }: Cn<ComponentProps<typeof BaseCombobox.Empty>>) {
  return <BaseCombobox.Empty className={cx("zay-combobox-empty", className)} {...props} />;
}

export function ComboboxItem({ className, children, ...props }: Cn<ComponentProps<typeof BaseCombobox.Item>>) {
  return (
    <BaseCombobox.Item className={cx("zay-combobox-item", className)} {...props}>
      <BaseCombobox.ItemIndicator className="zay-combobox-item-indicator">
        <CheckIcon />
      </BaseCombobox.ItemIndicator>
      {children}
    </BaseCombobox.Item>
  );
}
