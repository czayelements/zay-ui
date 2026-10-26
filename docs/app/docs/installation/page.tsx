import type { Metadata } from "next";

import { Alert } from "@czayelements/zay-ui";

import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";

export const metadata: Metadata = { title: "Installation" };

export default function Installation() {
  return (
    <>
      <h1>Installation</h1>
      <p className="dx-lead">Add the package, import the stylesheet once, and you are ready to build.</p>

      <h2 id="install">1. Install the package</h2>
      <InstallTabs pkg="@czayelements/zay-ui" />
      <p>
        React 18.2 or newer is required. The package depends on <code>@base-ui/react</code> and <code>clsx</code>, which are installed with it.
      </p>

      <h2 id="styles">2. Import the styles</h2>
      <p>
        <strong>With Tailwind CSS v4</strong>, add the import to your global stylesheet, after <code>tailwindcss</code>. This also gives you utilities such as <code>bg-background</code>,{" "}
        <code>text-muted-foreground</code> and <code>border-border</code>.
      </p>
      <CodeBlock lang="css" title="app/globals.css" code={`@import "tailwindcss";\n@import "@czayelements/zay-ui/styles.css";`} />
      <p>
        <strong>Without Tailwind</strong>, import the same file from your entry point or any CSS file. Nothing else is needed.
      </p>
      <CodeBlock lang="tsx" title="app/layout.tsx" code={`import "@czayelements/zay-ui/styles.css";`} />

      <h2 id="fonts">3. Add a font (optional)</h2>
      <p>
        zay-ui is designed for <a href="https://rsms.me/inter/">Inter</a> and falls back to the system font. With Next.js:
      </p>
      <CodeBlock
        lang="tsx"
        title="app/layout.tsx"
        code={`import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}`}
      />
      <CodeBlock lang="css" code={`:root {\n  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;\n}`} />

      <h2 id="providers">4. Add the providers</h2>
      <p>
        Tooltips share their delays through <code>TooltipProvider</code>, and toasts need <code>Toaster</code>. Both are optional until you use those components. Mount them once near the root, in a
        client component:
      </p>
      <CodeBlock
        lang="tsx"
        title="components/providers.tsx"
        code={`"use client";

import { Toaster, TooltipProvider } from "@czayelements/zay-ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster>{children}</Toaster>
    </TooltipProvider>
  );
}`}
      />

      <h2 id="use">5. Use a component</h2>
      <CodeBlock
        lang="tsx"
        code={`import { Button } from "@czayelements/zay-ui";

export default function Page() {
  return <Button variant="primary">Hello, zay-ui</Button>;
}`}
      />

      <Alert tone="info" title="Using Next.js?">
        Interactive components (Dialog, Menu, Tabs …) include <code>&quot;use client&quot;</code> themselves, so you can import them from a server component. Only the code that holds state needs to be a client
        component.
      </Alert>

      <h2 id="plain-css">Using without Tailwind</h2>
      <p>
        Components are plain classes, so you do not need Tailwind at all. If you also want the tokens as CSS variables only, import <code>@czayelements/zay-ui/tokens.css</code>; to pick pieces,
        import <code>base.css</code>, <code>components.css</code> or <code>blocks.css</code> separately.
      </p>
    </>
  );
}
