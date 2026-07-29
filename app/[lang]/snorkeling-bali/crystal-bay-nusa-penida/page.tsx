import { Metadata } from "next";
import DetailCrystalBayPage from "./DetailCrystalBayPage";


type PageProps = {
  params: Promise<{
    lang: "id" | "en" | "ja";
  }>;
};

// Dynamic Metadata API untuk SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Crystal Bay Nusa Penida | Harga Promo 2026",
    en: "Crystal Bay Nusa Penida Snorkeling Tour Bali | Best Rates 2026",
    ja: "バリ島 クリスタルベイ ヌサペニダ シュノーケリングツアー | 格安予約",
  };

  const descriptions = {
    id: "Nikmati snorkeling di Crystal Bay Nusa Penida. Air laut sejernih kristal, habitat ikan Sunfish (Mola-Mola), terumbu karang indah, dan pemandangan pulau batu ikonik.",
    en: "Snorkel at Crystal Bay, Nusa Penida. Experience crystal-clear waters, vibrant coral gardens, ocean sunfish (Mola-Mola) habitat, and iconic rock islet views.",
    ja: "ヌサペニダのクリスタルベイでシュノーケリング！透明度抜群のエメラルド海、マンボウ（Mola-Mola）の生息地、美しいサンゴ礁と絶景スポットを満喫。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/crystal-bay`,
      languages: {
        id: "/id/snorkeling-bali/crystal-bay",
        en: "/en/snorkeling-bali/crystal-bay",
        ja: "/ja/snorkeling-bali/crystal-bay",
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
          alt: "Snorkeling Crystal Bay Nusa Penida Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <DetailCrystalBayPage lang={lang} />;
}