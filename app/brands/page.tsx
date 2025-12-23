import type { Metadata } from "next";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { BrandsSection } from "@/sections/brands";

export const metadata: Metadata = {
  title: "Brands / Partners",
  description: "We partner with leading manufacturers and platforms to ensure performance, compatibility, and long-term support.",
};

export default function Page() {
  return (
    <>
      <section className="gradient-hero">
        <SiteContainer className="py-14 sm:py-16">
          <Badge variant="brand">Brands / Partners</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Brands / Partners
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            We partner with leading manufacturers and platforms to ensure performance, compatibility, and long-term support.
          </p>
        </SiteContainer>
      </section>

      <BrandsSection />
    </>
  );
}
