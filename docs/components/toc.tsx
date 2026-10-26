"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Heading = { id: string; text: string; depth: number };

/** "On this page": reads the h2/h3 of the main content and highlights the one in view. */
export function Toc() {
  const path = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("main h2[id], main h3[id]")];
    setHeadings(nodes.map((n) => ({ id: n.id, text: n.textContent ?? "", depth: Number(n.tagName[1]) })));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [path]);

  if (!headings.length) return null;
  return (
    <nav className="dx-toc" aria-label="On this page">
      <p>On this page</p>
      {headings.map((h) => (
        <a key={h.id} href={`#${h.id}`} data-depth={h.depth} data-active={active === h.id ? "" : undefined}>
          {h.text}
        </a>
      ))}
    </nav>
  );
}
