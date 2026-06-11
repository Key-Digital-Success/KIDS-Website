import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-purple/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* CTA Section */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-800">
          <div className="rounded-3xl bg-gradient-to-r from-brand-blue to-brand-purple p-[1px]">
            <div className="rounded-3xl bg-white dark:bg-slate-950 px-8 py-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Start Your Digital Success Journey
                  </h2>

                  <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl">
                    Build industry-ready skills through internationally
                    recognized programs and professional certifications.
                  </p>
                </div>

                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                KEY INSTITUTE
              </span>
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7">
              Empowering professional and academic excellence through
              innovative digital learning solutions and strategic global
              partnerships.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                <FaInstagram size={15} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Areas */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Learning Areas
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Digital Literacy
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Professional Certifications
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Workplace Productivity
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors"
                >
                  Career Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-brand-blue mt-1 shrink-0"
                />
                <span className="text-slate-600 dark:text-slate-400">
                  info@keyinstitutedigital.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-brand-blue mt-1 shrink-0"
                />
                <span className="text-slate-600 dark:text-slate-400">
                  +94 XX XXX XXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-brand-blue mt-1 shrink-0"
                />
                <span className="text-slate-600 dark:text-slate-400">
                  Colombo, Sri Lanka
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Globe
                  size={18}
                  className="text-brand-blue mt-1 shrink-0"
                />
                <span className="text-slate-600 dark:text-slate-400">
                  Strategic Partner: Thakral Global Learning (TGL)
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} Key Institute of Digital Success.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                Support
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}