"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  isReady: boolean;
  onLoadingComplete: () => void;
}

export default function Preloader({ isReady, onLoadingComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsWindowLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + Math.random() * 2;
      });
    }, 200);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(progressInterval);
    };
  }, []);

  // Handle completion when both window and video are ready
  useEffect(() => {
    if (isWindowLoaded && isReady) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsExit(true);
        setTimeout(onLoadingComplete, 1000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isWindowLoaded, isReady, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-12"
        >
          {/* Background Grain/Noise */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-white" />
          
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl md:text-4xl font-light tracking-[0.4em] uppercase text-white font-serif italic">
                Sagalong<span className="text-accent">s</span>
              </h1>
              <p className="text-[8px] tracking-[0.8em] uppercase text-white/40 mt-4 font-bold">The Architecture of Taste</p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </div>

            <div className="mt-6 flex justify-between w-full">
              <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 font-bold">Loading Experience</span>
              <span className="text-[10px] font-mono text-accent">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/10" />
          <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/10" />
          <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-white/10" />
          <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
