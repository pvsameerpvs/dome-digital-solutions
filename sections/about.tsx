import { Target, Eye, Handshake, CheckCircle2 } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const values = [
  { 
    icon: Target, 
    title: "Our Mission", 
    description: COMPANY.mission 
  },
  { 
    icon: Eye, 
    title: "Our Vision", 
    description: COMPANY.vision 
  },
  {
    icon: Handshake,
    title: "How We Work",
    description: "We treat customers like family—clear communication, reliable timelines, and solutions that perform in the field.",
  },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900/50" id="about">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
             <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl lg:aspect-[4/5]">
                <Image
                  src="/images/about_collab.png"
                  alt="Dome Digital Solutions Team Collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {/* Float Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                   <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">Excellence Delivered</p>
                        <p className="text-sm text-slate-200">Across Audio-Visual, IT & Security</p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Decorative Background Blob */}
             <div className="absolute -left-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-900/20" />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <Badge variant="brand" className="mb-4">About Us</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Built on trust, delivered with <span className="text-brand-600 dark:text-brand-400">expertise</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {COMPANY.about}
            </p>
            
            <div className="mt-10 grid gap-6">
              {values.map((v) => (
                <div key={v.title} className="group flex gap-4 rounded-2xl border border-transparent bg-white p-5 shadow-sm transition-all hover:border-brand-100 hover:shadow-md dark:bg-slate-800 dark:hover:border-slate-700">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors dark:bg-slate-700 dark:text-brand-400">
                      <v.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">Get in Touch</Link>
               </Button>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
