import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SolutionsSection } from "@/sections/solutions";
import { ServicesSection } from "@/sections/services";
import { BrandsSection } from "@/sections/brands";
import { ContactSection } from "@/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <BrandsSection />
      {/* <ContactSection /> */}
    </>
  );
}
