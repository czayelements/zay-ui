import Link from "next/link";

import {
  ArrowRightIcon, Badge, Button, buttonClass, CodeIcon, IconBox, LayersIcon, LockIcon, PaletteIcon, SparklesIcon, ZapIcon,
} from "@czayelements/zay-ui";

import { CopyButton } from "@/components/copy-button";
import { Showcase } from "@/components/showcase";
import { SiteHeader } from "@/components/site-header";
import { categories, components } from "@/lib/entries";

const features = [
  { icon: <LockIcon />, title: "Accessible by default", text: "Dialogs, menus, selects and tabs are Base UI primitives: focus management, keyboard support and aria handled." },
  { icon: <PaletteIcon />, title: "One variable to theme", text: "Change --hue and the whole system follows: buttons, focus rings, links and soft backgrounds, light and dark." },
  { icon: <CodeIcon />, title: "Plain CSS, any stack", text: "Components are zay- classes. Works with Tailwind v4, without it, or on a plain link." },
  { icon: <ZapIcon />, title: "Server-component friendly", text: "Static parts carry no client code. Only interactive components ship JavaScript." },
  { icon: <LayersIcon />, title: "Blocks, not just parts", text: "Complete sections and pages to start from: heroes, pricing, dashboards, auth and settings." },
  { icon: <SparklesIcon />, title: "Polished details", text: "Layered shadows, spring easing, press feedback and reduced-motion support throughout." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <section className="dx-hero">
        <div className="zay-container pt-20 pb-16 text-center lg:pt-28">
          <Badge variant="brand" label="Alpha" className="mx-auto">
            Open source · MIT
          </Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.5rem,1.4rem+4.6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.045em]">
            Interfaces that feel <span className="dx-gradient-text">finished</span>, from day one.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Accessible React components and ready-made blocks on Base UI. Re-colour everything with one variable, in light and dark.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link className={buttonClass({ variant: "primary", size: "lg" })} href="/docs/installation/">
              Get started <ArrowRightIcon />
            </Link>
            <Link className={buttonClass({ size: "lg" })} href="/docs/components/">
              Browse components
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="dx-install">
              <span className="dx-prompt">$</span>
              <span>pnpm add @czayelements/zay-ui</span>
              <CopyButton text="pnpm add @czayelements/zay-ui" />
            </div>
          </div>
        </div>
        <div className="zay-container pb-20">
          <Showcase />
        </div>
      </section>

      <section className="zay-container zay-section">
        <h2 className="text-center text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold tracking-[-0.035em]">Everything you need to ship</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">A small system with strong defaults, built to be read in an afternoon and bent to your brand in a minute.</p>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <IconBox solid>{f.icon}</IconBox>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="zay-band">
        <div className="zay-container zay-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold tracking-[-0.035em]">{components.length} components</h2>
              <p className="mt-2 text-muted-foreground">Every one with live examples, copyable code and an API reference.</p>
            </div>
            <Link className={buttonClass({})} href="/docs/components/">
              View all <ArrowRightIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold">{category}</h3>
                <ul className="mt-3 grid gap-1.5">
                  {components
                    .filter((c) => c.category === category)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link className="text-sm text-muted-foreground transition-colors hover:text-foreground" href={`/docs/components/${c.slug}/`}>
                          {c.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zay-container zay-section text-center">
        <h2 className="text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold tracking-[-0.035em]">Start building</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Install the package, import one stylesheet, ship your first screen today.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link className={buttonClass({ variant: "brand", size: "lg" })} href="/docs/installation/">
            Get started <ArrowRightIcon />
          </Link>
          <a className={buttonClass({ size: "lg" })} href="https://github.com/czayelements/zay-ui">
            Star on GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="zay-container flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-muted-foreground">
          <span>zay-ui · MIT licensed · built on Base UI</span>
          <span>
            Made by <a className="text-foreground underline underline-offset-4" href="https://github.com/czaydev">czaydev</a>
          </span>
        </div>
      </footer>
    </>
  );
}
