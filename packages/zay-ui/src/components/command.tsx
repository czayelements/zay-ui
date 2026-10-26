"use client";

import { Autocomplete } from "@base-ui/react/autocomplete";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { useId, type ReactNode } from "react";

import { Kbd } from "./kbd.js";
import { SearchIcon } from "./icons.js";

export type CommandItem = {
  value: string;
  label: string;
  /** Right-aligned hint: a shortcut or the kind of result. */
  hint?: string;
  icon?: ReactNode;
};

export type CommandGroup = { value: string; items: CommandItem[] };

/**
 * A ⌘K command palette: a dialog with a search field and grouped, filterable
 * commands (Base UI Dialog + Autocomplete). You own `open`; bind the shortcut yourself.
 *
 *   <CommandPalette open={open} onOpenChange={setOpen} groups={groups} onSelect={(item) => run(item.value)} />
 */
export function CommandPalette({
  open,
  onOpenChange,
  groups,
  onSelect,
  placeholder = "Type a command or search…",
  emptyText = "No results found.",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groups: CommandGroup[];
  onSelect?: (item: CommandItem) => void;
  placeholder?: string;
  emptyText?: string;
}) {
  const hintId = useId();
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="zay-backdrop" />
        <BaseDialog.Viewport className="zay-dialog-viewport" style={{ alignItems: "start", paddingTop: "min(18vh, 8rem)" }}>
          <BaseDialog.Popup className="zay-dialog zay-command" aria-label="Command palette">
            <Autocomplete.Root open inline items={groups} autoHighlight="always" keepHighlight>
              <Autocomplete.Input className="zay-command-input" aria-label="Search commands" aria-describedby={hintId} placeholder={placeholder} />
              <Autocomplete.Empty className="zay-command-empty">{emptyText}</Autocomplete.Empty>
              <Autocomplete.List className="zay-command-list">
                {(group: CommandGroup) => (
                  <Autocomplete.Group key={group.value} items={group.items}>
                    <Autocomplete.GroupLabel className="zay-command-group-label">{group.value}</Autocomplete.GroupLabel>
                    <Autocomplete.Collection>
                      {(item: CommandItem) => (
                        <Autocomplete.Item
                          key={item.value}
                          value={item}
                          className="zay-command-item"
                          onClick={() => {
                            onSelect?.(item);
                            onOpenChange(false);
                          }}
                        >
                          {item.icon ?? <SearchIcon />}
                          <span>{item.label}</span>
                          {item.hint ? <span className="zay-menu-shortcut">{item.hint}</span> : null}
                        </Autocomplete.Item>
                      )}
                    </Autocomplete.Collection>
                  </Autocomplete.Group>
                )}
              </Autocomplete.List>
            </Autocomplete.Root>
            <div className="zay-command-footer">
              <span id={hintId}>
                <Kbd>↵</Kbd> to select
              </span>
              <span>
                <Kbd>↑</Kbd> <Kbd>↓</Kbd> to navigate
              </span>
              <span>
                <Kbd>esc</Kbd> to close
              </span>
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
