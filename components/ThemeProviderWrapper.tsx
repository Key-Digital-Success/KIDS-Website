"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark"     /* Forces system default initialization straight to dark mode */
      enableSystem={false}    /* Turning off system overrides prevents light system bars from flashing on load */
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}