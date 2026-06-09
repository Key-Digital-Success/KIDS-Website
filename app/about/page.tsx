import { ShieldAlert, Compass, Target, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">The Strategic Architecture</h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Key Institute of Digital Success delivers modern, enterprise-ready IT education through our strategic partnership channel alignment with Thakral Global Learning (TGL).
        </p>
      </div>

      {/* Dual Mission Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Target className="w-8 h-8 text-brand-blue mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Operational Mission</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            To eliminate the gap separating legacy textbook ICT knowledge paths from live technical infrastructure metrics. We do not just build students; we deploy certified administrators into cloud networks.
          </p>
        </div>
        <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Compass className="w-8 h-8 text-brand-purple mb-4" />
          <h3 className="text-xl font-bold mb-2">The Architectural Vision</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            To scale as the primary decentralized EdTech pipeline node supporting direct validation tracks under strict global Microsoft Cloud and Cambridge standards.
          </p>
        </div>
      </div>

      {/* Partnership Block */}
      <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
          <Layers className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Thakral Global Learning (TGL) Lineage</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Through structural synergy with Thakral Global Learning, our deployment curricula leverage robust, proven educational models. This alignment unlocks enterprise technical materials and authentic exam validation blueprints directly for our student base.
          </p>
        </div>
      </div>
    </div>
  );
}