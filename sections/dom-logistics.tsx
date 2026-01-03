"use client";

import { SiteContainer } from "@/components/site-container";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Building2, Ship, Plane, Truck, Package } from "lucide-react";
import Image from "next/image";

const services = [
  { icon: Plane, label: "Air Freight" },
  { icon: Ship, label: "Sea Freight" },
  { icon: Truck, label: "Land Transport" },
  { icon: Package, label: "Warehousing" },
];

export function DomLogisticsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/dom_logistics_hero.png" 
          alt="Global Logistics Operations"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50" />
      </div>

      <SiteContainer className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content: Brand & Services */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge variant="brand" className="mb-6 bg-brand-500/20 text-brand-300 hover:bg-brand-500/30">
              Sister Concern
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              DOM LOGISTICS
            </h2>
            <p className="mt-2 text-xl font-medium text-brand-400">
              (OPC) PRIVATE LIMITED
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-lg">
              Connecting your business to the world with seamless, reliable, and efficient global logistics solutions. From air and sea freight to warehousing and distribution, we handle it all with precision.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {services.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-brand-500/30">
                  <Icon className="h-6 w-6 text-brand-400" />
                  <span className="text-sm font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Contact Card */}
          <div className="lg:pl-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-100">
             <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                <div className="p-8">
                  <h3 className="mb-6 text-2xl font-semibold text-white">Contact Us</h3>
                  
                  <div className="space-y-8">
                    {/* Kerala Office */}
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">India Office</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          TC.NO: 60 – 493/6, Kidarakuzhi, Vizhinjam<br />
                          Thiruvananthapuram, Kerala, India - 695523
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-brand-300">
                           <Phone className="h-4 w-4" />
                           <span>+91 94969 29991</span>
                        </div>
                      </div>
                    </div>

                    {/* Dubai Office */}
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Dubai Office</h4>
                         <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          PO Box: 124172, Dubai, UAE
                        </p>
                        <div className="mt-2 space-y-1 text-sm text-brand-300">
                           <div className="flex items-center gap-2">
                             <Phone className="h-4 w-4" />
                             <span>+971 4 450 2795</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <Phone className="h-4 w-4" />
                             <span>+971 55 561 3147</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Footer */}
                <div className="border-t border-white/10 bg-white/5 px-8 py-6 text-center">
                  <a 
                    href="mailto:info@dom-logistics.com" 
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-105 hover:bg-brand-500"
                  >
                    <Mail className="h-4 w-4" />
                    info@dom-logistics.com
                  </a>
                </div>
             </div>
          </div>

        </div>
      </SiteContainer>
    </section>
  );
}
