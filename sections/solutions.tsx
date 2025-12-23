import { Shield, Monitor, Laptop, Router, ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bgImages = [
  "/images/solutions_security.png",
  "/images/solutions_av.png",
  "/images/solutions_it.png",
  "/images/solutions_network.png",
];

const icons = [Shield, Monitor, Laptop, Router];

export function SolutionsSection() {
  return (
    <section className="bg-slate-900 py-24" id="solutions">
      <SiteContainer>
        <div className="mb-16 md:mb-20">
           <SectionHeading
             eyebrow="Our Solutions"
             title="Comprehensive Technology Stack"
             description="We provide end-to-end integration across four key pillars, ensuring your infrastructure is secure, connected, and efficient."
             className="text-white"
           />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {SOLUTIONS.map((group, idx) => {
            const Icon = icons[idx] ?? Shield;
            const bgImage = bgImages[idx];

            return (
              <div
                key={group.title}
                className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-brand-500/10"
              >
                {/* Background Image */}
                <Image
                  src={bgImage}
                  alt={group.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay - Always visible but stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                   <div className="mb-auto transform transition-all duration-500 group-hover:-translate-y-2">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300 backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                         <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                   </div>

                   {/* List of items - Revealed/Expanded on hover can be tricky on mobile, so we keep it visible but styled nicely */}
                   <div className="space-y-4">
                      <p className="text-sm font-medium text-slate-400">Includes:</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {group.items.slice(0, 6).map((item) => ( // Limit to 6 items for layout sanity
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                             <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                             <span className="truncate">{item}</span>
                          </li>
                        ))}
                        {group.items.length > 6 && (
                           <li className="text-xs text-slate-500 italic">+ {group.items.length - 6} more</li>
                        )}
                      </ul>
                      
                      <div className="pt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                         <Button asChild variant="link" className="h-auto p-0 text-brand-300 hover:text-white">
                            <Link href="/solutions" className="flex items-center gap-2">
                               Learn more <ArrowRight className="h-4 w-4" />
                            </Link>
                         </Button>
                      </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
