import { HeroSection } from "@/components/home/hero";
import { WhatIWorkWith } from "@/components/home/what-i-work-with";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIWorkWith />
      <TestimonialsSection />
    </>
  );
}
