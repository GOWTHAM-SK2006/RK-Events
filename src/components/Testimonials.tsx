"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  MapPin,
  Calendar,
} from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/data/cateringData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-cream-200 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Quote className="w-3.5 h-3.5 text-gold-600" />
            <span>Host Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight leading-tight mb-4">
            Words of Appreciation
          </h2>

          <p className="text-base text-charcoal-700 leading-relaxed mb-6">
            Hear from families and hosts who trusted RK Catering with their most
            cherished celebrations.
          </p>

          {/* Sample Placeholder Disclosure */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-charcoal-700 text-xs">
            <Info className="w-3.5 h-3.5 text-gold-700 shrink-0" />
            <span>
              <strong>Note:</strong> Demonstration sample reviews illustrating client
              feedback for different event types.
            </span>
          </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-luxury max-w-3xl mx-auto">
          {/* Big Quote Icon in Background */}
          <div className="absolute top-6 right-8 text-gold-500/15 pointer-events-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 flex flex-col justify-between"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="font-serif text-lg sm:text-2xl text-maroon-950 italic leading-relaxed mb-8">
                “{current.comment}”
              </p>

              {/* Author & Event Meta */}
              <div className="pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-maroon-900">
                    {current.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-charcoal-600 mt-0.5">
                    <span className="font-medium text-gold-700">{current.role}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-600" />
                      {current.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-gold-500/30 text-maroon-900 text-xs font-semibold self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  <span>{current.eventType}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream-300">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-maroon-900"
                      : "w-2.5 bg-gold-500/40 hover:bg-gold-500/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-cream-200 hover:bg-maroon-900 text-maroon-900 hover:text-gold-300 border border-gold-500/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-cream-200 hover:bg-maroon-900 text-maroon-900 hover:text-gold-300 border border-gold-500/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

