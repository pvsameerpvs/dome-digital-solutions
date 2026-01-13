import { Monitor, Tablet, Users, Lightbulb } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { StatsCounter } from "@/components/stats-counter";

const uniqueFeatures = [
  {
    icon: Monitor,
    title: "Interactive Displays",
    description: "4K ultra-HD touch screens with multi-user capability for seamless collaboration."
  },
  {
    icon: Users,
    title: "Collaborative Layouts",
    description: "Flexible furniture and pod configurations designed to encourage team-based learning."
  },
  {
    icon: Tablet,
    title: "Device Integration",
    description: "BYOD-ready environments with wireless casting and instant connectivity."
  }
];

export function SmartClassroomSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="smart-classroom">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <Badge variant="brand" className="mb-4">Education Technology</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                The Future of Learning is <span className="text-brand-600 dark:text-brand-400">Smart</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Transform traditional classrooms into immersive, interactive learning environments. Our smart classroom solutions integrate cutting-edge AV technology to drive engagement and retention.
              </p>
            </div>

            <div className="grid gap-6">
              {uniqueFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-brand-600 dark:bg-slate-800 dark:border-slate-700 dark:text-brand-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid Side */}
          <div className="order-1 lg:order-2 grid gap-4 grid-cols-2">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800">
               <Image
                 src="/images/smart-classroom-1.png"
                 alt="Smart Classroom Overview"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800">
               <Image
                 src="/images/smart-classroom-2.png"
                 alt="Digital Podium"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800">
               <Image
                 src="/images/smart-classroom-3.png"
                 alt="Collaborative Space"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <StatsCounter />
        </div>
      </SiteContainer>
    </section>
  );
}
