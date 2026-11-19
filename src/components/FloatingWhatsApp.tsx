"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { businessConfig } from "@/data/cateringData";

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {!tooltipDismissed && (
        <div className="mb-2 hidden sm:flex items-center gap-2 p-2.5 px-3.5 rounded-2xl bg-white text-maroon-950 text-xs font-semibold shadow-2xl border border-gold-500/40 animate-bounce duration-1000">
          <span>Need event catering in Udumalpet? Chat on WhatsApp!</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-charcoal-400 hover:text-charcoal-700 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA */}
      <a
        href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
          "Hello RK Catering, I would like to inquire about catering services for our upcoming event in Udumalpet."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl border-2 border-white/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp with RK Catering"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-emerald-700 animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-emerald-700" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

