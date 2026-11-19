"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Calendar,
  Users,
  Utensils,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { businessConfig } from "@/data/cateringData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: QuoteModalProps) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [quoteData, setQuoteData] = useState({
    eventType: preselectedService || "Wedding Catering",
    guestCount: "350",
    serviceStyle: "Traditional Banana Leaf Feast",
    eventDate: "",
    eventLocation: "Udumalpet",
    name: "",
    phone: "",
    notes: "",
  });

  if (!isOpen) return null;

  const eventTypes = [
    "Wedding Catering",
    "Birthday Party Catering",
    "Engagement Catering",
    "Corporate Events",
    "Family Functions (Grahapravesam)",
    "Traditional South Indian Catering",
    "Buffet Catering",
    "Full Event Management",
  ];

  const serviceStyles = [
    "Traditional Banana Leaf Feast",
    "Royal Grand Buffet",
    "Both (Banana Leaf + Evening Buffet)",
    "Breakfast Tiffin Spread",
    "High-Tea & Live Counters",
  ];

  const guestCountPresets = ["50 - 150", "200 - 400", "500 - 800", "1000 - 2500", "3000+"];

  const buildWhatsAppMessage = () => {
    const text = `*New Quote Request - RK Catering & Events Management*
---------------------------------------
*Host Name:* ${quoteData.name || "Client"}
*Phone:* ${quoteData.phone || "Not provided"}
*Event Type:* ${quoteData.eventType}
*Guest Count:* ${quoteData.guestCount}
*Service Style:* ${quoteData.serviceStyle}
*Event Date:* ${quoteData.eventDate || "Date to be confirmed"}
*Venue/Town:* ${quoteData.eventLocation || "Udumalpet"}
*Special Requests:* ${quoteData.notes || "None"}
---------------------------------------
Please share customized menu options and quotation.`;

    return `https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-maroon-950 text-cream-100 rounded-3xl border border-gold-500/40 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-maroon-900/80 hover:bg-gold-500 text-cream-200 hover:text-maroon-950 transition-colors border border-gold-500/30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-900 border border-gold-500/30 text-gold-300 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Interactive Event Quote</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-cream-100">
            Plan Your Celebration Menu
          </h3>
          <p className="text-xs text-cream-200/70 mt-1">
            Step {step} of 3 • Custom menu proposal tailored to Udumalpet & Kongu region
          </p>

          {/* Step Indicator Progress Bar */}
          <div className="w-full bg-maroon-900 h-1.5 rounded-full mt-4 overflow-hidden border border-gold-500/20">
            <div
              className="bg-gold-shimmer h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-cream-100 mb-2">
              Quote Request Prepared!
            </h4>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-sm mx-auto mb-6 leading-relaxed">
              We have compiled your event preferences for {quoteData.eventType} with {quoteData.guestCount} guests.
            </p>

            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Instantly via WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="block mx-auto text-xs text-gold-400 hover:text-gold-300 underline"
            >
              Close this window
            </button>
          </motion.div>
        ) : (
          <div>
            {/* Step 1: Event Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-2">
                    Select Event Occasion
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {eventTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() =>
                          setQuoteData({ ...quoteData, eventType: t })
                        }
                        className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                          quoteData.eventType === t
                            ? "bg-maroon-800 text-gold-300 border-gold-500 shadow-sm"
                            : "bg-maroon-900/60 text-cream-200/80 border-gold-500/20 hover:border-gold-500/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-2">
                    Expected Guest Count
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {guestCountPresets.map((preset) => (
                      <button
                        type="button"
                        key={preset}
                        onClick={() =>
                          setQuoteData({ ...quoteData, guestCount: preset })
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          quoteData.guestCount === preset
                            ? "bg-gold-500 text-maroon-950 font-bold border-gold-500"
                            : "bg-maroon-900/60 text-cream-200/80 border-gold-500/20"
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={quoteData.guestCount}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, guestCount: e.target.value })
                    }
                    placeholder="Or type custom guest count"
                    className="w-full px-4 py-2.5 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Dining Service Style & Date */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-2">
                    Preferred Dining Style
                  </label>
                  <div className="space-y-2">
                    {serviceStyles.map((style) => (
                      <button
                        type="button"
                        key={style}
                        onClick={() =>
                          setQuoteData({ ...quoteData, serviceStyle: style })
                        }
                        className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                          quoteData.serviceStyle === style
                            ? "bg-maroon-800 text-gold-300 border-gold-500 shadow-sm"
                            : "bg-maroon-900/60 text-cream-200/80 border-gold-500/20 hover:border-gold-500/40"
                        }`}
                      >
                        <span>{style}</span>
                        {quoteData.serviceStyle === style && (
                          <CheckCircle2 className="w-4 h-4 text-gold-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                      Target Event Date
                    </label>
                    <input
                      type="date"
                      value={quoteData.eventDate}
                      onChange={(e) =>
                        setQuoteData({ ...quoteData, eventDate: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                      Event Town / Location
                    </label>
                    <input
                      type="text"
                      value={quoteData.eventLocation}
                      onChange={(e) =>
                        setQuoteData({
                          ...quoteData,
                          eventLocation: e.target.value,
                        })
                      }
                      placeholder="e.g. Udumalpet / Pollachi / Hall name"
                      className="w-full px-4 py-2.5 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact & Send */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteData.name}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quoteData.phone}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gold-300 uppercase tracking-wider mb-1.5">
                    Special Menu Preferences / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={quoteData.notes}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, notes: e.target.value })
                    }
                    placeholder="e.g. Vegetarian only, Fruit carving needed, morning tiffin + lunch"
                    className="w-full px-4 py-2.5 rounded-xl bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Summary Snapshot */}
                <div className="p-3 rounded-xl bg-maroon-900/60 border border-gold-500/20 text-xs text-cream-200/80">
                  <span className="text-gold-400 font-bold block mb-1">
                    Selection Summary:
                  </span>
                  {quoteData.eventType} • {quoteData.guestCount} Guests •{" "}
                  {quoteData.serviceStyle} • {quoteData.eventLocation}
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gold-500/20">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cream-200 hover:text-white hover:bg-maroon-900 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-gold-shimmer text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleFinish}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gold-shimmer text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

