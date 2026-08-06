"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Footer from "./Footer"; // Sesuaikan path jika berbeda
import Navbar1 from "./Navbar1";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar1 />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}