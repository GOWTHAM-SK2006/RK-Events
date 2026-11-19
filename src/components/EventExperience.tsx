"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MessageCircle, Phone } from "lucide-react";
import { businessConfig } from "@/data/cateringData";

interface EventExperienceProps {
  onOpenQuoteModal: () => void;
}

export default function EventExperience({ onOpenQuoteModal }: EventExperienceProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-maroon-950 text-cream-100">
      {/* Background Hero Image with Dark Maroon Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury wedding banquet and event celebration by RK Catering"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950" />
        <div className="absolute inset-0 bg-kolam-pattern opacity-10" />
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Crown Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-gold"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Curated Celebration Excellence</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream-100 leading-tight mb-6 max-w-3xl"
        >
          Your Special Day Deserves{" "}
          <span className="gold-gradient-text italic">
            Something Extraordinary.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-cream-200/90 font-normal max-w-2xl leading-relaxed mb-10"
        >
          From intimate family gatherings to grand celebrations, create
          unforgettable moments with exceptional food and hospitality.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-shimmer text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:opacity-95 transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Event</span>
          </button>

          <a
            href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello RK Catering, I would like to plan an event and discuss catering menu packages."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-maroon-900/90 hover:bg-maroon-800 text-gold-300 font-bold text-xs uppercase tracking-wider border border-gold-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${businessConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-cream-200 hover:text-white text-xs font-semibold uppercase tracking-wider border border-cream-200/20 hover:border-cream-200/40 hover:bg-white/5 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{businessConfig.contact.primaryPhone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

