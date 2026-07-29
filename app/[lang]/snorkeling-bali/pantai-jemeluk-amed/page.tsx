import { Metadata } from "next";
import DetailJemelukPage from "./DetailJemelukPage";


type Props = {
  params: Promise<{ lang: "id" | "en" | "ja" }>;
};

// 1. Dynamic Metadata API untuk SEO Optimal
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    id: "Paket Snorkeling Pantai Jemeluk Amed Karangasem | Harga Promo 2026",
    en: "Jemeluk Bay Amed Snorkeling Tour Bali | Best Rates 2026",
    ja: "バリ島 アメッド ジュメルックビーチ シュノーケリングツアー | 格安予約",
  };

  const descriptions = {
    id: "Nikmati snorkeling di Pantai Jemeluk Amed Karangasem. Jelajahi Candi Submarine bawah laut, terumbu karang alami, dan ikan hias warna-warni. Paket Open Trip & Private.",
    en: "Snorkel at Jemeluk Bay Amed, Karangasem. Explore the famous underwater Submarine Temple, vibrant coral reefs, and marine life. Book Open Trip or Private Boat.",
    ja: "アメッド・ジュメルックビーチでシュノーケリング！有名な水中寺院（Submarine Temple）や美しいサンゴ礁、カラフルな熱帯魚を満喫。乗合・貸切ボートプランをご用意。",
  };

  return {
    title: titles[lang] || titles.id,
    description: descriptions[lang] || descriptions.id,
    alternates: {
      canonical: `https://nusaprimadigital.com/${lang}/snorkeling-bali/pantai-jemeluk`,
      languages: {
        id: "/id/snorkeling-bali/pantai-jemeluk",
        en: "/en/snorkeling-bali/pantai-jemeluk",
        ja: "/ja/snorkeling-bali/pantai-jemeluk",
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
          alt: "Snorkeling Pantai Jemeluk Amed Karangasem Bali",
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <DetailJemelukPage lang={lang} />;
}