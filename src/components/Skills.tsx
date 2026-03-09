import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Cpu } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Cpu className="text-indigo-400" />
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-lg font-medium text-white mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => (
                <span
                  key={j}
                  className="px-4 py-2 bg-slate-900/60 border border-slate-700/50 text-slate-300 rounded-lg text-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-colors backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
