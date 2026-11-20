# Changelog

## Unreleased

Palette: **Obsidian Lime**.

- **Surfaces**: light canvas `#f4f4f2` with `#e4e4e0` hairlines; dark canvas `#0a0a0b`, cards `#131315`, hairlines `#26262a`. Ink is `#0a0a0b` / `#f4f4f5`.
- **Accent**: `--ember` is now lime (`#c8e64c`) with dark text (`--ember-foreground: #0a0a0b`). It is a fill only; it fails as text on light surfaces.
- **New tokens**: `--accent-ink` (accent as text: `#4d6b00` on light, lime on dark) and `--accent-edge` (`#a9c42e`, hairline around lime fills on light). Tailwind: `text-accent-ink`, `border-accent-edge`, `bg-ember`.
- **Contrast**: subtle text is `#66666e` on light and `#86868f` on dark (both ≥ 5:1 on their canvas).

## 0.1.0-alpha.4

- The default font stack no longer lists the commercial "Cosmica" (it was never bundled): DM Sans, then the system fonts.

## 0.1.0-alpha.3

Visual redesign: a quieter, near-monochrome look.

- **Palette**: zinc scale with a `#f4f4f5` canvas, white cards and `#ececee` hairlines. The primary action is now ink black (`#09090b`; `#fafafa` in dark). `--hue` is removed.
- **Ember**: one vivid color, `--ember` (`#ff5a00`), for small badges only (`Badge variant="ember"`).
- **Shape**: cards 36px, buttons and inputs 14px, badges 12px, new `pill` prop on `Button`. Cards carry no shadow.
- **Buttons**: dark primary with a lit top edge and a 1.5px ring.
- **Card**: new `tone="dark"`.
- **Font**: DM Sans replaces the previous default.

## 0.1.0-alpha.1

First public alpha.

- **Design language**: neutral surfaces, hairline borders, layered soft shadows, spring easing. One accent controlled by `--hue`, one corner scale controlled by `--radius`, light and dark themes.
- **47 components** on Base UI: Button, Button group, Toggle, Toggle group, Kbd, Spinner, Input, Input group, Textarea, Field, Checkbox, Radio group, Switch, Slider, Number field, OTP field, Select, Combobox, Dialog, Alert dialog, Drawer, Popover, Hover card, Tooltip, Menu, Context menu, Command palette, Toast, Tabs, Accordion, Collapsible, Breadcrumb, Pagination, Navigation menu, Card, Badge, Avatar, Alert, Progress, Meter, Skeleton, Separator, Table, Scroll area, Empty, Stat, Icon box.
- **18 blocks**: Landing page, Dashboard, Settings page, Not found, Announcement bar, Navbar, Hero, Logo cloud, Features, Stats, Testimonials, Pricing, FAQ, Call to action and Newsletter, Footer, Sign in, Sign up, Verify code.
- **Documentation site** with live examples and source for every component, an iframe preview with a viewport switcher for blocks, a ⌘K search built with the library's own command palette, and a live accent picker.
