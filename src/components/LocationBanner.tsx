import { MapPin } from "lucide-react";

const LocationBanner = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-galactic-purple to-electric-pink">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <MapPin className="w-8 h-8" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              New Location Alert!
            </h2>
            <p className="text-xl text-white/90">
              Now serving you at <span className="font-semibold">Safari Park Avenue, No. 271</span>
            </p>
            <p className="text-lg text-white/80 mt-1">
              Also available at our Runda location on Kiambu Road
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
