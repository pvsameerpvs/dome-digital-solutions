import { Wrench, ClipboardCheck, LifeBuoy } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const icons = [Wrench, ClipboardCheck, LifeBuoy];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/20">
      <SiteContainer>
        <SectionHeading
          eyebrow="Services"
          title="Support that keeps your business running"
          description="From implementation to long-term maintenance, we deliver predictable performance and responsive support."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = icons[idx] ?? Wrench;
            return (
              <Card key={s.title}>
                <CardHeader>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-800 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
