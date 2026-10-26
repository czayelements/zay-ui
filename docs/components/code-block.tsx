import { highlight } from "@/lib/code";

import { CopyButton } from "./copy-button";

/** A highlighted code block with a copy button. Server component: highlighting happens at build time. */
export async function CodeBlock({ code, lang = "tsx", title }: { code: string; lang?: string; title?: string }) {
  const html = await highlight(code, lang);
  return (
    <div className="dx-code" style={{ marginTop: "1rem" }}>
      {title ? <div className="dx-code-title">{title}</div> : null}
      <CopyButton text={code} className="dx-copy" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
