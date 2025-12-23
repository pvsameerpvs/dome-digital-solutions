import { Shield, Monitor, Laptop, Router } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SOLUTIONS } from "@/lib/constants";

const icons = [Shield, Monitor, Laptop, Router];

export function SolutionsSection() {
  return (
    <section className="py-16 sm:py-20">
      <SiteContainer>
        <SectionHeading
          eyebrow="Solutions"
          title="Enterprise-grade systems across AV, IT, Security & Networking"
          description="Choose the right stack for your environment—integrated, supported, and delivered with premium vendor partnerships."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((group, idx) => {
            const Icon = icons[idx] ?? Shield;
            return (
              <Card key={group.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-800 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>{group.title}</CardTitle>
                      <CardDescription>Comprehensive options tailored to your site requirements.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-brand-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
