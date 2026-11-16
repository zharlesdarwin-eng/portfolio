"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "nl" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Nav
    "nav.home": "Home",
    "nav.work": "Werk",
    "nav.about": "Over mij",
    "nav.contact": "Contact",
    "nav.navigation": "Navigatie",
    "nav.socials": "Socials",
    "nav.toggleMenu": "Navigatiemenu openen",

    // Header Logo
    "logo.codeBy": "Code door ",
    "logo.codeByShort": "Code door Zeno",

    // Hero
    "hero.location": "Gevestigd in Utrecht, Nederland",
    "hero.role": "Freelance Ontwerper & Ontwikkelaar",

    // Preloader
    "preloader.final": "Zeno Hirschfeld",

    // About
    "about.label": "(Over mij)",
    "about.bio": "Ik help merken floreren in de digitale wereld. Gevestigd in Nederland. Ik lever op maat gemaakte digitale ontwerpen en hoogwaardige interactieve websites met een sterke focus op beweging en interactie.",
    "about.subtext": "De combinatie van passie voor design, code & interactie plaatst mij op een unieke plek in de webdesignwereld. Altijd gericht op doordachte motion en robuust digitaal vakmanschap.",
    "about.cta": "Contact opnemen",

    // Work
    "work.header": "Geselecteerd Werk",
    "work.subheader": "Ontwerp & Code • 2023–2024",
    "work.caseStudy": "Bekijk Case",
    "work.exploreCase": "Verken case study",

    // Footer
    "footer.heading1": "Laten we samen",
    "footer.heading2": "werken.",
    "footer.getInTouch": "Neem contact op",
    "footer.version": "VERSIE",
    "footer.versionVal": "2026 Editie",
    "footer.localTime": "LOKALE TIJD",

    // Project Detail Page
    "detail.back": "Terug naar alle projecten",
    "detail.liveDemo": "Live Website Demo",
    "detail.role": "Rol",
    "detail.client": "Klant",
    "detail.year": "Jaar",
    "detail.location": "Locatie",
    "detail.locationVal": "Utrecht / Wereldwijd",
    "detail.overviewLabel": "(Projectoverzicht)",
    "detail.overviewHeading": "Precisie-engineering gecombineerd met merkatmosfeer.",
    "detail.challenge": "De Uitdaging",
    "detail.solution": "De Oplossing",
    "detail.techStack": "Tech Stack & Uitvoering",
    "detail.frames": "(Geselecteerde Beelden)",
    "detail.nextCase": "Volgende Case",
    "detail.viewCase": "Bekijk Case",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.navigation": "Navigation",
    "nav.socials": "Socials",
    "nav.toggleMenu": "Toggle navigation menu",

    // Header Logo
    "logo.codeBy": "Code by ",
    "logo.codeByShort": "Code by Zeno",

    // Hero
    "hero.location": "Located in Utrecht, The Netherlands",
    "hero.role": "Freelance Designer & Developer",

    // Preloader
    "preloader.final": "Zeno Hirschfeld",

    // About
    "about.label": "(About Me)",
    "about.bio": "Helping brands thrive in the digital world. Located in The Netherlands. Delivering custom-made digital designs and high-end interactive websites with a focus on motion and interaction.",
    "about.subtext": "The combination of passion for design, code & interaction positions me in a unique place in the web design world. Focusing on purposeful motion and robust digital craft.",
    "about.cta": "Contact me",

    // Work
    "work.header": "Selected Works",
    "work.subheader": "Design & Code • 2023–2024",
    "work.caseStudy": "Case Study",
    "work.exploreCase": "Explore case study",

    // Footer
    "footer.heading1": "Let's work",
    "footer.heading2": "together.",
    "footer.getInTouch": "Get in touch",
    "footer.version": "VERSION",
    "footer.versionVal": "2026 Edition",
    "footer.localTime": "LOCAL TIME",

    // Project Detail Page
    "detail.back": "Back to All Works",
    "detail.liveDemo": "Live Website Demo",
    "detail.role": "Role",
    "detail.client": "Client",
    "detail.year": "Year",
    "detail.location": "Location",
    "detail.locationVal": "Utrecht / Global",
    "detail.overviewLabel": "(Project Overview)",
    "detail.overviewHeading": "Merging precision engineering with brand atmosphere.",
    "detail.challenge": "The Challenge",
    "detail.solution": "The Solution",
    "detail.techStack": "Tech Stack & Execution",
    "detail.frames": "(Selected Frames)",
    "detail.nextCase": "Next Case",
    "detail.viewCase": "View Case",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "nl",
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("nl");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved === "nl" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferred_lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "nl" ? "en" : "nl";
    handleSetLang(next);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["nl"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
