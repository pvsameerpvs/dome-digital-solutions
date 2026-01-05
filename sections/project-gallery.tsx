"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiteContainer } from "@/components/site-container";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const images = Array.from({ length: 11 }, (_, i) => `/images/projects/projects${i + 1}.jpeg`);

export function ProjectGallery() {
  return (
    <section className="bg-slate-50 py-24 pb-32 dark:bg-slate-900">
      <SiteContainer>
        <div className="mb-16">
          <SectionHeading
            eyebrow="Visual Portfolio"
            title="Project Gallery"
            description="A visual journey through our diverse installations and executed projects across the region."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((src, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl dark:bg-slate-800"
            >
              <div className="relative aspect-[4/3] w-full">
                 <Image
                    src={src}
                    alt={`Project showcase ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
                 <div className="absolute inset-0 bg-black/0 transition-colors hover:bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
