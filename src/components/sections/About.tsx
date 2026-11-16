"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".char-word");

    gsap.fromTo(
      words,
      { opacity: 0.15, y: 8 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 55%",
          scrub: 0.4,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [t]);

  const bio = t("about.bio");
  const bioWords = bio.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-16 md:py-24 px-6 md:px-14 bg-[#f4f4f4] text-[#1c1d20] flex flex-col justify-center border-t border-neutral-300/60"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Subtext / Label */}
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            {t("about.label")}
          </span>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          <p
            ref={textRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-[#1c1d20]"
          >
            {bioWords.map((word, i) => (
              <span key={i} className="char-word inline-block mr-2 transition-colors">
                {word}
              </span>
            ))}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-neutral-300">
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {t("about.subtext")}
            </p>

            <Magnetic strength={0.3} textStrength={0.15}>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1c1d20] text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105 shadow-lg"
              >
                {t("about.cta")}
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
