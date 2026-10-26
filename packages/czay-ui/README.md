# czay-ui

> **Under development.** czay-ui is in alpha: expect small breaking changes until 0.1 is final.

A calm, tonal design system for React, built on [Base UI](https://base-ui.com): design tokens as CSS variables, accessible components and ready-made page blocks. Tailwind CSS v4 is optional.

- **Accessible by construction**: Dialog, Popover, Tooltip, Menu, Select, Tabs, Accordion, Checkbox, Switch, Progress and Field are Base UI components (focus management, keyboard, aria).
- **Tokens, not magic numbers**: colour, radius, shadow and type are CSS custom properties. Override a few to re-theme everything; dark mode included.
- **Plain CSS under React**: every component is a `zay-` class (`zay-btn zay-btn-primary`), so the same look works in plain HTML or another framework. Everything is in `@layer components`, so your CSS and utilities win.
- **Server-component friendly**: static components have no hooks; interactive ones carry `"use client"`.
- **Blocks**: Hero, PageHeader, FeatureGrid, Stats, CtaPanel, Testimonial, StatusPage, EmptyState, AnnouncementBar, Faq, Footer.

## Install

```sh
npm install @czayelements/czay-ui@alpha
```

Requires React 18.2+. Import the styles once, after Tailwind:

```css
@import "tailwindcss";
@import "@czayelements/czay-ui/styles.css";
```

Without Tailwind, import the plain CSS: `tokens.css`, `base.css`, `components.css`, `blocks.css` (all under `@czayelements/czay-ui/`).

Fonts come from your app: define `--font-sans`, `--font-display` and `--font-mono` (with `next/font`, its `variable` option does this). The system font stack is the fallback.

## Use

```tsx
import { Button, Card, CardHeader, CardTitle, Dialog, DialogTrigger, DialogContent, DialogTitle } from "@czayelements/czay-ui";
import { Hero, FeatureGrid } from "@czayelements/czay-ui/blocks";

<Dialog>
  <DialogTrigger render={<Button variant="primary" />}>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Hello</DialogTitle>
  </DialogContent>
</Dialog>;
```

Give a link the look of a button with `buttonClass()`:

```tsx
<a href="/start" className={buttonClass({ variant: "brand", size: "lg" })}>Get started</a>
```

## Theming

Override semantic tokens after the import:

```css
:root {
  --brand: #f5c26b;
  --brand-foreground: #1b1d1b;
  --link: #8a5a00;
}
.dark {
  --link: #f0c27a;
}
```

Dark mode: add the `dark` class (or `data-theme="dark"`) to `<html>`; with `next-themes` use `attribute="class"`.

## Conventions

No card inside a card, no small uppercase kicker above a heading, one saturated colour at a time (accent only for action, links and focus), no pill buttons (full rounding is for badges).

## License

MIT
