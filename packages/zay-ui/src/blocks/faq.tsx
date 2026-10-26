import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "../components/accordion.js";

export type FaqItem = { question: ReactNode; answer: ReactNode };

/** Questions and answers as an accordion. */
export function Faq({ items, className, ...props }: Omit<ComponentProps<typeof Accordion>, "className" | "children"> & { items: FaqItem[]; className?: string }) {
  return (
    <Accordion className={cx("zay-faq", className)} {...props}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={i}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionPanel>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
