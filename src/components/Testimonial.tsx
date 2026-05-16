"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote: "The most exquisite coffee experience I've ever had. It's not just a drink, it's a journey of architectural flavors.",
    author: "Elena Rodriguez",
    role: "Sommelier"
  },
  {
    quote: "Sagalong's dedication to quality is evident in every sip. The perfect balance of acidity and sophisticated body.",
    author: "James Chen",
    role: "Culinary Critic"
  },
  {
    quote: "A masterclass in roasting. They've managed to bring out ethereal notes I didn't even know existed in coffee.",
    author: "Sarah Jenkins",
    role: "Barista Champion"
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:h-screen bg-background flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Background abstract shape */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[1200px] h-[1200px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-[160px] animate-pulse" />
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 md:mb-20"
        >
          <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-accent/50 font-bold">Voices</span>
        </motion.div>

        <div className="min-h-[250px] md:min-h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h4 className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.3] md:leading-tight italic font-serif">
                &quot;{testimonials[current].quote}&quot;
              </h4>
              <div className="mt-12 flex flex-col items-center">
                 <div className="font-light text-accent text-sm md:text-base tracking-[0.2em] uppercase">{testimonials[current].author}</div>
                 <div className="text-foreground/20 text-[10px] uppercase tracking-[0.1em] mt-2">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-0 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-12 h-[1px] bg-foreground/10 overflow-hidden relative group"
            >
              <div className={`absolute inset-0 bg-accent transition-transform duration-500 ${current === i ? "translate-x-0" : "-translate-x-full group-hover:-translate-x-1/2"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
