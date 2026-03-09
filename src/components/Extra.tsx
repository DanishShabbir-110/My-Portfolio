import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Info } from 'lucide-react';

export default function Extra() {
  return (
    <section id="extra" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Info className="text-indigo-400" />
          Additional Details
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm"
      >
        <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
          {resumeData.extra.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1.5 text-xs">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
