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
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Handle hash-based scrolling
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AIEngineSection />
      <PerformanceSection />
      <CommandCenterSection />
      <EcosystemSection />
      <div id="features">
        <FeaturesGrid />
      </div>
      <TestimonialSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
