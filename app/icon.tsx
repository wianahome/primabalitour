import { ImageResponse } from "next/og";

// Konfigurasi ukuran favicon
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(to top right, #059669, #0d9488)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        {/* SVG Pura Bali */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 21H22V19H2V21Z" />
          <path d="M4 18H20V16H4V18Z" />
          <path d="M5 15H10V13H6V11H9V9H7V7H9.5V4L5 15Z" />
          <path d="M14 15H19L14.5 4V7H17V9H15V11H18V13H14V15Z" />
          <path d="M9.5 13H14.5V11.5H9.5V13Z" />
          <path d="M10 10.5H14V9.5H10V10.5Z" />
          <path d="M10.5 8.5H13.5V7.5H10.5V8.5Z" />
          <path d="M11 6.5H13V3.5L12 2L11 3.5V6.5Z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}