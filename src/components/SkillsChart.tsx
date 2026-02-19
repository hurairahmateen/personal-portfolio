"use client";

import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { SKILLS } from "@/constants";

const SkillsChart: React.FC = () => {
  const data = SKILLS.slice(0, 6);

  return (
    <section className="bg-slate-900/50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Technical <span className="text-sky-400">Mastery</span>
          </h2>
          <p className="mb-8 leading-relaxed text-slate-400">
            I specialize in the modern web ecosystem, from high-performance
            frontend frameworks to robust cloud-native backends. My expertise is
            backed by years of building scalable production systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                <span className="font-mono text-sm text-slate-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass relative min-h-[400px] rounded-2xl p-6">
          <div className="absolute left-6 top-4 z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Proficiency Radar
            </span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
