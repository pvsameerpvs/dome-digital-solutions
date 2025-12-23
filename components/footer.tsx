import Link from "next/link";
import { SiteContainer } from "@/components/site-container";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white dark:bg-slate-950 dark:border-slate-800">
      <SiteContainer className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-800 text-white font-semibold">
                D
              </span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">{COMPANY.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Professional value-added system integrator specializing in Audio-Visual, IT & Security products—reliable, cost-effective, and high-quality solutions.
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/about">About Us</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/solutions">Solutions</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/services">Services</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/brands">Brands / Partners</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Contact</p>
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Email:{" "}
                <a className="text-brand-700 hover:underline" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </p>
              <p>Phones: <span className="block">{COMPANY.phones.join(" | ")}</span></p>
              <p>Website: {COMPANY.website}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p className="text-xs">Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
