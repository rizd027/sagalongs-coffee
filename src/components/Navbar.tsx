"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { title: "Home", targetId: "home" },
  { title: "Menu", targetId: "menu" },
  { title: "Visit Us", targetId: "location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > window.innerHeight * 0.5);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-8 transition-all duration-500 ${
          scrolled ? "bg-background/20 backdrop-blur-xl py-4 md:py-6" : "bg-transparent"
        } ${visible ? "translate-y-0" : "-translate-y-full opacity-0"}`}
      >
        <div 
          onClick={(e) => scrollToSection(e, "home")}
          className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-foreground cursor-pointer"
        >
          Sagalong<span className="text-accent font-serif italic lowercase tracking-normal">s</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <motion.button 
                key={link.title} 
                onClick={(e) => scrollToSection(e, link.targetId)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9, opacity: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                {link.title}
              </motion.button>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block h-[1px] w-6 bg-foreground transition-all duration-500 ease-out ${isOpen ? "translate-y-[7px] rotate-45 w-8" : "group-hover:w-8"}`} />
            <span className={`block h-[1px] w-8 bg-accent transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1px] w-6 bg-foreground transition-all duration-500 ease-out self-end ${isOpen ? "-translate-y-[7px] -rotate-45 w-8" : "group-hover:w-8"}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col p-8 md:p-24 overflow-y-auto overscroll-contain"
            data-lenis-prevent
          >
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute -top-[10%] -right-[10%] w-[80%] h-[80%] bg-accent/20 rounded-full blur-[150px]" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[150px]" />
            </div>

            <div className="flex flex-col min-h-full relative z-10">
              {/* Header inside menu */}
              <div className="flex justify-between items-center mb-16 md:mb-20 shrink-0">
                <div 
                  onClick={(e) => scrollToSection(e, "home")}
                  className="text-xl font-light tracking-[0.3em] uppercase text-foreground cursor-pointer"
                >
                  Sagalong<span className="text-accent font-serif italic lowercase tracking-normal">s</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col items-center justify-center gap-1 p-2"
                  aria-label="Close Menu"
                >
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <span className="absolute block h-[1px] w-8 bg-foreground rotate-45 transition-transform duration-500 group-hover:scale-x-110" />
                    <span className="absolute block h-[1px] w-8 bg-accent -rotate-45 transition-transform duration-500 group-hover:scale-x-110" />
                  </div>
                  <span className="text-[8px] tracking-[0.4em] uppercase font-bold text-foreground/40 mt-1">Close</span>
                </button>
              </div>

              {/* Main Links */}
              <div className="flex flex-col gap-6 md:gap-12 flex-grow justify-center py-12">
                {navLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden group">
                    <motion.button
                      onClick={(e) => scrollToSection(e, link.targetId)}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 + (i * 0.1) }}
                      className="flex items-center gap-4 md:gap-8"
                    >
                      <span className="text-accent/40 text-[10px] md:text-xs font-mono mb-4 md:mb-8">0{i + 1}</span>
                      <span className="text-5xl md:text-9xl font-light text-foreground group-hover:text-accent transition-colors duration-500 tracking-tighter font-serif italic leading-tight">
                        {link.title}
                      </span>
                    </motion.button>
                  </div>
                ))}
              </div>

              {/* Bottom Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-8 pt-10 border-t border-foreground/10 mt-auto"
              >
                <div className="space-y-4">
                  <h4 className="text-accent text-[9px] tracking-[0.3em] uppercase font-bold">Connect</h4>
                  <div className="flex flex-col gap-2 text-xs md:text-sm text-foreground/60">
                    <a href="https://www.instagram.com/sagalongscoffee/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
                    <a href="#" className="hover:text-accent transition-colors">TikTok</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-accent text-[9px] tracking-[0.3em] uppercase font-bold">Ritual</h4>
                  <div className="flex flex-col gap-2 text-xs md:text-sm text-foreground/60">
                    <p>Daily 08:00 - 22:00</p>
                    <p>085850247777</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
