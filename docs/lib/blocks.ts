import type { PropGroup } from "./types";

export type BlockDemo = {
  name: string;
  title?: string;
  /** Fixed preview height in px. Without it the preview sizes itself to its content. */
  height?: number;
  /** The block fills the viewport (app shells, auth pages). Needs a height. */
  fill?: boolean;
};

export type BlockEntry = {
  slug: string;
  title: string;
  description: string;
  category: "Marketing" | "Authentication" | "Application" | "Pages";
  demos: BlockDemo[];
  props?: PropGroup[];
  notes?: string[];
};

export const blockCategories = ["Pages", "Marketing", "Authentication", "Application"] as const;

export const blocks: BlockEntry[] = [
  {
    slug: "landing-page",
    title: "Landing page",
    category: "Pages",
    description: "A complete marketing page composed from blocks: announcement, navbar, hero, logos, features, pricing, call to action and footer.",
    demos: [{ name: "LandingPageDemo", height: 1500 }],
    notes: ["Copy the source as a starting point and delete the sections you do not need."],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    category: "Pages",
    description: "An application shell with a sidebar, a top bar, metric cards and a data table. The sidebar turns into a drawer on small screens.",
    demos: [{ name: "DashboardDemo", height: 760, fill: true }],
    notes: ["Resize the preview to a phone width to see the drawer navigation."],
  },
  {
    slug: "settings",
    title: "Settings page",
    category: "Pages",
    description: "Settings grouped into sections, with the explanation on the left and the controls in a card on the right.",
    demos: [{ name: "SettingsDemo", height: 760 }],
  },
  {
    slug: "not-found",
    title: "Not found",
    category: "Pages",
    description: "A 404 or error page that tells visitors what to do next.",
    demos: [{ name: "StatusPageDemo", height: 520 }],
    props: [
      {
        rows: [
          { name: "code", type: "string", description: "A large faded status code, e.g. 404." },
          { name: "title", type: "ReactNode", description: "The heading." },
          { name: "body", type: "ReactNode", description: "One sentence of explanation." },
          { name: "actions", type: "ReactNode", description: "Buttons or links for the ways out." },
        ],
      },
    ],
  },
  {
    slug: "announcement-bar",
    title: "Announcement bar",
    category: "Marketing",
    description: "A one-line strip above the header for news, launches and notices.",
    demos: [{ name: "AnnouncementBarDemo", height: 60 }],
  },
  {
    slug: "navbar",
    title: "Navbar",
    category: "Marketing",
    description: "A site header with brand, links and actions. On small screens the links move into a drawer.",
    demos: [{ name: "NavbarDemo", height: 120 }],
    props: [
      {
        rows: [
          { name: "brand", type: "ReactNode", description: "Logo or wordmark." },
          { name: "links", type: "{ label; href; active? }[]", description: "Navigation links. active sets aria-current." },
          { name: "actions", type: "ReactNode", description: "Buttons on the right (also shown in the mobile drawer)." },
          { name: "sticky", type: "boolean", default: "false", description: "Stick to the top with a blurred background." },
        ],
      },
    ],
  },
  {
    slug: "hero",
    title: "Hero",
    category: "Marketing",
    description: "The opening of a page: heading, a sentence, actions and optional media. Centered, with media below, or split.",
    demos: [
      { name: "HeroDemo", title: "Centered", height: 560 },
      { name: "HeroWithMediaDemo", title: "With media", height: 900 },
      { name: "HeroSplitDemo", title: "Split", height: 640 },
    ],
    props: [
      {
        rows: [
          { name: "title", type: "ReactNode", description: "The headline." },
          { name: "lead", type: "ReactNode", description: "One supporting paragraph." },
          { name: "badge", type: "ReactNode", description: "Something small above the title, usually a Badge." },
          { name: "actions", type: "ReactNode", description: "Buttons or links." },
          { name: "note", type: "ReactNode", description: "Small print under the actions." },
          { name: "media", type: "ReactNode", description: "A screenshot or diagram. BrowserFrame gives it a window." },
          { name: "align", type: '"center" | "start"', default: '"center"', description: "Text alignment when not split." },
          { name: "split", type: "boolean", default: "false", description: "Put the media beside the text on wide screens." },
        ],
      },
    ],
  },
  {
    slug: "logo-cloud",
    title: "Logo cloud",
    category: "Marketing",
    description: "A row of customer or partner logos under a short line of text.",
    demos: [{ name: "LogoCloudDemo", height: 160 }],
    props: [{ rows: [{ name: "title", type: "ReactNode", description: "The line above the logos." }, { name: "items", type: "ReactNode[]", description: "Text, inline SVGs or images." }] }],
  },
  {
    slug: "features",
    title: "Features",
    category: "Marketing",
    description: "A grid of features with icons, as plain columns or as cards, plus a text-and-visual split section.",
    demos: [
      { name: "FeatureGridDemo", title: "Grid", height: 640 },
      { name: "FeatureCardsDemo", title: "Cards", height: 520 },
      { name: "FeatureSplitDemo", title: "Split", height: 520 },
    ],
    props: [
      {
        part: "FeatureGrid",
        rows: [
          { name: "items", type: "{ title; description?; icon?; href? }[]", description: "The features. href makes one a link." },
          { name: "columns", type: "2 | 3 | 4", default: "3", description: "Columns on wide screens." },
          { name: "variant", type: '"plain" | "cards"', default: '"plain"', description: "Box each feature in a card." },
        ],
      },
      {
        part: "FeatureSplit",
        rows: [
          { name: "title / description / eyebrow", type: "ReactNode", description: "The copy." },
          { name: "points", type: "ReactNode[]", description: "A checklist under the description." },
          { name: "media", type: "ReactNode", description: "The visual." },
          { name: "reverse", type: "boolean", default: "false", description: "Put the media on the left." },
        ],
      },
    ],
  },
  {
    slug: "stats",
    title: "Stats",
    category: "Marketing",
    description: "Numbers as evidence: a hairline-divided row of figures.",
    demos: [{ name: "StatsDemo", height: 240 }],
    props: [{ rows: [{ name: "items", type: "{ value: ReactNode; label: ReactNode }[]", description: "The figures." }] }],
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    category: "Marketing",
    description: "Customer quotes in a responsive grid.",
    demos: [{ name: "TestimonialsDemo", height: 620 }],
    props: [{ rows: [{ name: "items", type: "{ quote; name; position?; avatar?; initials? }[]", description: "The quotes." }] }],
  },
  {
    slug: "pricing",
    title: "Pricing",
    category: "Marketing",
    description: "Plans side by side with a monthly and yearly switch and a highlighted plan.",
    demos: [{ name: "PricingDemo", height: 860 }],
    props: [
      {
        part: "PricingTable",
        rows: [
          { name: "plans", type: "PricingPlan[]", description: "name, description, price { monthly, yearly? }, unit, features, cta, href, featured, badge." },
          { name: "defaultBilling", type: '"monthly" | "yearly"', default: '"monthly"', description: "Initial period. The switch shows only if a plan has a yearly price." },
        ],
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    category: "Marketing",
    description: "Questions and answers as an accordion.",
    demos: [{ name: "FaqDemo", height: 520 }],
    props: [{ rows: [{ name: "items", type: "{ question: ReactNode; answer: ReactNode }[]", description: "The questions." }] }],
  },
  {
    slug: "cta",
    title: "Call to action",
    category: "Marketing",
    description: "A closing panel in the dark palette with a heading and actions, and an email capture.",
    demos: [
      { name: "CtaDemo", title: "Panel", height: 320 },
      { name: "NewsletterDemo", title: "Newsletter", height: 320 },
    ],
  },
  {
    slug: "footer",
    title: "Footer",
    category: "Marketing",
    description: "A site footer with a brand blurb, columns of links and a bottom line.",
    demos: [{ name: "FooterDemo", height: 420 }],
    props: [
      {
        rows: [
          { name: "brand / description", type: "ReactNode", description: "The block on the left." },
          { name: "columns", type: "{ title; links: { label; href }[] }[]", description: "Link columns." },
          { name: "bottom", type: "ReactNode", description: "The line under the columns." },
        ],
      },
    ],
  },
  {
    slug: "sign-in",
    title: "Sign in",
    category: "Authentication",
    description: "Email and password sign-in with optional social providers, validation and a server error slot.",
    demos: [{ name: "SignInDemo", height: 720, fill: true }],
    props: [
      {
        rows: [
          { name: "onSubmit", type: "(values: Record<string, string>) => void", description: "Called with { email, password } once valid." },
          { name: "providers", type: "{ label; icon?; onClick? }[]", description: "Social buttons above the form." },
          { name: "error", type: "ReactNode", description: "A server error shown above the button." },
          { name: "loading", type: "boolean", description: "Shows a spinner on the submit button." },
          { name: "forgotHref / signUpHref", type: "string", description: "Link targets." },
        ],
      },
    ],
  },
  {
    slug: "sign-up",
    title: "Sign up",
    category: "Authentication",
    description: "Name, email and password registration with social providers and a terms line.",
    demos: [{ name: "SignUpDemo", height: 800, fill: true }],
  },
  {
    slug: "verify-code",
    title: "Verify code",
    category: "Authentication",
    description: "A one-time code entry with a resend link.",
    demos: [{ name: "VerifyCodeDemo", height: 520, fill: true }],
    props: [{ rows: [{ name: "length", type: "number", default: "6", description: "Characters in the code." }, { name: "onComplete", type: "(code: string) => void", description: "Called when every box is filled." }, { name: "onResend", type: "() => void", description: "Called by the Resend link." }] }],
  },
];

export const blockBySlug = (slug: string) => blocks.find((b) => b.slug === slug);
