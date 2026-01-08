import { motion } from "framer-motion";
import { Brain, Video, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Upload Your Videos",
    description: "Easily upload your ski and snowboard videos directly from your phone or cloud storage.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI analyses every turn, stance, and movement to provide detailed technique feedback.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "See your improvement over time with detailed metrics and visual comparisons.",
  },
  {
    icon: Users,
    title: "Compare with Pros",
    description: "Benchmark your technique against professional skiers and world-class athletes.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-radial opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Why Choose Zipperline?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ultimate companion for skiers and snowboarders who want to level up their game.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-zipperline-light/30 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-zipperline/20 flex items-center justify-center mb-6 group-hover:bg-zipperline/30 group-hover:shadow-glow transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-zipperline-light" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
