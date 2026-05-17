"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1512] text-[#fdfdfc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Info Section */}
          <div className="lg:w-5/12 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-accent tracking-[0.4em] uppercase text-xs font-bold">Visit Us</span>
              <h2 className="text-5xl md:text-7xl font-light leading-none tracking-tighter uppercase font-serif italic">
                Find Your <br />
                <span className="text-accent italic font-serif">Sanctuary.</span>
              </h2>
              <div className="h-[1px] w-24 bg-accent/30" />
            </motion.div>

            <div className="space-y-8">
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-2">Location</h4>
                  <p className="text-lg font-light text-[#fdfdfc] leading-relaxed">
                    C6Q8+8MV, Jabon, <br />
                    Kec. Jombang, Kabupaten Jombang, <br />
                    Jawa Timur 61419
                  </p>
                  <a href="https://www.google.com/maps/search/?api=1&query=C6Q8%2B8MV,+Jabon,+Kec.+Jombang,+Kabupaten+Jombang,+Jawa+Timur+61419" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.2em] font-bold mt-4 hover:gap-4 transition-all duration-300">
                    Open in Maps <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Clock size={20} />
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  <div className="col-span-2 mb-2">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Hours</h4>
                  </div>
                  <div className="text-xs uppercase tracking-[0.1em] text-[#fdfdfc]/40">Mon — Fri</div>
                  <div className="text-sm font-medium text-[#fdfdfc]">08:00 — 22:00</div>
                  <div className="text-xs uppercase tracking-[0.1em] text-[#fdfdfc]/40">Sat — Sun</div>
                  <div className="text-sm font-medium text-[#fdfdfc]">09:00 — 23:00</div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-2">Contact</h4>
                  <p className="text-lg font-mono text-[#fdfdfc]/80">0858-5024-7777</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Visual Section */}
          <div className="lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-neutral-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#1a110a] flex items-center justify-center p-12 overflow-hidden">
                {/* Decorative abstract map lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-accent/30 rotate-12" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/30 -rotate-6" />
                  <div className="absolute top-0 left-1/3 w-[1px] h-full bg-accent/30 rotate-3" />
                  <div className="absolute top-0 left-2/3 w-[1px] h-full bg-accent/30 -rotate-12" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                  </div>
                  <p className="text-accent tracking-[0.5em] uppercase text-[10px] font-bold">Interactive Map Loading</p>
                </div>
              </div>
              
              {/* Optional: Add a real Google Maps iframe here if you have an API key or use a static embed */}
              {/* <iframe src="..." className="w-full h-full grayscale invert opacity-80" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
