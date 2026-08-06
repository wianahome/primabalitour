// src/components/FloatingWhatsApp.tsx
"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const waNumber = "6282339616319";
  const waUrl = `https://wa.me/${waNumber}?text=Halo%20Admin,%20saya%20mau%20tanya%20sewa%20Hiace%20di%20Bali.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <span className="hidden sm:inline text-sm font-semibold pr-1">Chat CS Online</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;