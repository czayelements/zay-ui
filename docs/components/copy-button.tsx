"use client";

import { useState } from "react";

import { Button, CheckIcon } from "@czayelements/zay-ui";

const CopyIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="5.25" y="5.25" width="8" height="8" rx="1.75" />
    <path d="M10.75 5.25v-1.5A1.75 1.75 0 0 0 9 2H4.25A1.75 1.75 0 0 0 2.5 3.75V8.5A1.75 1.75 0 0 0 4.25 10.25h1" />
  </svg>
);

/** Copies `text` to the clipboard and shows a check for a moment. */
export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="ghost"
      size="sm"
      icon
      className={className}
      aria-label={done ? "Copied" : "Copy code"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* clipboard blocked: nothing to do */
        }
      }}
    >
      {done ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
