import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
