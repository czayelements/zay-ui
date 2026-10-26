"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { Button, Tabs, TabsList, TabsPanel, TabsTab, Tooltip, TooltipContent, TooltipTrigger } from "@czayelements/zay-ui";

import { CopyButton } from "./copy-button";

const sizes = [
  { id: "desktop", label: "Desktop", width: "100%", icon: <path d="M2 3.5h12v7.5H2zM5.5 13.5h5M8 11v2.5" /> },
  { id: "tablet", label: "Tablet", width: "768px", icon: <path d="M4 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM7.25 12h1.5" /> },
  { id: "mobile", label: "Mobile", width: "390px", icon: <path d="M5 1.75h6a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2.75a1 1 0 0 1 1-1ZM7.25 12.25h1.5" /> },
] as const;

/**
 * A block shown in an iframe, so media queries respond to the chosen width,
 * with a viewport switcher and the source in a Code tab.
 */
export function BlockFrame({
  src,
  height,
  codeHtml,
  code,
  title,
}: {
  src: string;
  height?: number;
  codeHtml: string;
  code: string;
  title: string;
}) {
  const [size, setSize] = useState<(typeof sizes)[number]["id"]>("desktop");
  const [auto, setAuto] = useState(height ?? 400);
  const frame = useRef<HTMLIFrameElement>(null);

  /* The iframe shares our origin, so it can follow our theme and accent and report its own height. */
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const root = document.documentElement;
    const sync = () => {
      const doc = el.contentDocument;
      if (!doc) return;
      doc.documentElement.classList.toggle("dark", root.classList.contains("dark"));
      const hue = root.style.getPropertyValue("--hue");
      if (hue) doc.documentElement.style.setProperty("--hue", hue);
    };
    const measure = () => {
      const doc = el.contentDocument;
      if (doc && height === undefined) setAuto(Math.ceil(doc.documentElement.scrollHeight));
    };
    const onLoad = () => {
      sync();
      measure();
      const inner = el.contentDocument?.body;
      if (inner && height === undefined) new ResizeObserver(measure).observe(inner);
    };
    el.addEventListener("load", onLoad);
    if (el.contentDocument?.readyState === "complete") onLoad();
    const mo = new MutationObserver(sync);
    mo.observe(root, { attributes: true, attributeFilter: ["class", "style"] });
    return () => {
      el.removeEventListener("load", onLoad);
      mo.disconnect();
    };
  }, [height, size]);

  const width = sizes.find((s) => s.id === size)!.width;

  return (
    <Tabs defaultValue="preview" variant="pill" className="dx-frame">
      <div className="dx-frame-bar">
        <TabsList>
          <TabsTab value="preview">Preview</TabsTab>
          <TabsTab value="code">Code</TabsTab>
        </TabsList>
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-0.5 sm:flex">
            {sizes.map((s) => (
              <Tooltip key={s.id}>
                <TooltipTrigger
                  render={
                    <Button variant={size === s.id ? "secondary" : "ghost"} size="sm" icon aria-label={s.label} aria-pressed={size === s.id} onClick={() => setSize(s.id)} />
                  }
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {s.icon}
                  </svg>
                </TooltipTrigger>
                <TooltipContent>{s.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
          <Tooltip>
            <TooltipTrigger render={<a href={src} target="_blank" rel="noreferrer" className="zay-btn zay-btn-ghost zay-btn-sm zay-btn-icon" aria-label="Open in a new tab" />}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 2.5h4.5V7M13.5 2.5 7.5 8.5M12 9.5v3a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3" />
              </svg>
            </TooltipTrigger>
            <TooltipContent>Open in a new tab</TooltipContent>
          </Tooltip>
          <CopyButton text={code} />
        </div>
      </div>
      <TabsPanel value="preview" className="!pt-0">
        <div className="dx-block-stage">
          <iframe
            ref={frame}
            title={`${title} preview`}
            src={src}
            loading="lazy"
            style={{ width, height: height ?? auto }}
            className="dx-block-iframe"
          />
        </div>
      </TabsPanel>
      <TabsPanel value="code" className="!pt-0">
        <div className="dx-code">
          <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
        </div>
      </TabsPanel>
    </Tabs>
  );
}

export type { ReactNode };
