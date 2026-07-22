import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hazy Background Layer */}
      <div className="fixed inset-0 z-[-1] bg-neutral-background bg-grid-pattern pointer-events-none" />

      {/* Vertical Grid Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-[94%] max-w-[1800px] h-full border-l border-r border-brand-primary grid grid-cols-4 lg:grid-cols-6 relative">
          <div className="border-r border-brand-primary h-full" />
          <div className="border-r border-brand-primary h-full" />
          <div className="border-r border-brand-primary h-full hidden lg:block" />
          <div className="border-r border-brand-primary h-full hidden lg:block" />
          <div className="border-r border-brand-primary h-full hidden lg:block" />
        </div>
      </div>

      <Nav />
      <main className="pt-32">
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
