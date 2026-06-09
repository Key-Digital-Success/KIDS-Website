"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={true}
      disableTransitionOnChange={false} // Allows smooth CSS transitions on toggle
    >
      {children}
    </NextThemesProvider>
  );
}