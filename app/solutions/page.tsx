import type { Metadata } from "next";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { SolutionsSection } from "@/sections/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore our Security, Audio-Visual, IT, and Networking solutions—designed, delivered, and supported end-to-end.",
};

export default function Page() {
  return (
    <>
      <section className="gradient-hero">
        <SiteContainer className="py-14 sm:py-16">
          <Badge variant="brand">Solutions</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Solutions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Explore our Security, Audio-Visual, IT, and Networking solutions—designed, delivered, and supported end-to-end.
          </p>
        </SiteContainer>
      </section>

      <SolutionsSection />
    </>
  );
}
