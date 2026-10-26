"use client";

import {
  AlignLeftIcon, Avatar, BellIcon, Badge, Button, ChartIcon, DashboardIcon, FolderIcon, GithubIcon, HomeIcon, InboxIcon,
  Input, InputGroup, LayersIcon, LockIcon, MailIcon, PaletteIcon, Pagination, SearchIcon, SettingsIcon, ShieldIcon, SparklesIcon,
  TrendingUpIcon, UsersIcon, ZapIcon, buttonClass, Field, FieldControl, FieldDescription, FieldLabel, Switch, Textarea, Label,
} from "@czayelements/zay-ui";
import {
  AnnouncementBar, AppShell, BrowserFrame, CtaPanel, DataTable, FeatureGrid, FeatureSplit, Faq, Footer, Hero, LogoCloud,
  MetricCards, Navbar, Newsletter, PageHeader, PricingTable, SectionHeading, SettingsLayout, SettingsSection, Sidebar,
  SignInForm, SignUpForm, Stats, StatusPage, Testimonials, VerifyCodeForm,
} from "@czayelements/zay-ui/blocks";
import { useState } from "react";

const Brand = () => (
  <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight no-underline">
    <span className="grid size-6 place-items-center rounded-md bg-brand text-xs text-brand-foreground">A</span>
    Acme
  </a>
);

const nav = [
  { label: "Product", href: "#", active: true },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Changelog", href: "#" },
];

export function AnnouncementBarDemo() {
  return (
    <AnnouncementBar>
      Acme 2.0 is here: faster builds and a new dashboard. <a href="#">Read the announcement →</a>
    </AnnouncementBar>
  );
}

export function NavbarDemo() {
  return (
    <Navbar
      brand={<Brand />}
      links={nav}
      actions={
        <>
          <a href="#" className={buttonClass({ variant: "ghost", size: "sm" })}>
            Sign in
          </a>
          <a href="#" className={buttonClass({ variant: "primary", size: "sm" })}>
            Get started
          </a>
        </>
      }
    />
  );
}

export function HeroDemo() {
  return (
    <Hero
      badge={
        <Badge variant="brand" label="New">
          Acme 2.0 is out
        </Badge>
      }
      title="Ship products your customers love, faster"
      lead="The all-in-one platform for building, deploying and scaling modern web applications. Start free, grow without limits."
      actions={
        <>
          <a href="#" className={buttonClass({ variant: "primary", size: "lg" })}>
            Start for free
          </a>
          <a href="#" className={buttonClass({ size: "lg" })}>
            Book a demo
          </a>
        </>
      }
      note="No credit card required · 14-day free trial"
    />
  );
}

export function HeroWithMediaDemo() {
  return (
    <Hero
      badge={<Badge variant="brand">Now in public beta</Badge>}
      title="The calm way to run your team"
      lead="Plan, track and ship work in one place, with a clarity your whole team can feel."
      actions={
        <>
          <a href="#" className={buttonClass({ variant: "brand", size: "lg" })}>
            Get started
          </a>
          <a href="#" className={buttonClass({ size: "lg" })}>
            Watch the film
          </a>
        </>
      }
      media={
        <BrowserFrame url="app.acme.com/projects">
          <div className="grid gap-4 p-6 sm:grid-cols-3">
            {["Design", "Build", "Ship"].map((col, i) => (
              <div key={col} className="rounded-lg border border-border bg-surface p-3">
                <p className="mb-3 text-xs font-medium text-muted-foreground">{col}</p>
                {Array.from({ length: 3 - (i % 2) }, (_, j) => (
                  <div key={j} className="mb-2 rounded-md border border-border bg-background p-3 text-sm shadow-xs">
                    <div className="h-2 w-3/4 rounded bg-muted" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </BrowserFrame>
      }
    />
  );
}

export function HeroSplitDemo() {
  return (
    <Hero
      split
      badge={<Badge>Open source</Badge>}
      title="Build forms that people finish"
      lead="Beautiful, accessible forms with validation, autosave and analytics built in."
      actions={
        <>
          <a href="#" className={buttonClass({ variant: "primary", size: "lg" })}>
            Try it free
          </a>
          <a href="#" className={buttonClass({ size: "lg" })}>
            <GithubIcon /> Star on GitHub
          </a>
        </>
      }
      media={
        <BrowserFrame>
          <div className="grid gap-4 p-6">
            <Field name="email">
              <FieldLabel>Work email</FieldLabel>
              <FieldControl placeholder="you@company.com" />
            </Field>
            <Field name="team">
              <FieldLabel>Team size</FieldLabel>
              <FieldControl placeholder="10-50" />
            </Field>
            <Button variant="primary">Continue</Button>
          </div>
        </BrowserFrame>
      }
    />
  );
}

export function LogoCloudDemo() {
  return <LogoCloud title="Trusted by teams at" items={["Northwind", "Globex", "Initech", "Umbrella", "Hooli", "Stark"]} />;
}

const features = [
  { icon: <ZapIcon />, title: "Blazing fast", description: "Builds in seconds and pages that load before your users blink." },
  { icon: <ShieldIcon />, title: "Secure by default", description: "Encryption, audit logs and single sign-on from day one." },
  { icon: <LayersIcon />, title: "Composable", description: "Small parts that fit together, so you never fight the framework." },
  { icon: <PaletteIcon />, title: "Themeable", description: "Match your brand with one variable, in light and dark." },
  { icon: <SparklesIcon />, title: "Delightful details", description: "Spring animations, press feedback and careful focus states." },
  { icon: <LockIcon />, title: "Accessible", description: "Keyboard support and screen reader labels throughout." },
];

export function FeatureGridDemo() {
  return (
    <div className="zay-container zay-section">
      <SectionHeading eyebrow="Features" title="Everything you need to ship" description="A small system with strong defaults." />
      <FeatureGrid className="mt-14" items={features} />
    </div>
  );
}

export function FeatureCardsDemo() {
  return (
    <div className="zay-container zay-section">
      <FeatureGrid variant="cards" columns={3} items={features} />
    </div>
  );
}

export function FeatureSplitDemo() {
  return (
    <div className="zay-container zay-section">
      <FeatureSplit
        eyebrow="Analytics"
        title="Know what is working, at a glance"
        description="Real-time dashboards show how people use your product, so you can double down on what matters."
        points={["Live visitors and conversion funnels", "Segment by plan, country or device", "Export to your warehouse in one click"]}
        actions={
          <a href="#" className={buttonClass({ variant: "primary" })}>
            Explore analytics
          </a>
        }
        media={
          <BrowserFrame>
            <div className="grid gap-3 p-6">
              <div className="flex items-end gap-2" style={{ height: 120 }}>
                {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-brand" style={{ height: `${h}%`, opacity: 0.35 + i * 0.08 }} />
                ))}
              </div>
              <div className="h-2 w-1/3 rounded bg-muted" />
            </div>
          </BrowserFrame>
        }
      />
    </div>
  );
}

export function StatsDemo() {
  return (
    <div className="zay-container zay-section">
      <Stats
        items={[
          { value: "12M+", label: "Requests served daily" },
          { value: "99.99%", label: "Uptime, last 12 months" },
          { value: "140", label: "Countries with customers" },
          { value: "4.9/5", label: "Average customer rating" },
        ]}
      />
    </div>
  );
}

export function TestimonialsDemo() {
  return (
    <div className="zay-container zay-section">
      <SectionHeading title="Loved by builders" description="Hear from the teams shipping with Acme every day." />
      <Testimonials
        className="mt-12"
        items={[
          { quote: "We cut our release time in half. The details are what make it feel premium.", name: "Ada Lovelace", position: "CTO, Analytical", initials: "AL" },
          { quote: "The accessibility story alone was worth switching. Everything just works with the keyboard.", name: "Grace Hopper", position: "Staff Engineer, Compiler", initials: "GH" },
          { quote: "Our designers and engineers finally speak the same language.", name: "Linus Torvalds", position: "Head of Product, Kernel", initials: "LT" },
        ]}
      />
    </div>
  );
}

export function PricingDemo() {
  return (
    <div className="zay-container zay-section">
      <SectionHeading title="Simple, transparent pricing" description="Start free. Upgrade when you are ready." />
      <div className="mt-12">
        <PricingTable
          plans={[
            {
              name: "Starter",
              description: "For individuals and side projects.",
              price: { monthly: "$0" },
              unit: "forever",
              cta: "Get started",
              href: "#",
              features: ["1 project", "Community support", "1 GB storage"],
            },
            {
              name: "Pro",
              description: "For growing teams that need more.",
              price: { monthly: "$24", yearly: "$19" },
              unit: "/ user / month",
              cta: "Start free trial",
              href: "#",
              featured: true,
              badge: "Popular",
              features: ["Unlimited projects", "Priority support", "100 GB storage", "Advanced analytics"],
            },
            {
              name: "Enterprise",
              description: "For organisations with advanced needs.",
              price: { monthly: "Custom" },
              cta: "Contact sales",
              href: "#",
              features: ["Single sign-on", "Dedicated manager", "Audit logs", "99.99% SLA"],
            },
          ]}
        />
      </div>
    </div>
  );
}

export function FaqDemo() {
  return (
    <div className="zay-container zay-section">
      <SectionHeading title="Frequently asked questions" />
      <div className="mt-12">
        <Faq
          defaultValue={[0]}
          items={[
            { question: "Can I try it before I pay?", answer: "Yes. Every paid plan starts with a 14-day free trial, no credit card needed." },
            { question: "Can I change plans later?", answer: "Anytime. Upgrades take effect immediately, downgrades at the end of the billing period." },
            { question: "Do you offer discounts for non-profits?", answer: "We do. Write to us from your organisation address and we will sort it out." },
            { question: "Where is my data stored?", answer: "In the region you choose when you create your workspace, encrypted at rest." },
          ]}
        />
      </div>
    </div>
  );
}

export function CtaDemo() {
  return (
    <div className="zay-container zay-section">
      <CtaPanel
        title="Ready to build something great?"
        description="Join thousands of teams shipping faster with Acme. Free to start, no credit card."
        actions={
          <>
            <a href="#" className={buttonClass({ variant: "brand", size: "lg" })}>
              Get started
            </a>
            <a href="#" className={buttonClass({ size: "lg" })}>
              Talk to sales
            </a>
          </>
        }
      />
    </div>
  );
}

export function NewsletterDemo() {
  return (
    <div className="zay-container zay-section">
      <Newsletter title="Stay in the loop" description="Product news and engineering notes, once a month." note="No spam. Unsubscribe anytime." onSubmit={(e) => e.preventDefault()} />
    </div>
  );
}

export function FooterDemo() {
  return (
    <Footer
      brand={<Brand />}
      description="Tools for teams that care about craft."
      columns={[
        { title: "Product", links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }, { label: "Changelog", href: "#" }] },
        { title: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }] },
        { title: "Legal", links: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      bottom={
        <>
          <span>© 2026 Acme, Inc.</span>
          <span>Made with care</span>
        </>
      }
    />
  );
}

export function SignInDemo() {
  return (
    <SignInForm
      logo={<Brand />}
      providers={[{ label: "Continue with GitHub", icon: <GithubIcon /> }]}
      onSubmit={(values) => console.log(values)}
    />
  );
}

export function SignUpDemo() {
  return (
    <SignUpForm
      logo={<Brand />}
      providers={[{ label: "Sign up with GitHub", icon: <GithubIcon /> }]}
      terms={
        <>
          By continuing you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </>
      }
    />
  );
}

export function VerifyCodeDemo() {
  return <VerifyCodeForm logo={<Brand />} onComplete={(code) => console.log(code)} />;
}

const invoices = [
  { id: "INV-0042", customer: "Northwind", status: "Paid", amount: "$2,500.00" },
  { id: "INV-0041", customer: "Globex", status: "Pending", amount: "$1,150.00" },
  { id: "INV-0040", customer: "Initech", status: "Paid", amount: "$3,500.00" },
  { id: "INV-0039", customer: "Umbrella", status: "Failed", amount: "$450.00" },
  { id: "INV-0038", customer: "Hooli", status: "Paid", amount: "$8,200.00" },
];

export function DashboardDemo() {
  return (
    <AppShell
      className="h-full"
      sidebar={
        <Sidebar
          brand={<Brand />}
          groups={[
            {
              items: [
                { label: "Overview", href: "#", icon: <DashboardIcon />, active: true },
                { label: "Inbox", href: "#", icon: <InboxIcon />, badge: "4" },
                { label: "Projects", href: "#", icon: <FolderIcon /> },
                { label: "Customers", href: "#", icon: <UsersIcon /> },
              ],
            },
            {
              label: "Workspace",
              items: [
                { label: "Reports", href: "#", icon: <ChartIcon /> },
                { label: "Settings", href: "#", icon: <SettingsIcon /> },
              ],
            },
          ]}
          footer={
            <div className="flex items-center gap-3">
              <Avatar size="sm" fallback="AL" />
              <div className="min-w-0 text-sm leading-tight">
                <p className="truncate font-medium">Ada Lovelace</p>
                <p className="truncate text-xs text-muted-foreground">ada@acme.com</p>
              </div>
            </div>
          }
        />
      }
      header={
        <>
          <InputGroup start={<SearchIcon />} className="max-w-xs">
            <Input size="sm" placeholder="Search…" />
          </InputGroup>
          <Button variant="ghost" size="sm" icon aria-label="Notifications">
            <BellIcon />
          </Button>
        </>
      }
    >
      <PageHeader title="Overview" lead="Here is what is happening with your business today." actions={<Button variant="primary">New invoice</Button>} />
      <div className="mt-6 grid gap-6">
        <MetricCards
          items={[
            { label: "Revenue", value: "$48,200", delta: "+12.5%", icon: <TrendingUpIcon /> },
            { label: "Customers", value: "2,350", delta: "+180", icon: <UsersIcon /> },
            { label: "Open invoices", value: "12", delta: "-3", trend: "down", icon: <InboxIcon /> },
            { label: "Conversion", value: "3.2%", delta: "+0.4%", icon: <ChartIcon /> },
          ]}
        />
        <DataTable
          title="Recent invoices"
          description="The latest billing activity across your customers."
          actions={<Button size="sm">Export</Button>}
          rows={invoices}
          rowKey={(row) => row.id}
          columns={[
            { key: "id", header: "Invoice", render: (row) => <span className="font-medium">{row.id}</span> },
            { key: "customer", header: "Customer" },
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <Badge variant={row.status === "Paid" ? "success" : row.status === "Pending" ? "warning" : "destructive"} dot>
                  {row.status}
                </Badge>
              ),
            },
            { key: "amount", header: "Amount", align: "end" },
          ]}
          footer={
            <>
              <span>Showing 5 of 48 invoices</span>
              <Pagination page={1} pageCount={10} hrefFor={() => "#"} />
            </>
          }
        />
      </div>
    </AppShell>
  );
}

export function SettingsDemo() {
  const [email, setEmail] = useState(true);
  return (
    <div className="zay-container py-10">
      <PageHeader title="Settings" lead="Manage your profile and how Acme contacts you." />
      <SettingsLayout className="mt-8">
        <SettingsSection
          title="Profile"
          description="This is how others see you on the site."
          footer={
            <>
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save changes</Button>
            </>
          }
        >
          <Field name="name">
            <FieldLabel>Display name</FieldLabel>
            <FieldControl defaultValue="Ada Lovelace" />
            <FieldDescription>Shown on your public profile.</FieldDescription>
          </Field>
          <div className="grid gap-2">
            <Label htmlFor="about">About</Label>
            <Textarea id="about" defaultValue="Mathematician and writer." />
          </div>
        </SettingsSection>
        <SettingsSection title="Notifications" description="Choose what you want to be emailed about.">
          <label className="flex items-center justify-between gap-4 text-sm">
            <span>
              <span className="block font-medium">Product updates</span>
              <span className="text-muted-foreground">News about features and improvements.</span>
            </span>
            <Switch checked={email} onCheckedChange={setEmail} aria-label="Product updates" />
          </label>
          <label className="flex items-center justify-between gap-4 text-sm">
            <span>
              <span className="block font-medium">Security alerts</span>
              <span className="text-muted-foreground">Sign-ins from new devices. Always on.</span>
            </span>
            <Switch checked disabled aria-label="Security alerts" />
          </label>
        </SettingsSection>
      </SettingsLayout>
    </div>
  );
}

export function StatusPageDemo() {
  return (
    <StatusPage
      code="404"
      title="Page not found"
      body="The page you are looking for does not exist or has moved. Check the address or head back home."
      actions={
        <>
          <a href="#" className={buttonClass({ variant: "primary" })}>
            <HomeIcon /> Back to home
          </a>
          <a href="#" className={buttonClass({})}>
            Contact support
          </a>
        </>
      }
    />
  );
}

export function LandingPageDemo() {
  return (
    <>
      <AnnouncementBar>
        Acme 2.0 is here. <a href="#">See what is new →</a>
      </AnnouncementBar>
      <Navbar
        sticky
        brand={<Brand />}
        links={nav}
        actions={
          <>
            <a href="#" className={buttonClass({ variant: "ghost", size: "sm" })}>
              Sign in
            </a>
            <a href="#" className={buttonClass({ variant: "primary", size: "sm" })}>
              Get started
            </a>
          </>
        }
      />
      <Hero
        badge={
          <Badge variant="brand" label="New">
            Acme 2.0 is out
          </Badge>
        }
        title="Ship products your customers love, faster"
        lead="The all-in-one platform for building, deploying and scaling modern web applications."
        actions={
          <>
            <a href="#" className={buttonClass({ variant: "primary", size: "lg" })}>
              Start for free
            </a>
            <a href="#" className={buttonClass({ size: "lg" })}>
              Book a demo
            </a>
          </>
        }
        note="No credit card required"
      />
      <div className="zay-container pb-16">
        <LogoCloud title="Trusted by teams at" items={["Northwind", "Globex", "Initech", "Umbrella", "Hooli"]} />
      </div>
      <div className="zay-band">
        <div className="zay-container zay-section">
          <SectionHeading eyebrow="Features" title="Everything you need to ship" />
          <FeatureGrid className="mt-14" items={features.slice(0, 3)} />
        </div>
      </div>
      <div className="zay-container zay-section">
        <SectionHeading title="Simple pricing" />
        <div className="mt-12">
          <PricingTable
            plans={[
              { name: "Starter", price: { monthly: "$0" }, unit: "forever", cta: "Get started", href: "#", features: ["1 project", "Community support"] },
              { name: "Pro", price: { monthly: "$24", yearly: "$19" }, unit: "/ month", cta: "Start trial", href: "#", featured: true, features: ["Unlimited projects", "Priority support"] },
            ]}
          />
        </div>
      </div>
      <div className="zay-container pb-24">
        <CtaPanel
          title="Ready to build something great?"
          description="Free to start. No credit card."
          actions={
            <a href="#" className={buttonClass({ variant: "brand", size: "lg" })}>
              Get started
            </a>
          }
        />
      </div>
      <Footer
        brand={<Brand />}
        description="Tools for teams that care about craft."
        columns={[
          { title: "Product", links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }] },
          { title: "Company", links: [{ label: "About", href: "#" }, { label: "Contact", href: "#" }] },
        ]}
        bottom={<span>© 2026 Acme, Inc.</span>}
      />
    </>
  );
}
