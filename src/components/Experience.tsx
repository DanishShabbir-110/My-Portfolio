import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 md:px-0">
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
              <div className="hidden md:block text-slate-400 font-mono text-sm text-right pt-2 pr-6 leading-tight">
                {exp.dates}
              </div>

              {/* Right Side: Timeline Dot, Line and Card */}
              <div className="md:col-span-3 relative pl-10 md:pl-0">
                
                {/* Timeline Dot: Positioned exactly parallel to the first line of text */}
                <div className="absolute -left-[31px] md:-left-[54px] top-[14px] w-3.5 h-3.5 bg-indigo-500 rounded-full ring-4 ring-slate-900 group-hover:scale-125 transition-transform z-10" />
                
                {/* Vertical Line: Connecting the dots */}
                <div className="absolute -left-[24px] md:-left-[47px] top-6 bottom-[-48px] w-px bg-slate-800 group-last:hidden" />
                
                {/* Dates for Mobile (Hidden on desktop) */}
                <div className="md:hidden text-slate-400 font-mono text-xs mb-3">
                  {exp.dates}
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-indigo-400 font-medium">{exp.company}</h4>
                  </div>
                  
                  <ul className="space-y-3 text-slate-300">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-indigo-500 mt-1.5 text-[10px]">▹</span>
                        <span className="leading-relaxed text-sm md:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}