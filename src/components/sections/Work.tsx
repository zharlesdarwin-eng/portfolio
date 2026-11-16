"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData, LocalizedProject } from "@/data/projects";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { useLanguage } from "@/context/LanguageContext";

export default function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section id="work" className="relative w-full py-16 md:py-24 px-6 md:px-14 bg-[#f4f4f4] text-[#1c1d20] border-t border-neutral-300/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-300">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1c1d20]" />
            <span className="text-xs uppercase tracking-widest text-neutral-600 font-mono">
              {t("work.header")} ({projectsData.length})
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono hidden md:inline">
            {t("work.subheader")}
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col divide-y divide-neutral-300/80">
          {projectsData.map((project: LocalizedProject, idx: number) => {
            const isHovered = hoveredId === project.id;
            const isDimmed = hoveredId !== null && !isHovered;
            const content = project[lang];

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative py-7 md:py-10 transition-all duration-400 ease-out ${
                  isDimmed ? "opacity-35" : "opacity-100"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
                  {/* Left: Index & Title */}
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="text-xs font-mono text-neutral-400 select-none">
                      0{idx + 1}
                    </span>
                    <Link
                      href={`/work/${project.id}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight transition-transform duration-400 group-hover:translate-x-2 text-[#1c1d20] hover:text-[#455ce9]"
                    >
                      {content.title}
                    </Link>
                  </div>

                  {/* Right: Meta Tags & Actions */}
                  <div className="flex items-center justify-between lg:justify-end gap-3 md:gap-6 text-sm">
                    <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs md:text-sm text-neutral-500">
                      <span className="px-2.5 py-1 rounded-full bg-black/5 text-neutral-700 w-fit text-[11px] sm:text-xs">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {/* Case Study Detail Link */}
                      <Magnetic strength={0.3} textStrength={0.15}>
                        <Link
                          href={`/work/${project.id}`}
                          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 text-xs font-mono text-neutral-700 hover:border-black hover:text-black transition-colors"
                        >
                          <span>{t("work.caseStudy")}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </Magnetic>

                      {/* Direct Live Website Link */}
                      <Magnetic strength={0.3} textStrength={0.15}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${content.title} live website`}
                          className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-neutral-300 bg-white/70 backdrop-blur-xs text-neutral-700 transition-all duration-300 group-hover:bg-[#1c1d20] group-hover:text-white group-hover:border-[#1c1d20]"
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </div>

                {/* Inline Preview on Hover (Desktop) */}
                <div
                  className={`grid transition-all duration-400 ease-out overflow-hidden ${
                    isHovered
                      ? "grid-rows-[1fr] opacity-100 mt-6 pt-5 border-t border-neutral-200"
                      : "grid-rows-[0fr] opacity-0 mt-0 pt-0"
                  } hidden md:grid`}
                >
                  <div className="min-h-0 flex flex-col md:flex-row items-center gap-6">
                    <Link
                      href={`/work/${project.id}`}
                      className="w-60 h-36 rounded-xl overflow-hidden shadow-md border border-black/5 shrink-0 relative bg-neutral-200 block"
                    >
                      <img
                        src={project.image}
                        alt={content.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>

                    <div className="max-w-xl flex flex-col gap-2">
                      <p className="text-sm text-neutral-600 font-light leading-relaxed">
                        {content.description}
                      </p>
                      <Link
                        href={`/work/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#1c1d20] font-medium hover:underline"
                      >
                        <span>{t("work.exploreCase")}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Preview Image */}
                <div className="block md:hidden mt-4 w-full h-44 rounded-xl overflow-hidden shadow-sm">
                  <Link href={`/work/${project.id}`}>
                    <img
                      src={project.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
