"use client";

import React, { useState } from "react";
import Image from "next/image";

import { PROJECTS } from "@/constants";
import type { Project } from "@/types";
import ProjectModal from "@/components/ProjectModal";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  const categories = [
    { name: "All Work", id: "all" },
    { name: "Front-End", id: "frontend" },
    { name: "Back-End", id: "backend" },
    { name: "Full-Stack", id: "fullstack" },
    { name: "AI Solutions", id: "ai" },
  ];

  return (
    <section id="projects" className="bg-slate-900/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Engineering <span className="text-sky-400">Showcase</span>
            </h2>
            <p className="text-slate-400">
              A curated selection of architecture-heavy projects and innovative
              experiments.
            </p>
          </div>

          <div className="glass flex flex-wrap gap-3 rounded-2xl border border-white/5 p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === category.id
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-900/40"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }
              }}
              className="group glass cursor-pointer overflow-hidden rounded-3xl border border-white/5 transition-all duration-700 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-6 bg-slate-950/80 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all hover:scale-110 hover:bg-sky-600 active:scale-95"
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all hover:scale-110 hover:bg-sky-600 active:scale-95"
                    >
                      <i className="fa-solid fa-rocket text-2xl"></i>
                    </a>
                  ) : null}
                </div>
                <div className="absolute left-6 top-6 flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-3xl font-bold leading-tight text-white transition-colors group-hover:text-sky-400">
                    {project.title}
                  </h3>
                  <div className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-all group-hover:text-sky-400">
                    <i className="fa-solid fa-arrow-up-right text-xs"></i>
                  </div>
                </div>
                <p className="mb-8 line-clamp-2 text-lg font-light leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 transition-all group-hover:gap-4">
                  View Details <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
