"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // Sesuaikan path jika berbeda
import Footer from "./Footer"; // Sesuaikan path jika berbeda

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}