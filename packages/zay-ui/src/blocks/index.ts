/*
 * zay-ui blocks: ready-made sections and pages built from the components. Import the
 * styles once (`@import "@czayelements/zay-ui/styles.css"`), then:
 *
 *   import { Hero, FeatureGrid, CtaPanel } from "@czayelements/zay-ui/blocks";
 *
 * Blocks render plain links and children; pass your framework's Link inside
 * `actions` when you want client-side navigation.
 */

/* Marketing */
export { AnnouncementBar } from "./announcement-bar.js";
export { Navbar, type NavbarLink } from "./navbar.js";
export { Hero, BrowserFrame } from "./hero.js";
export { SectionHeading, PageHeader, type PageHeaderFact } from "./section.js";
export { LogoCloud } from "./logo-cloud.js";
export { FeatureGrid, FeatureSplit, type Feature } from "./features.js";
export { Stats, MetricCards, type StatItem, type MetricItem } from "./stats.js";
export { Testimonial, Testimonials, type TestimonialItem } from "./testimonials.js";
export { PricingTable, type PricingPlan } from "./pricing.js";
export { Faq, type FaqItem } from "./faq.js";
export { CtaPanel, Newsletter } from "./cta.js";
export { Footer, type FooterColumn } from "./footer.js";

/* Authentication */
export { AuthCard, SignInForm, SignUpForm, VerifyCodeForm, type AuthProvider } from "./auth.js";

/* Application */
export { AppShell, Sidebar, type SidebarItem, type SidebarGroup } from "./app-shell.js";
export { DataTable, type DataTableColumn } from "./data-table.js";
export { SettingsLayout, SettingsSection } from "./settings.js";
export { StatusPage } from "./status-page.js";
