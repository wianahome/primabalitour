import { Metadata } from "next";
import DetailTanjungBenoaPage from "./DetailTanjungBenoaPage";

type PageProps = {
  params: Promise<{
    lang: "id" | "en" | "ja";
  }>;
};

// Dynamic Metadata API untuk SEO Optimal
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Tanjung Benoa Bali | Turtle Island & Water Sport Promo 2026",
    en: "Tanjung Benoa Snorkeling & Water Sport Bali Tour | Best Rates 2026",
    ja: "バリ島 タンジュンベノア シュノーケリング＆ウォータースポーツ | 格安予約 2026",
  };

  const descriptions = {
    id: "Nikmati pengalaman snorkeling di Tanjung Benoa Badung Bali. Perairan tenang ramah keluarga, feeding ikan hias, dan paket combo Pulau Penyu (Turtle Island).",
    en: "Experience snorkeling at Tanjung Benoa, Badung, Bali. Calm shallow waters perfect for families, fish feeding, and Turtle Island tour combos.",
    ja: "バドゥン県タンジュンベノアでシュノーケリング！波が穏やかでお子様連れも安心。熱帯魚の餌やり体験やウミガメ島（Turtle Island）ツアー満載。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/tanjung-benoa`,
      languages: {
        id: "/id/snorkeling-bali/tanjung-benoa",
        en: "/en/snorkeling-bali/tanjung-benoa",
        ja: "/ja/snorkeling-bali/tanjung-benoa",
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
          alt: "Snorkeling Tanjung Benoa Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <DetailTanjungBenoaPage lang={lang} />;
}