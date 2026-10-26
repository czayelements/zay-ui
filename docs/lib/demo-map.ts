import type { ComponentType } from "react";

/** Demo modules, loaded on the server so each page imports only what it shows. */
export const demoModules: Record<string, () => Promise<Record<string, ComponentType>>> = {
  actions: () => import("@/demos/actions"),
  forms: () => import("@/demos/forms"),
  overlays: () => import("@/demos/overlays"),
  navigation: () => import("@/demos/navigation"),
  display: () => import("@/demos/display"),
  blocks: () => import("@/demos/blocks"),
};
