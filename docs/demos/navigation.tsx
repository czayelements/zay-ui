"use client";

import { useState } from "react";

import {
  Accordion, AccordionItem, AccordionPanel, AccordionTrigger, Breadcrumb, Button, Collapsible, CollapsiblePanel, CollapsibleTrigger,
  NavigationMenu, NavigationMenuCard, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger,
  Pagination, Tabs, TabsList, TabsPanel, TabsTab,
} from "@czayelements/zay-ui";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
        <TabsTab value="billing">Billing</TabsTab>
      </TabsList>
      <TabsPanel value="account" className="text-sm text-muted-foreground">
        Make changes to your account here. Click save when you are done.
      </TabsPanel>
      <TabsPanel value="password" className="text-sm text-muted-foreground">
        Change your password here. After saving, you will be logged out.
      </TabsPanel>
      <TabsPanel value="billing" className="text-sm text-muted-foreground">
        Manage your plan, invoices and payment methods.
      </TabsPanel>
    </Tabs>
  );
}

export function TabsPillDemo() {
  return (
    <Tabs defaultValue="monthly" variant="pill">
      <TabsList>
        <TabsTab value="monthly">Monthly</TabsTab>
        <TabsTab value="yearly">Yearly</TabsTab>
      </TabsList>
      <TabsPanel value="monthly" className="text-sm text-muted-foreground">
        $12 per seat, billed every month.
      </TabsPanel>
      <TabsPanel value="yearly" className="text-sm text-muted-foreground">
        $120 per seat, billed once a year. Two months free.
      </TabsPanel>
    </Tabs>
  );
}

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionPanel>Yes. It follows the WAI-ARIA pattern: keyboard navigation, focus management and aria attributes are built in.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionPanel>It comes with a clean default look that you can retheme with one CSS variable.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionPanel>Panels animate their height, respecting prefers-reduced-motion.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">3 repositories starred</p>
        <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>Toggle</CollapsibleTrigger>
      </div>
      <div className="mt-2 rounded-lg border border-border px-3 py-2 text-sm">czayelements/zay-ui</div>
      <CollapsiblePanel>
        <div className="mt-2 grid gap-2">
          <div className="rounded-lg border border-border px-3 py-2 text-sm">czayelements/zaystatic</div>
          <div className="rounded-lg border border-border px-3 py-2 text-sm">mui/base-ui</div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}

export function BreadcrumbDemo() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "#" },
        { label: "Components", href: "#" },
        { label: "Breadcrumb" },
      ]}
    />
  );
}

export function PaginationDemo() {
  const [page, setPage] = useState(4);
  return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Product</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-80 gap-1">
            <NavigationMenuCard href="#" title="Components" description="Accessible primitives, styled and ready to ship." />
            <NavigationMenuCard href="#" title="Blocks" description="Complete sections for marketing pages and apps." />
            <NavigationMenuCard href="#" title="Theming" description="One variable re-colours the entire system." />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-72 gap-1">
            <NavigationMenuCard href="#" title="Documentation" description="Guides and API reference." />
            <NavigationMenuCard href="#" title="Changelog" description="What shipped and when." />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
