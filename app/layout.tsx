import "../styles/globals.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionEffect from "@/components/PageTransitionEffect";
import { Inter } from "next/font/google";
// 1. Import the Metadata type
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// 2. Export the metadata object with your logo linked
export const metadata: Metadata = {
  title: "KIDS",
  description: "Welcome to Key Institute",
  icons: {
    icon: "/logo transparent.png", // Points directly to key-institute/public/logo white.png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Flash-Prevention Script */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && true)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        `}} />
      </head>
      <body className={`${inter.className} overflow-x-hidden selection:bg-brand-blue/30 selection:text-brand-blue`}>
        <ThemeProviderWrapper>
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            <PageTransitionEffect>
              {children}
            </PageTransitionEffect>
            <Footer />
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}