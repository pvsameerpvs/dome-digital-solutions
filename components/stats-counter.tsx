"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, Briefcase, Users, Building2, Monitor, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Award,
    value: 12,
    suffix: "+",
    label: "YEARS",
  },
  {
    icon: Briefcase,
    value: 516,
    suffix: "+",
    label: "PROJECTS",
  },
  {
    icon: Users,
    value: 137,
    suffix: "+",
    label: "CLIENTS",
  },
  {
    icon: Lightbulb,
    value: 12,
    suffix: "+",
    label: "Ongoing projects",
  },
  {
    icon: Monitor,
    value: 10342,
    suffix: "+",
    label: "Smart classroom installations",
  },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

export function StatsCounter({ className }: { className?: string }) {
  return (
    <div className={cn("w-full py-12", className)}>
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl border border-slate-700/50">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <stat.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-bold tracking-tight text-white mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-slate-400 px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
