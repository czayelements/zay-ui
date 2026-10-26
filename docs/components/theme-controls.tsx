"use client";

import { useEffect, useState } from "react";

import { Button, Popover, PopoverContent, PopoverTrigger, Tooltip, TooltipContent, TooltipTrigger } from "@czayelements/zay-ui";

const hues = [
  { name: "Indigo", hue: 268 },
  { name: "Blue", hue: 245 },
  { name: "Cyan", hue: 210 },
  { name: "Emerald", hue: 160 },
  { name: "Amber", hue: 70 },
  { name: "Rose", hue: 10 },
  { name: "Fuchsia", hue: 330 },
];

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

const PaletteIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 1.75a6.25 6.25 0 1 0 0 12.5c.9 0 1.25-.65 1.25-1.2 0-.8-.55-1.05-.55-1.8 0-.7.6-1.25 1.35-1.25h1.2a2.5 2.5 0 0 0 2.5-2.5C13.75 4.2 11.25 1.75 8 1.75Z" />
    <circle cx="5" cy="7.25" r=".6" fill="currentColor" />
    <circle cx="7.25" cy="4.75" r=".6" fill="currentColor" />
    <circle cx="10.5" cy="5" r=".6" fill="currentColor" />
  </svg>
);

/** Dark mode toggle and the accent picker. The accent is one number: --hue. */
export function ThemeControls() {
  const [dark, setDark] = useState(false);
  const [hue, setHue] = useState(268);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const stored = Number(document.documentElement.style.getPropertyValue("--hue"));
    if (stored) setHue(stored);
  }, []);

  const pickHue = (next: number) => {
    document.documentElement.style.setProperty("--hue", String(next));
    setHue(next);
    try {
      localStorage.setItem("zay-ui-hue", String(next));
    } catch {
      /* not remembered */
    }
  };

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
      <Popover>
        <Tooltip>
          <TooltipTrigger render={<PopoverTrigger render={<Button variant="ghost" size="sm" icon aria-label="Accent colour" />} />}>
            <PaletteIcon />
          </TooltipTrigger>
          <TooltipContent>Accent colour</TooltipContent>
        </Tooltip>
        <PopoverContent align="end" className="!p-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Accent colour</p>
          <div className="flex gap-2">
            {hues.map((h) => (
              <button
                key={h.hue}
                type="button"
                className="dx-swatch"
                style={{ backgroundColor: `oklch(0.58 0.2 ${h.hue})` }}
                aria-label={h.name}
                aria-pressed={hue === h.hue}
                onClick={() => pickHue(h.hue)}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            One variable: <code className="font-mono">--hue: {hue}</code>
          </p>
        </PopoverContent>
      </Popover>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="sm" icon aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleDark} />}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </TooltipTrigger>
        <TooltipContent>{dark ? "Light theme" : "Dark theme"}</TooltipContent>
      </Tooltip>
    </div>
  );
}
