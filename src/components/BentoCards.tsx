"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BentoCards() {
  return (
    <section id="collections" className="py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#fdfdfc] text-[#2c241f]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent font-bold">Collections</h3>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight font-serif italic text-[#1a1512]">Crafted Excellence</h2>
            </div>
            <p className="text-[#2c241f]/60 text-sm md:text-base max-w-sm font-light leading-relaxed">
                From high-altitude Colombian farms to your morning ritual, we handle every bean with architectural precision.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1: Large Feature */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group border border-[#e5e1da] bg-[#f5f2ee]"
            >
                <Image 
                    src="/sequence/ezgif-frame-080.jpg" 
                    alt="Coffee Beans" 
                    fill
                    className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f5f2ee] via-[#f5f2ee]/20 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-4">Origin</span>
                    <h3 className="text-3xl md:text-5xl font-light text-[#1a1512] mb-4 tracking-tighter font-serif italic">The High Altitude Series</h3>
                    <p className="text-[#2c241f]/70 max-w-md text-sm md:text-base font-light mb-8">Single-origin beans ethically sourced from the volcanic soils of the Andes.</p>
                    <button className="flex items-center gap-3 text-[#1a1512] font-bold uppercase tracking-[0.2em] text-[10px] group-hover:gap-6 transition-all duration-500 w-fit">
                        Explore Collection <ArrowUpRight size={14} className="text-accent" />
                    </button>
                </div>
            </motion.div>

            {/* Card 2: Vertical info */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-[#ece9e4] border border-[#e5e1da] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between h-[400px] md:h-[600px] group"
            >
                <div>
                    <div className="w-10 h-10 border border-accent/30 text-accent rounded-full flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-[#1a1512] mb-4 tracking-tight font-serif">Scientific Roasting</h3>
                    <p className="text-[#2c241f]/60 font-light text-sm md:text-base leading-relaxed">
                        Our master roasters utilize precise thermodynamic profiles to unlock unique aromatic compounds in every batch.
                    </p>
                </div>
                <div className="text-[10px] font-bold text-accent/70 uppercase tracking-[0.3em] pt-8 border-t border-[#e5e1da]">
                    Artisanal Scale • Micro Batch
                </div>
            </motion.div>

            {/* Card 3: Mini Feature */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="bg-[#ece9e4] border border-[#e5e1da] rounded-[2rem] p-8 md:p-10 h-[350px] flex flex-col justify-end relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-[url('/sequence/ezgif-frame-150.jpg')] bg-cover bg-center opacity-20 grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-light text-[#1a1512] mb-2 font-serif italic">The Ritual Kit</h3>
                    <p className="text-[#2c241f]/50 font-light text-xs md:text-sm">Elevated equipment for home brewing.</p>
                </div>
            </motion.div>

            {/* Card 4: Horizontal CTA */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="md:col-span-2 bg-[#f5f2ee] border border-[#e5e1da] rounded-[2rem] p-8 md:p-12 h-[350px] flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative group"
            >
                <div className="relative z-10 max-w-md">
                    <h3 className="text-2xl md:text-4xl font-light text-[#1a1512] mb-4 tracking-tight font-serif italic">Architectural Subscriptions</h3>
                    <p className="text-[#2c241f]/60 font-light text-sm md:text-base mb-8">The freshest profiles, curated by our experts and delivered to your doorstep on a schedule that fits your life.</p>
                    <button className="px-8 py-4 bg-coffee-gradient text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:shadow-xl transition-all duration-500">
                        Join Subscription
                    </button>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-1000">
                    <div className="w-[500px] h-[500px] rounded-full border border-accent border-dashed animate-[spin_120s_linear_infinite]" />
                    <div className="absolute inset-0 m-auto w-[400px] h-[400px] rounded-full border border-accent/50 border-dashed animate-[spin_80s_linear_infinite_reverse]" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
