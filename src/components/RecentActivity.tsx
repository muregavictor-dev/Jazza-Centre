import { useEffect, useState } from "react";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const activities = [
  { icon: Award, text: "Mary K. graduated as a certified Professional Nanny", time: "2 hours ago" },
  { icon: Briefcase, text: "3 new house managers placed in Westlands this week", time: "5 hours ago" },
  { icon: Users, text: "New training cohort starts next Monday - 45 enrolled", time: "1 day ago" },
  { icon: TrendingUp, text: "95% of our October graduates now employed", time: "2 days ago" },
  { icon: Award, text: "Peter M. completed Advanced Hospitality program", time: "3 days ago" },
  { icon: Briefcase, text: "Premium family in Runda seeking certified nanny", time: "4 days ago" },
];

const RecentActivity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4 bg-galactic-purple border-y border-electric-pink/20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Live Activity</h3>
          <p className="text-white/70">Real-time updates from Jazza Centre</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-20 overflow-hidden">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-pink/20 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-electric-pink" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.text}</p>
                    <p className="text-white/60 text-sm">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-electric-pink w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to activity ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
