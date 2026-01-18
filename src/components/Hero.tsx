import { motion } from "framer-motion";
import zipperlineLogo from "@/assets/zipperline-logo.png";
import DeviceMockup from "./DeviceMockup";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="/videos/background-web.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 gradient-hero opacity-40 z-[1]" />
      <div className="absolute inset-0 gradient-radial opacity-30 z-[2]" />
      <div className="absolute inset-0 gradient-overlay z-[3]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left pt-12 lg:pt-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={zipperlineLogo} 
              alt="Zipperline" 
              className="w-28 h-28 lg:w-36 lg:h-36 mx-auto lg:mx-0 rounded-2xl shadow-glow"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight"
          >
            Master Your Skiing Technique
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Upload and analyse your ski & snowboard videos with AI-powered insights. 
            Compare your technique with professionals and take your skills to the next level.
          </motion.p>

          {/* Additional tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-foreground font-medium mb-8"
          >
            No sensors or wires needed! Just upload your video and let the magic begin!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* App Store Button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-3 bg-foreground/10 backdrop-blur-md border border-foreground/20 hover:bg-foreground/20 transition-all duration-300 rounded-xl px-6 py-4 shadow-button hover:shadow-glow"
            >
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Download on the</p>
                <p className="text-lg font-semibold text-foreground">App Store</p>
              </div>
            </a>

            {/* Coming Soon Android */}
            <div className="flex items-center justify-center gap-3 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-xl px-6 py-4 opacity-70">
              <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6,11.48 L19.28,8.53 a0.67,0.67,0,0,0,-0.24,-0.92,0.67,0.67,0,0,0,-0.92,0.24 L15.82,11.3 a11.43,11.43,0,0,0,-7.64,0 L5.88,7.85 A0.67,0.67,0,0,0,4.96,7.61 a0.67,0.67,0,0,0,-0.24,0.92 L6.4,11.48 A10.6,10.6,0,0,0,2.15,19 H21.85 A10.6,10.6,0,0,0,17.6,11.48 Z M7,16.75 A0.75,0.75,0,1,1,7.75,16,0.75,0.75,0,0,1,7,16.75 Z M17,16.75 A0.75,0.75,0,1,1,17.75,16,0.75,0.75,0,0,1,17,16.75 Z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Coming Soon to</p>
                <p className="text-lg font-semibold text-foreground">Google Play</p>
              </div>
            </div>
          </motion.div>

          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 mt-10 justify-center lg:justify-start"
          >
            {["AI Analysis", "Pro Comparisons", "Technique Insights", "Video Upload"].map((feature, index) => (
              <span
                key={feature}
                className="px-4 py-2 rounded-full bg-zipperline/20 border border-zipperline-light/30 text-sm font-medium text-foreground/90 backdrop-blur-sm"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Device Mockups */}
        <div className="flex-1 relative flex items-center justify-center min-h-[500px] lg:min-h-[700px]">
          {/* iPad in background */}
          <div className="absolute right-0 lg:right-10 top-10 lg:top-0 opacity-80">
            <DeviceMockup type="ipad" videoSrc="/videos/app-demo-optimized.mp4?v=3" />
          </div>
          
          {/* iPhone in foreground */}
          <div className="relative z-10 lg:mr-20">
            <DeviceMockup type="iphone" videoSrc="/videos/app-demo-optimized.mp4?v=3" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
