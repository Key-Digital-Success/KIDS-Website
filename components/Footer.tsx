import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              KEY INSTITUTE OF DIGITAL SUCCESS
            </span>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Empowering professional and academic competencies through strategic collaborations with Thakral Global Learning (TGL).
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Quick Infrastructure</h4>
            <div className="mt-4 space-y-2">
              <Link href="/courses" className="block text-sm text-slate-500 dark:text-slate-400 hover:text-brand-blue">Programs Ecosystem</Link>
              <Link href="/about" className="block text-sm text-slate-500 dark:text-slate-400 hover:text-brand-blue">Strategic Lineage</Link>
              <Link href="/contact" className="block text-sm text-slate-500 dark:text-slate-400 hover:text-brand-blue">Support Node</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Corporate Alignment</h4>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Partner Channel: Thakral Global Learning (TGL)<br />
              Primary Contact Endpoint: info@keyinstitutedigital.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Key Institute of Digital Success. All architectural elements locked. Developed with pure code architecture.
        </div>
      </div>
    </footer>
  );
}