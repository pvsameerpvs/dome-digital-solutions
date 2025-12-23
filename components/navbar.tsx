import Link from "next/link";
import { SiteContainer } from "@/components/site-container";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands / Partners" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur dark:bg-slate-950/70 dark:border-slate-800">
      <SiteContainer className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-800 text-white font-semibold">
            D
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{COMPANY.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{COMPANY.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button asChild className="lg:hidden">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </SiteContainer>
    </header>
  );
}
