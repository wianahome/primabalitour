import { Metadata } from "next";
import DetailMangrovePointPage from "./DetailMangrovePointPage";


type PageProps = {
  params: Promise<{
    lang: "id" | "en" | "ja";
  }>;
};

// Dynamic Metadata API untuk SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Mangrove Point Nusa Lembongan | Harga Promo 2026",
    en: "Mangrove Point Nusa Lembongan Snorkeling Tour Bali | Best Rates 2026",
    ja: "バリ島 マングローブポイント ヌサレンボンガン シュノーケリングツアー | 格安予約",
  };

  const descriptions = {
    id: "Nikmati pengalaman Drift Snorkeling di Mangrove Point Nusa Lembongan. Terumbu karang sehat warna-warni, ribuan ikan hias, dan pemandangan hutan bakau alami.",
    en: "Experience gentle drift snorkeling at Mangrove Point, Nusa Lembongan. Explore healthy colorful coral reefs, vibrant marine life, and lush mangrove forests.",
    ja: "ヌサレンボンガンのマングローブポイントでドリフトシュノーケリング！美しいサンゴ礁、カラフルな熱帯魚の群れ、自然豊かなマングローブ林を満喫。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/mangrove-point`,
      languages: {
        id: "/id/snorkeling-bali/mangrove-point",
        en: "/en/snorkeling-bali/mangrove-point",
        ja: "/ja/snorkeling-bali/mangrove-point",
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
          alt: "Snorkeling Mangrove Point Nusa Lembongan Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <DetailMangrovePointPage lang={lang} />;
}