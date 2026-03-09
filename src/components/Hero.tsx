import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Download, Github, Linkedin, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative px-4 md:px-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {resumeData.basics.name}
          </h1>
          <h2 className="text-indigo-400 font-mono mb-6 text-xl md:text-2xl tracking-wider uppercase">
            {resumeData.basics.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
            {resumeData.basics.summary}
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-3">
              <a 
                href={`https://${resumeData.basics.links.find(l => l.includes('github.com'))}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${resumeData.basics.links.find(l => l.includes('linkedin.com'))}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* WAPAS INDIGO/BLUE GRADIENT BUTTON */}
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-full hover:from-indigo-500 hover:to-violet-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25 active:scale-95"
            >
              <Send size={18} />
              Contact Me
            </a>
            
            <a
              href={resumeData.basics.resume}
              download="Danish_Shabbir_Resume.pdf"
              className="px-6 py-3 bg-slate-800/50 text-white font-medium rounded-full border border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Photo & Floating Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
          
          <img
            src={resumeData.basics.photo}
            alt={resumeData.basics.name}
            className="w-full h-full object-cover rounded-full border-4 border-slate-800/50 shadow-2xl relative z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(resumeData.basics.name)}&size=512&background=0f172a&color=818cf8`;
            }}
          />

          {/* Tag 1: Android Developer (Mobile Friendly) */}
          <motion.div
            animate={{ y: [-12, 12, -12], x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 md:top-10 md:-left-24 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full flex items-center gap-2.5 shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center bg-indigo-500/20 rounded-full text-indigo-400 text-xs">
              📱
            </div>
            <span className="text-slate-200 font-semibold text-xs md:text-sm tracking-wide">Android Developer</span>
          </motion.div>

          {/* Tag 2: Kotlin (Mobile Friendly) */}
          <motion.div
            animate={{ y: [12, -12, 12], x: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 md:bottom-12 md:-right-20 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full flex items-center gap-2.5 shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center text-orange-400 text-sm">
              ⚡
            </div>
            <span className="text-slate-200 font-semibold text-xs md:text-sm tracking-wide">Kotlin</span>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}