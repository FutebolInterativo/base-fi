import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { TransformationSection } from "@/components/TransformationSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { AudienceSection } from "@/components/AudienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection, Footer } from "@/components/FinalCTASection";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <Hero />
        <ProblemSection />
        <TransformationSection />
        <CurriculumSection />
        <AudienceSection />
        <TestimonialsSection />
        <InstructorSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
