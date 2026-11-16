"use client";

import { useEffect, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowUpRight } from "lucide-react";
import siteData from "@/data/site.json";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [time, setTime] = useState("");
  const { lang, t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(lang === "nl" ? "nl-NL" : "en-US", {
          timeZone: "Europe/Amsterdam",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#1c1d20] text-white flex flex-col justify-between pt-16 md:pt-24 pb-8 md:pb-12 px-6 sm:px-10 md:px-14 overflow-hidden"
    >
      {/* Top Banner Content */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt={siteData.site.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              {t("footer.heading1")}
            </h2>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {t("footer.heading2")}
          </h2>
        </div>

        {/* Magnetic Call-To-Action Button */}
        <div className="mt-8 md:mt-14 flex items-center justify-start md:justify-end">
          <Magnetic strength={0.4} textStrength={0.2}>
            <a
              href={`mailto:${siteData.site.email}`}
              className="group relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-[#455ce9] text-white font-medium text-sm sm:text-base md:text-lg shadow-xl transition-transform hover:scale-105"
            >
              <span className="z-10 flex items-center gap-2">
                {t("footer.getInTouch")}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </Magnetic>
        </div>

        {/* Contact Info Pills */}
        <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
          <Magnetic strength={0.2}>
            <a
              href={`mailto:${siteData.site.email}`}
              className="inline-block px-5 py-3 rounded-full border border-neutral-700 hover:border-white text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
            >
              {siteData.site.email}
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <span className="inline-block px-5 py-3 rounded-full border border-neutral-700 text-xs sm:text-sm text-neutral-400">
              +31 6 27 84 74 30
            </span>
          </Magnetic>
        </div>
      </div>

      {/* Bottom Legal / Social Bar */}
      <div className="max-w-7xl mx-auto w-full pt-10 md:pt-14 mt-10 md:mt-14 border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-xs text-neutral-400 font-mono">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div>
            <span className="block text-neutral-600 mb-0.5">{t("footer.version")}</span>
            <span>{t("footer.versionVal")}</span>
          </div>
          <div>
            <span className="block text-neutral-600 mb-0.5">{t("footer.localTime")}</span>
            <span>{time} GMT+1</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-sans">
          {siteData.site.socials.map((social) => (
            <Magnetic key={social.name} strength={0.15}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </footer>
  );
}
