"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/cateringData";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export default function Lightbox({
  item,
  items,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === "ArrowRight") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-maroon-900/80 hover:bg-gold-500 text-cream-100 hover:text-maroon-950 transition-colors border border-gold-500/40"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 z-20 p-3 rounded-full bg-maroon-900/70 hover:bg-gold-500 text-cream-100 hover:text-maroon-950 transition-colors border border-gold-500/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 z-20 p-3 rounded-full bg-maroon-900/70 hover:bg-gold-500 text-cream-100 hover:text-maroon-950 transition-colors border border-gold-500/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-maroon-950 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl"
      >
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {item.isRealLocal && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RK Catering Live Event</span>
              </span>
            </div>
          )}
        </div>

        {/* Caption Bar */}
        <div className="w-full p-5 bg-gradient-to-t from-maroon-950 to-maroon-900 border-t border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest">
                {item.categoryLabel}
              </span>
              <span className="text-cream-400 text-xs">•</span>
              <span className="text-xs text-cream-300">
                Image {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-cream-100">
              {item.title}
            </h3>
            <p className="text-xs text-cream-200/80 mt-1 max-w-xl">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="text-xs text-gold-400 font-medium">
              Udumalpet & Kongu Nadu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

