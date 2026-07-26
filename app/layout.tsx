import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./komponen/Navbar";
import Footer from "./komponen/Footer";
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
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        

        {/* 'children' akan berisi komponen halaman (seperti Hero, Paket, dll.) */}
        <main><ClientLayoutWrapper>{children}</ClientLayoutWrapper></main>
        
      </body>
    </html>
  );
}