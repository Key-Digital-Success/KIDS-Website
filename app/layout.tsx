import "../styles/globals.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import PageTransitionEffect from "@/components/PageTransitionEffect";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Key Institute of Digital Success - Microsoft & Cambridge Academy",
  description: "Accelerate your professional journey with customized enterprise Microsoft 365 and elite global Cambridge training modules.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* Body tag matches global CSS definitions exactly, with zero hardcoded theme styles */}
      <body className={`${inter.className} overflow-x-hidden selection:bg-brand-blue/30 selection:text-brand-blue`}>
        <ThemeProviderWrapper>
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            
            <PageTransitionEffect>
              {children}
            </PageTransitionEffect>

            <Footer />
            <FloatingWhatsAppButton />
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}