import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium", {
  variants: {
    variant: {
      default: "border-slate-200 bg-slate-50 text-slate-800",
      brand: "border-brand-200 bg-brand-50 text-brand-800",
      dark: "border-slate-800 bg-slate-950 text-slate-100",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
