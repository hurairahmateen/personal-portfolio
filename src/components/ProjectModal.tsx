"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />

          {lightboxImage && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
              <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                onClick={() => setLightboxImage(null)}
              />
              <div className="relative z-[121] flex max-h-[90vh] w-full max-w-[90vw] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src={lightboxImage}
                  alt="Enlarged project screenshot"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="glass absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:bg-white/10"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="overflow-y-auto">
              <div className="relative aspect-video w-full bg-slate-900">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} video`}
                  ></iframe>
                ) : (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                  {project.title}
                </h2>

                <div className="grid gap-12 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-sky-400">
                      Project Overview
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-slate-300">
                      {project.longDescription}
                    </p>

                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="space-y-8">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400">
                          Visual Showcase
                        </h3>
                        <div className="grid gap-6">
                          {project.screenshots.map((src, idx) => (
                            <div
                              key={`${src}-${idx}`}
                              className="group relative overflow-hidden rounded-2xl border border-white/5 shadow-lg"
                            >
                              <Image
                                src={src}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                width={1200}
                                height={675}
                                className="h-auto w-full cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                                onClick={() => setLightboxImage(src)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div className="glass rounded-3xl border border-white/5 p-8">
                        <h3 className="mb-4 text-lg font-bold text-white">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {project.keyFeatures.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-slate-400"
                            >
                              <i className="fa-solid fa-check text-sky-400"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="glass rounded-3xl border border-white/5 p-8">
                        <h3 className="mb-4 text-lg font-bold text-white">
                          What I Built
                        </h3>
                        <ul className="space-y-3">
                          {project.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-slate-400"
                            >
                              <i className="fa-solid fa-check text-sky-400"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(project.liveUrl || project.githubUrl) && (
                      <div className="glass rounded-3xl border border-white/5 p-8">
                        <h3 className="mb-6 text-lg font-bold text-white">
                          Project Links
                        </h3>
                        <div className="space-y-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group flex w-full items-center justify-between rounded-2xl bg-sky-600 px-6 py-4 font-bold text-white transition-all hover:bg-sky-500"
                            >
                              <span>Live Preview</span>
                              <i className="fa-solid fa-rocket transition-transform group-hover:translate-x-1"></i>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="glass group flex w-full items-center justify-between rounded-2xl px-6 py-4 font-bold text-white transition-all hover:bg-white/5"
                            >
                              <span>Source Code</span>
                              <i className="fa-brands fa-github transition-transform group-hover:translate-x-1"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
