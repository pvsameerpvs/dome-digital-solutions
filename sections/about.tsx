import { Target, Eye, Handshake } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COMPANY } from "@/lib/constants";

const values = [
  { icon: Target, title: "Mission", description: COMPANY.mission },
  { icon: Eye, title: "Vision", description: COMPANY.vision },
  {
    icon: Handshake,
    title: "How we work",
    description: "We treat customers like family—clear communication, reliable timelines, and solutions that perform in the field.",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20">
      <SiteContainer>
        <SectionHeading eyebrow="About" title="Built on trust, delivered with expertise" description={COMPANY.about} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <CardHeader>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-800 text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4">{v.title}</CardTitle>
                <CardDescription>{v.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
