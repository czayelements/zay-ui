import type { Metadata } from "next";
import Link from "next/link";

import { Alert } from "@czayelements/zay-ui";

import { CodeBlock } from "@/components/code-block";
import { components } from "@/lib/entries";

export const metadata: Metadata = { title: "Introduction" };

export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>
      <p className="dx-lead">
        zay-ui is a set of accessible React components and ready-made page blocks, built on <a href="https://base-ui.com">Base UI</a> and styled with plain CSS.
        It works with or without Tailwind CSS, themes with a single variable, and is MIT licensed.
      </p>

      <Alert tone="info" title="Alpha">
        zay-ui is under active development. APIs can still change between 0.x releases.
      </Alert>

      <h2 id="what-you-get">What you get</h2>
      <ul>
        <li>
          <strong>{components.length} components</strong>: buttons and forms, dialogs, drawers, menus, command palette, toasts, tabs, tables and more. Interactive ones are Base UI
          underneath, so focus management, keyboard support and aria are handled.
        </li>
        <li>
          <strong>Blocks</strong>: complete sections and pages (heroes, pricing, dashboards, auth, settings) you can drop in and edit.
        </li>
        <li>
          <strong>Quiet by design</strong>: zinc surfaces, ink-black actions and a single ember accent for badges. Light and dark are built in.
        </li>
        <li>
          <strong>Plain CSS under React</strong>: components print <code>zay-</code> classes, so the same look works in HTML, other frameworks, or on a link.
        </li>
      </ul>

      <h2 id="how-it-works">How it works</h2>
      <p>
        Install the package, import one stylesheet, and use the components. Server components stay server components: static parts such as <code>Button</code>, <code>Card</code> and{" "}
        <code>Badge</code> have no client code, only the interactive ones carry <code>&quot;use client&quot;</code>.
      </p>
      <CodeBlock
        lang="tsx"
        code={`import { Button, Card, CardTitle } from "@czayelements/zay-ui";

export default function Page() {
  return (
    <Card>
      <CardTitle>Hello</CardTitle>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}`}
      />

      <h2 id="next-steps">Next steps</h2>
      <div className="dx-card-grid">
        <Link className="dx-index-card" href="/docs/installation/">
          <strong>Installation</strong>
          <span>Install the package and the stylesheet.</span>
        </Link>
        <Link className="dx-index-card" href="/docs/theming/">
          <strong>Theming</strong>
          <span>Re-colour everything with one variable.</span>
        </Link>
        <Link className="dx-index-card" href="/docs/components/">
          <strong>Components</strong>
          <span>Browse every component with live examples.</span>
        </Link>
        <Link className="dx-index-card" href="/docs/blocks/">
          <strong>Blocks</strong>
          <span>Copy complete sections and pages.</span>
        </Link>
      </div>
    </>
  );
}
