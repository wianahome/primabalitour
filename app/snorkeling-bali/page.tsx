import { Metadata } from "next";
import HeroSnorkeling from "./HeroSnorkeling";
import PaketSnorkeling from "./PaketSnorkeling";
import SnorkelingGallery from "./SnorkelingGallery";
import WhyKami from "./WhyKami";
import SnorkelingTestimonials from "./SnorkelingTestimoni";
import SnorkelingFAQ from "./SnorkelingFaq";
import WhatsAppButton from "../komponen/WhatsAppButton";



// Metadata untuk SEO
export const metadata: Metadata = {
  title: "Paket Snorkeling Bali Terbaik - Nusa Penida, Blue Lagoon & Tulamben",
  description:
    "Jelajahi keindahan bawah laut Bali bersama kami. Nikmati paket tour snorkeling di Nusa Penida Manta Spot, Blue Lagoon, dan Tulamben dengan peralatan lengkap dan foto/video GoPro gratis!",
  keywords: [
    "snorkeling bali",
    "paket snorkeling nusa penida",
    "snorkeling blue lagoon",
    "manta ray snorkeling bali",
    "tour snorkeling murah bali",
  ],
  openGraph: {
    title: "Paket Snorkeling Bali Terbaik - Jelajahi Surga Bawah Laut",
    description:
      "Pengalaman snorkeling terbaik di Bali dengan pemandu berlisensi, peralatan steril, dan dokumentasi GoPro gratis.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Snorkeling di Bali",
      },
    ],
  },
};

export default function SnorkelingBaliPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <HeroSnorkeling />

      {/* Packages Section */}
      <PaketSnorkeling />
      <SnorkelingGallery />
      <WhyKami />
      <SnorkelingTestimonials />
      <SnorkelingFAQ />
      <WhatsAppButton 
        phoneNumber="6282339616319" 
        serviceName="Bali & Nusa Penida Snorkeling" 
      />
    </main>
  );
}
