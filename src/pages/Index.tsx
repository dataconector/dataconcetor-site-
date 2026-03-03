import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIEngineSection from "@/components/AIEngineSection";
import CommandCenterSection from "@/components/CommandCenterSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import EcosystemSection from "@/components/EcosystemSection";
import PerformanceSection from "@/components/PerformanceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AIEngineSection />
      <PerformanceSection />
      <CommandCenterSection />
      <EcosystemSection />
      <FeaturesGrid />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
