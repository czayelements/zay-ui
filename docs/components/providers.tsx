"use client";

import type { ReactNode } from "react";

import { Toaster, TooltipProvider } from "@czayelements/zay-ui";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <Toaster>{children}</Toaster>
    </TooltipProvider>
  );
}
