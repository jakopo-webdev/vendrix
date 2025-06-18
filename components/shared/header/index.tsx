import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Menu } from "./menu";

export default function Header() {
  return (
    <header className="w-full shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full border border-gray-200 shadow-sm"
              />
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                {APP_NAME}
              </span>
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
