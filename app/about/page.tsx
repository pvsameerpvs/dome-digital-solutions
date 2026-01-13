import type { Metadata } from "next";
import Link from "next/link";
import { Award, Briefcase, Users2, Building2 } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/sections/about";

export const metadata: Metadata = {
  title: "About Us | Dome Digital Solutions",
  description: "Learn who we are, what we stand for, and how we deliver reliable, cost-effective technology solutions.",
};

const stats = [
  { label: "Years Experience", value: "12+", icon: Award },
  { label: "Projects Completed", value: "516+", icon: Briefcase },
  { label: "Happy Clients", value: "137+", icon: Users2 },
  { label: "Global Partners", value: "25+", icon: Building2 },
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
            Who We Are
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
            Empowering Businesses with <span className="text-brand-400">Next-Gen Technology</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance">
             Dome Digital Solutions is a premier system integrator in the UAE, delivering cutting-edge AV, IT, and security solutions tailored for modern enterprises.
          </p>
        </SiteContainer>
      </section>

      {/* Stats Section - Floating overlap */}
      <section className="relative z-20 -mt-16 pb-20">
        <SiteContainer>
          <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl md:grid-cols-4 lg:p-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-all group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-white tracking-tight">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <AboutSection />

      {/* CTA Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <SiteContainer>
          <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-16 text-center shadow-xl sm:px-16 md:py-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to upgrade your infrastructure?
              </h2>
              <p className="mt-4 text-lg text-brand-100/90 text-balance">
                Get in touch with our experts today for a free consultation and discover how we can transform your workspace.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-white px-8 text-brand-600 hover:bg-brand-50">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-brand-400 bg-transparent px-8 text-white hover:bg-brand-700 hover:text-white hover:border-brand-700">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Background Patterns */}
            <div className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 opacity-50 blur-3xl" />
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10" />
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
