import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { TransformationSection } from "@/components/TransformationSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { InstructorSection } from "@/components/InstructorSection";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection, Footer } from "@/components/FinalCTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <TransformationSection />
        <CurriculumSection />
        <InstructorSection />
        <BonusSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
