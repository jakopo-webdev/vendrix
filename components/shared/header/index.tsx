import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-50 via-white to-pink-50 shadow-lg sticky top-0 z-50">
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
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/cart">
            <Button variant="ghost">
              <ShoppingCart className="w-4 h-4" /> Cart
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button>
              <LogIn className="w-4 h-4" /> Sign In
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
