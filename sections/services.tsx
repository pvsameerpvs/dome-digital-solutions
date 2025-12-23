import { Wrench, ClipboardCheck, LifeBuoy, ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const icons = [Wrench, ClipboardCheck, LifeBuoy];

export function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/50" id="services">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div className="flex flex-col justify-center">
             <div className="mb-10 lg:mb-12">
               <SectionHeading
                 eyebrow="Our Services"
                 title="Support that keeps your business running"
                 description="From implementation to long-term maintenance, we deliver predictable performance and responsive support."
                 className="text-left mx-0 max-w-none"
               />
             </div>

             <div className="grid gap-6">
               {SERVICES.map((s, idx) => {
                 const Icon = icons[idx] ?? Wrench;
                 return (
                   <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
                      <div className="flex gap-4">
                         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-400">
                            <Icon className="h-6 w-6" />
                         </div>
                         <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
                         </div>
                      </div>
                   </div>
                 );
               })}
             </div>

             <div className="mt-10">
                <Button asChild size="lg" className="rounded-full px-8">
                   <Link href="/contact">
                      Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </Button>
             </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-auto">
             <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/services_support.png"
                  alt="Professional IT Support Team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-24 text-white">
                   <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                      <p className="font-semibold text-white">24/7 Expert Support available</p>
                      <p className="text-sm text-slate-200 opacity-90">Get peace of mind with our dedicated AMC packages.</p>
                   </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -right-12 top-10 -z-10 h-64 w-64 rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-900/20" />
             <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-800/50" />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
