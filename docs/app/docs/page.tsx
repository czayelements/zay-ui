import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting started" };

const code = (s: string) => (
  <pre className="docs-code" style={{ borderTop: "1px solid var(--border)", borderRadius: "var(--radius-lg)", marginTop: "1rem" }}>
    <code>{s.trim()}</code>
  </pre>
);

export default function GettingStarted() {
  return (
    <>
      <h1>Getting started</h1>
      <p>
        czay-ui is a calm, tonal design system for React: design tokens as CSS variables, accessible components built on{" "}
        <a href="https://base-ui.com" className="text-link underline underline-offset-4">Base UI</a>, and ready-made page blocks. Tailwind CSS v4 is
        optional; it only adds utilities mapped to the tokens.
      </p>

      <h2>Install</h2>
      {code(`npm install @czayelements/czay-ui@alpha`)}
      <p>React 18.2 or newer is required. The package is in alpha: expect small breaking changes until 0.1 is final.</p>

      <h2>Import the styles once</h2>
      <p>With Tailwind CSS v4, in your global stylesheet:</p>
      {code(`@import "tailwindcss";
@import "@czayelements/czay-ui/styles.css";`)}
      <p>Without Tailwind, import the plain CSS files instead (tokens, base layer, components, blocks):</p>
      {code(`@import "@czayelements/czay-ui/tokens.css";
@import "@czayelements/czay-ui/base.css";
@import "@czayelements/czay-ui/components.css";
@import "@czayelements/czay-ui/blocks.css";`)}
      <p>
        Fonts come from your app: define <code>--font-sans</code>, <code>--font-display</code> and <code>--font-mono</code> (with <code>next/font</code>,
        its <code>variable</code> option does exactly that). Without them the system font stack is used.
      </p>

      <h2>Use components</h2>
      {code(`import { Button, Card, CardTitle, Dialog, DialogTrigger, DialogContent } from "@czayelements/czay-ui";
import { Hero, FeatureGrid } from "@czayelements/czay-ui/blocks";`)}
      <p>
        Static components (Button, Card, Badge …) have no hooks and work in server components. Interactive ones (Dialog, Menu, Tabs …) carry{" "}
        <code>&quot;use client&quot;</code>. Every component accepts <code>className</code> and the props of the element it renders.
      </p>

      <h2>Plain CSS classes</h2>
      <p>
        Each component is a <code>zay-</code> class, so the same look works without React: <code>class=&quot;zay-btn zay-btn-primary&quot;</code>. Everything is in{" "}
        <code>@layer components</code>, so your utilities and CSS always win.
      </p>

      <h2>Dark mode</h2>
      <p>
        Add the <code>dark</code> class (or <code>data-theme=&quot;dark&quot;</code>) to <code>&lt;html&gt;</code>. With <code>next-themes</code> use{" "}
        <code>attribute=&quot;class&quot;</code>. For a layout without flashes, set the class before first paint (see this site&apos;s layout).
      </p>

      <h2>Portals</h2>
      <p>
        Popups render in a portal. The base layer already makes <code>body</code> a positioned element; if you use your own root wrapper, give it{" "}
        <code>isolation: isolate</code> so popups always stack above the page.
      </p>
    </>
  );
}
