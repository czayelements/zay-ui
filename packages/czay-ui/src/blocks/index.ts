/*
 * czay-ui blocks: ready-made page sections. Import the styles once
 * (`@import "@czayelements/czay-ui/styles.css"`), then:
 *
 *   import { Hero, FeatureGrid, CtaPanel } from "@czayelements/czay-ui/blocks";
 *
 * Blocks render plain links and children; pass your framework's Link inside
 * `actions` when you want client-side navigation.
 */
export { Hero } from "./hero.js";
export { PageHeader, SectionHeading, type PageHeaderFact } from "./page-header.js";
export { FeatureGrid, type Feature } from "./feature-grid.js";
export { Stats, type Stat } from "./stats.js";
export { CtaPanel } from "./cta-panel.js";
export { Testimonial } from "./testimonial.js";
export { StatusPage } from "./status-page.js";
export { EmptyState } from "./empty-state.js";
export { AnnouncementBar } from "./announcement-bar.js";
export { Faq, type FaqItem } from "./faq.js";
export { Footer, type FooterColumn } from "./footer.js";
