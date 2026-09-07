import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData, Project } from '../data';
import {
  FolderGit2,
  ScanFace,
  Sparkles,
  LineChart,
  CheckSquare,
  CalendarDays,
  Smartphone,
  Cpu,
  Server,
  Layers,
  CheckCircle2,
  Users,
  ShieldCheck,
  Star,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES = ['All', 'Android Apps', 'Full Stack & AI'] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = useMemo(() => {
    return resumeData.projects.filter((project) => {
      if (selectedCategory === 'All') return true;
      return project.category === selectedCategory;
    });
  }, [selectedCategory]);

  const counts = useMemo(() => {
    return {
      All: resumeData.projects.length,
      'Android Apps': resumeData.projects.filter((p) => p.category === 'Android Apps').length,
      'Full Stack & AI': resumeData.projects.filter((p) => p.category === 'Full Stack & AI').length,
    };
  }, []);

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Header & Interactive Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 size={14} />
            <span>Portfolio & Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
            <span>Featured</span>
            <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A curated selection of native Android applications, AI-integrated systems, and full-stack software built with modular, maintainable architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-2xl self-start md:self-auto backdrop-blur-md">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-indigo-700/80 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {counts[cat]}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Bento Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => {
            const isFlagship = project.flagship && selectedCategory !== 'Android Apps';

            if (isFlagship) {
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="col-span-full group relative bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-indigo-500/40 rounded-3xl p-7 sm:p-9 backdrop-blur-md hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15 overflow-hidden"
                >
                  {/* Glowing ambient background blob */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-indigo-500/15 transition-all duration-500" />

                  {/* Top Ribbon Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold shadow-sm">
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                      <span>{project.badge || 'Capstone Final Year Project'}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      <CheckCircle2 size={13} />
                      <span>Architecture Complete</span>
                    </div>
                  </div>

                  {/* 2-Column Desktop Grid for Flagship */}
                  <div className="grid lg:grid-cols-12 gap-8 relative z-10 items-start">
                    {/* Left Column (Details) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-13 h-13 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 group-hover:bg-indigo-500/25 transition-all shadow-inner">
                          <ScanFace size={26} />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <p className="text-xs sm:text-sm text-indigo-400 font-mono mt-0.5">
                              {project.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="text-indigo-400 mt-1.5 shrink-0 text-sm">▹</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column (Architecture & Stack) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                      {/* Architecture Highlights Sub-card */}
                      {project.architecture && (
                        <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 shadow-inner">
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3 flex items-center gap-1.5">
                            <Cpu size={14} className="text-indigo-400" />
                            <span>System Architecture Breakdown</span>
                          </span>
                          <div className="space-y-2">
                            {project.architecture.map((arch, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                <span>{arch}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 bg-slate-950/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-mono hover:border-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Team Metric Bar */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-1.5 text-indigo-400">
                          <Users size={14} />
                          <span>4-Developer Collaborative Team</span>
                        </div>
                        <span>FastAPI + Android</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Standard Bento Cards (Projects 2–5)
            const iconConfig = getProjectMeta(project.title);
            const Icon = iconConfig.icon;

            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={`group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${iconConfig.glow}`}
              >
                <div>
                  {/* Card Header: Icon and Category / Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${iconConfig.bg} border ${iconConfig.border} flex items-center justify-center shrink-0 ${iconConfig.accent} group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[11px] font-mono text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${iconConfig.badgePill}`}>
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title and Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs text-indigo-400 font-mono mb-4">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Architecture Tags Strip */}
                  {project.architecture && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.architecture.slice(0, 3).map((arch, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/80 text-slate-400"
                        >
                          {arch}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-2 text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-indigo-400 mt-1 shrink-0 text-xs">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Tech Stack & Status Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60 mb-3">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-slate-950/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-mono hover:border-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="text-slate-400 flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      Production Architecture
                    </span>
                    <span className={iconConfig.accent}>{project.tagline || 'Modular & Clean'}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function getProjectMeta(title: string) {
  const lower = title.toLowerCase();

  if (lower.includes('cv builder') || lower.includes('ats')) {
    return {
      icon: Sparkles,
      accent: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      glow: 'hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10',
      badgePill: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    };
  }

  if (lower.includes('expense')) {
    return {
      icon: LineChart,
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      glow: 'hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10',
      badgePill: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };
  }

  if (lower.includes('task')) {
    return {
      icon: CheckSquare,
      accent: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      glow: 'hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10',
      badgePill: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    };
  }

  return {
    icon: CalendarDays,
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    glow: 'hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10',
    badgePill: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };
}
