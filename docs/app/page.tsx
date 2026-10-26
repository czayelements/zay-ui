import Link from "next/link";

import { Badge, Button, buttonClass, Card, CardDescription, CardTitle } from "@czayelements/czay-ui";
import { CtaPanel, FeatureGrid, Footer, Hero, SectionHeading, Stats } from "@czayelements/czay-ui/blocks";

import { SiteHeader } from "@/components/site-header";
import { blocks, components } from "@/lib/registry";

const Dot = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 2v2M8 12v2M2 8h2M12 8h2" />
  </svg>
);

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero
        centered
        badge={<Badge label="Alpha">Under development</Badge>}
        title="Calm interfaces, built fast"
        lead="Design tokens, accessible components on Base UI and ready-made page blocks for React. Tailwind CSS v4 optional, MIT licensed."
        actions={
          <>
            <Link className={buttonClass({ variant: "brand", size: "lg" })} href="/docs/">
              Get started
            </Link>
            <Link className={buttonClass({ size: "lg" })} href="/docs/components/button/">
              Browse components
            </Link>
          </>
        }
      />

      <section className="zay-container pb-16">
        <Stats
          items={[
            { value: String(components.length), label: "Component pages" },
            { value: String(blocks.length), label: "Page blocks" },
            { value: "Base UI", label: "Accessible primitives under the hood" },
          ]}
        />
      </section>

      <section className="zay-container zay-section">
        <SectionHeading title="Small on purpose" description="A system you can read in an afternoon and bend to your brand with a handful of variables." />
        <FeatureGrid
          items={[
            { icon: <Dot />, title: "Accessible by construction", description: "Dialogs, menus, tabs, selects and fields are Base UI components: focus management, keyboard and aria are not an afterthought." },
            { icon: <Dot />, title: "Tokens, not magic numbers", description: "Colour, radius, shadow and type live in CSS variables. Override a few to re-theme everything, dark mode included." },
            { icon: <Dot />, title: "Plain CSS under React", description: "Every component is a zay- class. The same look works in HTML, in other frameworks, on a link. Your utilities always win." },
            { icon: <Dot />, title: "Server-component friendly", description: "Static components have no hooks; only the interactive ones are client components." },
            { icon: <Dot />, title: "Blocks for whole pages", description: "Hero, feature grid, stats, FAQ, footer, status pages: compose a page from sections that already look right together." },
            { icon: <Dot />, title: "Calm by design", description: "Warm paper, hairline borders, one sage accent. Colour is a signal for action, never decoration." },
          ]}
        />
      </section>

      <section className="zay-band zay-section">
        <div className="zay-container grid items-start gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Compose, don't configure" description="Parts you can assemble, with sensible defaults." />
            <Link className={buttonClass({ variant: "primary" })} href="/docs/components/dialog/">
              See the Dialog
            </Link>
          </div>
          <Card tone="raised" padding="lg">
            <CardTitle>Everything has a class</CardTitle>
            <CardDescription>
              <code>zay-btn zay-btn-primary</code> works in plain HTML too.
            </CardDescription>
            <div className="mt-5 flex gap-2">
              <Button variant="primary">Primary</Button>
              <Button>Outline</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="zay-container zay-section">
        <CtaPanel
          title="Try it in five minutes"
          description="Install the package, import one stylesheet, and you have tokens, components and blocks."
          actions={
            <Link className={buttonClass({ variant: "primary" })} href="/docs/">
              Read the guide
            </Link>
          }
        />
      </section>

      <Footer
        brand={<strong className="font-display text-lg">czay-ui</strong>}
        description="A calm design system for React, built on Base UI. MIT licensed."
        columns={[
          { title: "Docs", links: [{ label: "Getting started", href: `${base}/docs/` }] },
          { title: "Project", links: [{ label: "GitHub", href: "https://github.com/czayelements/zay-ui" }, { label: "npm", href: "https://www.npmjs.com/package/@czayelements/czay-ui" }] },
        ]}
        bottom={<span>© {new Date().getFullYear()} Furkan Özay</span>}
      />
    </>
  );
}
