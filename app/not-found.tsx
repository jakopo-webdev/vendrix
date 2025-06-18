"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
      <Image src={"/images/logo.svg"} alt="Logo" width={80} height={80} className="mb-6" priority={true} />
      <h1 className="text-4xl font-extrabold text-blue-600 mb-2">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Go Home</Link>
    </div>
  );
}
