import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Briefcase className="text-indigo-400" />
          Work Experience
        </h2>
      </motion.div>

      <div className="space-y-12">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            {/* Grid for desktop alignment */}
            <div className="md:grid md:grid-cols-4 md:gap-12 items-start">

              {/* Left Side: Dates (Desktop only) */}
              <div className="hidden md:block font-mono text-right pt-1 pr-6 leading-tight">
                <div className="text-white text-base lg:text-lg font-bold whitespace-nowrap">
                  {exp.dates}
                </div>
                {exp.duration && (
                  <div className="text-sm lg:text-base font-semibold text-indigo-400 font-mono mt-1.5 whitespace-nowrap">
                    {exp.duration}
                  </div>
                )}
              </div>

              {/* Right Side: Timeline Dot, Line and Card */}
              <div className="md:col-span-3 relative pl-10 md:pl-0">

                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[54px] top-[14px] w-3.5 h-3.5 bg-indigo-500 rounded-full ring-4 ring-slate-900 group-hover:scale-125 transition-transform z-10" />

                {/* Vertical Line */}
                <div className="absolute -left-[24px] md:-left-[47px] top-6 bottom-[-48px] w-px bg-slate-800 group-last:hidden" />

                {/* Dates for Mobile */}
                <div className="md:hidden font-mono text-sm sm:text-base mb-3 flex items-center gap-2 flex-wrap">
                  <span className="text-white font-bold">{exp.dates}</span>
                  {exp.duration && (
                    <span className="text-indigo-400 font-semibold">{exp.duration}</span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-indigo-400 font-medium text-sm sm:text-base mt-0.5">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Bullet points (concise 1-2 lines each) */}
                  <ul className="space-y-2.5 text-slate-300 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="text-indigo-500 mt-1 text-xs shrink-0">▹</span>
                        <span className="leading-relaxed text-sm sm:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-xs font-mono hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}