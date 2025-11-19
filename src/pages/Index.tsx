import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import FeatureCards from "@/components/FeatureCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesDetail from "@/components/ServicesDetail";
import TrainingPrograms from "@/components/TrainingPrograms";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import RecentActivity from "@/components/RecentActivity";
import LocationBanner from "@/components/LocationBanner";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <StatsSection />
      <FeatureCards />
      <WhyChooseUs />
      <ServicesDetail />
      <TrainingPrograms />
      <HowItWorks />
      <Testimonials />
      <RecentActivity />
      <LocationBanner />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
