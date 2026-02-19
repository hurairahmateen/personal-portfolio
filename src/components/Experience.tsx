import React from "react";

import { EXPERIENCES } from "@/constants";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional <span className="text-sky-400">Journey</span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-400">
            Building the future of the web across high-growth startups and
            global enterprises.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent md:left-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col items-center md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-900 bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] md:left-1/2"></div>

                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass group relative rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-sky-500/30">
                    <div className="glass absolute -top-3 right-8 rounded-full border border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                      {exp.period}
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-1 text-2xl font-bold text-white transition-colors group-hover:text-sky-400">
                        {exp.role}
                      </h4>
                      <p className="flex items-center gap-2 font-medium text-slate-300">
                        <i className="fa-solid fa-building text-xs text-sky-500"></i>
                        {exp.company}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-1 text-sky-500/50">
                            <i className="fa-solid fa-circle-chevron-right text-[10px]"></i>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
