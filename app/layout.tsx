import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./komponen/Navbar";
import Footer from "./komponen/Footer";
import Script from 'next/script';
import ClientLayoutWrapper from "./komponen/ClientLayoutWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prima Bali Tour - Paket Wisata & Sewa Mobil Bali",
  description: "Nikmati perjalanan liburan impian di Bali bersama Prima Bali Tour.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* 1. Google Tag Manager / Ads Script Async */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18134268066"
          strategy="afterInteractive"
        />

        {/* 2. Inisialisasi gtag */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18134268066');
          `}
        </Script>

      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        

        {/* 'children' akan berisi komponen halaman (seperti Hero, Paket, dll.) */}
        <main><ClientLayoutWrapper>{children}</ClientLayoutWrapper></main>
        
      </body>
    </html>
  );
}