import { getDictionary } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: "id" | "en" | "ja" }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Solusi safe access untuk Union Type TypeScript
  const heroData = (dict as any)?.hero || (dict as any)?.snorkeling?.hero || {};

  return (
    <main>
      <h1>{heroData.title || "Default Title"}</h1>
      <p>{heroData.subtitle || "Default Subtitle"}</p>
    </main>
  );
}