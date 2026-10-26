import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons.js";

/** The page numbers to show: always the first and last, the current page and its neighbours, "…" for gaps. */
export function pageRange(page: number, pageCount: number): (number | "gap")[] {
  const pages = new Set([1, pageCount, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pageCount));
  const sorted = [...pages].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1]! > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

/**
 * Page links. Controlled: you own `page` and handle `onPageChange`
 * (or render links yourself with `hrefFor`).
 */
export function Pagination({
  page,
  pageCount,
  onPageChange,
  hrefFor,
  className,
  ...props
}: Omit<ComponentProps<"nav">, "children" | "onChange"> & {
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
  hrefFor?: (page: number) => string;
}) {
  const item = (target: number, content: ReactNode, label?: string, current = false, disabled = false) => {
    const common = {
      className: "zay-page",
      "aria-label": label,
      "aria-current": current ? ("page" as const) : undefined,
      "aria-disabled": disabled || undefined,
    };
    return hrefFor ? (
      <a href={hrefFor(target)} {...common}>
        {content}
      </a>
    ) : (
      <button type="button" disabled={disabled} onClick={() => onPageChange?.(target)} {...common}>
        {content}
      </button>
    );
  };

  return (
    <nav aria-label="Pagination" className={className} {...props}>
      <ul className="zay-pagination">
        <li>{item(page - 1, <ChevronLeftIcon />, "Previous page", false, page <= 1)}</li>
        {pageRange(page, pageCount).map((n, i) => (
          <li key={i}>{n === "gap" ? <span className={cx("zay-page")} aria-hidden>…</span> : item(n, n, `Page ${n}`, n === page)}</li>
        ))}
        <li>{item(page + 1, <ChevronRightIcon />, "Next page", false, page >= pageCount)}</li>
      </ul>
    </nav>
  );
}
