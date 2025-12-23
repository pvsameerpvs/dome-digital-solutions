"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiteContainer } from "@/components/site-container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COMPANY } from "@/lib/constants";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands / Partners" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <SiteContainer className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
             src="/logo.png"
             alt={COMPANY.name}
             width={180}
             height={48}
             className="h-12 w-auto priority"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400",
                pathname === item.href 
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950/30 dark:text-brand-400" 
                  : "text-slate-600 dark:text-slate-300"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild className="rounded-full px-6 font-semibold shadow-lg shadow-brand-500/20">
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-slate-700 dark:text-slate-200">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetHeader className="text-left">
              <SheetTitle>
                 <Image
                    src="/logo.png"
                    alt={COMPANY.name}
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                 />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
               <nav className="flex flex-col gap-2">
                 {nav.map((item) => (
                   <Link
                     key={item.href}
                     href={item.href}
                     onClick={() => setIsOpen(false)}
                     className={cn(
                       "block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
                       pathname === item.href 
                         ? "bg-brand-50 text-brand-700 dark:bg-brand-950/30 dark:text-brand-400" 
                         : "text-slate-600 dark:text-slate-300"
                     )}
                   >
                     {item.label}
                   </Link>
                 ))}
               </nav>
               <div className="px-2">
                  <Button asChild className="w-full rounded-full" size="lg">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Request a Quote</Link>
                  </Button>
               </div>
            </div>
          </SheetContent>
        </Sheet>
      </SiteContainer>
    </header>
  );
}
