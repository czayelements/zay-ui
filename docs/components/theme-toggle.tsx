"use client";

import { useEffect, useState } from "react";

import { Button } from "@czayelements/czay-ui";

/** Light/dark: toggles the `dark` class on <html> and remembers the choice. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("czay-ui-theme", next ? "dark" : "light");
        } catch {
          /* private mode: the choice just isn't remembered */
        }
        setDark(next);
      }}
    >
      {dark ? "Light" : "Dark"}
    </Button>
  );
}
