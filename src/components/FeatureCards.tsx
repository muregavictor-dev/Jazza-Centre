import { Users, Home, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Nanny Placement",
    description: "Professional nannies trained in childcare, early childhood development, and family dynamics.",
  },
  {
    icon: Home,
    title: "House Managers",
    description: "Expert home management professionals skilled in organization, hospitality, and household operations.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Comprehensive training programs that transform domestic workers into certified professionals.",
  },
];

const FeatureCards = () => {
  return (
    <section id="training" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-white rounded-2xl p-8 hover:scale-105 hover:glow-pink transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-galactic-purple to-electric-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
