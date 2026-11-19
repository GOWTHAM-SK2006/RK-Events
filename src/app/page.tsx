"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FoodExperience from "@/components/FoodExperience";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import EventExperience from "@/components/EventExperience";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Wedding Catering");

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-cream-200 text-charcoal-800 relative selection:bg-gold-500 selection:text-maroon-950">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* About Section */}
      <About />

      {/* Our Services Section */}
      <Services
        onSelectService={(serviceName) => handleOpenQuoteModal(serviceName)}
      />

      {/* Signature Food Experience */}
      <FoodExperience />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Event Experience High-Impact Banner */}
      <EventExperience onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Gallery Showcase */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact & Map Section */}
      <Contact initialService={selectedService} />

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}

