"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark"     /* Forces dark mode on first load */
      enableSystem={false}    /* Disables system sync to ensure your default stays firm */
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}