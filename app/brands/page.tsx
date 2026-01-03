import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Hexagon, Handshake } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BRANDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Brands / Partners | Dome Digital Solutions",
  description: "We partner with leading manufacturers and platforms to ensure performance, compatibility, and long-term support.",
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/services_support.png')] bg-cover bg-center opacity-40 " />
        </div>

        <SiteContainer className="relative z-10 text-center">
          <Badge className="mb-6 inline-flex border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 hover:bg-brand-500/20">
            Global Partners
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
            Powered by <span className="text-brand-400">Industry Leaders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance">
            We work with the world's most trusted technology manufacturers to deliver solutions that are reliable, secure, and built to last.
          </p>
        </SiteContainer>
      </section>

      {/* Brands Grid Section */}
      <section className="relative z-20 -mt-20 pb-24">
        <SiteContainer>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="group relative flex aspect-[3/2] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="relative h-full w-full">
                  {/* We use a simple fallback mechanism: if image fails, we could show text, 
                      but since we can't easily detect error in SSR/SSG without client state, 
                      we'll rely on the image. For a robust solution, a client component wrapper could be used.
                      Here we assume images exist or use Next.js Image optimization.
                  */}
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5 group-hover:ring-brand-500/10" />
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <SiteContainer>
          <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#ffffff" />
                  <stop offset={1} stopColor="#ffffff" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                    <Handshake className="h-6 w-6" />
                 </div>
                 <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                   Become a Partner
                 </h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-brand-100">
                Are you a technology manufacturer or distributor? Join our network of partners and help us deliver excellence to our clients across the region.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-brand-50">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-brand-100">
                  View our services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            {/* Visual element on the right */}
            <div className="relative mt-16 h-80 lg:mt-8">
               <div className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" />
                 {/* Abstract grid or pattern can go here */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8 opacity-20 transform -rotate-12 translate-x-12">
                       {[...Array(9)].map((_, i) => (
                          <div key={i} className="h-24 w-24 rounded-2xl bg-white/30 backdrop-blur-xl" />
                       ))}
                    </div>
                 </div>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
