import { Award, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "2,500+",
    label: "Professionals Trained",
  },
  {
    icon: Building2,
    number: "850+",
    label: "Homes Served",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years of Excellence",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-galactic-purple via-primary to-galactic-purple relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-electric-pink rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <stat.icon className="w-8 h-8 text-electric-pink" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
