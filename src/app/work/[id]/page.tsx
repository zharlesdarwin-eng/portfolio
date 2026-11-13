import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import siteData from "@/data/site.json";
import { Project } from "@/types";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Footer from "@/components/sections/Footer";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return siteData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = siteData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Zeno Hirschfeld`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Zeno Hirschfeld`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = siteData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const nextProject = siteData.projects.find((p) => p.id === project.nextProjectId) || siteData.projects[0];

  return (
    <div className="relative w-full min-h-screen bg-[#f4f4f4] text-[#1c1d20]">
      {/* Back button */}
      <div className="pt-24 md:pt-32 px-6 md:px-14 max-w-6xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Works</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pt-6 pb-10 md:pb-14 px-6 md:px-14 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-neutral-300">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="px-2.5 py-1 rounded-full bg-black/5 text-neutral-700 font-mono text-[11px]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                {project.year}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1c1d20]">
              {project.title}
            </h1>
          </div>

          <div className="shrink-0">
            <Magnetic strength={0.35} textStrength={0.15}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1c1d20] text-white text-xs sm:text-sm font-medium hover:bg-[#455ce9] transition-colors shadow-lg"
              >
                <span>Live Website Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-neutral-300 text-xs font-mono">
          <div>
            <span className="block text-neutral-400 uppercase tracking-widest mb-0.5">Role</span>
            <span className="text-neutral-800 font-medium">{project.role}</span>
          </div>
          <div>
            <span className="block text-neutral-400 uppercase tracking-widest mb-0.5">Client</span>
            <span className="text-neutral-800 font-medium">{project.client}</span>
          </div>
          <div>
            <span className="block text-neutral-400 uppercase tracking-widest mb-0.5">Year</span>
            <span className="text-neutral-800 font-medium">{project.year}</span>
          </div>
          <div>
            <span className="block text-neutral-400 uppercase tracking-widest mb-0.5">Location</span>
            <span className="text-neutral-800 font-medium">Amsterdam / Global</span>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="px-6 md:px-14 max-w-6xl mx-auto pb-12 md:pb-16">
        <div className="w-full h-[40vh] sm:h-[50vh] md:h-[62vh] rounded-2xl overflow-hidden shadow-xl relative bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Detailed Story */}
      <section className="px-6 md:px-14 max-w-6xl mx-auto pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-2">
              (Project Overview)
            </span>
            <h2 className="text-xl md:text-2xl font-light text-[#1c1d20] leading-snug">
              Merging precision engineering with brand atmosphere.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="text-base md:text-lg font-light text-neutral-700 leading-relaxed">
              {project.fullOverview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-300">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 mb-1.5">
                  The Challenge
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-900 mb-1.5">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-6 border-t border-neutral-300">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2.5">
                Tech Stack & Execution
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs font-mono text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="px-6 md:px-14 max-w-6xl mx-auto pb-14 md:pb-20">
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-4">
          (Selected Frames)
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((img, i) => (
            <div key={i} className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
              <img
                src={img}
                alt={`${project.title} detail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Teaser */}
      <section className="px-6 md:px-14 max-w-6xl mx-auto pb-14 border-t border-neutral-300 pt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-0.5">
              Next Case
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-[#1c1d20]">
              {nextProject.title}
            </h3>
          </div>

          <Magnetic strength={0.3} textStrength={0.15}>
            <Link
              href={`/work/${nextProject.id}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#1c1d20] text-[#1c1d20] hover:bg-[#1c1d20] hover:text-white transition-colors text-xs sm:text-sm font-medium"
            >
              <span>View Case</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
