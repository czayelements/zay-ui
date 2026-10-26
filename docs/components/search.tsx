"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { CommandPalette, Kbd, SearchIcon, type CommandGroup } from "@czayelements/zay-ui";

type Item = { title: string; href: string; group: string };

/** The ⌘K search: the docs search themselves with zay-ui's own CommandPalette. */
export function Search({ items }: { items: Item[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const groups = useMemo<CommandGroup[]>(() => {
    const map = new Map<string, CommandGroup>();
    for (const item of items) {
      const group = map.get(item.group) ?? { value: item.group, items: [] };
      group.items.push({ value: item.href, label: item.title });
      map.set(item.group, group);
    }
    return [...map.values()];
  }, [items]);

  return (
    <>
      <button type="button" className="dx-search" onClick={() => setOpen(true)} aria-label="Search the documentation">
        <SearchIcon />
        <span>Search…</span>
        <Kbd>⌘K</Kbd>
      </button>
      <CommandPalette open={open} onOpenChange={setOpen} groups={groups} placeholder="Search components and guides…" onSelect={(item) => router.push(item.value)} />
    </>
  );
}
