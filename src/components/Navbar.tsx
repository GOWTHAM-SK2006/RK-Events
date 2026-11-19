"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/data/cateringData";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MessageCircle,
  Calendar,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Menu Experience", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-maroon-900/95 backdrop-blur-md shadow-luxury py-3 border-b border-gold-500/30"
            : "bg-gradient-to-b from-maroon-950/80 via-maroon-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-500 shadow-gold transition-transform duration-300 group-hover:scale-105 bg-maroon-800 flex-shrink-0">
                <Image
                  src="/images/rk/logo.jpg"
                  alt="RK Catering & Events Management Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-cream-100 group-hover:text-gold-300 transition-colors leading-tight">
                  RK CATERING
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-medium">
                  & Events Management • Udumalpet
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-cream-200/90 hover:text-gold-300 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${businessConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-xs font-semibold text-cream-200 hover:text-gold-300 px-3 py-2 rounded-lg border border-gold-500/30 hover:border-gold-500 transition-all duration-200 bg-maroon-950/40"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-maroon-950 bg-gold-shimmer hover:opacity-95 shadow-gold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-maroon-950 bg-gold-shimmer shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-cream-100 hover:text-gold-400 hover:bg-maroon-800/60 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold-400" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-gold-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-maroon-950 border-l border-gold-500/30 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-gold-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-500 relative bg-maroon-800">
                  <Image
                    src="/images/rk/logo.jpg"
                    alt="RK Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-cream-100">
                    RK CATERING
                  </h3>
                  <p className="text-[10px] text-gold-400">Devanurpudur, Udumalpet</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-cream-200 hover:text-gold-400 hover:bg-maroon-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-cream-100 hover:text-gold-300 hover:bg-maroon-900/60 font-medium text-sm transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-500/60" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-gold-500/20 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-shimmer text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Event Quote</span>
            </button>

            <a
              href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello RK Catering, I would like to enquire about catering services for our upcoming event in Udumalpet."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-700 text-cream-50 font-semibold text-xs border border-emerald-500/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-[11px] text-cream-300/60">
                {businessConfig.location.landmark}, {businessConfig.location.village}
              </p>
              <p className="text-[11px] text-gold-400 font-medium">
                {businessConfig.contact.primaryPhone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

