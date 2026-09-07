import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Github, Linkedin, Send, MessageCircle, Mail } from 'lucide-react';
import { resumeData } from '../data';

const ROLES = [
  "Android Application Developer",
  "Full Stack Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const isFullStack = ROLES[roleIndex] === "Full Stack Developer";

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        // Pause at complete word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting backward
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        // Move to next title
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const [purpleFirst, setPurpleFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPurpleFirst((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-24 pb-16 relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Column: Introduction & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">{resumeData.basics.status}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{resumeData.basics.location}</span>
          </div>

          {/* Name with Smooth Alternating Color Animation */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold mb-4 tracking-tight select-none">
            <motion.span
              animate={{
                color: purpleFirst ? '#818cf8' : '#ffffff',
                textShadow: purpleFirst ? '0 0 35px rgba(129, 140, 248, 0.45)' : '0 0 0px transparent',
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="inline-block"
            >
              Danish
            </motion.span>{' '}
            <motion.span
              animate={{
                color: purpleFirst ? '#ffffff' : '#818cf8',
                textShadow: purpleFirst ? '0 0 0px transparent' : '0 0 35px rgba(129, 140, 248, 0.45)',
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="inline-block"
            >
              Shabbir
            </motion.span>
          </h1>

          {/* Typing Developer Role */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
            <h2
              className={`font-mono text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide uppercase flex items-center transition-colors duration-300 ${
                isFullStack ? 'text-white' : 'text-indigo-400'
              }`}
            >
              <span>{displayedText}</span>
              <span
                className={`inline-block w-0.5 h-6 sm:h-8 ml-1 animate-pulse transition-colors duration-300 ${
                  isFullStack ? 'bg-white' : 'bg-indigo-400'
                }`}
              />
            </h2>
          </div>

          {/* Bio Description with Natural English */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            Software Developer specializing in native Android development with Kotlin and Jetpack Compose, along with full-stack development using React, Node.js, and PostgreSQL. Experienced in API integration, backend development, and database management. Built MEye-Pro, an academic management system with automated attendance and timetable scheduling. Focused on developing reliable, responsive, and user-friendly software with clean and maintainable code.
          </p>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Social round buttons */}
            <div className="flex items-center gap-3">
              <a
                href={resumeData.basics.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 bg-slate-900/80 text-slate-300 rounded-full border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm shadow-md"
              >
                <Github size={20} />
              </a>
              <a
                href={resumeData.basics.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 bg-slate-900/80 text-slate-300 rounded-full border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm shadow-md"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`https://wa.me/${resumeData.basics.rawPhone}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-3 bg-slate-900/80 text-emerald-400 rounded-full border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-300 transition-all backdrop-blur-sm shadow-md"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95"
            >
              <Send size={18} />
              <span>Contact Me</span>
            </a>

            {/* Resume CTA */}
            <a
              href={resumeData.basics.resume}
              download="Danish_Shabbir_Resume.pdf"
              className="px-7 py-3.5 bg-slate-900/80 text-slate-200 font-semibold rounded-full border border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm active:scale-95 shadow-md"
            >
              <Download size={18} className="text-indigo-400" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Perfect Circular Profile Picture with Glowing Backdrop & Floating Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0 relative flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-indigo-600 rounded-full blur-[90px] opacity-25 animate-pulse" />

          {/* Circular Frame with Gradient Ring */}
          <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/25 relative z-10">
            <img
              src={resumeData.basics.photo}
              alt={resumeData.basics.name}
              className="w-full h-full object-cover object-top rounded-full border-4 border-slate-950 shadow-inner"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  resumeData.basics.name
                )}&size=512&background=0f172a&color=818cf8`;
              }}
            />
          </div>

          {/* Floating Tag 1: Android Developer */}
          <motion.div
            animate={{ y: [-10, 10, -10], x: [-3, 3, -3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -left-2 sm:top-6 sm:-left-10 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-indigo-500/20 rounded-full text-indigo-400 text-xs">
              📱
            </div>
            <span className="text-slate-200 font-semibold text-xs sm:text-sm tracking-wide">
              Android Developer
            </span>
          </motion.div>

          {/* Floating Tag 2: Full Stack Developer */}
          <motion.div
            animate={{ y: [10, -10, 10], x: [3, -3, 3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -right-2 sm:bottom-8 sm:-right-8 z-20 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            <div className="w-6 h-6 flex items-center justify-center text-cyan-400 text-sm">
              ⚡
            </div>
            <span className="text-slate-200 font-semibold text-xs sm:text-sm tracking-wide">
              Full Stack Developer
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}