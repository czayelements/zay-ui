# zay-ui

Accessible React components and ready-made blocks on [Base UI](https://base-ui.com), themable with one CSS variable. Works with or without Tailwind CSS v4. MIT licensed.

**Docs and live examples: https://czayelements.github.io/zay-ui/**

```bash
pnpm add @czayelements/zay-ui
```

```css
/* app/globals.css */
@import "tailwindcss";
@import "@czayelements/zay-ui/styles.css";
```

```tsx
import { Button } from "@czayelements/zay-ui";

export default function Page() {
  return <Button variant="primary">Hello, zay-ui</Button>;
}
```

## What is inside

- **47 components**: buttons and forms, dialogs, drawers, menus, command palette, toasts, tabs, tables and more. The interactive ones are Base UI underneath, so focus, keyboard and aria are handled.
- **18 blocks**: a landing page, a dashboard, settings, authentication, pricing, FAQ, footer and more, to copy and edit.
- **One variable to re-colour everything**: `:root { --hue: 160 }`. Light and dark are built in.
- **Plain CSS under React**: components print `zay-` classes, so the same look works without React or Tailwind, and your own utilities always win (everything is in `@layer components`).
- **Server-component friendly**: static components have no client code.

## Repository

| Path | What |
| --- | --- |
| `packages/zay-ui` | The npm package `@czayelements/zay-ui` |
| `docs` | The documentation site (Next.js static export, deployed to GitHub Pages) |

```bash
pnpm install
pnpm dev:docs        # http://localhost:3200
pnpm build           # build the package
pnpm typecheck
```

## License

MIT © Furkan Özay
