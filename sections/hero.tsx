import Link from "next/link";
import { ShieldCheck, MonitorPlay, Network, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteContainer } from "@/components/site-container";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";

const pillars = [
  { 
    icon: ShieldCheck, 
    title: "Security Systems", 
    desc: "Access control, barriers, attendance & visitor management.",
    image: "/images/SecuritySystems.png"
  },
  { 
    icon: MonitorPlay, 
    title: "AV Solutions", 
    desc: "Displays, LED walls, conferencing, smart classrooms & signage.",
    image: "/images/AV-Solutions.png"
  },
  { 
    icon: Headphones, 
    title: "IT Products & Support", 
    desc: "Enterprise devices, peripherals, and responsive support.",
    image: "/images/IT Products & Support.png"
  },
  { 
    icon: Network, 
    title: "Network Security", 
    desc: "Structured cabling, switching, Wi‑Fi, VPN, and proxy services.",
    image: "/images/NetworkSecurity.png"
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Modern futuristic office background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      <SiteContainer className="relative z-10 flex h-full min-h-[90vh] flex-col justify-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
              <Badge variant="dark" className="mb-6 w-fit rounded-full px-4 py-1 text-sm font-medium uppercase tracking-wider backdrop-blur-md">
                Corporate IT & AV Solutions
              </Badge>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Transform Your <span className="text-brand-400">Workspace</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white font-bold sm:text-xl max-w-2xl mx-auto lg:mx-0">
                {COMPANY.tagline} {COMPANY.about}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-full px-8 text-base shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:shadow-brand-500/40">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-slate-700 bg-white/5 px-8 text-base text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-slate-500">
                  <Link href="/solutions">View Solutions</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Cards / Visuals */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="group relative h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-500/10"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Card Background Image */}
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-50"
                  />
                  {/* Default Gradient Overlay - Always visible for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100" />
                  
                  {/* Hover Content Overlay - Subtle darkening/lightening on interaction */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-200">{p.desc}</p>
                  </div>
                  
                  {/* Decorative gradient blob */}
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand-500/20 blur-2xl transition-all group-hover:bg-brand-500/30" />
                </div>
              ))}
            </div>
            
            {/* Trusted Text */}
            <div className="mt-8 rounded-xl border border-white/5 bg-slate-950/50 p-6 backdrop-blur-sm lg:absolute lg:-bottom-12 lg:right-0 lg:w-[120%] lg:max-w-md xl:-right-12">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                     {["/microsoft.png", "/samsung.png", "/logitech.png"].map((logo, i) => (
                       <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-slate-900 bg-white">
                         <Image
                           src={logo}
                           alt="Partner Logo"
                           fill
                           className="object-contain p-1.5"
                         />
                       </div>
                     ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Trusted by 50+ Enterprises</p>
                    <p className="text-xs text-slate-400">Delivering excellence in IT & AV</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SiteContainer>
      
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
