import type { Metadata } from "next";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { ServicesSection } from "@/sections/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Implementation, troubleshooting, and maintenance services that keep your critical systems performing.",
};

export default function Page() {
  return (
    <>
      <section className="gradient-hero">
        <SiteContainer className="py-14 sm:py-16">
          <Badge variant="brand">Services</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Implementation, troubleshooting, and maintenance services that keep your critical systems performing.
          </p>
        </SiteContainer>
      </section>

      <ServicesSection />
    </>
  );
}
