import type { ComponentProps } from "react";

/* The few glyphs the components need, inlined so the package has no icon dependency. */

const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const CheckIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="M3 8.5 6.5 12 13 4.5" />
  </svg>
);

export const MinusIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="M3.5 8h9" />
  </svg>
);

export const ChevronDownIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

export const ChevronsUpDownIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m5 6.5 3-3 3 3M5 9.5l3 3 3-3" />
  </svg>
);

export const XIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m4 4 8 8M12 4l-8 8" />
  </svg>
);

export const InfoIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <circle cx="8" cy="8" r="6" />
    <path d="M8 7.25v3.5M8 5.2v.05" />
  </svg>
);

export const AlertIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="M8 2.5 14 13H2L8 2.5Z" />
    <path d="M8 6.75v2.75M8 11.4v.05" />
  </svg>
);

export const CheckCircleIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <circle cx="8" cy="8" r="6" />
    <path d="m5.5 8.25 1.75 1.75 3.25-3.5" />
  </svg>
);
