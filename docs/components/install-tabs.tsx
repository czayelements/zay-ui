"use client";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@czayelements/zay-ui";

import { CopyButton } from "./copy-button";

const managers = [
  { id: "pnpm", cmd: "pnpm add" },
  { id: "npm", cmd: "npm install" },
  { id: "yarn", cmd: "yarn add" },
  { id: "bun", cmd: "bun add" },
] as const;

/** A package install command with a tab per package manager. */
export function InstallTabs({ pkg }: { pkg: string }) {
  return (
    <Tabs defaultValue="pnpm" variant="pill" className="dx-frame">
      <div className="dx-frame-bar">
        <TabsList>
          {managers.map((m) => (
            <TabsTab key={m.id} value={m.id}>
              {m.id}
            </TabsTab>
          ))}
        </TabsList>
      </div>
      {managers.map((m) => (
        <TabsPanel key={m.id} value={m.id} className="!pt-0">
          <div className="dx-code" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 0.5rem 0 1.125rem" }}>
            <pre style={{ padding: "0.9rem 0", flex: 1 }}>
              <code>
                {m.cmd} {pkg}
              </code>
            </pre>
            <CopyButton text={`${m.cmd} ${pkg}`} />
          </div>
        </TabsPanel>
      ))}
    </Tabs>
  );
}
