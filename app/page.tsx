import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SolutionsSection } from "@/sections/solutions";
import { ServicesSection } from "@/sections/services";
import { SmartClassroomSection } from "@/sections/smart-classroom";
import { ProjectsSection } from "@/sections/projects";
import { ProjectGallery } from "@/sections/project-gallery";
import { BrandsSection } from "@/sections/brands";
import { ContactSection } from "@/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <SmartClassroomSection />
      <ProjectsSection limit={3} />
      <ProjectGallery />
      <BrandsSection />
      {/* <ContactSection /> */}
    </>
  );
}
