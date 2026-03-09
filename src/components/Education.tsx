import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="text-indigo-400" />
              Education
            </h2>
          </motion.div>

          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <div className="text-indigo-400 text-sm mb-2">{edu.institution}</div>
                <div className="flex justify-between text-slate-500 text-xs font-mono">
                  <span>{edu.dates}</span>
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Award className="text-indigo-400" />
              Certifications
            </h2>
          </motion.div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-4 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 ">
                  <Award className="text-indigo-400 w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium ">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
