import CoreFeaturesSection from "@/features/landing/components/CoreFeaturesSection";
import FAQSection from "@/features/landing/components/FAQSection";
import FinalCTASection from "@/features/landing/components/FinalCTASection";
import HeroSection from "@/features/landing/components/Hero";
import HowItWorksSection from "@/features/landing/components/HowItWorkSection";
import ProblemSection from "@/features/landing/components/ProblemSection";
import ProductShowcaseSection from "@/features/landing/components/ProductShowcaseSection";
import TargetAudienceSection from "@/features/landing/components/TargetAudienceSection";
import TrustSection from "@/features/landing/components/TrustSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <TrustSection></TrustSection>
      <ProblemSection></ProblemSection>
      <CoreFeaturesSection></CoreFeaturesSection>
      <HowItWorksSection></HowItWorksSection>
      <ProductShowcaseSection></ProductShowcaseSection>
      <TargetAudienceSection></TargetAudienceSection>
      <FAQSection></FAQSection>
      <FinalCTASection></FinalCTASection>
    </div>
  );
}
