import { Metadata } from "next";
import DetailBlueLagoonPage from "./DetailBlueLagoonPage";


type PageProps = {
  params: Promise<{
    lang: "id" | "en" | "ja";
  }>;
};

// 1. Dynamic Metadata API untuk SEO Optimal
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Blue Lagoon Padangbai Karangasem | Harga Promo 2026",
    en: "Blue Lagoon Padangbai Snorkeling Tour Bali | Best Rates 2026",
    ja: "バリ島 ブルーラグーン パダンバイ シュノーケリングツアー | 格安予約",
  };

  const descriptions = {
    id: "Nikmati snorkeling di Blue Lagoon & Tanjung Jepun Padangbai Karangasem. Perairan dangkal, terumbu karang warna-warni, penyu laut, dan ikan hias. Paket Boat & Guide.",
    en: "Snorkel at Blue Lagoon & Tanjung Jepun Padangbai, Karangasem. Explore shallow turquoise waters, vibrant coral reefs, sea turtles, and marine life.",
    ja: "パダンバイのブルーラグーン＆タンジュンジュプンでシュノーケリング！浅瀬のエメラルドグリーン海、美しいサンゴ礁、ウミガメと泳ぐ感動体験。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/blue-lagoon`,
      languages: {
        id: "/id/snorkeling-bali/blue-lagoon",
        en: "/en/snorkeling-bali/blue-lagoon",
        ja: "/ja/snorkeling-bali/blue-lagoon",
      },
    },
    openGraph: {
      title: titles[lang] || titles.id,
      description: descriptions[lang] || descriptions.id,
      images: [
        {
          url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
          width: 1200,
          height: 630,
          alt: "Snorkeling Blue Lagoon Padangbai Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <DetailBlueLagoonPage lang={lang} />;
}