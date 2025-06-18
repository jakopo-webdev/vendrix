import Link from "next/link";
import { ShoppingCart, LogIn, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export function Menu() {
  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-2 sm:gap-4">
        <Link href="/cart">
          <Button variant="ghost">
            <ShoppingCart /> Cart
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button>
            <LogIn /> Sign In
          </Button>
        </Link>
        <ModeToggle />
      </nav>
      {/* Mobile nav */}
      <div className="sm:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" aria-label="Open menu">
              <MenuIcon className="!h-6 !w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-64">
            <SheetTitle className="sr-only">Main menu</SheetTitle>
            <SheetDescription className="sr-only">Navigation drawer with links to cart, sign in, and theme toggle.</SheetDescription>
            <div className="flex flex-col gap-2 p-6 pt-20">
              <Link href="/cart">
                <Button variant="ghost" className="w-full justify-start mb-2">
                  <ShoppingCart /> Cart
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="w-full justify-start mb-2">
                  <LogIn /> Sign Inn
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
