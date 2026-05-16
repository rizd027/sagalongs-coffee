"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "motion/react";

interface SequenceScrollProps {
  onVideoReady?: () => void;
}

export default function SequenceScroll({ onVideoReady }: SequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappier spring for mobile, smoother for desktop
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 200 : 100,
    damping: isMobile ? 40 : 30,
    restDelta: 0.001
  });

  const opacity0 = useTransform(smoothProgress, [0, 0.3, 0.45], [1, 1, 0]);
  const opacity90 = useTransform(smoothProgress, [0.55, 0.7, 1], [0, 1, 1]);

  const y0 = useTransform(smoothProgress, [0, 0.4], [0, -40]);
  const y90 = useTransform(smoothProgress, [0.55, 0.7], [40, 0]);

  const display0 = useTransform(opacity0, (v) => v === 0 ? "none" : "flex");
  const display90 = useTransform(opacity90, (v) => v === 0 ? "none" : "flex");

  // Rules of Hooks: Hooks must be called before any conditional returns
  // We remove the early return to ensure containerRef is always attached to the DOM
  // which prevents "Target ref is defined but not hydrated" errors.

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Video Background */}
        <video 
          key={isMobile ? "mobile" : "desktop"}
          autoPlay 
          loop 
          muted 
          playsInline 
          onCanPlayThrough={onVideoReady}
          className={`absolute inset-0 w-full h-full object-cover opacity-50 ${isMobile ? "scale-[1.02]" : "scale-100"}`}
        >
          <source src={isMobile ? "/videobg-mobile.webm" : "/video-bg.webm"} type="video/webm" />
        </video>
        
        {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />

        {/* Phase 0: Intro */}
        <motion.div 
          style={{ opacity: opacity0, y: y0, display: display0 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-[12px] tracking-[1em] uppercase text-[#c5a059] font-bold mb-8 block drop-shadow-md">Established 2026</span>
            <h1 className="text-8xl md:text-9xl lg:text-[13rem] font-medium tracking-tight text-[#fdfdfc] font-serif leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              Sagalong<span className="text-[#c5a059] italic font-normal">s</span>
            </h1>
            <div className="h-[1px] w-32 bg-[#c5a059]/60 my-12" />
            <p className="text-xs md:text-sm tracking-[0.8em] uppercase text-[#fdfdfc] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">The Architecture of Taste</p>
          </div>
        </motion.div>

        {/* Phase 3: The Finale */}
        <motion.div 
          style={{ opacity: opacity90, y: y90, display: display90 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-8"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-medium text-foreground mb-16 tracking-tighter text-center leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              Taste the <br />
              <span className="text-[#c5a059] italic font-serif font-normal">Extraordinary</span>
            </h2>
            <button 
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="pointer-events-auto group relative px-16 py-7 bg-transparent border border-[#c5a059]/40 text-[#c5a059] rounded-full overflow-hidden transition-all duration-700 hover:border-[#c5a059]"
            >
                <span className="relative z-10 font-bold uppercase tracking-[0.6em] text-[11px] transition-colors duration-500 group-hover:text-background">Discover More</span>
                <div className="absolute inset-0 bg-coffee-gradient translate-y-[101%] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-y-0" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
