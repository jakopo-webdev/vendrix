"use client";

import "@/assets/styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}
