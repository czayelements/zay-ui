"use client";

import { useState, type ComponentProps, type ReactNode } from "react";

import { cx } from "../cx.js";
import { Badge } from "../components/badge.js";
import { Button } from "../components/button.js";
import { CheckIcon } from "../components/icons.js";
import { Tabs, TabsList, TabsTab } from "../components/tabs.js";

export type PricingPlan = {
  name: ReactNode;
  description?: ReactNode;
  /** Price per month, and optionally per month when billed yearly. Strings so you control the currency. */
  price: { monthly: string; yearly?: string };
  /** Text after the price, e.g. "/ month". */
  unit?: ReactNode;
  features: ReactNode[];
  cta: ReactNode;
  href?: string;
  featured?: boolean;
  badge?: ReactNode;
};

/** Plans side by side, with a monthly/yearly switch when any plan has a yearly price. */
export function PricingTable({
  plans,
  defaultBilling = "monthly",
  className,
  ...props
}: ComponentProps<"div"> & { plans: PricingPlan[]; defaultBilling?: "monthly" | "yearly" }) {
  const [billing, setBilling] = useState<"monthly" | "yearly">(defaultBilling);
  const hasYearly = plans.some((p) => p.price.yearly);
  return (
    <div className={cx("zay-pricing", className)} {...props}>
      {hasYearly ? (
        <div className="zay-pricing-switch">
          <Tabs variant="pill" value={billing} onValueChange={(v) => setBilling(v as "monthly" | "yearly")}>
            <TabsList>
              <TabsTab value="monthly">Monthly</TabsTab>
              <TabsTab value="yearly">Yearly</TabsTab>
            </TabsList>
          </Tabs>
          <Badge variant="success">Save 20%</Badge>
        </div>
      ) : null}
      <div className={cx("zay-plans", `zay-plans-${plans.length}`)}>
        {plans.map((plan, i) => {
          const price = billing === "yearly" && plan.price.yearly ? plan.price.yearly : plan.price.monthly;
          return (
            <div key={i} className={cx("zay-plan", plan.featured && "zay-plan-featured")}>
              <div className="zay-plan-head">
                <h3>{plan.name}</h3>
                {plan.badge ? <Badge variant="brand">{plan.badge}</Badge> : null}
              </div>
              {plan.description ? <p className="zay-plan-description">{plan.description}</p> : null}
              <p className="zay-plan-price">
                <span>{price}</span>
                {plan.unit ? <small>{plan.unit}</small> : null}
              </p>
              {plan.href ? (
                <a href={plan.href} className={cx("zay-btn", "zay-btn-lg", plan.featured ? "zay-btn-brand" : "zay-btn-outline")} style={{ width: "100%" }}>
                  {plan.cta}
                </a>
              ) : (
                <Button size="lg" variant={plan.featured ? "brand" : "outline"} style={{ width: "100%" }}>
                  {plan.cta}
                </Button>
              )}
              <ul className="zay-plan-features">
                {plan.features.map((feature, j) => (
                  <li key={j}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
