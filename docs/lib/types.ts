import type { ComponentType } from "react";

export type PropRow = { name: string; type: string; default?: string; description: string };
export type PropGroup = { part?: string; rows: PropRow[] };

export type DemoRef = {
  /** Heading above the example. */
  title?: string;
  description?: string;
  /** Exported component name inside demos/<file>.tsx. */
  name: string;
  /** "block" removes the padding of the preview frame; "tall" gives it room. */
  layout?: "center" | "block" | "tall";
};

export type Category = "Actions" | "Forms" | "Overlays" | "Navigation" | "Display";

export type Entry = {
  slug: string;
  title: string;
  description: string;
  category: Category;
  /** The Base UI component underneath, if any. */
  baseUi?: string;
  /** File in demos/ without extension. */
  file: string;
  demos: DemoRef[];
  /** Import names for the "Usage" snippet. */
  anatomy?: string;
  props?: PropGroup[];
  notes?: string[];
  /** Is the component usable in a server component? */
  server?: boolean;
};

export type Registry = { demos: Record<string, Record<string, ComponentType>> };
