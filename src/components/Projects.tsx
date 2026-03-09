import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Code2 className="text-indigo-400" />
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="flex justify-between items-start mb-4">
              <FolderGit2 className="text-indigo-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <ul className="space-y-2 text-slate-400 mb-6 flex-grow text-sm">
              {project.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech, j) => (
                <span key={j} className="px-4 py-2 bg-slate-900/60 border border-slate-700/50 text-slate-300 rounded-lg text-sm hover:border-indigo-500/50 hover:text-indigo-300 transition-colors backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
