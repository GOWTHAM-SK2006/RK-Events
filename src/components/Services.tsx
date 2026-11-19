"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar,
  UtensilsCrossed,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/cateringData";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-gold">
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold-400" />
            <span>Our Bespoke Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 tracking-tight leading-tight mb-5">
            Catering & Event Management for{" "}
            <span className="gold-gradient-text italic">Every Milestone</span>
          </h2>

          <p className="text-base text-cream-200/80 leading-relaxed">
            From intimate home ceremonies in Udumalpet to grand wedding banquets
            across the Kongu region, we curate culinary artistry and seamless event
            hospitality tailored precisely to your guest count and traditions.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl bg-maroon-900/60 border border-gold-500/25 hover:border-gold-400 overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div>
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-maroon-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-[11px] font-semibold tracking-wider uppercase">
                      Category 0{index + 1}
                    </span>
                  </div>

                  {/* Ideal For Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-medium text-gold-200/90 bg-maroon-900/90 px-2 py-0.5 rounded backdrop-blur-xs line-clamp-1 border border-gold-500/20">
                      {service.idealFor}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-cream-200/75 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-1.5 border-t border-gold-500/15 pt-3">
                    {service.features.slice(0, 3).map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-[11px] text-cream-200/90 leading-tight"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-maroon-800 hover:bg-gold-500 text-gold-300 hover:text-maroon-950 font-semibold text-xs tracking-wider uppercase border border-gold-500/30 hover:border-gold-500 transition-all duration-300 group/btn"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire for {service.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 text-center p-6 rounded-2xl bg-maroon-900/40 border border-gold-500/20 max-w-3xl mx-auto backdrop-blur-xs">
          <p className="text-xs sm:text-sm text-cream-200">
            <strong className="text-gold-400 font-semibold">Custom Packages Available:</strong>{" "}
            We accommodate guest counts from 50 to 5,000+ with tailored setups, whether you require pure catering service or complete event management with stage and hall arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}

