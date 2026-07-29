import { Metadata } from "next";
import DetailMenjanganPage from "./DetailMenjanganPage";


type Props = {
  params: { lang: "id" | "en" | "ja" };
};

// 1. Dynamic Metadata untuk SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;

  const titles = {
    id: "Paket Snorkeling Pulau Menjangan Bali | Harga Promo 2026",
    en: "Menjangan Island Snorkeling Tour Bali | Best Rates 2026",
    ja: "バリ島ムンジャンガン島シュノーケリングツアー | 格安予約",
  };

  const descriptions = {
    id: "Nikmati keindahan wall drop-off dan air jernih di Pulau Menjangan, Taman Nasional Bali Barat. Tersedia paket Open Trip & Private Boat.",
    en: "Explore crystal clear waters and wall drop-offs at Menjangan Island, West Bali National Park. Open trip & private boat packages available.",
    ja: "透明度抜群の西バリ国立公園ムンジャンガン島シュノーケリング。乗合・貸切ボートプランをご用意。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/pulau-menjangan`,
      languages: {
        id: "/id/snorkeling-bali/pulau-menjangan",
        en: "/en/snorkeling-bali/pulau-menjangan",
        ja: "/ja/snorkeling-bali/pulau-menjangan",
      },
    },
    openGraph: {
      title: titles[lang] || titles.id,
      description: descriptions[lang] || descriptions.id,
      images: [
        {
          url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
          width: 1200,
          height: 630,
          alt: "Snorkeling Pulau Menjangan Bali",
        },
      ],
    },
  };
}

export default function Page({ params }: Props) {
  return <DetailMenjanganPage lang={params.lang} />;
}