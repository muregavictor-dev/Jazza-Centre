import { Shield, Clock, Trophy, HeartHandshake, Briefcase, Target } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Verified & Background-Checked",
    description: "Every professional undergoes thorough vetting and background verification for your peace of mind.",
  },
  {
    icon: Trophy,
    title: "Certified Training Programs",
    description: "Government-recognized certification programs that meet international hospitality standards.",
  },
  {
    icon: Clock,
    title: "Ongoing Support & Monitoring",
    description: "We don't just place workers - we provide continuous support and performance monitoring.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Matching",
    description: "We take time to understand your family's unique needs and match you with the perfect professional.",
  },
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "15+ years of experience in professionalizing domestic workers across Kenya and East Africa.",
  },
  {
    icon: Target,
    title: "Job Placement Guarantee",
    description: "Our graduates receive job placement assistance with a 95% placement rate within 30 days.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Jazza Centre?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just a placement agency - we're Kenya's premier domestic workers academy, 
            transforming lives and professionalizing an entire industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-electric-pink/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-pink/10"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-galactic-purple/10 to-electric-pink/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-electric-pink" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
