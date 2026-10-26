import type { ReactNode } from "react";

/** A live preview with its source underneath. */
export function Demo({ code, children, block }: { code: string; children: ReactNode; block?: boolean }) {
  return (
    <div className="mt-4">
      <div className={block ? "docs-preview docs-preview-block" : "docs-preview"}>{children}</div>
      <pre className="docs-code">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
