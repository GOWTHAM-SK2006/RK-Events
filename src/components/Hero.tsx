"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  ChevronDown,
  ShieldCheck,
  Utensils,
  Award,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import { businessConfig } from "@/data/cateringData";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-950 pt-20 pb-16"
    >
      {/* Background Image with Slow Ambient Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Royal Indian Wedding Feast and Catering Setup by RK Catering"
            fill
            priority
            className="object-cover object-center opacity-45 brightness-90 filter"
          />
        </motion.div>

        {/* Multi-layered Gradients: Deep Maroon Vignette + Gold Accent Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/75 to-maroon-950/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-maroon-950/60 to-maroon-950 opacity-90" />
        <div className="absolute inset-0 bg-kolam-pattern opacity-15" />
      </div>

      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-24 left-6 hidden xl:block w-24 h-24 border-t-2 border-l-2 border-gold-500/30 pointer-events-none" />
      <div className="absolute top-24 right-6 hidden xl:block w-24 h-24 border-t-2 border-r-2 border-gold-500/30 pointer-events-none" />
      <div className="absolute bottom-12 left-6 hidden xl:block w-24 h-24 border-b-2 border-l-2 border-gold-500/30 pointer-events-none" />
      <div className="absolute bottom-12 right-6 hidden xl:block w-24 h-24 border-b-2 border-r-2 border-gold-500/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium tracking-wide shadow-gold mb-6 backdrop-blur-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>Devanurpudur, Udumalpet • Tamil Nadu</span>
          <span className="w-1 h-1 rounded-full bg-gold-400" />
          <span className="text-cream-200">Kongu Culinary Heritage</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream-100 leading-[1.15] mb-6 max-w-4xl"
        >
          Making Every Celebration{" "}
          <span className="gold-gradient-text block sm:inline italic">
            Deliciously Memorable
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base sm:text-xl text-cream-200/90 font-normal max-w-2xl leading-relaxed mb-10"
        >
          Exceptional Catering & Event Experiences for Your Special Moments.
          From traditional banana leaf muhurtham feasts to lavish reception buffets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-shimmer text-maroon-950 font-bold text-sm tracking-wider uppercase shadow-gold hover:brightness-105 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Services</span>
          </Link>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-maroon-900/90 hover:bg-maroon-800 text-gold-300 hover:text-gold-200 font-bold text-sm tracking-wider uppercase border border-gold-500/50 hover:border-gold-400 transition-all transform hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm"
          >
            <CalendarCheck className="w-4 h-4 text-gold-400" />
            <span>Plan Your Event / Get Quote</span>
          </button>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-cream-200 hover:text-white font-medium text-sm border border-cream-200/20 hover:border-cream-200/50 hover:bg-white/5 transition-all"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Contact Us</span>
          </Link>
        </motion.div>

        {/* Value Highlights Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-gold-500/20"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-maroon-900/40 border border-gold-500/10 backdrop-blur-xs">
            <div className="p-2 rounded-lg bg-maroon-800/80 text-gold-400 border border-gold-500/20">
              <Utensils className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-cream-100">Banana Leaf & Buffet</p>
              <p className="text-[11px] text-cream-300/70">Custom festive spreads</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-maroon-900/40 border border-gold-500/10 backdrop-blur-xs">
            <div className="p-2 rounded-lg bg-maroon-800/80 text-gold-400 border border-gold-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-cream-100">Artistic Carvings</p>
              <p className="text-[11px] text-cream-300/70">Signature buffet setups</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-maroon-900/40 border border-gold-500/10 backdrop-blur-xs">
            <div className="p-2 rounded-lg bg-maroon-800/80 text-gold-400 border border-gold-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-cream-100">Strict Hygiene</p>
              <p className="text-[11px] text-cream-300/70">Uniformed servers</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-maroon-900/40 border border-gold-500/10 backdrop-blur-xs">
            <div className="p-2 rounded-lg bg-maroon-800/80 text-gold-400 border border-gold-500/20">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-cream-100">End-to-End Care</p>
              <p className="text-[11px] text-cream-300/70">Catering & events</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold-400/80 mb-1 font-medium">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-gold-400/80" />
      </motion.div>
    </section>
  );
}

