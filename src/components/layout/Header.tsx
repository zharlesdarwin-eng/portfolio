"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "@/data/site.json";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("nl-NL", {
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

  const navItems = [
    { title: t("nav.home"), href: "/#" },
    { title: t("nav.work"), href: "/#work" },
    { title: t("nav.about"), href: "/#about" },
    { title: t("nav.contact"), href: "/#contact" },
  ];

  const codeByText = lang === "nl" ? "Code door " : "Code by ";
  const codeByTranslate = lang === "nl" ? "-translate-x-[5.2em]" : "-translate-x-[4.6em]";
  const codeByZenoPadding = lang === "nl" ? "group-hover:pr-[6.0em]" : "group-hover:pr-[5.8em]";

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
              {/* Rotating Copyright Symbol */}
              <div className="relative overflow-visible">
                <span className="inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:rotate-[360deg]">
                  ©
                </span>
              </div>

              {/* Masked Horizontal Sliding Text Container */}
              <div className="relative overflow-hidden whitespace-nowrap flex items-center h-5">
                <span className={`inline-block transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:${codeByTranslate}`}>
                  {codeByText}
                </span>

                <span className={`relative inline-block transform transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:${codeByTranslate} ${codeByZenoPadding}`}>
                  <span>Zeno</span>
                  <span className="absolute left-[3.1em] top-0 whitespace-nowrap">
                    Hirschfeld
                  </span>
                </span>
              </div>
            </Link>
          </Magnetic>
        </div>

        {/* Status, Navigation & Language Switcher */}
        <div className="flex items-center gap-6 md:gap-10 text-sm pointer-events-auto">
          <div className="hidden lg:flex items-center gap-2 text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Utrecht, NL</span>
            <span className="text-neutral-500">•</span>
            <span>{time} GMT+1</span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((link) => (
              <Magnetic key={link.title} strength={0.2} textStrength={0.1}>
                <Link
                  href={link.href}
                  onClick={link.title === t("nav.home") ? scrollToTop : undefined}
                  className="relative p-2 text-white hover:text-neutral-300 transition-colors"
                >
                  {link.title}
                </Link>
              </Magnetic>
            ))}
          </nav>

          {/* Language Toggle Button (NL / EN) */}
          <Magnetic strength={0.3} textStrength={0.15}>
            <button
              onClick={toggleLang}
              aria-label="Wissel taal / Switch language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-xs text-xs font-mono tracking-wider hover:bg-white hover:text-black transition-all cursor-pointer select-none"
            >
              <span className={lang === "nl" ? "font-bold text-white underline underline-offset-2" : "opacity-60"}>NL</span>
              <span className="opacity-40">/</span>
              <span className={lang === "en" ? "font-bold text-white underline underline-offset-2" : "opacity-60"}>EN</span>
            </button>
          </Magnetic>
        </div>
      </header>

      {/* Floating Magnetic Menu Button */}
      <div
        className={`fixed top-5 right-5 md:top-6 md:right-8 z-50 transition-all duration-500 ${
          isScrolled ? "opacity-100 scale-100 pointer-events-auto" : "opacity-100 md:opacity-0 md:scale-75 md:pointer-events-none"
        }`}
      >
        <Magnetic strength={0.4} textStrength={0.2}>
          <button
            onClick={() => setIsActive(!isActive)}
            aria-label={t("nav.toggleMenu")}
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

      {/* Fullscreen Navigation Drawer */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[460px] bg-[#1c1d20] text-white z-40 flex flex-col justify-between p-8 sm:p-12 md:p-14 shadow-2xl"
          >
            <div className="pt-16">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-2.5 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                  {t("nav.navigation")}
                </span>
                {/* Language Switcher inside Drawer */}
                <button
                  onClick={toggleLang}
                  className="text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white px-2 py-1 rounded border border-neutral-700"
                >
                  Taal: <span className="font-bold underline">{lang.toUpperCase()}</span>
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {navItems.map((link, idx) => (
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
                        if (link.title === t("nav.home")) scrollToTop(e);
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
                {t("nav.socials")}
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
