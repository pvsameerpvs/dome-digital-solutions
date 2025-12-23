import type { Metadata } from "next";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { AboutSection } from "@/sections/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn who we are, what we stand for, and how we deliver reliable, cost-effective technology solutions.",
};

export default function Page() {
  return (
    <>
      <section className="gradient-hero">
        <SiteContainer className="py-14 sm:py-16">
          <Badge variant="brand">About Us</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Learn who we are, what we stand for, and how we deliver reliable, cost-effective technology solutions.
          </p>
        </SiteContainer>
      </section>

      <AboutSection />
    </>
  );
}
