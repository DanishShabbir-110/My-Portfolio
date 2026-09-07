import { motion } from 'motion/react';
import { resumeData } from '../data';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Building2,
  BookOpen,
  CheckCircle2,
  Trophy,
  Terminal,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
          <GraduationCap size={14} />
          <span>Academic Background & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Education &</span>
          <span className="text-indigo-400">Certifications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Formal computer science foundations combined with practical hands-on engineering workshops and competitive coding achievements.
        </p>
      </motion.div>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* Education Column */}
        <div className="space-y-6 flex flex-col">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-800/80">
            <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Academic Education</h3>
              <p className="text-xs text-slate-400 font-mono">Formal Degree Programs</p>
            </div>
          </div>

          <div className="space-y-6 flex-1 flex flex-col">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Degree & Status Pill */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {edu.degree}
                    </h4>
                    {edu.status && (
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap flex items-center gap-1.5 ${
                          edu.status.includes('Progress') || edu.status.includes('Final Year')
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        }`}
                      >
                        {edu.status.includes('Progress') || edu.status.includes('Final Year') ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ) : (
                          <CheckCircle2 size={13} />
                        )}
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Institution */}
                  <div className="text-indigo-400 font-medium text-sm sm:text-base flex items-center gap-2 mb-4">
                    <Building2 size={16} className="shrink-0 text-indigo-400/80" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* Meta details: Dates & Location */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 font-mono mb-4 pb-4 border-t sm:border-t-0 sm:border-b border-slate-800/60 pt-3 sm:pt-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-500" />
                      <span className="text-slate-300 font-semibold">{edu.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Coursework & Focus Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-indigo-400" />
                      <span>Key Coursework & Focus Areas</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 group-hover:border-slate-700/80 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-6 flex flex-col">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-800/80">
            <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Award size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Certifications & Contests</h3>
              <p className="text-xs text-slate-400 font-mono">Workshops & Competitions</p>
            </div>
          </div>

          <div className="space-y-6 flex-1 flex flex-col">
            {resumeData.certifications.map((cert, i) => {
              const isCompetition =
                cert.type?.toLowerCase().includes('coding') ||
                cert.type?.toLowerCase().includes('competition');

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon and Badges */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                        {isCompetition ? <Trophy size={22} /> : <Terminal size={22} />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-slate-950 border border-slate-800 text-indigo-400 font-medium">
                            {cert.type || 'Certification'}
                          </span>
                          {cert.year && (
                            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                              <Calendar size={12} />
                              {cert.year}
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {cert.title}
                        </h4>

                        <div className="text-indigo-400 font-medium text-sm flex items-center gap-1.5 mt-1">
                          <Building2 size={14} className="shrink-0 text-indigo-400/80" />
                          <span>{cert.issuer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-sm text-slate-300 leading-relaxed mb-5 pt-2 border-t border-slate-800/60">
                        {cert.description}
                      </p>
                    )}

                    {/* Skills learned */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mb-5">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                          <Sparkles size={13} className="text-indigo-400" />
                          <span>Key Competencies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 text-xs rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 group-hover:border-slate-700/80 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer status */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>{isCompetition ? 'Recognized Contestant' : 'Verified Workshop Participant'}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">Fast-paced Learning</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
