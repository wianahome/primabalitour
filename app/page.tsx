import CarRental from "./komponen/CarRental";
import CustomTripBanner from "./komponen/CustomTripBanner";
import FaqSection from "./komponen/FaqSection";
import FinalCtaBanner from "./komponen/FinalCtaBanner";
import GallerySection from "./komponen/GallerySection";
import Hero from "./komponen/Hero";
import Testimonials from "./komponen/Testimonials";
import TourPackages from "./komponen/TourPackages";
import TrustSection from "./komponen/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      {/* Hero Section */}
      <Hero />
      <TrustSection />
      <TourPackages />
      <CarRental />
      <CustomTripBanner />
      <Testimonials />
      <GallerySection />
      <FaqSection />
      <FinalCtaBanner />

      {/* Konten selanjutnya (Paket Wisata, Tour Populer, dsb.) */}
    </main>
  );
}