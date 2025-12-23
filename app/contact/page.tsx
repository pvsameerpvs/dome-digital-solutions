import type { Metadata } from "next";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { ContactSection } from "@/sections/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a quote or speak with our team about AV, IT, Security, and Networking requirements.",
};

export default function Page() {
  return (
    <>
      <section className="gradient-hero">
        <SiteContainer className="py-14 sm:py-16">
          <Badge variant="brand">Contact Us</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Request a quote or speak with our team about AV, IT, Security, and Networking requirements.
          </p>
        </SiteContainer>
      </section>

      <ContactSection />
    </>
  );
}
