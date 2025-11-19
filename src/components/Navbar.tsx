import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-galactic-purple to-electric-pink bg-clip-text text-transparent">
            Jazza Centre
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("training")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection("placement")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Placement
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="cta"
              size="lg"
              className="animate-pulse-glow"
              onClick={() => scrollToSection("contact")}
            >
              Find a Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-white rounded-lg p-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("training")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection("placement")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Placement
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                variant="cta"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Find a Pro
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
