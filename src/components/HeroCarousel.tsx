import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Professionalizing the Heart of Your Home",
    subtitle: "Equipping men and women with necessary skills to manage homes and business premises",
  },
  {
    image: hero2,
    title: "Premium Nanny Training & Placement",
    subtitle: "Expert care for your children with professionally trained nannies",
  },
  {
    image: hero3,
    title: "Professional House Managers",
    subtitle: "Elevating home management to professional standards",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Purple Gradient Overlay */}
          <div className="absolute inset-0 gradient-purple-overlay" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 ${
                  index === currentSlide ? "animate-fade-up" : ""
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-xl md:text-2xl text-white/90 ${
                  index === currentSlide ? "animate-fade-up animation-delay-200" : ""
                }`}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-electric-pink w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
