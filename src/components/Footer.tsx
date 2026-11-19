"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { businessConfig, servicesData } from "@/data/cateringData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Signature Menu", href: "#menu" },
    { name: "Event Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact & Quote", href: "#contact" },
  ];

  return (
    <footer className="bg-maroon-950 text-cream-200 border-t-2 border-gold-500/30 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-500/20">
          {/* Brand Info (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500 shadow-gold bg-maroon-800 flex-shrink-0">
                <Image
                  src="/images/rk/logo.jpg"
                  alt="RK Catering Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide text-cream-100">
                  RK CATERING
                </h3>
                <p className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">
                  & Events Management
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/75 leading-relaxed">
              Premium catering and event coordination based in Devanurpudur,
              Udumalpet. Delivering unforgettable South Indian culinary heritage,
              royal banquets, and genuine hospitality for every life celebration.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest block mb-2">
                Service Radius
              </span>
              <p className="text-xs text-cream-200/70">
                Devanurpudur • Udumalpet • Pollachi • Tiruppur • Dharapuram • Palani
              </p>
            </div>
          </div>

          {/* Quick Links (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-cream-100 uppercase tracking-wider text-gold-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-200/80 hover:text-gold-300 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-cream-100 uppercase tracking-wider text-gold-300">
              Catering Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="#services"
                    className="text-cream-200/80 hover:text-gold-300 transition-colors inline-block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-cream-100 uppercase tracking-wider text-gold-300">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-cream-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {businessConfig.location.landmark}, {businessConfig.location.village},{" "}
                  {businessConfig.location.taluk}, Tamil Nadu -{" "}
                  {businessConfig.location.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${businessConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-gold-300 transition-colors font-medium text-cream-100"
                >
                  {businessConfig.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {businessConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{businessConfig.contact.workingHours}</span>
              </div>
            </div>

            {/* Reference Badge */}
            <div className="pt-2">
              <a
                href={businessConfig.social.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-maroon-900 border border-gold-500/30 text-[11px] text-gold-300 hover:text-gold-200 hover:border-gold-400 transition-colors"
              >
                <span>View on Justdial Business Directory</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <p>
            © {new Date().getFullYear()} {businessConfig.name}. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gold-400">
              Devanurpudur, Udumalpet • Tamil Nadu, India
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-maroon-900 hover:bg-gold-500 text-gold-400 hover:text-maroon-950 border border-gold-500/30 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

