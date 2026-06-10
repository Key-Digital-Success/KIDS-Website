import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-sm text-slate-400">
          Get in touch with our team for course details, admissions, and support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Cards */}
        <div className="lg:col-span-1 space-y-4">
          
          {/* Phone */}
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Call Us
              </p>
              <p className="text-sm font-semibold mt-0.5">
                +94 71 052 5968
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Email Us
              </p>
              <p className="text-sm font-semibold mt-0.5">
                keydigitalleraning@gmail.com
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/94710525968"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors group block"
          >
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-500">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-500">
                WhatsApp Support
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5 group-hover:underline">
                Start a Conversation
              </p>
            </div>
          </a>
        </div>

        {/* Location Section */}
        <div className="lg:col-span-2 glass-card p-4 rounded-3xl min-h-[300px] flex flex-col justify-between overflow-hidden relative">
          
          <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
            <MapPin className="w-10 h-10 text-slate-400 mb-3 animate-bounce" />
            
            <p className="text-sm font-bold">
              Key Institute of Digital Success
            </p>
            
            <p className="text-xs text-slate-400 max-w-xs mt-1">
              KIDS, Fair Road, Diyathalawa, Sri Lanka
            </p>

            <p className="text-[11px] text-slate-500 mt-3 max-w-sm">
              Training future-ready professionals in Microsoft 365, cloud tools,
              and digital productivity systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}