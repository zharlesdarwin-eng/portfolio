"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, Globe } from "lucide-react";
import siteData from "@/data/site.json";

export default function Hero() {
  const marqueeFirstRef = useRef<HTMLDivElement>(null);
  const marqueeSecondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xPercent = 0;
    let direction = -1;

    const animate = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }

      if (marqueeFirstRef.current && marqueeSecondRef.current) {
        gsap.set(marqueeFirstRef.current, { xPercent: xPercent });
        gsap.set(marqueeSecondRef.current, { xPercent: xPercent });
      }

      xPercent += 0.08 * direction;
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative w-full pt-20 md:pt-28 pb-4 md:pb-8 overflow-hidden bg-[#e5e5e5] text-[#1c1d20]">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-gradient-to-tr from-stone-300/40 via-neutral-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Details & Location */}
      <div className="relative z-10 px-6 md:px-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs">
          <Globe className="w-3.5 h-3.5 text-neutral-600 animate-spin" style={{ animationDuration: "14s" }} />
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-700 font-mono">
            Located in {siteData.site.location}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 font-mono">
          <ArrowDownRight className="w-3.5 h-3.5" />
          <span>{siteData.site.role}</span>
        </div>
      </div>

      {/* Central Portrait Visual with tight natural padding */}
      <div className="relative z-10 flex flex-col items-center justify-center my-4 md:my-6 px-4">
        <div className="relative w-40 h-52 sm:w-56 sm:h-72 md:w-72 md:h-88 rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 grayscale contrast-125 transition-transform duration-700 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
            alt={siteData.site.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Infinite Looping Zeno Hirschfeld Name Marquee */}
      <div className="relative w-full overflow-hidden select-none whitespace-nowrap pointer-events-none z-10 pb-2">
        <div className="flex">
          <div ref={marqueeFirstRef} className="flex shrink-0 items-center">
            <span className="text-5xl sm:text-7xl md:text-[11vw] font-medium tracking-tighter leading-none pr-6 sm:pr-8 md:pr-10 text-[#1c1d20]/90">
              Zeno Hirschfeld —
            </span>
          </div>
          <div ref={marqueeSecondRef} className="flex shrink-0 items-center">
            <span className="text-5xl sm:text-7xl md:text-[11vw] font-medium tracking-tighter leading-none pr-6 sm:pr-8 md:pr-10 text-[#1c1d20]/90">
              Zeno Hirschfeld —
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
