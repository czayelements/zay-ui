"use client";

import { useEffect, useRef, useState } from "react";

/** A miniature of a block: the real preview scaled down to the width of its card. */
export function BlockThumb({ src }: { src: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1200);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} className="dx-thumb" aria-hidden>
      <iframe title="" tabIndex={-1} loading="lazy" src={src} style={{ transform: `scale(${scale})` }} />
    </div>
  );
}
