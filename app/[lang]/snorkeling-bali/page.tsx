import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import HeroSnorkeling from "./HeroSnorkeling";
import SnorkelingGallery from "./SnorkelingGallery";
import WhyKami from "./WhyKami";
import SnorkelingTestimonials from "./SnorkelingTestimoni";
import SnorkelingFAQ from "./SnorkelingFaq";
import WhatsAppButton from "@/app/komponen/WhatsAppButton";
import SnorkelingSpots from "./SnorkelingSpot";


type PageProps = {
  params: Promise<{ lang: "id" | "en" | "ja" }>;
};

// 1. Dynamic SEO Metadata berdasarkan Bahasa di URL
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const isJa = lang === "ja";

  const title = isJa
    ? "バリ島シュノーケリングツアーパッケージ - ヌサペニダ & ブルーラグーン"
    : isEn
    ? "Best Bali Snorkeling Tour Packages - Nusa Penida, Blue Lagoon & Tulamben"
    : "Paket Snorkeling Bali Terbaik - Nusa Penida, Blue Lagoon & Tulamben";

  const description = isJa
    ? "バリ島の美しい海を満喫！マンタスポット、ブルーラグーンでのシュノーケリングツアー。全機材・GoPro撮影付き。"
    : isEn
    ? "Explore Bali's underwater paradise. Enjoy snorkeling tours in Nusa Penida Manta Spot, Blue Lagoon, with full gear and free GoPro photos/videos!"
    : "Jelajahi keindahan bawah laut Bali bersama kami. Nikmati paket tour snorkeling di Nusa Penida Manta Spot, Blue Lagoon, dan Tulamben dengan peralatan lengkap dan foto/video GoPro gratis!";

  return {
    title,
    description,
    keywords: [
      "snorkeling bali",
      "bali snorkeling tour",
      "nusa penida snorkeling",
      "manta ray snorkeling bali",
      "blue lagoon snorkeling",
    ],
    alternates: {
      canonical: `https://primabali.com/${lang}/snorkeling-bali`,
      languages: {
        "id-ID": "https://primabali.com/id/snorkeling-bali",
        "en-US": "https://primabali.com/en/snorkeling-bali",
        "ja-JP": "https://primabali.com/ja/snorkeling-bali",
      },
    },
    openGraph: {
      title,
      description,
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
}

// 2. Main Page Component
export default async function SnorkelingBaliPage({ params }: PageProps) {
  const { lang } = await params;
  
  // Fetch dictionary JSON berdasarkan lang (/id, /en, /ja)
  const dict = await getDictionary(lang);

  // Custom pesan WA sesuai bahasa (Record Type untuk ketatnya TypeScript)
  const waMessages: Record<string, string> = {
    id: "Halo Prima Bali Tour, saya ingin bertanya mengenai Paket Snorkeling Bali.",
    en: "Hello Prima Bali Tour, I would like to inquire about the Bali Snorkeling Package.",
    ja: "こんにちは Prima Bali Tour、バリ島シュノーケリングパッケージについて問い合わせたいです。",
  };

  const currentWaMessage = waMessages[lang] || waMessages.id;

  return (
    <main className="min-h-screen bg-slate-950">
      <section id="hero">
        <HeroSnorkeling dict={dict} lang={lang} />
      </section>

      <section id="spot">
        <SnorkelingSpots dict={dict} lang={lang} />
      </section>

      <section id="galeri">
        <SnorkelingGallery dict={dict} lang={lang} />
      </section>

      <section id="tentang">
        <WhyKami dict={dict} lang={lang} />
      </section>

      <section id="testimoni">
        <SnorkelingTestimonials dict={dict} lang={lang} />
      </section>

      <section id="faq">
        <SnorkelingFAQ dict={dict} lang={lang} />
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="6282339616319"
        serviceName={currentWaMessage}
      />
    </main>
  );
}