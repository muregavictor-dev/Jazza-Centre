import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Professional Nanny Graduate",
    content: "Jazza Centre transformed my life. I went from uncertain about my future to being a certified professional nanny working with an amazing family in Runda. The training was world-class!",
    rating: 5,
  },
  {
    name: "Mrs. Kamau",
    role: "Parent, Karen",
    content: "We've worked with three different nannies over the years, but none compare to the professional we found through Jazza Centre. The difference in training and attitude is remarkable.",
    rating: 5,
  },
  {
    name: "James Omondi",
    role: "House Manager Graduate",
    content: "The 8-week house manager program exceeded my expectations. I now manage a luxury home in Muthaiga, and I feel confident in every aspect of my role. Thank you, Jazza Centre!",
    rating: 5,
  },
  {
    name: "Dr. Patel",
    role: "Client, Lavington",
    content: "Finding qualified domestic help has always been a challenge. Jazza Centre's rigorous training and vetting process gave us complete confidence. Our house manager is exceptional!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates and satisfied clients who have experienced 
            the Jazza Centre difference firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-white rounded-2xl p-8 hover:glow-pink transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-electric-pink/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-electric-pink text-electric-pink" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
