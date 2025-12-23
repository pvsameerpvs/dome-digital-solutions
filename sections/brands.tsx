import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { BRANDS } from "@/lib/constants";

export function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/20">
      <SiteContainer>
        <SectionHeading
          eyebrow="Brands & Partners"
          title="Powered by global technology leaders"
          description="We work with trusted manufacturers and platforms to deliver reliable systems and long-term support."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BRANDS.map((b) => (
            <Card key={b} className="hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{b}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
