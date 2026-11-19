import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/cateringData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4A1020",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "RK Catering & Events Management | Catering Services in Udumalpet",
  description:
    "Discover RK Catering & Events Management in Devanurpudur, Udumalpet. Explore catering and event experiences for weddings, celebrations and special occasions.",
  keywords: [
    "RK Catering Udumalpet",
    "RK Catering & Events Management",
    "Catering services in Udumalpet",
    "Caterers in Devanurpudur",
    "Wedding catering Udumalpet",
    "Traditional South Indian catering Tamil Nadu",
    "Banana leaf virundhu saapadu Udumalpet",
    "Buffet catering Tiruppur",
    "Event management Udumalpet Pollachi",
    "Birthday party catering Devanurpudur",
  ],
  authors: [{ name: "RK Catering & Events Management" }],
  creator: "RK Catering & Events Management",
  publisher: "RK Catering & Events Management",
  metadataBase: new URL("https://rkcateringevents.vercel.app"),
  openGraph: {
    title: "RK Catering & Events Management | Catering Services in Udumalpet",
    description:
      "Discover RK Catering & Events Management in Devanurpudur, Udumalpet. Explore catering and event experiences for weddings, celebrations and special occasions.",
    url: "https://rkcateringevents.vercel.app",
    siteName: "RK Catering & Events Management",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/rk/carving-peacock.jpg",
        width: 1200,
        height: 630,
        alt: "RK Catering & Events Management - Royal Catering & Peacock Fruit Carving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Catering & Events Management | Catering Services in Udumalpet",
    description:
      "Exceptional catering and event experiences crafted with traditional taste, elegant presentation, and heartfelt hospitality.",
    images: ["/images/rk/carving-peacock.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    name: businessConfig.name,
    description: businessConfig.shortDescription,
    image: "https://rkcateringevents.vercel.app/images/rk/carving-peacock.jpg",
    telephone: businessConfig.contact.primaryPhone,
    email: businessConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.location.landmark,
      addressLocality: businessConfig.location.village,
      addressRegion: businessConfig.location.state,
      postalCode: businessConfig.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.5841",
      longitude: "77.2483",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    priceRange: "₹₹",
    servesCuisine: [
      "South Indian",
      "Kongu Nadu",
      "North Indian",
      "Traditional Tamil Muhurtham",
      "Multi-Cuisine Buffet",
    ],
    areaServed: [
      "Devanurpudur",
      "Udumalpet",
      "Pollachi",
      "Tiruppur",
      "Dharapuram",
      "Palani",
      "Coimbatore",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/images/rk/logo.jpg" />
      </head>
      <body className="min-h-screen bg-cream-200 text-charcoal-800 antialiased selection:bg-gold-500 selection:text-maroon-950">
        {children}
      </body>
    </html>
  );
}

