"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Eye,
  Sparkles,
  Maximize2,
  Filter,
} from "lucide-react";
import { galleryData, GalleryItem } from "@/data/cateringData";
import Lightbox from "./Lightbox";

type CategoryFilter = "all" | "banana-leaf" | "buffet" | "carvings" | "weddings" | "decor";

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Highlights", value: "all" },
  { label: "Banana Leaf Feasts", value: "banana-leaf" },
  { label: "Buffet & Carvings", value: "carvings" },
  { label: "Weddings & Banquets", value: "weddings" },
  { label: "Event Decor & Styling", value: "decor" },
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(
    null
  );

  const filteredItems =
    selectedFilter === "all"
      ? galleryData
      : galleryData.filter((item) => {
          if (selectedFilter === "carvings") {
            return item.category === "carvings" || item.category === "buffet";
          }
          return item.category === selectedFilter;
        });

  return (
    <section id="gallery" className="py-24 bg-cream-200 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-maroon-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight leading-tight mb-5">
            Glimpses of Celebrations
          </h2>

          <p className="text-base text-charcoal-700 leading-relaxed">
            Witness the art of authentic catering in action. From traditional banana
            leaf wedding halls in Udumalpet to handcrafted fruit centerpieces and
            reception banquets.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => {
            const isActive = selectedFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-maroon-900 text-gold-300 border-gold-500 shadow-luxury"
                    : "bg-white text-charcoal-700 border-gold-500/20 hover:border-gold-500/50 hover:bg-cream-100"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-luxury border-2 border-gold-500/20 hover:border-gold-500 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Real Local Badge */}
                {item.isRealLocal && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-maroon-950 font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>RK Local Event</span>
                    </span>
                  </div>
                )}

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-maroon-950/70 border border-gold-500/40 text-gold-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-cream-100">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold group-hover:text-gold-300 transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-200/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Real Authenticity Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-600">
            Featuring authentic dining halls & setups by RK Catering & Events Management,
            Devanurpudur, Udumalpet.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </section>
  );
}

