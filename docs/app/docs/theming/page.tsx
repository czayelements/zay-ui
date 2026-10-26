import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = { title: "Theming" };

const tokens = [
  ["background", "The page"],
  ["surface", "Panels and sidebars"],
  ["muted", "Hover fills and tracks"],
  ["border", "Hairlines"],
  ["foreground", "Text"],
  ["muted-foreground", "Secondary text"],
  ["brand", "The accent"],
  ["brand-soft", "Accent backgrounds"],
  ["destructive", "Errors"],
  ["success", "Positive"],
  ["warning", "Caution"],
  ["inverse", "Reversed panels"],
];

export default function Theming() {
  return (
    <>
      <h1>Theming</h1>
      <p className="dx-lead">Every colour, radius, shadow and size is a CSS variable. Change one number to re-colour everything.</p>

      <h2 id="accent">The accent colour</h2>
      <p>
        The accent is defined in OKLCH from a single hue, so buttons, rings, links, selected states and tinted backgrounds always stay in harmony and meet contrast in light and dark. Try the
        palette button in the header: it changes <code>--hue</code> on this page.
      </p>
      <CodeBlock lang="css" code={`:root {\n  --hue: 160; /* 268 indigo (default), 245 blue, 160 emerald, 70 amber, 10 rose … */\n}`} />

      <h2 id="radius">Roundness</h2>
      <p>
        Every corner derives from <code>--radius</code>. Set it to <code>0</code> for a sharp look, <code>0.75rem</code> for a soft one.
      </p>
      <CodeBlock lang="css" code={`:root {\n  --radius: 0.375rem;\n}`} />

      <h2 id="tokens">Semantic tokens</h2>
      <p>Components use meaning, not colours. Override any of these after importing the stylesheet:</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tokens.map(([name, label]) => (
          <div key={name}>
            <div className="dx-color" style={{ backgroundColor: `var(--${name})` }} />
            <p className="!mt-1.5 text-[0.8125rem] !leading-tight">
              <code>--{name}</code>
              <br />
              <span className="text-xs">{label}</span>
            </p>
          </div>
        ))}
      </div>
      <CodeBlock
        lang="css"
        code={`:root {
  --background: #fffdf8;
  --brand: oklch(0.6 0.2 40);
}

.dark {
  --background: #0c0a09;
}`}
      />

      <h2 id="tailwind">Tailwind utilities</h2>
      <p>
        With Tailwind CSS v4 the tokens become utilities automatically: <code>bg-background</code>, <code>bg-surface</code>, <code>text-muted-foreground</code>, <code>border-border</code>,{" "}
        <code>bg-brand</code>, <code>text-link</code>, <code>rounded-lg</code>, <code>shadow-md</code>. They follow the theme, so <code>dark:</code> variants are rarely needed.
      </p>
      <CodeBlock lang="tsx" code={`<div className="rounded-lg border border-border bg-surface p-4 text-muted-foreground shadow-sm">…</div>`} />

      <h2 id="override">Overriding a component</h2>
      <p>
        Component styles live in <code>@layer components</code>, so your own CSS and Tailwind utilities always win without <code>!important</code>:
      </p>
      <CodeBlock lang="tsx" code={`<Button className="rounded-full px-6">Pill button</Button>`} />
    </>
  );
}
