import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = { title: "Dark mode" };

export default function DarkMode() {
  return (
    <>
      <h1>Dark mode</h1>
      <p className="dx-lead">Add the <code>dark</code> class (or <code>data-theme=&quot;dark&quot;</code>) to <code>&lt;html&gt;</code>. The tokens do the rest.</p>

      <h2 id="class">Toggle with a class</h2>
      <p>The dark palette redefines the same variable names, so nothing in your components changes.</p>
      <CodeBlock lang="tsx" code={`document.documentElement.classList.toggle("dark");`} />

      <h2 id="no-flash">Avoid a flash on load</h2>
      <p>Set the class before first paint with a tiny inline script in the document head:</p>
      <CodeBlock
        lang="tsx"
        title="app/layout.tsx"
        code={`const themeScript = \`try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}\`;

<html lang="en" suppressHydrationWarning>
  <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
  <body>{children}</body>
</html>`}
      />

      <h2 id="always-dark">An always-dark section</h2>
      <p>
        Add <code>zay-dark</code> to any element to render it in the dark palette regardless of the page theme, for a closing call to action or a code panel:
      </p>
      <CodeBlock lang="tsx" code={`<section className="zay-dark rounded-xl bg-background p-8">…</section>`} />

      <h2 id="tailwind">Tailwind&apos;s dark variant</h2>
      <p>
        <code>styles.css</code> registers the <code>dark:</code> variant against the same class, so <code>dark:bg-black</code> works alongside the tokens.
      </p>
    </>
  );
}
