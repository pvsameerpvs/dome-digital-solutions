import * as React from "react";
import { cn } from "@/lib/utils";

export function SiteContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container", className)} {...props} />;
}
