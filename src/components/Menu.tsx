"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MENU_CATEGORIES = [
  {
    title: "Coffee",
    items: [
      { 
        name: "Kopi Susu Gula Aren", 
        price: "10K", 
        description: "Our signature blend with creamy milk and palm sugar.", 
        featured: true,
        image: "/menu/kopi_susu_aren_1778905772116.png"
      },
      { 
        name: "Cold Brew Original", 
        price: "8K", 
        description: "Slow-steeped for 12 hours for a smooth, low-acid finish.",
        image: "/menu/cold_brew_original_1778905834267.png" 
      },
      { 
        name: "Americano", 
        price: "7K", 
        description: "Pure espresso shots with hot water. Bold and clean.",
        image: "/menu/americano_bottle_1778905969367.png"
      },
    ]
  },
  {
    title: "Non Coffee",
    items: [
      { 
        name: "Matcha Latte", 
        price: "10K", 
        description: "Ceremonial grade matcha whisked with creamy milk.", 
        image: "/menu/matcha_latte_1778905849471.png" 
      },
      { 
        name: "Chocolate Latte", 
        price: "10K", 
        description: "Indulgent dark chocolate blended to perfection.", 
        image: "/menu/chocolate_latte_bottle_1778906008214.png" 
      },
      { 
        name: "Mango Latte Original", 
        price: "10K", 
        description: "Sweet mango puree paired with fresh milk.", 
        image: "/menu/mango_latte_1778905888913.png" 
      },
    ]
  }
];

export default function Menu() {
  const [activeItem, setActiveItem] = useState(MENU_CATEGORIES[0].items[0]);

  return (
    <section id="menu" className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfc] text-[#2c241f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
          
          {/* Left Column: Menu Selector */}
          <div className="lg:w-7/12 space-y-16">
            <div className="space-y-6">
              <span className="text-accent tracking-[0.4em] uppercase text-xs font-bold">Discovery</span>
              <h2 className="text-5xl md:text-7xl font-light leading-none tracking-tighter uppercase font-serif italic text-[#1a1512]">
                Our <span className="text-accent italic font-serif">Selection</span>
              </h2>
              <p className="text-sm tracking-[0.2em] uppercase text-[#2c241f]/60">
                Tap or hover to explore each flavor profile.
              </p>
            </div>

            <div className="space-y-16">
              {MENU_CATEGORIES.map((category, catIdx) => (
                <div key={catIdx} className="space-y-6">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-accent font-bold opacity-40 mb-8">{category.title}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <button
                          onMouseEnter={() => setActiveItem(item)}
                          onClick={() => setActiveItem(item)}
                          className={`w-full text-left group flex items-center justify-between p-5 md:p-6 rounded-2xl transition-all duration-300 border border-transparent ${
                            activeItem.name === item.name 
                              ? "bg-[#1a1512] text-white shadow-xl md:scale-[1.01]" 
                              : "hover:border-[#e5e1da] hover:bg-[#f5f2ee]"
                          }`}
                        >
                          <div className="flex flex-col gap-1">
                            <span className={`text-lg md:text-3xl font-light uppercase tracking-tight ${activeItem.name === item.name ? "font-medium" : "text-[#1a1512]"}`}>
                              {item.name}
                            </span>
                            <span className={`text-[10px] md:text-xs font-light tracking-wide transition-opacity duration-500 ${activeItem.name === item.name ? "opacity-80" : "opacity-0 group-hover:opacity-60"}`}>
                              {item.description}
                            </span>
                          </div>
                          <span className={`text-lg md:text-xl font-mono ${activeItem.name === item.name ? "text-white" : "text-accent"}`}>
                            {item.price}
                          </span>
                        </button>
                        
                        {/* Mobile-only Image Expand */}
                        <AnimatePresence>
                          {activeItem.name === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "linear" }}
                              className="lg:hidden overflow-hidden bg-[#ece9e4] rounded-2xl"
                            >
                              <div className="p-4 flex flex-col items-center justify-center gap-4">
                                <div className="relative w-32 h-48 drop-shadow-lg">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <a 
                                  href={`https://wa.me/6285850247777?text=Halo%2C%20saya%20ingin%20pesan%20varian%20${encodeURIComponent(item.name)}%20sebesar%20....%20pcs.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full py-4 bg-[#1a1512] text-white rounded-xl text-center text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
                                >
                                  Order This Product
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Image Display */}
          <div className="hidden lg:block lg:w-5/12">
            <div className="sticky top-32 h-[calc(100vh-160px)]">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-foreground/5 bg-[#f5f2ee] shadow-2xl flex flex-col">
                {/* Product Image Stage */}
                <div className="relative flex-grow flex items-center justify-center p-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.name}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* Lifestyle Photo in a refined frame */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-inner border border-black/5 flex items-center justify-center p-4">
                          <img 
                            src={activeItem.image} 
                            alt={activeItem.name}
                            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                          />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Product Details & Action */}
                <div className="p-10 pt-0 space-y-8">
                  <div className="flex justify-between items-end border-t border-black/5 pt-8">
                      <div className="space-y-1">
                          <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">Selection</div>
                          <div className="text-xl font-serif italic text-[#1a1512] leading-none">{activeItem.name}</div>
                      </div>
                      <div className="space-y-1 text-right">
                          <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">Standard</div>
                          <div className="text-sm font-mono text-[#1a1512]/60">250 ML / 8.5 OZ</div>
                      </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/6285850247777?text=Halo%2C%20saya%20ingin%20pesan%20varian%20${encodeURIComponent(activeItem.name)}%20sebesar%20....%20pcs.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full p-6 bg-[#1a1512] text-white rounded-2xl overflow-hidden relative transition-all duration-500 hover:bg-accent"
                  >
                    <div className="flex flex-col items-start relative z-10">
                      <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-40 mb-1">Direct Order</span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact via WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3 relative z-10">
                      <span className="text-xs font-mono opacity-40">Next</span>
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Floating Footer / Quick Order */}
        <div className="mt-24 pt-16 border-t border-[#e5e1da] flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-accent">
                <div className="p-3 bg-accent/10 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.48 5.228 3.48 8.404c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.982-.51-5.735-1.477l-6.248 1.702zm6.386-4.705c1.587.944 3.146 1.417 4.79 1.417 5.176 0 9.388-4.212 9.388-9.388 0-2.507-.977-4.864-2.75-6.637s-4.13-2.75-6.638-2.75c-5.176 0-9.388 4.212-9.388 9.388 0 1.861.549 3.58 1.587 5.116l-1.041 3.805 3.963-1.08c-.042-.019-.04-.019 0 0zm11.367-6.313c-.274-.137-1.62-.8-1.871-.892-.252-.092-.435-.137-.617.137-.182.274-.708.892-.868 1.074-.16.182-.32.206-.594.069-.274-.137-1.157-.426-2.204-1.36-.815-.726-1.365-1.623-1.525-1.897-.16-.274-.017-.422.12-.558.123-.122.274-.32.411-.48.137-.16.182-.274.274-.457.092-.182.046-.343-.023-.48-.069-.137-.617-1.486-.845-2.035-.223-.532-.468-.459-.617-.466-.144-.006-.309-.007-.474-.007-.165 0-.435.062-.663.309-.228.247-.868.846-.868 2.059 0 1.212.892 2.383.992 2.52.099.137 1.756 2.682 4.254 3.757.594.256 1.059.409 1.421.524.597.19 1.141.163 1.571.099.479-.071 1.62-.663 1.849-1.304.228-.641.228-1.19.16-1.304-.069-.114-.251-.183-.526-.32z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold">Order via WhatsApp</div>
                  <div className="text-2xl font-mono tracking-tighter">085850247777</div>
                </div>
              </div>

              <div className="flex gap-4 text-[#2c241f]/40 text-xs uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-accent transition-colors">@sagalongs.coffee</a>
                <span className="opacity-20">|</span>
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <span className="opacity-20">|</span>
                <a href="#" className="hover:text-accent transition-colors">TikTok</a>
              </div>
        </div>
      </div>
    </section>
  );
}
