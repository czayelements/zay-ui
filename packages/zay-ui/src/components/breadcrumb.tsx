import { Fragment, type ComponentProps, type ReactNode } from "react";

import { ChevronRightIcon } from "./icons.js";

export type BreadcrumbItem = { label: ReactNode; href?: string };

/**
 * A breadcrumb trail. The last item is the current page.
 *
 *   <Breadcrumb items={[{ label: "Docs", href: "/docs" }, { label: "Button" }]} />
 */
export function Breadcrumb({ items, className, ...props }: Omit<ComponentProps<"nav">, "children"> & { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="zay-breadcrumb">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>{last || !item.href ? <span aria-current={last ? "page" : undefined}>{item.label}</span> : <a href={item.href}>{item.label}</a>}</li>
              {last ? null : (
                <li role="presentation" aria-hidden className="zay-breadcrumb-separator">
                  <ChevronRightIcon />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
