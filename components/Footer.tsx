import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* CTA Section */}
        <div className="py-8 md:py-12 border-b border-slate-200 dark:border-slate-800">
          <div className="rounded-3xl bg-gradient-to-r from-brand-blue to-brand-purple p-[1px]">
            <div className="rounded-3xl bg-white dark:bg-slate-950 px-8 py-10 md:px-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                <div className="max-w-2xl">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Start Your Digital Success Journey
                  </h2>
                  <p className="mt-2 md:mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
                    Building future-ready digital skills through Microsoft 365 and Cambridge learning pathways.
                  </p>
                </div>

                <Link
                  href="/programs"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-white font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shrink-0"
                >
                  Explore Programs
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        {/* Mobile (base) & Tablet (md): Centered alignments with text-center */}
        {/* Desktop (lg): Restores precise asymmetric 12-column mesh with left alignment */}
        <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-8 text-center lg:text-left">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-start text-center lg:text-left">
            <div>
              <h2 className="text-xl font-extrabold tracking-wider">
                <span className="bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 bg-clip-text text-transparent">
                  KEY INSTITUTE OF DIGITAL SUCCESS
                </span>
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                Empowering students with practical digital skills, Microsoft 365 training, and internationally recognized learning pathways.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-brand-blue hover:text-white dark:hover:text-white text-slate-600 dark:text-slate-400 transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-brand-blue hover:text-white dark:hover:text-white text-slate-600 dark:text-slate-400 transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://www.instagram.com/keydigitalsucess/"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-brand-blue hover:text-white dark:hover:text-white text-slate-600 dark:text-slate-400 transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          {/* Aligned to row 1 on tablet screens via md:order-2 */}
          <div className="lg:col-span-3 md:order-2 lg:order-none text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
              Contact Us
            </h3>
            <div className="mt-3 space-y-2.5 text-sm flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3 group justify-center lg:justify-start">
                <Mail size={16} className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:keydigitalsuccess@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors break-all">
                  keydigitalsuccess@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 group justify-center lg:justify-start">
                <Phone size={16} className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+94710525968" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  +94 71 052 5968
                </a>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin size={16} className="text-brand-blue shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">
                  KIDS, Fair Road, Diyathalawa
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          {/* Aligned to row 2 on tablet screens via md:order-3 */}
          <div className="lg:col-span-2 lg:pl-4 md:order-3 lg:order-none text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          {/* Aligned to row 2 on tablet screens via md:order-4 */}
          <div className="lg:col-span-3 md:order-4 lg:order-none text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
              Programs
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link href="/programs#m365" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  MS 365 Certification
                </Link>
              </li>
              <li>
                <Link href="/programs#cambridge" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  Young Learners English (YLE)
                </Link>
              </li>
              <li>
                <Link href="/programs#cambridge" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                  Cambridge English Assessments
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-900 py-6">
          <div className="flex items-center justify-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center tracking-wide">
              © {new Date().getFullYear()} KIDS All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}