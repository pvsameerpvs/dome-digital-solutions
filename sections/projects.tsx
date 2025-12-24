"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Layers, Users, Building2 } from "lucide-react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PROJECTS_DATA, type Project } from "@/lib/projects-data";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  limit?: number;
  className?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md dark:bg-slate-950 dark:ring-slate-800 w-full"
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Client / Location</span>
            <h3 className="font-semibold text-slate-900 dark:text-white leading-tight">
              {project.client}
            </h3>
          </div>
          <Badge variant="outline" className="shrink-0">{project.year}</Badge>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">Project Details</span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {project.project}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
           <p className="text-xs font-medium text-slate-500">
               Executed By: <span className="text-brand-600 dark:text-brand-400">{project.company}</span>
           </p>
           <Button 
             variant="ghost" 
             size="sm" 
             onClick={() => setIsOpen(!isOpen)}
             className="h-8 px-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
           >
             {isOpen ? "Less Info" : "View Details"}
             <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform duration-200", isOpen && "rotate-180")} />
           </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div className="p-6 space-y-4">
               {/* Full Scope */}
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
                     <Layers className="h-4 w-4" />
                     <span className="text-xs font-bold uppercase tracking-wider">Scope of Work</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 pl-6 leading-relaxed">
                     {project.project}
                  </p>
               </div>

               {/* Contractor */}
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
                     <Users className="h-4 w-4" />
                     <span className="text-xs font-bold uppercase tracking-wider">Execution Team</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 pl-6">
                     {project.company}
                  </p>
               </div>

               {/* Client */}
               <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
                     <Building2 className="h-4 w-4" />
                     <span className="text-xs font-bold uppercase tracking-wider">Client Details</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 pl-6">
                     {project.client}
                  </p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute right-4 top-4 text-6xl font-black text-slate-100 dark:text-slate-900 -z-10 opacity-50 select-none">
          {project.id}
      </div>
    </motion.div>
  );
}

export function ProjectsSection({ limit, className }: ProjectsSectionProps) {
  const allProjects = [...PROJECTS_DATA].reverse();
  const projects = limit ? allProjects.slice(0, limit) : allProjects;
  const isFeatured = !!limit;

  return (
    <section className={cn(
      "relative z-20",
      isFeatured ? "py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50" : "-mt-24 pb-24",
      className
    )}>
      <SiteContainer>
        {isFeatured && (
           <div className="mb-16">
             <SectionHeading
               eyebrow="Our Work"
               title="Featured Projects"
               description="A glimpse into the diverse range of solutions we've delivered for our clients."
             />
           </div>
        )}

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {isFeatured && (
            <div className="mt-12 flex justify-center">
                <Button asChild size="lg" variant="outline" className="group">
                    <Link href="/projects">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        )}
      </SiteContainer>
    </section>
  );
}
