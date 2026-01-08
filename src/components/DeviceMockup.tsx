import { motion } from "framer-motion";

interface DeviceMockupProps {
  type: "iphone" | "ipad";
  videoSrc?: string;
  className?: string;
}

const DeviceMockup = ({ type, videoSrc, className = "" }: DeviceMockupProps) => {
  if (type === "iphone") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateY: -5 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className={`relative animate-float ${className}`}
      >
        {/* iPhone 17 Pro Frame */}
        <div className="relative" style={{ width: "280px", height: "580px" }}>
          {/* Left side buttons */}
          {/* Action Button */}
          <div 
            className="absolute -left-[3px] top-[120px] w-[3px] h-[28px] rounded-l-sm"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 35%) 0%, hsl(0, 0%, 20%) 50%, hsl(0, 0%, 35%) 100%)",
              boxShadow: "inset 1px 0 1px rgba(255,255,255,0.1)"
            }}
          />
          {/* Volume Up */}
          <div 
            className="absolute -left-[3px] top-[170px] w-[3px] h-[45px] rounded-l-sm"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 35%) 0%, hsl(0, 0%, 20%) 50%, hsl(0, 0%, 35%) 100%)",
              boxShadow: "inset 1px 0 1px rgba(255,255,255,0.1)"
            }}
          />
          {/* Volume Down */}
          <div 
            className="absolute -left-[3px] top-[225px] w-[3px] h-[45px] rounded-l-sm"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 35%) 0%, hsl(0, 0%, 20%) 50%, hsl(0, 0%, 35%) 100%)",
              boxShadow: "inset 1px 0 1px rgba(255,255,255,0.1)"
            }}
          />
          
          {/* Right side - Power Button */}
          <div 
            className="absolute -right-[3px] top-[180px] w-[3px] h-[70px] rounded-r-sm"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 35%) 0%, hsl(0, 0%, 20%) 50%, hsl(0, 0%, 35%) 100%)",
              boxShadow: "inset -1px 0 1px rgba(255,255,255,0.1)"
            }}
          />
          
          {/* Main Frame */}
          <div className="device-frame-iphone shadow-device relative z-10 w-full h-full">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-28 h-[34px] bg-black rounded-full">
              {/* Camera lens */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,20%)]">
                <div className="absolute inset-[2px] rounded-full bg-[hsl(220,50%,15%)]" />
              </div>
            </div>
            
            {/* Screen */}
            <div className="device-screen w-full h-full relative overflow-hidden flex items-center justify-center">
              {videoSrc && (
                <video
                  key={`${videoSrc}?v=3`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 animate-pulse-glow rounded-[3rem] pointer-events-none" />
      </motion.div>
    );
  }

  // iPad with 3D thickness
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 10 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className={`relative animate-float-delayed ${className}`}
      style={{ perspective: "1200px" }}
    >
      <div 
        className="relative"
        style={{ 
          width: "380px", 
          height: "520px",
          transform: "rotateY(18deg) rotateX(2deg)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* iPad Right Edge (3D thickness) */}
        <div 
          className="absolute top-0 -right-[10px] h-full w-[12px] rounded-r-lg"
          style={{ 
            background: "linear-gradient(90deg, hsl(0, 0%, 12%) 0%, hsl(0, 0%, 22%) 40%, hsl(0, 0%, 18%) 100%)",
            transform: "rotateY(-90deg) translateZ(6px)",
            transformOrigin: "left center",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
          }}
        >
          {/* Power Button on edge */}
          <div 
            className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[4px] h-[35px] rounded-full"
            style={{ 
              background: "linear-gradient(90deg, hsl(0, 0%, 30%) 0%, hsl(0, 0%, 15%) 100%)",
              boxShadow: "0 0 2px rgba(0,0,0,0.5)"
            }}
          />
        </div>
        
        {/* iPad Top Edge (3D thickness) */}
        <div 
          className="absolute -top-[8px] left-0 w-full h-[10px] rounded-t-lg"
          style={{ 
            background: "linear-gradient(180deg, hsl(0, 0%, 25%) 0%, hsl(0, 0%, 15%) 100%)",
            transform: "rotateX(90deg) translateZ(5px)",
            transformOrigin: "bottom center"
          }}
        >
          {/* Volume buttons on top edge */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 right-[80px] w-[25px] h-[4px] rounded-full"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 30%) 0%, hsl(0, 0%, 15%) 100%)"
            }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 right-[115px] w-[25px] h-[4px] rounded-full"
            style={{ 
              background: "linear-gradient(180deg, hsl(0, 0%, 30%) 0%, hsl(0, 0%, 15%) 100%)"
            }}
          />
        </div>
        
        {/* iPad Bottom Edge (3D thickness) */}
        <div 
          className="absolute -bottom-[8px] left-0 w-full h-[10px] rounded-b-lg"
          style={{ 
            background: "linear-gradient(0deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 18%) 100%)",
            transform: "rotateX(-90deg) translateZ(5px)",
            transformOrigin: "top center"
          }}
        >
          {/* USB-C port */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[18px] h-[5px] rounded-full"
            style={{ 
              background: "hsl(0, 0%, 8%)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)"
            }}
          />
        </div>
        
        {/* Main iPad Frame */}
        <div 
          className="device-frame-ipad shadow-device relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Camera */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,25%)] z-20">
            <div className="absolute inset-[2px] rounded-full bg-[hsl(220,30%,20%)]" />
          </div>
          
          {/* Screen */}
          <div className="ipad-screen w-full h-full relative overflow-hidden">
            {videoSrc && (
              <video
                key={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-contain bg-black"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceMockup;
