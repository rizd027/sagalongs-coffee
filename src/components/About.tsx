"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const text = "We believe that coffee is more than just a drink. It's a moment of pause, a spark of inspiration, and a connection to the earth. Every bean is carefully selected, roasted to perfection, and brewed with passion to deliver an unforgettable experience.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-64 px-6 md:px-12 lg:px-24 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
        
        {/* The Text Reveal Philosophy */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-12"
        >
            <h3 className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent font-bold">Our Philosophy</h3>
            <p className="text-3xl md:text-6xl lg:text-7xl font-light leading-[1.2] flex flex-wrap gap-x-[0.3em] gap-y-1 tracking-tighter">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                
                return (
                <motion.span key={i} style={{ opacity }} className="inline-block">
                    {word}
                </motion.span>
                );
            })}
            </p>
        </motion.div>

        {/* The Deep Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
                <div className="space-y-6">
                  <span className="text-accent tracking-[0.4em] uppercase text-[10px] font-bold">The Story</span>
                  <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase font-serif italic">
                    From Bean <br />
                    <span className="text-accent italic font-serif">To Soul.</span>
                  </h2>
                </div>
                <div className="space-y-8 text-foreground/50 text-lg font-light leading-relaxed max-w-lg">
                  <p>
                    Founded in 2026, Sagalong's began with a simple question: How can we capture the architectural beauty of a perfect brew?
                  </p>
                  <p>
                    Our journey took us from the misty highlands of Java to the volcanic slopes of Colombia, searching for beans that carry a story of the earth. We believe every cup is a sanctuary—a brief pause in a fast-paced world.
                  </p>
                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                 <div className="text-center p-12">
                    <span className="text-accent text-6xl md:text-9xl font-serif italic opacity-20">S</span>
                    <p className="text-xs tracking-[0.4em] uppercase text-accent font-bold mt-4">Heritage in every drop</p>
                 </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
