"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section ref={containerRef} className="relative py-32 md:py-64 px-6 bg-background overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[120%] h-[140%] bg-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl lg:text-9xl font-light text-foreground tracking-tighter mb-8 md:mb-12"
        >
          Elevate Your <span className="text-accent italic font-serif">Senses</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-foreground/40 mb-16 md:mb-24 max-w-xl mx-auto font-light leading-relaxed"
        >
          Join our global network of coffee connoisseurs and gain access to the world&apos;s most exclusive small-batch harvests.
        </motion.p>

        {/* Magnetic Button */}
        <motion.button
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
          className="relative px-12 py-5 md:px-16 md:py-6 bg-coffee-gradient text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.3em] overflow-hidden group shadow-2xl shadow-black/40"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-background">Join the Collective</span>
          <div className="absolute inset-0 bg-foreground translate-y-[100%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </motion.button>
      </div>
    </section>
  );
}
