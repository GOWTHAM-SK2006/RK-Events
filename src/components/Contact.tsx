"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  Users,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { businessConfig } from "@/data/cateringData";

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: initialService || "Wedding Catering",
    eventDate: "",
    guests: "250",
    mealType: "Traditional Banana Leaf Feast",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    "Wedding Catering",
    "Birthday Party Catering",
    "Engagement Catering",
    "Corporate Events",
    "Family Functions (Grahapravesam / Seemandham)",
    "Traditional South Indian Catering",
    "Buffet Catering",
    "Event Management & Stage Decor",
    "Other Special Celebration",
  ];

  const mealOptions = [
    "Traditional Banana Leaf Feast (Elai Saapadu)",
    "Multi-Cuisine Grand Buffet",
    "Both (Banana Leaf Lunch + Evening Buffet)",
    "Breakfast / Morning Tiffin Only",
    "High-Tea & Snacks Counter",
    "Custom Menu",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Catering Enquiry for RK Catering & Events Management*
---------------------------------------
*Name:* ${formData.name || "Guest"}
*Contact Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || "To be decided"}
*Approx. Guests:* ${formData.guests}
*Preferred Service:* ${formData.mealType}
*Additional Notes:* ${formData.message || "None"}
---------------------------------------
Sent via RK Catering Website`;

    return `https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-kolam-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-gold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Plan Your Milestone</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 tracking-tight leading-tight mb-5">
            Let&apos;s Make Your Celebration{" "}
            <span className="gold-gradient-text italic">Special</span>
          </h2>

          <p className="text-base text-cream-200/80 leading-relaxed">
            Reach out to discuss dates, personalized menu tasting, or request an
            instant quotation for your event in Udumalpet and the Kongu region.
          </p>
        </div>

        {/* Main Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="p-8 rounded-3xl bg-maroon-900/70 border border-gold-500/30 shadow-luxury space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Official Business Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-100 mb-2">
                  {businessConfig.name}
                </h3>
                <p className="text-xs text-cream-200/70 leading-relaxed">
                  Catering & Events Management in Devanurpudur, Udumalpet.
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-500/15">
                <div className="p-2.5 rounded-xl bg-maroon-950 text-gold-400 border border-gold-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Location
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-100 leading-snug">
                    {businessConfig.location.landmark},
                    <br />
                    {businessConfig.location.village}, {businessConfig.location.taluk},{" "}
                    {businessConfig.location.state} - {businessConfig.location.pincode}
                  </p>
                  <p className="text-[11px] text-cream-300/60 mt-1">
                    Serving Udumalpet, Pollachi, Tiruppur, Dharapuram & nearby areas.
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-500/15">
                <div className="p-2.5 rounded-xl bg-maroon-950 text-gold-400 border border-gold-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Phone Numbers
                  </h4>
                  <div className="space-y-0.5">
                    <a
                      href={`tel:${businessConfig.contact.primaryPhone.replace(/\s+/g, "")}`}
                      className="block text-sm font-semibold text-cream-100 hover:text-gold-300 transition-colors"
                    >
                      {businessConfig.contact.primaryPhone}
                    </a>
                    <a
                      href={`tel:${businessConfig.contact.secondaryPhone.replace(/\s+/g, "")}`}
                      className="block text-xs text-cream-200/80 hover:text-gold-300 transition-colors"
                    >
                      {businessConfig.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-500/15">
                <div className="p-2.5 rounded-xl bg-maroon-950 text-gold-400 border border-gold-500/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Hours & Inquiries
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-100">
                    {businessConfig.contact.workingHours}
                  </p>
                  <a
                    href={`mailto:${businessConfig.contact.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 mt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{businessConfig.contact.email}</span>
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-gold-500/15">
                <a
                  href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hello RK Catering, I would like to enquire about your event catering services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-cream-50 font-bold text-xs uppercase tracking-wider border border-emerald-500/40 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Card Placeholder */}
            <div className="rounded-3xl bg-maroon-900/50 border border-gold-500/25 overflow-hidden p-3 shadow-luxury">
              <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-gold-500/20">
                <iframe
                  title="RK Catering Location Map - Devanurpudur, Udumalpet"
                  src="https://maps.google.com/maps?q=Devanurpudur,%20Udumalpet,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter saturate-150 contrast-105"
                />
              </div>

              <div className="p-3 pt-4 flex items-center justify-between text-xs">
                <span className="text-cream-200/80">
                  Devanurpudur, Udumalpet, Tamil Nadu
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Devanurpudur+Udumalpet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-semibold"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quotation & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-maroon-900/80 border border-gold-500/30 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-cream-100 mb-1">
                  Send Event Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/70">
                  Fill in your celebration details. You can submit directly or send
                  via WhatsApp for an immediate response.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-cream-100 mb-2">
                    Thank You, {formData.name || "Valued Host"}!
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-200/80 max-w-md mb-6 leading-relaxed">
                    Your enquiry for{" "}
                    <strong className="text-gold-300">{formData.eventType}</strong> on{" "}
                    <strong className="text-gold-300">{formData.eventDate || "your date"}</strong> has
                    been recorded. For fastest confirmation, message us directly on WhatsApp:
                  </p>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors mb-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Pre-filled Details to WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gold-400 hover:text-gold-300 underline pt-2"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. R. Karthik"
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 placeholder:text-cream-300/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 placeholder:text-cream-300/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-maroon-950 text-cream-100">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Guest Count */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="e.g. 150 / 500 / 1200"
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 placeholder:text-cream-300/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    {/* Meal / Service Preference */}
                    <div>
                      <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                        Dining Service Style
                      </label>
                      <select
                        name="mealType"
                        value={formData.mealType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        {mealOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-maroon-950 text-cream-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                      Specific Requirements or Venue Location
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention venue hall name, specific sweets or items desired, live counters, etc."
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-gold-500/30 text-cream-100 placeholder:text-cream-300/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    {/* Primary WhatsApp Action */}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp</span>
                    </a>

                    {/* Standard Submit Button */}
                    <button
                      type="submit"
                      className="sm:w-44 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-shimmer text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:opacity-95 transition-all transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Form</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-cream-300/60 text-center pt-2">
                    No spam. Your contact details are strictly used to coordinate your catering enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

