"use client";

import { MessageSquareCode } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/94710525968?text=Hello%20Key%20Institute!%20I%20would%20like%20more%20information%20on%20available%20batches."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageSquareCode className="w-6 h-6 animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap inline-block group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium text-sm">
        Chat Support
      </span>
    </a>
  );
}