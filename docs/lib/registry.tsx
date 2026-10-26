import type { ReactNode } from "react";

import {
  Accordion, AccordionItem, AccordionPanel, AccordionTrigger,
  Badge, Button, Callout, Card, CardDescription, CardFooter, CardHeader, CardTitle,
  Checkbox, Dialog, DialogActions, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger,
  Field, FieldControl, FieldDescription, FieldError, FieldLabel,
  IconBox, Input, Kbd, Label,
  Menu, MenuContent, MenuItem, MenuLabel, MenuGroup, MenuSeparator, MenuTrigger,
  Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger,
  Progress, Select, SelectContent, SelectItem, SelectTrigger, Separator, Skeleton, Switch, Tabs, TabsList, TabsPanel, TabsTab,
  Tag, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buttonClass,
} from "@czayelements/czay-ui";
import {
  AnnouncementBar, CtaPanel, EmptyState, Faq, FeatureGrid, Footer, Hero, PageHeader, SectionHeading, Stats, StatusPage, Testimonial,
} from "@czayelements/czay-ui/blocks";

export type DemoEntry = { code: string; node: ReactNode; block?: boolean };
export type Entry = { slug: string; title: string; description: string; demos: DemoEntry[]; notes?: string[] };

const Spark = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 2v3M8 11v3M2 8h3M11 8h3M4 4l2 2M10 10l2 2M12 4l-2 2M6 10l-2 2" />
  </svg>
);

export const components: Entry[] = [
  {
    slug: "button",
    title: "Button",
    description: "Variants for importance, three sizes, an icon-only form, and buttonClass() to give a link the same look.",
    demos: [
      {
        code: `<Button variant="primary">Primary</Button>
<Button variant="brand">Brand</Button>
<Button>Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link</Button>`,
        node: (
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="brand">Brand</Button>
            <Button>Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="link">Link</Button>
          </>
        ),
      },
      {
        code: `<Button size="sm">Small</Button>
<Button>Medium</Button>
<Button size="lg" variant="brand">Large</Button>
<Button icon aria-label="Sparkle"><Spark /></Button>
<a href="#" className={buttonClass({ variant: "primary" })}>A link</a>`,
        node: (
          <>
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg" variant="brand">Large</Button>
            <Button icon aria-label="Sparkle"><Spark /></Button>
            <a href="#" className={buttonClass({ variant: "primary" })}>A link</a>
          </>
        ),
      },
    ],
    notes: ["`variant=\"brand\"` is the conversion button: use it once per page.", "The button type defaults to `button`, so it never submits a form by accident."],
  },
  {
    slug: "card",
    title: "Card",
    description: "A surface with a hairline border. Compose it from CardHeader, CardTitle, CardDescription and CardFooter, or use only what you need.",
    demos: [
      {
        code: `<Card>
  <CardHeader>
    <CardTitle>Plan</CardTitle>
    <CardDescription>Everything you need to start.</CardDescription>
  </CardHeader>
  <CardFooter><Button variant="primary" size="sm">Choose</Button></CardFooter>
</Card>`,
        node: (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Plan</CardTitle>
              <CardDescription>Everything you need to start.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="primary" size="sm">Choose</Button>
            </CardFooter>
          </Card>
        ),
      },
      {
        code: `<Card tone="raised" padding="lg">Raised</Card>
<Card tone="paper" interactive>Interactive</Card>`,
        node: (
          <>
            <Card tone="raised" padding="lg">Raised</Card>
            <Card tone="paper" interactive>Interactive</Card>
          </>
        ),
      },
    ],
    notes: ["Do not nest a card in a card. For a recessed block inside a card use a plain tinted `div`."],
  },
  {
    slug: "badge",
    title: "Badge, Tag, IconBox, Kbd",
    description: "Small marks: a pill with an optional label chip, a topic tag, an icon plate and a keyboard key.",
    demos: [
      {
        code: `<Badge label="New">Dialogs are here</Badge>
<Tag>TypeScript</Tag>
<IconBox><Spark /></IconBox>
<IconBox solid size="lg"><Spark /></IconBox>
<Kbd>⌘K</Kbd>`,
        node: (
          <>
            <Badge label="New">Dialogs are here</Badge>
            <Tag>TypeScript</Tag>
            <IconBox><Spark /></IconBox>
            <IconBox solid size="lg"><Spark /></IconBox>
            <Kbd>⌘K</Kbd>
          </>
        ),
      },
    ],
  },
  {
    slug: "input",
    title: "Input, Textarea, Label",
    description: "Plain form controls. For labels, descriptions and validation wired together, use Field.",
    demos: [
      {
        code: `<div className="grid w-full max-w-sm gap-3">
  <div className="zay-field"><Label htmlFor="n">Name</Label><Input id="n" placeholder="Ada Lovelace" /></div>
  <div className="zay-field"><Label htmlFor="m">Message</Label><Textarea id="m" /></div>
  <Input aria-invalid placeholder="Invalid" />
</div>`,
        node: (
          <div className="grid w-full max-w-sm gap-3">
            <div className="zay-field"><Label htmlFor="n">Name</Label><Input id="n" placeholder="Ada Lovelace" /></div>
            <div className="zay-field"><Label htmlFor="m">Message</Label><Textarea id="m" /></div>
            <Input aria-invalid placeholder="Invalid" />
          </div>
        ),
      },
    ],
  },
  {
    slug: "field",
    title: "Field",
    description: "Label, control, description and error message wired together with correct aria attributes and native validation (Base UI Field).",
    demos: [
      {
        code: `<Field name="email" className="w-full max-w-sm">
  <FieldLabel>Email</FieldLabel>
  <FieldControl type="email" required placeholder="you@example.com" />
  <FieldDescription>We never share it.</FieldDescription>
  <FieldError match="valueMissing">Please enter your email.</FieldError>
</Field>`,
        node: (
          <Field name="email" className="w-full max-w-sm">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" required placeholder="you@example.com" />
            <FieldDescription>We never share it.</FieldDescription>
            <FieldError match="valueMissing">Please enter your email.</FieldError>
          </Field>
        ),
      },
    ],
  },
  {
    slug: "checkbox-switch",
    title: "Checkbox and Switch",
    description: "Boolean controls built on Base UI: keyboard, form participation and indeterminate state included.",
    demos: [
      {
        code: `<label className="flex items-center gap-2"><Checkbox defaultChecked /> Subscribe</label>
<label className="flex items-center gap-2"><Checkbox indeterminate /> Some selected</label>
<label className="flex items-center gap-2"><Switch defaultChecked /> Notifications</label>`,
        node: (
          <>
            <label className="flex items-center gap-2"><Checkbox defaultChecked /> Subscribe</label>
            <label className="flex items-center gap-2"><Checkbox indeterminate /> Some selected</label>
            <label className="flex items-center gap-2"><Switch defaultChecked /> Notifications</label>
          </>
        ),
      },
    ],
  },
  {
    slug: "select",
    title: "Select",
    description: "A custom select with keyboard typeahead and a proper listbox. Pass `items` so the trigger can show the label.",
    demos: [
      {
        code: `const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
  { label: "Plum", value: "plum" },
];

<Select items={fruits}>
  <SelectTrigger placeholder="Pick a fruit" className="w-56" />
  <SelectContent>
    {fruits.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
  </SelectContent>
</Select>`,
        node: (
          <Select items={[{ label: "Apple", value: "apple" }, { label: "Pear", value: "pear" }, { label: "Plum", value: "plum" }]}>
            <SelectTrigger placeholder="Pick a fruit" className="w-56" />
            <SelectContent>
              {[["Apple", "apple"], ["Pear", "pear"], ["Plum", "plum"]].map(([label, value]) => (
                <SelectItem key={value} value={value!}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        ),
      },
    ],
  },
  {
    slug: "dialog",
    title: "Dialog",
    description: "A modal dialog with focus trap, Escape to close, scroll lock and aria wiring (Base UI Dialog).",
    demos: [
      {
        code: `<Dialog>
  <DialogTrigger render={<Button variant="primary" />}>Open dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Delete project?</DialogTitle>
    <DialogDescription>This cannot be undone.</DialogDescription>
    <DialogActions>
      <DialogClose render={<Button />}>Cancel</DialogClose>
      <DialogClose render={<Button variant="destructive" />}>Delete</DialogClose>
    </DialogActions>
  </DialogContent>
</Dialog>`,
        node: (
          <Dialog>
            <DialogTrigger render={<Button variant="primary" />}>Open dialog</DialogTrigger>
            <DialogContent>
              <DialogTitle>Delete project?</DialogTitle>
              <DialogDescription>This cannot be undone.</DialogDescription>
              <DialogActions>
                <DialogClose render={<Button />}>Cancel</DialogClose>
                <DialogClose render={<Button variant="destructive" />}>Delete</DialogClose>
              </DialogActions>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
  },
  {
    slug: "popover",
    title: "Popover",
    description: "A floating panel anchored to a trigger, positioned and flipped automatically.",
    demos: [
      {
        code: `<Popover>
  <PopoverTrigger render={<Button />}>Details</PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Build 128</PopoverTitle>
    <PopoverDescription>Deployed 3 minutes ago.</PopoverDescription>
  </PopoverContent>
</Popover>`,
        node: (
          <Popover>
            <PopoverTrigger render={<Button />}>Details</PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>Build 128</PopoverTitle>
              <PopoverDescription>Deployed 3 minutes ago.</PopoverDescription>
            </PopoverContent>
          </Popover>
        ),
      },
    ],
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    description: "A short label on hover and focus. Wrap the app once in TooltipProvider so tooltips share delays.",
    demos: [
      {
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button icon aria-label="Sparkle" />}><Spark /></TooltipTrigger>
    <TooltipContent>Make it sparkle</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
        node: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger render={<Button icon aria-label="Sparkle" />}><Spark /></TooltipTrigger>
              <TooltipContent>Make it sparkle</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      },
    ],
  },
  {
    slug: "menu",
    title: "Menu",
    description: "A dropdown menu with arrow-key navigation, typeahead and groups.",
    demos: [
      {
        code: `<Menu>
  <MenuTrigger render={<Button />}>Actions</MenuTrigger>
  <MenuContent>
    <MenuGroup>
      <MenuLabel>Project</MenuLabel>
      <MenuItem>Rename</MenuItem>
      <MenuItem>Duplicate</MenuItem>
    </MenuGroup>
    <MenuSeparator />
    <MenuItem destructive>Delete</MenuItem>
  </MenuContent>
</Menu>`,
        node: (
          <Menu>
            <MenuTrigger render={<Button />}>Actions</MenuTrigger>
            <MenuContent>
              <MenuGroup>
                <MenuLabel>Project</MenuLabel>
                <MenuItem>Rename</MenuItem>
                <MenuItem>Duplicate</MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem destructive>Delete</MenuItem>
            </MenuContent>
          </Menu>
        ),
      },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Tabs with a sliding underline, arrow-key navigation and aria roles.",
    demos: [
      {
        code: `<Tabs defaultValue="a" className="w-full">
  <TabsList>
    <TabsTab value="a">Overview</TabsTab>
    <TabsTab value="b">Usage</TabsTab>
    <TabsTab value="c">API</TabsTab>
  </TabsList>
  <TabsPanel value="a">The overview.</TabsPanel>
  <TabsPanel value="b">How to use it.</TabsPanel>
  <TabsPanel value="c">The API.</TabsPanel>
</Tabs>`,
        node: (
          <Tabs defaultValue="a" className="w-full">
            <TabsList>
              <TabsTab value="a">Overview</TabsTab>
              <TabsTab value="b">Usage</TabsTab>
              <TabsTab value="c">API</TabsTab>
            </TabsList>
            <TabsPanel value="a">The overview.</TabsPanel>
            <TabsPanel value="b">How to use it.</TabsPanel>
            <TabsPanel value="c">The API.</TabsPanel>
          </Tabs>
        ),
      },
    ],
  },
  {
    slug: "accordion",
    title: "Accordion",
    description: "Collapsible sections with an animated height. `multiple` lets several stay open.",
    demos: [
      {
        code: `<Accordion className="w-full">
  <AccordionItem value="1">
    <AccordionTrigger>What is czay-ui?</AccordionTrigger>
    <AccordionPanel>A calm design system on Base UI.</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Does it need Tailwind?</AccordionTrigger>
    <AccordionPanel>No. Tailwind only adds utilities.</AccordionPanel>
  </AccordionItem>
</Accordion>`,
        node: (
          <Accordion className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>What is czay-ui?</AccordionTrigger>
              <AccordionPanel>A calm design system on Base UI.</AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Does it need Tailwind?</AccordionTrigger>
              <AccordionPanel>No. Tailwind only adds utilities.</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ),
      },
    ],
  },
  {
    slug: "feedback",
    title: "Callout, Progress, Skeleton, Separator",
    description: "Notes, progress, loading placeholders and dividers.",
    demos: [
      {
        code: `<Callout title="Heads up">A note with context.</Callout>
<Callout tone="success">Saved.</Callout>
<Callout tone="warning">Check this first.</Callout>
<Callout tone="danger">Something failed.</Callout>`,
        node: (
          <div className="grid w-full gap-3">
            <Callout title="Heads up">A note with context.</Callout>
            <Callout tone="success">Saved.</Callout>
            <Callout tone="warning">Check this first.</Callout>
            <Callout tone="danger">Something failed.</Callout>
          </div>
        ),
      },
      {
        code: `<Progress value={64} className="w-64" />
<Skeleton className="h-4 w-40" />
<Separator className="w-64" />`,
        node: (
          <div className="grid w-full max-w-xs gap-4">
            <Progress value={64} />
            <Skeleton className="h-4 w-40" />
            <Separator />
          </div>
        ),
      },
    ],
  },
];

export const blocks: Entry[] = [
  {
    slug: "hero",
    title: "Hero",
    description: "The opening of a page: heading, one paragraph, actions. Optional badge, visual and centered layout.",
    demos: [
      {
        block: true,
        code: `<Hero
  centered
  badge={<Badge label="New">czay-ui 0.1</Badge>}
  title="Calm interfaces, built fast"
  lead="Tokens, accessible components and page blocks on Base UI."
  actions={<>
    <a className={buttonClass({ variant: "brand", size: "lg" })} href="#">Get started</a>
    <a className={buttonClass({ size: "lg" })} href="#">Components</a>
  </>}
/>`,
        node: (
          <Hero
            centered
            badge={<Badge label="New">czay-ui 0.1</Badge>}
            title="Calm interfaces, built fast"
            lead="Tokens, accessible components and page blocks on Base UI."
            actions={
              <>
                <a className={buttonClass({ variant: "brand", size: "lg" })} href="#">Get started</a>
                <a className={buttonClass({ size: "lg" })} href="#">Components</a>
              </>
            }
          />
        ),
      },
    ],
  },
  {
    slug: "page-header",
    title: "PageHeader and SectionHeading",
    description: "The title block of an inner page, with label/value facts on the right, and a heading for sections further down.",
    demos: [
      {
        block: true,
        code: `<PageHeader
  title="Pricing"
  lead="Simple plans that scale with you."
  actions={<a className={buttonClass({ variant: "primary" })} href="#">Start free</a>}
  facts={[{ label: "Plans", value: "3" }, { label: "Trial", value: "14 days" }]}
/>`,
        node: (
          <PageHeader
            title="Pricing"
            lead="Simple plans that scale with you."
            actions={<a className={buttonClass({ variant: "primary" })} href="#">Start free</a>}
            facts={[{ label: "Plans", value: "3" }, { label: "Trial", value: "14 days" }]}
          />
        ),
      },
      {
        code: `<SectionHeading title="Why it works" description="Three ideas, no noise." />`,
        node: <SectionHeading title="Why it works" description="Three ideas, no noise." />,
      },
    ],
  },
  {
    slug: "feature-grid",
    title: "FeatureGrid",
    description: "Cards with an icon, title and description. Give an item an href and the whole card becomes a link.",
    demos: [
      {
        block: true,
        code: `<FeatureGrid
  items={[
    { icon: <Spark />, title: "Accessible", description: "Built on Base UI primitives." },
    { icon: <Spark />, title: "Themeable", description: "Override a handful of tokens." },
    { icon: <Spark />, title: "Small", description: "Plain CSS, no runtime.", href: "#" },
  ]}
/>`,
        node: (
          <div className="w-full p-6">
            <FeatureGrid
              items={[
                { icon: <Spark />, title: "Accessible", description: "Built on Base UI primitives." },
                { icon: <Spark />, title: "Themeable", description: "Override a handful of tokens." },
                { icon: <Spark />, title: "Small", description: "Plain CSS, no runtime.", href: "#" },
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "stats",
    title: "Stats",
    description: "Numbers as evidence in a hairline-divided row.",
    demos: [
      {
        block: true,
        code: `<Stats items={[
  { value: "24", label: "Components" },
  { value: "11", label: "Blocks" },
  { value: "0", label: "Runtime dependencies on Tailwind" },
]} />`,
        node: (
          <div className="w-full p-6">
            <Stats items={[{ value: "24", label: "Components" }, { value: "11", label: "Blocks" }, { value: "0", label: "Runtime Tailwind needs" }]} />
          </div>
        ),
      },
    ],
  },
  {
    slug: "cta-panel",
    title: "CtaPanel",
    description: "A reversed closing panel with the construction grid.",
    demos: [
      {
        block: true,
        code: `<CtaPanel
  title="Ready to build something calm?"
  description="Install the package and import one stylesheet."
  actions={<a className={buttonClass({ variant: "primary" })} href="#">Get started</a>}
/>`,
        node: (
          <div className="w-full p-6">
            <CtaPanel
              title="Ready to build something calm?"
              description="Install the package and import one stylesheet."
              actions={<a className={buttonClass({ variant: "primary" })} href="#">Get started</a>}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "testimonial",
    title: "Testimonial",
    description: "A quote with its author, optional avatar.",
    demos: [
      {
        code: `<Testimonial quote="It made our product feel finished." name="Ada Lovelace" role="Engineer" />`,
        node: <Testimonial quote="It made our product feel finished." name="Ada Lovelace" role="Engineer" />,
      },
    ],
  },
  {
    slug: "status-page",
    title: "StatusPage",
    description: "A 404 or error page: a huge faded code, two-line heading, one sentence and the ways out.",
    demos: [
      {
        block: true,
        code: `<StatusPage
  code="404"
  title={["This page", "is not here"]}
  body="It may have moved. Try the home page."
  actions={<a className={buttonClass({ variant: "primary" })} href="#">Home</a>}
/>`,
        node: (
          <StatusPage
            code="404"
            title={["This page", "is not here"]}
            body="It may have moved. Try the home page."
            actions={<a className={buttonClass({ variant: "primary" })} href="#">Home</a>}
          />
        ),
      },
    ],
  },
  {
    slug: "empty-state",
    title: "EmptyState",
    description: "What to show when a list has nothing yet.",
    demos: [
      {
        code: `<EmptyState icon={<Spark />} title="No projects yet" description="Create your first project to get started." action={<Button variant="primary">New project</Button>} />`,
        node: <EmptyState icon={<Spark />} title="No projects yet" description="Create your first project to get started." action={<Button variant="primary">New project</Button>} />,
      },
    ],
  },
  {
    slug: "announcement-bar",
    title: "AnnouncementBar",
    description: "A one-line strip above the header.",
    demos: [
      {
        block: true,
        code: `<AnnouncementBar>czay-ui 0.1 is out. <a href="#">Read the docs</a></AnnouncementBar>`,
        node: <AnnouncementBar>czay-ui 0.1 is out. <a href="#">Read the docs</a></AnnouncementBar>,
      },
    ],
  },
  {
    slug: "faq",
    title: "Faq",
    description: "Questions and answers as an accordion.",
    demos: [
      {
        code: `<Faq items={[
  { question: "Is it free?", answer: "Yes, MIT licensed." },
  { question: "Can I theme it?", answer: "Override the tokens." },
]} />`,
        node: (
          <div className="w-full">
            <Faq items={[{ question: "Is it free?", answer: "Yes, MIT licensed." }, { question: "Can I theme it?", answer: "Override the tokens." }]} />
          </div>
        ),
      },
    ],
  },
  {
    slug: "footer",
    title: "Footer",
    description: "Brand and blurb, columns of links and a bottom line.",
    demos: [
      {
        block: true,
        code: `<Footer
  brand={<strong>czay-ui</strong>}
  description="A calm design system."
  columns={[
    { title: "Docs", links: [{ label: "Start", href: "#" }] },
    { title: "Project", links: [{ label: "GitHub", href: "https://github.com/czayelements/zay-ui" }] },
  ]}
  bottom={<span>MIT licensed</span>}
/>`,
        node: (
          <div className="w-full">
            <Footer
              brand={<strong>czay-ui</strong>}
              description="A calm design system."
              columns={[
                { title: "Docs", links: [{ label: "Start", href: "#" }] },
                { title: "Project", links: [{ label: "GitHub", href: "https://github.com/czayelements/zay-ui" }] },
              ]}
              bottom={<span>MIT licensed</span>}
            />
          </div>
        ),
      },
    ],
  },
];
