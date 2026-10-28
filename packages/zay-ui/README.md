# @czayelements/zay-ui

Accessible React components and ready-made blocks on [Base UI](https://base-ui.com), themable with one CSS variable. Works with or without Tailwind CSS v4.

**Docs and live examples: https://czayelements.github.io/zay-ui/**

## Install

```bash
pnpm add @czayelements/zay-ui
```

Requires React 18.2 or newer.

## Set up

Import the stylesheet once. With Tailwind CSS v4, after `tailwindcss`:

```css
@import "tailwindcss";
@import "@czayelements/zay-ui/styles.css";
```

Without Tailwind, import it from any CSS file or your entry point:

```ts
import "@czayelements/zay-ui/styles.css";
```

Then use the components and blocks:

```tsx
import { Button, Card, CardTitle } from "@czayelements/zay-ui";
import { Hero, PricingTable } from "@czayelements/zay-ui/blocks";
```

Mount `TooltipProvider` and `Toaster` once near the root if you use tooltips or toasts.

## Theme

```css
:root {
  --brand: #09090b;  /* filled actions (ink black; near white in dark) */
  --ember: #ff5a00;  /* the one vivid accent, for badges */
  --radius: 0.875rem; /* buttons and inputs; cards use --radius-card (2.25rem) */
}
```

Add the `dark` class to `<html>` for dark mode. Any semantic token (`--background`, `--brand`, `--border` …) can be overridden after importing the stylesheet.

## Entry points

| Import | What |
| --- | --- |
| `@czayelements/zay-ui` | Components and icons |
| `@czayelements/zay-ui/blocks` | Sections and pages |
| `@czayelements/zay-ui/styles.css` | Everything: tokens, base, components, blocks |
| `@czayelements/zay-ui/tokens.css`, `base.css`, `components.css`, `blocks.css`, `tailwind.css` | Pieces |

## License

MIT
