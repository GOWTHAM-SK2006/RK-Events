"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Utensils,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { businessConfig } from "@/data/cateringData";

export default function About() {
  const pillars = [
    {
      title: "Quality Food",
      description:
        "Prepared with uncompromised hygiene, cold-pressed oils, pure cow ghee, and farm-fresh ingredients to deliver authentic regional flavor in every bite.",
      icon: Utensils,
    },
    {
      title: "Memorable Celebrations",
      description:
        "Whether a grand wedding or a warm family gathering, we curate dining experiences that turn into cherished memories for hosts and guests alike.",
      icon: HeartHandshake,
    },
    {
      title: "Artistic Presentation",
      description:
        "From elaborate fruit & vegetable carving centerpieces to spotless traditional banana leaves and modern chaffing displays, our visual craft delights.",
      icon: Sparkles,
    },
    {
      title: "Attention to Detail",
      description:
        "Neat uniforms, attentive table service, timely food replenishment, and spotless cleanliness from the welcome drink to the dessert.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream-200 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>About RK Catering & Events</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight leading-tight mb-6">
            A Passion for Food. <br />
            <span className="text-gold-600 italic">A Commitment to Excellence.</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Located in Devanurpudur, Udumalpet,{" "}
            <strong className="text-maroon-900 font-semibold">
              RK Catering & Events Management
            </strong>{" "}
            brings traditional culinary excellence and modern event styling to
            celebrations across the Kongu region. We believe that genuine hospitality
            and flavorful food are the true soul of every Indian celebration.
          </p>
        </div>

        {/* Visual & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Real Photos Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            {/* Main Feature Photo: Banana Leaf Dining Hall */}
            <div className="col-span-12 sm:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-luxury border-2 border-gold-500/30 group">
              <Image
                src="/images/rk/wedding-hall-serving.jpg"
                alt="Traditional banana leaf feast served by RK Catering staff"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2.5 py-1 rounded bg-maroon-800/90 text-gold-300 text-[11px] font-semibold tracking-wider uppercase mb-1">
                  Traditional Dining
                </span>
                <p className="text-xs text-cream-100 font-medium leading-snug">
                  Attentive banana leaf service with our trained catering team
                </p>
              </div>
            </div>

            {/* Right Stack: Carving Peacock & Team Breakfast */}
            <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
              {/* Peacock Carving Setup */}
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-luxury border-2 border-gold-500/30 group">
                <Image
                  src="/images/rk/carving-peacock.jpg"
                  alt="Artistic peacock vegetable and fruit carving setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-gold-600/90 text-maroon-950 text-[10px] font-bold uppercase tracking-wider">
                    Buffet Carving
                  </span>
                  <p className="text-[11px] text-cream-100 font-medium">
                    Handcrafted fruit centerpieces
                  </p>
                </div>
              </div>

              {/* Team in Uniform with Breakfast Spread */}
              <div className="relative h-44 sm:h-44 rounded-2xl overflow-hidden shadow-luxury border-2 border-gold-500/30 group">
                <Image
                  src="/images/rk/team-breakfast.jpg"
                  alt="RK Catering team in uniform with breakfast spread"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-maroon-800/90 text-gold-300 text-[10px] font-bold uppercase tracking-wider">
                    Our Team
                  </span>
                  <p className="text-[11px] text-cream-100 font-medium">
                    Clean uniform & professional etiquette
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Commitment */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gold-500/20 shadow-luxury relative">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2">
                Rooted in Devanurpudur, Udumalpet
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We take immense pride in understanding the rich food traditions of
                Kongu Nadu and Tamil Nadu. Every sambar, rasam, kootu, biryani, and
                payasam is prepared with traditional recipes, authentic stone-ground
                spices, and balanced seasoning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-maroon-900 text-cream-100 border border-gold-500/30 shadow-luxury relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-gold-500/10 pointer-events-none" />
              <p className="font-serif italic text-base sm:text-lg text-gold-300 mb-3 leading-snug">
                “Food is the greatest blessing shared among families. When your
                guests leave your celebration with full hearts and satisfied smiles,
                our mission is accomplished.”
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gold-500/20">
                <div className="w-9 h-9 rounded-full bg-gold-500 text-maroon-950 flex items-center justify-center font-bold font-serif text-sm">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-cream-100">
                    RK Catering & Events
                  </h4>
                  <p className="text-[11px] text-gold-400">Devanurpudur, Udumalpet</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal-700 pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Devanurpudur (Near GKN Hr. Sec. School)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>Punctual Setup Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cream-300/80 border border-gold-500/30 flex items-center justify-center text-maroon-800 group-hover:bg-maroon-800 group-hover:text-gold-300 transition-colors mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-maroon-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

