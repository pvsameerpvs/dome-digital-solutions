"use client";

import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { BRANDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function BrandsSection() {
  const firstRow = BRANDS.slice(0, Math.ceil(BRANDS.length / 2));
  const secondRow = BRANDS.slice(Math.ceil(BRANDS.length / 2));

  return (
    <section className="bg-slate-50/50 py-24 dark:bg-slate-900/20" id="brands">
      <SiteContainer>
        <SectionHeading
          eyebrow="Our Partners"
          title="Powered by global technology leaders"
          description="We work with trusted manufacturers to deliver reliable systems."
          className="mb-12"
        />

        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-12">
            {secondRow.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-50 dark:from-background"></div>
        </div>
      </SiteContainer>
    </section>
  );
}

const BrandCard = ({ brand }: { brand: { name: string; logo: string } }) => {
  const [error, setError] = useState(false);

  return (
    <div className="group relative mx-12 flex h-28 w-[240px] cursor-pointer items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
       {!error ? (
         <div className="relative h-20 w-48">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain opacity-70 transition-opacity group-hover:opacity-100"
              onError={() => setError(true)}
            />
         </div>
       ) : (
         <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
           <Hexagon className="h-4 w-4 text-brand-500" />
           <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{brand.name}</span>
         </div>
       )}
    </div>
  );
};

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
