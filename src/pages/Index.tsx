import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import LocationBanner from "@/components/LocationBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <FeatureCards />
      <LocationBanner />
      <Footer />
    </div>
  );
};

export default Index;
