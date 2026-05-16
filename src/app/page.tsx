"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import Preloader from "@/components/Preloader";

// Lazy load sections below the fold
const Menu = dynamic(() => import("@/components/Menu"), {
  loading: () => <div className="h-screen bg-black" />,
  ssr: false
});

const Location = dynamic(() => import("@/components/Location"), {
  ssr: false
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  // Prevent scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      <Preloader 
        isReady={videoReady}
        onLoadingComplete={() => setLoading(false)} 
      />
      
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        
        <div id="home">
          <SequenceScroll onVideoReady={() => setVideoReady(true)} />
        </div>

        {/* 
          Stabilized the transition between the hero and content by using a fixed
          negative margin instead of a viewport-relative one, which prevents gaps
          when the mobile address bar hides.
        */}
        <div className="relative z-10 -mt-32 bg-background">
          <Menu />
          <Location />
          <Footer />
        </div>
      </div>
    </main>
  );
}
