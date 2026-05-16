"use client";

import CountUp from "react-countup";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: 12, suffix: "k+", label: "Vessels Poured", duration: 2.5 },
  { value: 85, suffix: "", label: "Ethical Estates", duration: 3 },
  { value: 100, suffix: "%", label: "Pure Arabica", duration: 2 },
  { value: 24, suffix: "h", label: "Extraction Period", duration: 2.5 },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-background text-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col items-center md:items-start group"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tighter text-foreground group-hover:text-accent transition-colors duration-500">
              {isInView ? (
                <CountUp end={stat.value} duration={stat.duration} />
              ) : (
                "0"
              )}
              <span className="text-accent/50 group-hover:text-accent transition-colors duration-500">{stat.suffix}</span>
            </div>
            <div className="text-[10px] md:text-xs text-foreground/30 uppercase tracking-[0.3em] font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
