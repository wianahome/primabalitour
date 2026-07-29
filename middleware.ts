import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Abaikan file statis, API, dan halaman utama ('/')
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. Cek apakah path yang diakses memuat prefix bahasa (/id, /en, /ja)
  const locales = ["id", "en", "ja"];
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Jika mengakses halaman bernuansa i18n (seperti /snorkeling-bali) tanpa prefix bahasa,
  // redirect otomatis ke bahasa default (/id)
  if (!pathnameHasLocale && pathname.startsWith("/snorkeling-bali")) {
    return NextResponse.redirect(new URL(`/id${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Hanya jalankan middleware untuk path tertentu (hindari meredirect '/')
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};