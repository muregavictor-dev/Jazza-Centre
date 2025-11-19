import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-galactic-purple via-electric-pink/20 to-galactic-purple relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-pink rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join Kenya's leading domestic workers training academy and 
          step into a professional career with dignity and respect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-white text-galactic-purple hover:bg-white/90 hover:scale-110"
            onClick={scrollToContact}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <a href="tel:0701811114">
            <Button
              variant="glass"
              size="lg"
              className="text-lg px-8 py-6 h-auto text-white border-white/30 hover:border-white hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">Next Intake</div>
            <div className="text-white/80">Starting Soon</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">6-12 Weeks</div>
            <div className="text-white/80">Program Duration</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Placement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
