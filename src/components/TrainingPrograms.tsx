import { Button } from "@/components/ui/button";
import { Check, Clock, Award } from "lucide-react";

const programs = [
  {
    title: "Professional Nanny Training",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    highlights: [
      "Child Development & Psychology",
      "First Aid & CPR Certification",
      "Nutrition & Meal Planning",
      "Educational Activities & Play",
      "Behavior Management",
      "Safety & Emergency Response",
    ],
  },
  {
    title: "House Manager Certification",
    duration: "8 Weeks",
    level: "Intermediate",
    highlights: [
      "Household Management Systems",
      "Budget Planning & Management",
      "Event Planning & Hosting",
      "Staff Supervision & Leadership",
      "Inventory & Supply Management",
      "Professional Communication",
    ],
  },
  {
    title: "Hospitality Professional",
    duration: "12 Weeks",
    level: "Advanced",
    highlights: [
      "Luxury Home Management",
      "International Etiquette & Protocol",
      "Fine Dining Service",
      "Property Maintenance Oversight",
      "Personal Assistant Skills",
      "VIP Guest Relations",
    ],
  },
];

const TrainingPrograms = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="placement" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with industry-leading training programs designed to 
            elevate domestic work into a respected, professional career path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="glass-white rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:glow-pink"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {program.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{program.level}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-electric-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-electric-pink" />
                    </div>
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="cta"
                className="w-full"
                onClick={scrollToContact}
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">All programs include:</span> Government-recognized 
            certification, job placement assistance, ongoing mentorship, and professional development resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
