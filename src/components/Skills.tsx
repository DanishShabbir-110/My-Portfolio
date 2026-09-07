import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData, SkillGroup } from '../data';
import {
  Cpu,
  Smartphone,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Search,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  X,
} from 'lucide-react';

interface CategoryMeta {
  icon: typeof Smartphone;
  accent: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
  tagline: string;
  highlightBorder: string;
  highlightBg: string;
  highlightText: string;
  glow: string;
  badgePill: string;
  footerMetric: string;
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  'Android Development': {
    icon: Smartphone,
    accent: 'text-emerald-400',
    badgeBorder: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-400',
    tagline: 'Native Mobile Engineering',
    highlightBorder: 'hover:border-emerald-500/60',
    highlightBg: 'hover:bg-emerald-950/40',
    highlightText: 'hover:text-emerald-300',
    glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/40',
    badgePill: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    footerMetric: 'Offline-First & Clean MVVM',
  },
  'Frontend Development': {
    icon: Layout,
    accent: 'text-cyan-400',
    badgeBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-400',
    tagline: 'Modern Reactive Web',
    highlightBorder: 'hover:border-cyan-500/60',
    highlightBg: 'hover:bg-cyan-950/40',
    highlightText: 'hover:text-cyan-300',
    glow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/40',
    badgePill: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    footerMetric: 'High Performance & Accessible',
  },
  'Backend Development': {
    icon: Server,
    accent: 'text-indigo-400',
    badgeBorder: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-500/10',
    badgeText: 'text-indigo-400',
    tagline: 'Scalable APIs & Systems',
    highlightBorder: 'hover:border-indigo-500/60',
    highlightBg: 'hover:bg-indigo-950/40',
    highlightText: 'hover:text-indigo-300',
    glow: 'hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/40',
    badgePill: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    footerMetric: 'Secure Auth & RBAC Architecture',
  },
  'Databases & Storage': {
    icon: Database,
    accent: 'text-amber-400',
    badgeBorder: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-400',
    tagline: 'Data Modeling & Querying',
    highlightBorder: 'hover:border-amber-500/60',
    highlightBg: 'hover:bg-amber-950/40',
    highlightText: 'hover:text-amber-300',
    glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] group-hover:border-amber-500/40',
    badgePill: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    footerMetric: 'ACID Compliant & Fast Caching',
  },
  'AI & Integrations': {
    icon: BrainCircuit,
    accent: 'text-purple-400',
    badgeBorder: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-400',
    tagline: 'LLM & Vision Systems',
    highlightBorder: 'hover:border-purple-500/60',
    highlightBg: 'hover:bg-purple-950/40',
    highlightText: 'hover:text-purple-300',
    glow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] group-hover:border-purple-500/40',
    badgePill: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    footerMetric: 'Gemini AI & OpenCV Models',
  },
  'Tools & Workflow': {
    icon: Wrench,
    accent: 'text-sky-400',
    badgeBorder: 'border-sky-500/30',
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-400',
    tagline: 'Development & Testing',
    highlightBorder: 'hover:border-sky-500/60',
    highlightBg: 'hover:bg-sky-950/40',
    highlightText: 'hover:text-sky-300',
    glow: 'hover:shadow-[0_0_35px_rgba(14,165,233,0.15)] group-hover:border-sky-500/40',
    badgePill: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    footerMetric: 'Git Workflow & Postman Testing',
  },
};

const CORE_PILLARS = [
  {
    title: 'Native Android',
    stack: 'Kotlin • Compose • Room',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    icon: Smartphone,
  },
  {
    title: 'Modern Frontend',
    stack: 'React • TypeScript • Tailwind',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    icon: Layout,
  },
  {
    title: 'Backend & APIs',
    stack: 'Node.js • FastAPI • REST',
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/30',
    text: 'text-indigo-400',
    icon: Server,
  },
  {
    title: 'Databases & Storage',
    stack: 'PostgreSQL • SQL Server • SQLite',
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    icon: Database,
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = useMemo(() => {
    return [
      { id: 'All', label: 'All Domains', count: resumeData.skills.reduce((acc, s) => acc + s.items.length, 0) },
      ...resumeData.skills.map((s) => ({
        id: s.category,
        label: s.category.replace(' Development', '').replace(' & Storage', '').replace(' & Workflow', ''),
        count: s.items.length,
      })),
    ];
  }, []);

  const filteredGroups = useMemo(() => {
    return resumeData.skills.filter((group: SkillGroup) => {
      const matchesCategory = selectedCategory === 'All' || group.category === selectedCategory;

      if (!searchQuery.trim()) {
        return matchesCategory;
      }

      const q = searchQuery.toLowerCase();
      const matchesCategoryName = group.category.toLowerCase().includes(q);
      const matchesDescription = group.description.toLowerCase().includes(q);
      const matchesSkills = group.items.some((item) => item.toLowerCase().includes(q));

      return (matchesCategoryName || matchesDescription || matchesSkills) && (selectedCategory === 'All' || matchesCategory);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu size={14} />
          <span>Technical Arsenal & Tooling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Skills &</span>
          <span className="text-indigo-400">Technologies</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          A structured directory of the programming languages, native mobile architectures, full-stack frameworks, databases, and tooling I use to engineer robust software.
        </p>
      </motion.div>

      {/* Core Specialization Pillars Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10"
      >
        {CORE_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.color} bg-slate-900/40 border ${pillar.border} backdrop-blur-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${pillar.text}`}>
                  {pillar.title}
                </span>
                <Icon size={16} className={pillar.text} />
              </div>
              <p className="text-xs text-slate-300 font-mono tracking-tight font-medium">
                {pillar.stack}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Controls Bar: Category Filter Tabs & Quick Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillsTab"
                    className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/50 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-indigo-500/30 text-indigo-200' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search Box */}
        <div className="relative w-full md:w-64">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology..."
            className="w-full pl-9 pr-8 py-1.5 bg-slate-900/80 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Categorized Skills Bento Grid */}
      <AnimatePresence mode="wait">
        {filteredGroups.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16 bg-slate-900/30 border border-slate-800/80 rounded-3xl"
          >
            <p className="text-slate-400 text-sm">
              No matching technologies found for &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-medium hover:bg-indigo-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGroups.map((group: SkillGroup, i: number) => {
              const meta = CATEGORY_META[group.category] || {
                icon: Cpu,
                accent: 'text-indigo-400',
                badgeBorder: 'border-indigo-500/30',
                badgeBg: 'bg-indigo-500/10',
                badgeText: 'text-indigo-400',
                tagline: 'Technical Stack',
                highlightBorder: 'hover:border-indigo-500/60',
                highlightBg: 'hover:bg-indigo-950/40',
                highlightText: 'hover:text-indigo-300',
                glow: 'hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/40',
                badgePill: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                footerMetric: 'Verified Technical Competency',
              };

              const Icon = meta.icon;

              return (
                <motion.div
                  layout
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${meta.glow}`}
                >
                  <div>
                    {/* Card Header: Icon, Category Name, Tagline & Count Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-2xl ${meta.badgeBg} border ${meta.badgeBorder} flex items-center justify-center shrink-0 ${meta.accent} group-hover:scale-105 transition-transform`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition-colors tracking-tight">
                            {group.category}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {meta.tagline}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${meta.badgePill}`}
                      >
                        {group.items.length} Skills
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 mb-5 leading-relaxed min-h-[32px]">
                      {group.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {group.items.map((skill, j) => {
                        const isMatched =
                          searchQuery.trim().length > 0 &&
                          skill.toLowerCase().includes(searchQuery.toLowerCase());

                        return (
                          <span
                            key={j}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                              isMatched
                                ? 'bg-indigo-500/20 border-indigo-400 text-white shadow-[0_0_12px_rgba(129,140,248,0.4)] ring-1 ring-indigo-400'
                                : `bg-slate-950/70 border border-slate-800 text-slate-300 ${meta.highlightBorder} ${meta.highlightBg} ${meta.highlightText}`
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors" />
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer Metric */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Zap size={12} className={meta.accent} />
                      {meta.footerMetric}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 size={12} />
                      Proficient
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
