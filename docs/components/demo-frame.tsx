"use client";

import type { ReactNode } from "react";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@czayelements/zay-ui";

import { CopyButton } from "./copy-button";

/** A live preview with a Code tab. The highlighted HTML is made on the server. */
export function DemoFrame({
  preview,
  codeHtml,
  code,
  layout = "center",
}: {
  preview: ReactNode;
  codeHtml: string;
  code: string;
  layout?: "center" | "block" | "tall";
}) {
  return (
    <Tabs defaultValue="preview" variant="pill" className="dx-frame">
      <div className="dx-frame-bar">
        <TabsList>
          <TabsTab value="preview">Preview</TabsTab>
          <TabsTab value="code">Code</TabsTab>
        </TabsList>
        <CopyButton text={code} className="dx-copy" />
      </div>
      <TabsPanel value="preview" style={{ padding: 0 }} className="!pt-0">
        <div className={layout === "block" ? "dx-preview dx-preview-block" : layout === "tall" ? "dx-preview dx-preview-tall" : "dx-preview"}>{preview}</div>
      </TabsPanel>
      <TabsPanel value="code" className="!pt-0">
        <div className="dx-code">
          <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
        </div>
      </TabsPanel>
    </Tabs>
  );
}
