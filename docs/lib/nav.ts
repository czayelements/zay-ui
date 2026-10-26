import { blockCategories, blocks } from "./blocks";
import { categories, components } from "./entries";

export type NavLink = { title: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };

export const gettingStarted: NavLink[] = [
  { title: "Introduction", href: "/docs/" },
  { title: "Installation", href: "/docs/installation/" },
  { title: "Theming", href: "/docs/theming/" },
  { title: "Dark mode", href: "/docs/dark-mode/" },
];

export const componentGroups: NavGroup[] = categories.map((category) => ({
  title: category,
  links: components.filter((c) => c.category === category).map((c) => ({ title: c.title, href: `/docs/components/${c.slug}/` })),
}));

export const blockGroups: NavGroup[] = blockCategories.map((category) => ({
  title: `Blocks · ${category}`,
  links: blocks.filter((b) => b.category === category).map((b) => ({ title: b.title, href: `/docs/blocks/${b.slug}/` })),
}));

export const navGroups: NavGroup[] = [{ title: "Getting started", links: gettingStarted }, ...componentGroups, ...blockGroups];

/** Everything the search palette can jump to. */
export function searchItems() {
  const items = [
    ...gettingStarted.map((l) => ({ ...l, group: "Getting started" })),
    { title: "Components", href: "/docs/components/", group: "Browse" },
    { title: "Blocks", href: "/docs/blocks/", group: "Browse" },
    ...components.map((c) => ({ title: c.title, href: `/docs/components/${c.slug}/`, group: c.category })),
    ...blocks.map((b) => ({ title: b.title, href: `/docs/blocks/${b.slug}/`, group: `Blocks · ${b.category}` })),
  ];
  return items;
}
