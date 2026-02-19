"use client";

import React from "react";

import { PERSONAL_INFO } from "@/constants";

const Hero: React.FC = () => {
  return (
    <section id="about" className="px-6 pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            Available for Strategic Projects
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tighter text-white md:text-7xl lg:text-8xl">
            Code that <span className="gradient-text">Inspires</span>, Systems
            that Scale.
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-xl font-light leading-relaxed text-slate-400 md:text-2xl lg:mx-0">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="transform rounded-xl bg-sky-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-sky-900/30 transition-all hover:scale-105 hover:bg-sky-500"
            >
              Explore My Work
            </a>
            <a
              href="#experience"
              className="glass rounded-xl border border-slate-700 px-8 py-4 text-center font-bold text-white transition-all hover:bg-slate-800"
            >
              Experience
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-500 to-indigo-600 blur-2xl opacity-20 transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
            <div className="glass floating relative h-72 w-72 overflow-hidden rounded-[2.5rem] border-2 border-white/10 md:h-96 md:w-96">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
                onError={(event) => {
                  const target = event.target as HTMLImageElement;
                  target.src =
                    "https://ui-avatars.com/api/?name=" +
                    PERSONAL_INFO.name +
                    "&background=0ea5e9&color=fff&size=512";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl border border-white/10 p-3 text-center">
                  <p className="mb-0.5 text-sm font-bold text-white">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-sky-400">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
