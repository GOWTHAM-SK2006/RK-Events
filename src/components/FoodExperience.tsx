"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Sparkles,
  Info,
  Check,
  Flame,
  Leaf,
  Drumstick,
  Coffee,
  MessageCircle,
} from "lucide-react";
import { foodShowcaseCategories, businessConfig } from "@/data/cateringData";

// Visual imagery mapping for food categories
const categoryImages: Record<string, string> = {
  "south-indian-meals": "/images/rk/wedding-hall-serving.jpg",
  "vegetarian-delights":
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
  "non-veg-specials":
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
  starters:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  "main-course":
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
  desserts:
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
  "live-counters": "/images/rk/carving-peacock.jpg",
};

export default function FoodExperience() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    foodShowcaseCategories[0].id
  );

  const activeCategory =
    foodShowcaseCategories.find((c) => c.id === activeCategoryId) ||
    foodShowcaseCategories[0];

  return (
    <section id="menu" className="py-24 bg-cream-200 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Utensils className="w-3.5 h-3.5 text-gold-600" />
            <span>Gastronomic Delights</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight leading-tight mb-5">
            Signature Food Experience
          </h2>

          <p className="text-base text-charcoal-700 leading-relaxed mb-6">
            A celebrated spread of authentic South Indian wedding meals, flavorful
            vegetarian feasts, regional non-veg specialties, and sizzling live
            counters.
          </p>

          {/* Editable Proposed Menu Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500/15 border border-gold-500/30 text-charcoal-800 text-xs text-left max-w-2xl">
            <Info className="w-4 h-4 text-gold-700 shrink-0" />
            <span>
              <strong>Showcase Menu:</strong> These items represent our proposed culinary
              options and popular banquet favorites. Every menu can be 100% customized
              to your family's personal tastes and traditions.
            </span>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {foodShowcaseCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-maroon-900 text-gold-300 border-gold-500 shadow-luxury"
                    : "bg-white text-charcoal-700 border-gold-500/20 hover:border-gold-500/50 hover:bg-cream-100"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    isActive
                      ? "bg-gold-500 text-maroon-950"
                      : "bg-cream-300 text-charcoal-600"
                  }`}
                >
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-gold-500/30 shadow-luxury"
          >
            {/* Visual Hero for this Category */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md group">
              <Image
                src={categoryImages[activeCategory.id] || "/images/rk/carving-peacock.jpg"}
                alt={activeCategory.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-cream-100">
                <span className="inline-block px-2.5 py-1 rounded bg-gold-500 text-maroon-950 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {activeCategory.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold leading-snug mb-1">
                  {activeCategory.name}
                </h3>
                <p className="text-xs text-cream-200/90 leading-relaxed">
                  {activeCategory.tagline}
                </p>
              </div>
            </div>

            {/* Menu Items List */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-4">
                {activeCategory.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-cream-100/70 hover:bg-cream-100 border border-gold-500/20 transition-all duration-200 flex items-start justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {/* Veg / Non-Veg Indicator Icon */}
                        <span
                          className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border ${
                            item.isVeg
                              ? "border-green-600 bg-green-50"
                              : "border-red-600 bg-red-50"
                          }`}
                          title={item.isVeg ? "Pure Vegetarian" : "Non-Vegetarian"}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? "bg-green-600" : "bg-red-600"
                            }`}
                          />
                        </span>

                        <h4 className="font-serif text-base font-bold text-maroon-900 group-hover:text-gold-700 transition-colors">
                          {item.name}
                        </h4>

                        {item.tag && (
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-800 border border-gold-500/30">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Customization CTA */}
              <div className="mt-6 pt-5 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-bold text-maroon-900">
                    Want to customize items in this category?
                  </p>
                  <p className="text-[11px] text-charcoal-600">
                    We accommodate special dietary needs, jain options, and guest counts.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello RK Catering, I am interested in customizing a menu featuring "${activeCategory.name}" for our event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-maroon-900 hover:bg-maroon-800 text-gold-300 hover:text-gold-200 text-xs font-bold uppercase tracking-wider border border-gold-500/40 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Chef on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

