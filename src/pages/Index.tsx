import { useState, useEffect } from "react";
import { 
  Users, Home, GraduationCap, Award, Building2, TrendingUp,
  Shield, Clock, Trophy, HeartHandshake, Briefcase, Target,
  Check, Quote, Star, Menu, X, MapPin, Phone, Mail, ArrowRight
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);

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

  const stats = [
    { icon: Users, number: "2,500+", label: "Professionals Trained" },
    { icon: Building2, number: "850+", label: "Homes Served" },
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
  ];

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

  const activities = [
    { icon: Award, text: "Mary K. graduated as a certified Professional Nanny", time: "2 hours ago" },
    { icon: Briefcase, text: "3 new house managers placed in Westlands this week", time: "5 hours ago" },
    { icon: Users, text: "New training cohort starts next Monday - 45 enrolled", time: "1 day ago" },
    { icon: TrendingUp, text: "95% of our October graduates now employed", time: "2 days ago" },
    { icon: Award, text: "Peter M. completed Advanced Hospitality program", time: "3 days ago" },
    { icon: Briefcase, text: "Premium family in Runda seeking certified nanny", time: "4 days ago" },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const activityTimer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(slideTimer);
      clearInterval(activityTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 start-0 end-0 z-50 transition-all ${
          isScrolled ? "glass-white shadow-lg" : "bg-transparent"
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="fs-3 fw-bold" style={{
              background: "linear-gradient(to right, hsl(278, 65%, 15%), hsl(333, 85%, 45%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Jazza Centre
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-md-flex align-items-center gap-4">
              <button onClick={() => scrollToSection("home")} className="btn btn-link text-decoration-none fw-medium" style={{ color: "var(--foreground)" }}>
                Home
              </button>
              <button onClick={() => scrollToSection("training")} className="btn btn-link text-decoration-none fw-medium" style={{ color: "var(--foreground)" }}>
                Training
              </button>
              <button onClick={() => scrollToSection("placement")} className="btn btn-link text-decoration-none fw-medium" style={{ color: "var(--foreground)" }}>
                Placement
              </button>
              <button onClick={() => scrollToSection("contact")} className="btn btn-link text-decoration-none fw-medium" style={{ color: "var(--foreground)" }}>
                Contact
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="btn px-4 py-2 fw-semibold glow-pink-strong animate-pulse"
                style={{
                  backgroundColor: "hsl(333, 85%, 45%)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem"
                }}
              >
                Find a Pro
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="btn d-md-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="d-md-none mt-3 glass-white rounded p-3 animate-fade-up">
              <div className="d-flex flex-column gap-3">
                <button onClick={() => scrollToSection("home")} className="btn btn-link text-decoration-none text-start fw-medium" style={{ color: "var(--foreground)" }}>
                  Home
                </button>
                <button onClick={() => scrollToSection("training")} className="btn btn-link text-decoration-none text-start fw-medium" style={{ color: "var(--foreground)" }}>
                  Training
                </button>
                <button onClick={() => scrollToSection("placement")} className="btn btn-link text-decoration-none text-start fw-medium" style={{ color: "var(--foreground)" }}>
                  Placement
                </button>
                <button onClick={() => scrollToSection("contact")} className="btn btn-link text-decoration-none text-start fw-medium" style={{ color: "var(--foreground)" }}>
                  Contact
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="btn w-100"
                  style={{
                    backgroundColor: "hsl(333, 85%, 45%)",
                    color: "white",
                    border: "none"
                  }}
                >
                  Find a Pro
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="position-relative overflow-hidden" style={{ height: "100vh" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "1000ms" }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 gradient-purple-overlay" />
            
            <div className="position-relative h-100 d-flex align-items-center justify-content-center px-3">
              <div className="text-center text-white" style={{ maxWidth: "56rem" }}>
                <h1 className={`display-1 fw-bold mb-4 ${index === currentSlide ? "animate-fade-up" : ""}`}>
                  {slide.title}
                </h1>
                <p className={`fs-4 ${index === currentSlide ? "animate-fade-up" : ""}`} style={{ color: "rgba(255,255,255,0.9)" }}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-4" style={{ zIndex: 10 }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-pill border-0 transition-all ${
                index === currentSlide ? "bg-danger" : ""
              }`}
              style={{
                width: index === currentSlide ? "2rem" : "0.75rem",
                height: "0.75rem",
                backgroundColor: index === currentSlide ? "hsl(333, 85%, 45%)" : "rgba(255,255,255,0.5)",
                transitionDuration: "300ms"
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 position-relative overflow-hidden" style={{
        background: "linear-gradient(135deg, hsl(278, 65%, 15%), hsl(278, 65%, 15%), hsl(278, 65%, 15%))"
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
          <div className="position-absolute rounded-circle animate-pulse" style={{
            top: "2.5rem",
            left: "2.5rem",
            width: "8rem",
            height: "8rem",
            backgroundColor: "hsl(333, 85%, 45%)",
            filter: "blur(3rem)"
          }} />
          <div className="position-absolute rounded-circle animate-pulse" style={{
            bottom: "2.5rem",
            right: "2.5rem",
            width: "10rem",
            height: "10rem",
            backgroundColor: "white",
            filter: "blur(3rem)",
            animationDelay: "1s"
          }} />
        </div>
        
        <div className="container position-relative">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle glass" style={{
                  width: "4rem",
                  height: "4rem",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>
                  <stat.icon size={32} style={{ color: "hsl(333, 85%, 45%)" }} />
                </div>
                <div className="display-4 fw-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="fw-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="training" className="py-5" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5" style={{ color: "var(--foreground)" }}>
            Our Services
          </h2>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="glass-white rounded p-4 h-100" style={{
                  transition: "all 300ms",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.classList.add("glow-pink");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.classList.remove("glow-pink");
                }}>
                  <div className="d-flex align-items-center justify-center rounded-circle mb-4" style={{
                    width: "4rem",
                    height: "4rem",
                    background: "linear-gradient(135deg, hsl(278, 65%, 15%), hsl(333, 85%, 45%))",
                    transition: "transform 300ms"
                  }}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="fs-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
                    {feature.title}
                  </h3>
                  
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              Why Choose Jazza Centre?
            </h2>
            <p className="fs-5 mx-auto" style={{ color: "var(--muted-foreground)", maxWidth: "42rem" }}>
              We're not just a placement agency - we're Kenya's premier domestic workers academy, 
              transforming lives and professionalizing an entire industry.
            </p>
          </div>

          <div className="row g-4">
            {reasons.map((reason, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="p-4 rounded border h-100" style={{
                  borderColor: "var(--border)",
                  transition: "all 300ms"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(217, 3, 104, 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(217, 3, 104, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    background: "linear-gradient(135deg, rgba(42, 14, 69, 0.1), rgba(217, 3, 104, 0.1))",
                    transition: "transform 300ms"
                  }}>
                    <reason.icon size={28} style={{ color: "hsl(333, 85%, 45%)" }} />
                  </div>
                  
                  <h3 className="fs-5 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
                    {reason.title}
                  </h3>
                  
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="placement" className="py-5" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              Professional Training Programs
            </h2>
            <p className="fs-5 mx-auto" style={{ color: "var(--muted-foreground)", maxWidth: "48rem" }}>
              Transform your career with industry-leading training programs designed to 
              elevate domestic work into a respected, professional career path.
            </p>
          </div>

          <div className="row g-4">
            {programs.map((program, index) => (
              <div key={index} className="col-md-4">
                <div className="glass-white rounded p-4 h-100" style={{
                  transition: "all 300ms"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.classList.add("glow-pink");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.classList.remove("glow-pink");
                }}>
                  <h3 className="fs-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
                    {program.title}
                  </h3>
                  
                  <div className="d-flex gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2" style={{ color: "var(--muted-foreground)" }}>
                      <Clock size={16} />
                      <span className="small fw-medium">{program.duration}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2" style={{ color: "var(--muted-foreground)" }}>
                      <Award size={16} />
                      <span className="small fw-medium">{program.level}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2 mb-2">
                        <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          backgroundColor: "rgba(217, 3, 104, 0.2)",
                          marginTop: "0.125rem"
                        }}>
                          <Check size={12} style={{ color: "hsl(333, 85%, 45%)" }} />
                        </div>
                        <span className="small" style={{ color: "var(--muted-foreground)" }}>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="btn w-100 fw-semibold"
                    style={{
                      backgroundColor: "hsl(333, 85%, 45%)",
                      color: "white",
                      border: "none"
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="fs-6" style={{ color: "var(--muted-foreground)" }}>
              <span className="fw-semibold" style={{ color: "var(--foreground)" }}>All programs include:</span> Government-recognized 
              certification, job placement assistance, ongoing mentorship, and professional development resources.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, var(--secondary), var(--background))"
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              Success Stories
            </h2>
            <p className="fs-5 mx-auto" style={{ color: "var(--muted-foreground)", maxWidth: "42rem" }}>
              Hear from our graduates and satisfied clients who have experienced 
              the Jazza Centre difference firsthand.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6">
                <div className="glass-white rounded p-4 position-relative" style={{
                  transition: "all 300ms"
                }}
                onMouseEnter={(e) => e.currentTarget.classList.add("glow-pink")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("glow-pink")}>
                  <Quote className="position-absolute" size={48} style={{
                    top: "1.5rem",
                    right: "1.5rem",
                    color: "rgba(217, 3, 104, 0.2)"
                  }} />
                  
                  <div className="d-flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="hsl(333, 85%, 45%)" color="hsl(333, 85%, 45%)" />
                    ))}
                  </div>
                  
                  <p className="mb-4 position-relative" style={{ 
                    color: "var(--foreground)",
                    zIndex: 10 
                  }}>
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <p className="fw-bold mb-0" style={{ color: "var(--foreground)" }}>{testimonial.name}</p>
                    <p className="small mb-0" style={{ color: "var(--muted-foreground)" }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-5 border-top border-bottom overflow-hidden" style={{
        backgroundColor: "var(--galactic-purple)",
        borderColor: "rgba(217, 3, 104, 0.2) !important"
      }}>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fs-3 fw-bold text-white mb-2">Live Activity</h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>Real-time updates from Jazza Centre</p>
          </div>

          <div className="mx-auto" style={{ maxWidth: "48rem" }}>
            <div className="position-relative overflow-hidden" style={{ height: "5rem" }}>
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`position-absolute top-0 start-0 w-100 ${
                    index === currentActivity ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transition: "all 500ms",
                    transform: index === currentActivity ? "translateY(0)" : "translateY(1rem)"
                  }}
                >
                  <div className="glass rounded p-3 d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "rgba(217, 3, 104, 0.2)"
                    }}>
                      <activity.icon size={24} style={{ color: "hsl(333, 85%, 45%)" }} />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-white fw-medium mb-1">{activity.text}</p>
                      <p className="small mb-0" style={{ color: "rgba(255,255,255,0.6)" }}>{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center gap-2 mt-4">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentActivity(index)}
                  className="rounded-pill border-0"
                  style={{
                    width: index === currentActivity ? "1.5rem" : "0.5rem",
                    height: "0.5rem",
                    backgroundColor: index === currentActivity ? "hsl(333, 85%, 45%)" : "rgba(255,255,255,0.3)",
                    transition: "all 300ms"
                  }}
                  aria-label={`Go to activity ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-5" style={{
        background: "linear-gradient(to right, hsl(278, 65%, 15%), hsl(333, 85%, 45%))"
      }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 text-white text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center rounded-circle glass" style={{
              width: "4rem",
              height: "4rem",
              backgroundColor: "rgba(255,255,255,0.2)"
            }}>
              <MapPin size={32} />
            </div>
            
            <div>
              <h2 className="display-6 fw-bold mb-2">
                New Location Alert!
              </h2>
              <p className="fs-5 mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                Now serving you at <span className="fw-semibold">Safari Park Avenue, No. 271</span>
              </p>
              <p className="fs-6 mb-0" style={{ color: "rgba(255,255,255,0.8)" }}>
                Also available at our Runda location on Kiambu Road
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 position-relative overflow-hidden" style={{
        background: "linear-gradient(135deg, hsl(278, 65%, 15%), rgba(217, 3, 104, 0.2), hsl(278, 65%, 15%))"
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.2 }}>
          <div className="position-absolute rounded-circle animate-pulse" style={{
            top: 0,
            left: "25%",
            width: "16rem",
            height: "16rem",
            backgroundColor: "hsl(333, 85%, 45%)",
            filter: "blur(3rem)"
          }} />
          <div className="position-absolute rounded-circle animate-pulse" style={{
            bottom: 0,
            right: "25%",
            width: "16rem",
            height: "16rem",
            backgroundColor: "white",
            filter: "blur(3rem)",
            animationDelay: "1.5s"
          }} />
        </div>

        <div className="container position-relative text-center" style={{ maxWidth: "56rem" }}>
          <h2 className="display-3 fw-bold mb-4 text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="fs-4 mb-5 mx-auto text-white" style={{ maxWidth: "42rem", opacity: 0.9 }}>
            Join Kenya's leading domestic workers training academy and 
            step into a professional career with dignity and respect.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-lg px-4 py-3 fw-semibold d-flex align-items-center gap-2"
              style={{
                backgroundColor: "white",
                color: "hsl(278, 65%, 15%)",
                border: "none",
                transition: "transform 300ms"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>
            
            <a href="tel:0701811114" className="text-decoration-none">
              <button
                className="btn btn-lg px-4 py-3 fw-semibold d-flex align-items-center gap-2 glass"
                style={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)"
                }}
              >
                <Phone size={20} />
                Call Us Now
              </button>
            </a>
          </div>

          <div className="row g-3 mx-auto" style={{ maxWidth: "48rem" }}>
            <div className="col-md-4">
              <div className="glass rounded p-4">
                <div className="display-6 fw-bold text-white mb-2">Next Intake</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>Starting Soon</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass rounded p-4">
                <div className="display-6 fw-bold text-white mb-2">6-12 Weeks</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>Program Duration</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass rounded p-4">
                <div className="display-6 fw-bold text-white mb-2">95%</div>
                <div style={{ color: "rgba(255,255,255,0.8)" }}>Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white py-5" style={{ backgroundColor: "var(--galactic-purple)" }}>
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-4">
              <h3 className="fs-4 fw-bold mb-4" style={{
                background: "linear-gradient(to right, white, hsl(333, 85%, 45%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Contact Us
              </h3>
              <div className="d-flex flex-column gap-3">
                <a
                  href="tel:0701811114"
                  className="d-flex align-items-center gap-3 text-white text-decoration-none"
                  style={{ transition: "color 300ms" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "hsl(333, 85%, 45%)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                >
                  <Phone size={20} />
                  <span>0701 811114</span>
                </a>
                <a
                  href="mailto:Joseph.gichunge@jazzacentre.com"
                  className="d-flex align-items-center gap-3 text-white text-decoration-none text-break"
                  style={{ transition: "color 300ms" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "hsl(333, 85%, 45%)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                >
                  <Mail size={20} />
                  <span>Joseph.gichunge@jazzacentre.com</span>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="col-md-4">
              <h3 className="fs-4 fw-bold mb-4" style={{
                background: "linear-gradient(to right, white, hsl(333, 85%, 45%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Our Locations
              </h3>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start gap-3">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="fw-semibold mb-0">Runda Office</p>
                    <p className="mb-0" style={{ color: "rgba(255,255,255,0.8)" }}>Kiambu Road, Nairobi</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="fw-semibold mb-0">Safari Park Office</p>
                    <p className="mb-0" style={{ color: "rgba(255,255,255,0.8)" }}>Safari Park Avenue, No. 271</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="col-md-4">
              <h3 className="fs-4 fw-bold mb-4" style={{
                background: "linear-gradient(to right, white, hsl(333, 85%, 45%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                About Jazza Centre
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                We are more than an agency – we are an academy dedicated to professionalizing
                domestic workers. Our mission is to equip men and women with the skills necessary
                to excel in home and business management.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 text-center border-top" style={{ 
            borderColor: "rgba(255,255,255,0.2) !important",
            color: "rgba(255,255,255,0.6)" 
          }}>
            <p className="mb-0">© {new Date().getFullYear()} Jazza Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
