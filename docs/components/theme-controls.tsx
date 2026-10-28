"use client";

import { useEffect, useState } from "react";

import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@czayelements/zay-ui";

const SunIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
    <circle cx="8" cy="8" r="2.75" />
    <path d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9M12.6 3.4l-.9.9M4.3 11.7l-.9.9" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" />
  </svg>
);

/** Dark mode toggle. */
export function ThemeControls() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("zay-ui-theme", next ? "dark" : "light");
    } catch {
      /* not remembered */
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="sm" icon aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleDark} />}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </TooltipTrigger>
        <TooltipContent>{dark ? "Light theme" : "Dark theme"}</TooltipContent>
      </Tooltip>
    </div>
  );
}
