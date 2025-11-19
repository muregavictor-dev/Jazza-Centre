import { UserPlus, ClipboardCheck, GraduationCap, Briefcase } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Apply & Assessment",
    description: "Submit your application and undergo our comprehensive assessment to identify your strengths and training needs.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Personalized Training",
    description: "Receive tailored training from industry experts covering technical skills, soft skills, and professional standards.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Certification",
    description: "Graduate with a government-recognized certification that validates your professional competence and skills.",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Job Placement",
    description: "Get matched with premium families and businesses seeking qualified professionals. We support you every step of the way.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Journey to Professionalism
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From enrollment to employment - we guide you through every step of becoming 
            a certified professional in domestic services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-electric-pink to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-galactic-purple to-electric-pink flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-6xl font-bold text-electric-pink/20 text-center mb-4">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-center text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-center text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
