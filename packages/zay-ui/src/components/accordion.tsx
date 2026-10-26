"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ComponentProps } from "react";

import { cx, type Cn } from "../cx.js";
import { ChevronDownIcon } from "./icons.js";

/** Collapsible sections (Base UI Accordion). `multiple` lets several stay open. */
export const Accordion = BaseAccordion.Root;

export function AccordionItem({ className, ...props }: Cn<ComponentProps<typeof BaseAccordion.Item>>) {
  return <BaseAccordion.Item className={cx("zay-accordion-item", className)} {...props} />;
}

/** The clickable heading, with a chevron that turns when open. */
export function AccordionTrigger({ className, children, ...props }: Cn<ComponentProps<typeof BaseAccordion.Trigger>>) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger className={cx("zay-accordion-trigger", className)} {...props}>
        {children}
        <ChevronDownIcon />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionPanel({ className, children, ...props }: Cn<ComponentProps<typeof BaseAccordion.Panel>>) {
  return (
    <BaseAccordion.Panel className={cx("zay-accordion-panel", className)} {...props}>
      <div className="zay-accordion-content">{children}</div>
    </BaseAccordion.Panel>
  );
}
