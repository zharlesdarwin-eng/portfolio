"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "@/data/site.json";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Amsterdam",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsActive(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-5 md:px-12 md:py-6 flex items-center justify-between mix-blend-difference text-white pointer-events-none">
        {/* Dennis Snellenberg Exact Animated Brand Logo */}
        <div className="pointer-events-auto">
          <Magnetic strength={0.25} textStrength={0.12}>
            <Link
              href="/#"
              onClick={scrollToTop}
              className="group relative flex items-center gap-1.5 py-2 px-1 text-sm tracking-tight cursor-pointer select-none"
            >
              {/* Rotating Copyright Symbol (360deg on hover) */}
              <div className="relative overflow-visible">
                <span className="inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:rotate-[360deg]">
                  ©
                </span>
              </div>

              {/* Masked Horizontal Sliding Text Container */}
              <div className="relative overflow-hidden whitespace-nowrap flex items-center h-5">
                {/* "Code by " slides left out of the mask */}
                <span className="inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-x-[4.6em]">
                  Code by&nbsp;
                </span>

                {/* "Zeno" slides left into the "Code by" position */}
                <span className="relative inline-block transform transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-x-[4.6em] group-hover:pr-[5.8em]">
                  <span>Zeno</span>
                  {/* "Hirschfeld" is positioned just outside and slides in seamlessly */}
                  <span className="absolute left-[3.1em] top-0 whitespace-nowrap">
                    Hirschfeld
                  </span>
                </span>
              </div>
            </Link>
          </Magnetic>
        </div>

        {/* Status & Navigation */}
        <div className="flex items-center gap-8 md:gap-12 text-sm pointer-events-auto">
          <div className="hidden lg:flex items-center gap-2 text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Utrecht, NL</span>
            <span className="text-neutral-500">•</span>
            <span>{time} GMT+1</span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.site.navLinks.map((link) => (
              <Magnetic key={link.title} strength={0.2} textStrength={0.1}>
                <Link
                  href={link.href}
                  onClick={link.title === "Home" ? scrollToTop : undefined}
                  className="relative p-2 text-white hover:text-neutral-300 transition-colors"
                >
                  {link.title}
                </Link>
              </Magnetic>
            ))}
          </nav>
        </div>
      </header>

      {/* Floating Magnetic Menu Button: Always on Mobile, Appears on Scroll on Desktop */}
      <div
        className={`fixed top-5 right-5 md:top-6 md:right-8 z-50 transition-all duration-500 ${
          isScrolled ? "opacity-100 scale-100 pointer-events-auto" : "opacity-100 md:opacity-0 md:scale-75 md:pointer-events-none"
        }`}
      >
        <Magnetic strength={0.4} textStrength={0.2}>
          <button
            onClick={() => setIsActive(!isActive)}
            aria-label="Toggle navigation menu"
            className="relative flex items-center justify-center w-13 h-13 md:w-15 md:h-15 rounded-full bg-[#1c1d20] border border-white/20 text-white shadow-2xl cursor-pointer transition-transform hover:scale-105"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center">
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isActive ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isActive ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  isActive ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </Magnetic>
      </div>

      {/* Fullscreen Navigation Drawer / Curve Overlay */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[460px] bg-[#1c1d20] text-white z-40 flex flex-col justify-between p-8 sm:p-12 md:p-14 shadow-2xl"
          >
            <div className="pt-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-6 border-b border-neutral-700 pb-2.5">
                Navigation
              </span>
              <ul className="flex flex-col gap-4">
                {siteData.site.navLinks.map((link, idx) => (
                  <motion.li
                    key={link.title}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: 0.08 * idx + 0.25, duration: 0.45, ease: "easeOut" },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.title === "Home") scrollToTop(e);
                        setIsActive(false);
                      }}
                      className="text-3xl md:text-4xl font-light hover:text-neutral-400 transition-colors inline-block"
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Socials at bottom */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3 border-b border-neutral-700 pb-2">
                Socials
              </span>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-300">
                {siteData.site.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
