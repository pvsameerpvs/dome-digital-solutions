import { Metadata } from "next";
import { ProjectsSection } from "@/sections/projects";

import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of successful projects and implementations.",
};

export default function ProjectsPage() {
  return (
    <>
     <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/services_support.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </div>

        <SiteContainer className="relative z-10 text-center">
          <Badge className="mb-6 inline-flex border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 hover:bg-brand-500/20">
            Our Portfolio
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
            Featured <span className="text-brand-400">Projects</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance">
            A showcase of our successful implementations across various sectors in the UAE, delivering excellence in AV, IT, and ELV solutions.
          </p>
        </SiteContainer>
      </section>
      <ProjectsSection />
    </>
  );
}
