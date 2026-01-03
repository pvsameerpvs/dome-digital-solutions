import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Monitor, Laptop, Router, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solutions | Dome Digital Solutions",
  description: "Explore our Security, Audio-Visual, IT, and Networking solutions—designed, delivered, and supported end-to-end.",
};

const icons = [Shield, Monitor, Laptop, Router];
const bgImages = [
  "/images/solutions_security.png",
  "/images/solutions_av.png",
  "/images/solutions_it.png",
  "/images/solutions_network.png",
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40" />
        </div>

        <SiteContainer className="relative z-10 text-center">
          <Badge className="mb-6 inline-flex border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 hover:bg-brand-500/20">
            Our Solutions
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
            Comprehensive <span className="text-brand-400">Technology Stack</span> for Modern Business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance">
            We provide end-to-end integration across four key pillars, ensuring your infrastructure is secure, connected, and efficient.
          </p>
        </SiteContainer>
      </section>

      {/* Solutions Grid Section - Overlapping Hero */}
      <section className="relative z-20 -mt-16 pb-24">
        <SiteContainer>
          <div className="grid gap-8 lg:grid-cols-2">
            {SOLUTIONS.map((group, idx) => {
              const Icon = icons[idx] ?? Shield;
              const bgImage = bgImages[idx] || "/images/hero-bg.png"; // Fallback

              return (
                <div
                  key={group.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10  shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-brand-500/10 flex flex-col"
                >
                  {/* Background Image Area */}
                  <div className="relative h-64 w-full overflow-hidden">
                     <Image
                       src={bgImage}
                       alt={group.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0  from-slate-900 via-slate-900/60 to-transparent" />
                     
                     <div className="absolute bottom-6 left-8 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20 transition-colors group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-white shadow-black/50 drop-shadow-lg">{group.title}</h2>
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col justify-between bg-slate-900 p-8 border-t border-white/5">
                     <div className="mb-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Includes</h3>
                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-slate-300">
                               <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                               <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                     </div>
                     
                     <div className="pt-4 border-t border-white/5">
                        <Button asChild className="w-full bg-slate-800 text-white hover:bg-brand-600 sm:w-auto">
                           <Link href="/contact">
                              Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <SiteContainer>
          <div className="rounded-3xl bg-slate-900 px-6 py-20 text-center shadow-2xl sm:px-16">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Need a <span className="text-brand-400">Custom Solution</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400 text-balance">
              Every business is unique. We design tailored technology infrastructure that scales with your growth.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="h-14 rounded-full bg-brand-600 px-10 text-lg font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-500 hover:shadow-brand-500/40">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
