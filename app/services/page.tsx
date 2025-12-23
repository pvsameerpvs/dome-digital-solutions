import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ClipboardCheck, LifeBuoy, ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Dome Digital Solutions",
  description: "Implementation, troubleshooting, and maintenance services that keep your critical systems performing.",
};

// Map icons to services
const icons = [Wrench, ClipboardCheck, LifeBuoy];
const features = [
  ["System Design", "Installation", "Integration", "Testing & Commissioning"],
  ["Preventive Maintenance", "Emergency Support", "Spare Parts Management", "Performance Optimization"],
  ["24/7 Support", "Remote Diagnostics", "On-site Repair", "Firmware Updates"]
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/services_support.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </div>

        <SiteContainer className="relative z-10 text-center">
          <Badge className="mb-6 inline-flex border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 hover:bg-brand-500/20">
            Expert Services
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
            Reliable Support for <span className="text-brand-400">Critical Infrastructure</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance">
            From initial implementation to long-term maintenance, we ensure your technology performs at its peak, minimizing downtime and maximizing value.
          </p>
        </SiteContainer>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-20 -mt-20 pb-24">
        <SiteContainer>
          <div className="grid gap-8 lg:grid-cols-3">
            {SERVICES.map((service, idx) => {
              const Icon = icons[idx] ?? Wrench;
              const isMiddle = idx === 1; // Highlight the middle card (AMC usually)

              return (
                <div
                  key={service.title}
                  className={cn(
                    "group relative flex flex-col rounded-3xl border p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2",
                    isMiddle 
                      ? "bg-brand-600 border-brand-500 text-white shadow-brand-900/50 scale-105 z-10" 
                      : "bg-slate-900 border-white/10 text-slate-300 hover:border-brand-500/30"
                  )}
                >
                  <div className={cn(
                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                    isMiddle ? "bg-white text-brand-600" : "bg-white/5 text-brand-400 group-hover:bg-brand-500 group-hover:text-white"
                  )}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className={cn("text-2xl font-bold mb-4", isMiddle ? "text-white" : "text-white")}>
                    {service.title}
                  </h3>
                  
                  <p className={cn("text-base leading-relaxed mb-8 flex-grow", isMiddle ? "text-brand-50" : "text-slate-400")}>
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {features[idx]?.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className={cn("h-5 w-5 shrink-0", isMiddle ? "text-brand-200" : "text-brand-500")} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={cn(
                      "w-full h-12 text-base font-semibold",
                      isMiddle 
                        ? "bg-white text-brand-600 hover:bg-brand-50" 
                        : "bg-slate-800 text-white hover:bg-brand-600"
                    )}
                  >
                    <Link href="/contact">
                      {isMiddle ? "Get AMC Quote" : "Learn More"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      {/* Why Choose Us / CTA */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div>
                <Badge variant="outline" className="mb-4 border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                   Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
                   Service Excellence You Can Rely On
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                   We don't just fix problems; we prevent them. Our proactive approach ensures business continuity and peace of mind.
                </p>
                
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                   <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400 feature-icon">
                         <Clock className="h-5 w-5" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-slate-900 dark:text-white">Rapid Response</h3>
                         <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Guaranteed response times for critical issues.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400 feature-icon">
                         <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                         <h3 className="font-semibold text-slate-900 dark:text-white">Certified Experts</h3>
                         <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Technical team certified by major vendors.</p>
                      </div>
                   </div>
                </div>

                <div className="mt-10">
                   <Button asChild size="lg" className="h-12 rounded-full px-8">
                      <Link href="/contact">Schedule a Consultation</Link>
                   </Button>
                </div>
             </div>
             
             {/* Abstract Visual Side */}
             <div className="relative h-[400px] overflow-hidden rounded-3xl bg-slate-900">
                <div className="absolute inset-0 bg-[url('/images/services_support.png')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/80 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                   <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
                      <p className="text-2xl font-bold text-white">"Their support team is an extension of our own IT department."</p>
                      <div className="mt-4 flex items-center justify-center gap-2">
                         {[1,2,3,4,5].map(i => (
                            <svg key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                         ))}
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-200">5-Star Client Rating</p>
                   </div>
                </div>
             </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
