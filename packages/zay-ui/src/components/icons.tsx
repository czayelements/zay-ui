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

export const PlusIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="M8 3.5v9M3.5 8h9" />
  </svg>
);

export const ChevronUpIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m4 10 4-4 4 4" />
  </svg>
);

export const ChevronLeftIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m10 4-4 4 4 4" />
  </svg>
);

export const ChevronRightIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="m6 4 4 4-4 4" />
  </svg>
);

export const SearchIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <circle cx="7" cy="7" r="4.5" />
    <path d="m10.5 10.5 3 3" />
  </svg>
);

export const ArrowRightIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const EllipsisIcon = (props: ComponentProps<"svg">) => (
  <svg {...base} {...props} fill="currentColor" stroke="none">
    <circle cx="3.5" cy="8" r="1.25" />
    <circle cx="8" cy="8" r="1.25" />
    <circle cx="12.5" cy="8" r="1.25" />
  </svg>
);

/* ── 24px glyphs (lucide-style, 1.75 stroke) for demos, blocks and your own UI ── */

const base24 = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const UserIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

export const UsersIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const MailIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const SettingsIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M20 7h-9M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
  </svg>
);

export const CreditCardIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />
  </svg>
);

export const LogOutIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);

export const CopyIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const TrashIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

export const BellIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const StarIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const HomeIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" />
  </svg>
);

export const CalendarIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const BoldIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
  </svg>
);

export const ItalicIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M19 4h-9M14 20H5M15 4 9 20" />
  </svg>
);

export const UnderlineIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />
  </svg>
);

export const AlignLeftIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M21 6H3M15 12H3M17 18H3" />
  </svg>
);

export const AlignCenterIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M21 6H3M17 12H7M19 18H5" />
  </svg>
);

export const AlignRightIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M21 6H3M21 12H9M21 18H7" />
  </svg>
);

export const SparklesIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
  </svg>
);

export const ZapIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const ShieldIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

export const CodeIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const LayersIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const GithubIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const SunIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const DashboardIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

export const ChartIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);

export const TrendingUpIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" />
  </svg>
);

export const ArrowUpRightIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

export const MenuIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const InboxIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

export const FolderIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

export const FileIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

export const GlobeIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const LockIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const PaletteIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.75 1.5-1.5 0-.4-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.48-9-10-9z" />
  </svg>
);

export const PlusCircleIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" />
  </svg>
);

export const PlayIcon = (props: ComponentProps<"svg">) => (
  <svg {...base24} {...props}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);
