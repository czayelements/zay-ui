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
  ["card", "Cards, white on the canvas"],
  ["brand", "Filled actions"],
  ["ember", "The one accent, badges only"],
  ["brand-soft", "Tinted backgrounds"],
  ["destructive", "Errors"],
  ["success", "Positive"],
  ["warning", "Caution"],
  ["inverse", "Reversed panels"],
];

export default function Theming() {
  return (
    <>
      <h1>Theming</h1>
      <p className="dx-lead">Every colour, radius, shadow and size is a CSS variable. The kit is near-monochrome by default: zinc surfaces, ink-black actions and one ember accent.</p>

      <h2 id="accent">Colour</h2>
      <p>
        The page is a <code>#f4f4f5</code> canvas with white cards and <code>#ececee</code> hairlines. The primary action is ink black (<code>--brand</code>, near white in dark mode). The only vivid colour
        is <code>--ember</code> (<code>#ff5a00</code>), kept for small badges: <code>{'<Badge variant="ember">'}</code>. Re-colour the actions by overriding <code>--brand</code>.
      </p>
      <CodeBlock lang="css" code={`:root {\n  --brand: #1d4ed8;\n  --brand-hover: #1e40af;\n  --brand-foreground: #ffffff;\n}`} />

      <h2 id="radius">Roundness</h2>
      <p>
        Every corner derives from <code>--radius</code>. The default is <code>0.875rem</code> (buttons and inputs); cards use <code>--radius-card</code> (<code>2.25rem</code>) and badges <code>--radius-badge</code>. Set <code>--radius</code> to <code>0</code> for a sharp look.
      </p>
      <CodeBlock lang="css" code={`:root {\n  --radius: 0.5rem;\n}`} />

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
  --card: #ffffff;
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
