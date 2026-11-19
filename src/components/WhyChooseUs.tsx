"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  UtensilsCrossed,
  Palette,
  UserCheck,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { whyChooseUsData } from "@/data/cateringData";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  UtensilsCrossed,
  Palette,
  UserCheck,
  HeartHandshake,
  CheckCircle2,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-gold">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>The RK Catering Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 tracking-tight leading-tight mb-5">
            Why Choose RK Catering{" "}
            <span className="gold-gradient-text italic">& Events</span>
          </h2>

          <p className="text-base text-cream-200/80 leading-relaxed">
            In every celebration, food is the defining impression. We merge traditional
            South Indian hospitality with meticulous banqueting standards so you can
            be a proud and carefree host.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-7 rounded-2xl bg-gradient-to-b from-maroon-900/70 to-maroon-900/40 border border-gold-500/30 hover:border-gold-400/80 shadow-luxury hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Number Badge */}
                <span className="absolute top-6 right-6 font-serif text-3xl font-bold text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                  0{idx + 1}
                </span>

                {/* Icon */}
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-maroon-950 border border-gold-500/40 flex items-center justify-center text-gold-400 mb-5 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Stats Bar */}
        <div className="rounded-3xl bg-maroon-900/80 border border-gold-500/30 p-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-gold-500/20">
            <div className="p-3">
              <div className="inline-flex p-2 rounded-lg bg-maroon-950/80 text-gold-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream-100">
                100% Pure
              </h4>
              <p className="text-xs text-gold-400 mt-1">Farm Ingredients & Pure Ghee</p>
            </div>

            <div className="p-3 pt-6 lg:pt-3">
              <div className="inline-flex p-2 rounded-lg bg-maroon-950/80 text-gold-400 mb-2">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream-100">
                Uniformed
              </h4>
              <p className="text-xs text-gold-400 mt-1">Professional & Courteous Crew</p>
            </div>

            <div className="p-3 pt-6 lg:pt-3">
              <div className="inline-flex p-2 rounded-lg bg-maroon-950/80 text-gold-400 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream-100">
                Punctual
              </h4>
              <p className="text-xs text-gold-400 mt-1">Timely Delivery & Service</p>
            </div>

            <div className="p-3 pt-6 lg:pt-3">
              <div className="inline-flex p-2 rounded-lg bg-maroon-950/80 text-gold-400 mb-2">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream-100">
                50 - 5000+
              </h4>
              <p className="text-xs text-gold-400 mt-1">Flexible Guest Capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
