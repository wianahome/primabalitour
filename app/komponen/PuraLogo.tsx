import React from "react";

interface LogoProps {
  className?: string;
}

export default function PuraLogo({ className = "w-6 h-6 text-emerald-400" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dasar / Alas Pura */}
      <path d="M2 21H22V19H2V21Z" />
      <path d="M4 18H20V16H4V18Z" />
      
      {/* Sisi Kiri Candi Bentar */}
      <path d="M5 15H10V13H6V11H9V9H7V7H9.5V4L5 15Z" />
      
      {/* Sisi Kanan Candi Bentar */}
      <path d="M14 15H19L14.5 4V7H17V9H15V11H18V13H14V15Z" />
      
      {/* Meru / Atap Pura Tengah (Layered Roof) */}
      <path d="M9.5 13H14.5V11.5H9.5V13Z" />
      <path d="M10 10.5H14V9.5H10V10.5Z" />
      <path d="M10.5 8.5H13.5V7.5H10.5V8.5Z" />
      <path d="M11 6.5H13V3.5L12 2L11 3.5V6.5Z" />
    </svg>
  );
}