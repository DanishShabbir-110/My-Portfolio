import { ArrowUp, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { resumeData } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/60 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        <div>
          <a href="#home" className="text-lg font-bold text-white tracking-tight">
            {resumeData.basics.name}
          </a>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Android Application Developer • Full Stack Developer
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} Danish Shabbir. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resumeData.basics.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={resumeData.basics.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`https://wa.me/${resumeData.basics.rawPhone}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href={`mailto:${resumeData.basics.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
          >
            <Mail size={16} />
          </a>
          
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
