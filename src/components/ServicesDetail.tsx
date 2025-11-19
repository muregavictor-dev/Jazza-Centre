import { Baby, Home, ChefHat, Shirt, Car, Shield } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Professional Nanny Services",
    description: "Trained caregivers specializing in child development, safety, and nurturing care for infants to teenagers.",
    features: ["CPR & First Aid Certified", "Child Psychology Training", "Educational Activity Planning", "Nutrition Expertise"],
  },
  {
    icon: Home,
    title: "House Managers",
    description: "Executive-level professionals who oversee all aspects of household operations with precision and discretion.",
    features: ["Budget Management", "Staff Supervision", "Event Coordination", "Vendor Relations"],
  },
  {
    icon: ChefHat,
    title: "Private Chefs & Cooks",
    description: "Culinary professionals trained in diverse cuisines, dietary requirements, and fine dining service.",
    features: ["Multiple Cuisines", "Dietary Specialists", "Meal Planning", "Kitchen Management"],
  },
  {
    icon: Shirt,
    title: "Housekeeping Professionals",
    description: "Detail-oriented experts in maintaining pristine living spaces using industry-standard techniques.",
    features: ["Deep Cleaning Experts", "Laundry Specialists", "Organization Skills", "Eco-Friendly Methods"],
  },
  {
    icon: Car,
    title: "Drivers & Chauffeurs",
    description: "Licensed, professional drivers with excellent safety records and customer service skills.",
    features: ["Licensed & Insured", "Defensive Driving", "Route Optimization", "Punctuality Focused"],
  },
  {
    icon: Shield,
    title: "Security-Conscious Staff",
    description: "All our professionals undergo rigorous background checks and security awareness training.",
    features: ["Background Verified", "Security Training", "Confidentiality Sworn", "Reference Checked"],
  },
];

const ServicesDetail = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Comprehensive Placement Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need a nanny, house manager, chef, or complete household staff, 
            we provide thoroughly trained professionals for every domestic need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl p-8 hover:border-electric-pink/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-galactic-purple/10 to-electric-pink/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-electric-pink" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-pink" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Custom Staffing Solutions
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Need multiple staff members or specialized services? We create custom staffing solutions 
            for estates, businesses, and high-net-worth individuals. Our team approach ensures 
            seamless coordination and exceptional service delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-galactic-purple/10 rounded-full">
              <span className="text-sm font-semibold text-galactic-purple">Estate Management</span>
            </div>
            <div className="px-6 py-3 bg-galactic-purple/10 rounded-full">
              <span className="text-sm font-semibold text-galactic-purple">Corporate Housing</span>
            </div>
            <div className="px-6 py-3 bg-galactic-purple/10 rounded-full">
              <span className="text-sm font-semibold text-galactic-purple">Temporary Staffing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
