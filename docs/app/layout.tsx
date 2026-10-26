import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: { default: "czay-ui", template: "%s · czay-ui" },
  description: "A calm, tonal design system for React and Tailwind CSS v4, built on Base UI.",
};

/* Sets the theme before first paint so there is no flash. */
const themeScript = `try{var t=localStorage.getItem("czay-ui-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
