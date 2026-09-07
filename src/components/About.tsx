import { motion } from 'motion/react';
import {
  User,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Zap,
  Boxes,
  Activity,
  Radio,
  Share2,
  Server,
  ArrowRight,
} from 'lucide-react';

const ARCHITECTURE_PILLARS = [
  {
    title: 'Architecture & Design Patterns',
    subtitle: 'Scalable, decoupled application structure',
    icon: Layers,
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    glow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    badgePill: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { name: 'Clean Architecture', desc: 'Separation into Domain, Data, and Presentation layers' },
      { name: 'MVVM Pattern', desc: 'Model-View-ViewModel with lifecycle-safe ViewModels' },
      { name: 'MVI Architecture', desc: 'Model-View-Intent with Unidirectional Data Flow (UDF)' },
      { name: 'Repository Pattern', desc: 'Single source of truth with offline-first caching' },
    ],
  },
  {
    title: 'Dependency Injection (DI)',
    subtitle: 'Inversion of control & testable architecture',
    icon: Cpu,
    accent: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    glow: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    badgePill: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    items: [
      { name: 'Hilt (Dagger)', desc: 'Compile-time dependency injection with Android lifecycle scopes' },
      { name: 'Koin DI', desc: 'Pragmatic, lightweight Kotlin-first service locator DSL' },
      { name: 'Modular DI Modules', desc: 'Feature-based module isolation and easy unit test mocking' },
      { name: 'Constructor Injection', desc: 'Clean object instantiation without tight coupling' },
    ],
  },
  {
    title: '4 Fundamental Android Components',
    subtitle: 'Core system primitives & execution boundaries',
    icon: Smartphone,
    accent: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    glow: 'hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    badgePill: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { name: 'Activities', desc: 'UI entry points, backstack navigation, and lifecycle management' },
      { name: 'Services', desc: 'Foreground services & long-running background tasks' },
      { name: 'Broadcast Receivers', desc: 'System events (boot, network connectivity, alarms)' },
      { name: 'Content Providers', desc: 'Secure inter-app data persistence & SQLite access' },
    ],
  },
  {
    title: 'Reactive Concurrency & Dual UI Toolkits',
    subtitle: 'Modern declarative & battle-tested views',
    icon: Sparkles,
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    glow: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    badgePill: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    items: [
      { name: 'Jetpack Compose', desc: 'Declarative composables, animations, and state hoisting' },
      { name: 'Android XML Layouts', desc: 'ViewBinding, DataBinding, and ConstraintLayout optimization' },
      { name: 'Coroutines & StateFlow', desc: 'Structured concurrency, Flow, and reactive hot streams' },
      { name: 'Room Database (SQLite)', desc: 'Type-safe local database caching and offline sync' },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      {/* Section Heading & Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Smartphone size={14} />
          <span>Engineering Profile & Android Specialization</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>About</span>
          <span className="text-indigo-400">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Native Android Engineer specializing in Clean Architecture, reactive paradigms, and end-to-end software systems.
        </p>
      </motion.div>

      {/* Main Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 mb-12"
      >
        <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            I am a dedicated <strong className="text-white font-semibold">Software Developer</strong> based in{' '}
            <span className="text-slate-100 font-medium">Rawalpindi, Pakistan</span>, currently completing my Bachelor of Science in Computer Science at{' '}
            <span className="text-slate-100 font-medium">Barani Institute of Information Technology (2022–2026)</span>. My engineering foundation is built around native mobile development with Kotlin, where I combine computer science theory with production-ready software craftsmanship.
          </p>

          <p>
            In modern Android engineering, I specialize in <strong className="text-emerald-400 font-semibold">Clean Architecture</strong>, establishing a strict separation between <span className="text-slate-100">Domain</span> (Use Cases & Business Logic), <span className="text-slate-100">Data</span> (Repositories, Room DB & Remote APIs), and <span className="text-slate-100">Presentation</span> layers. I employ both <strong className="text-indigo-400 font-semibold">MVVM (Model-View-ViewModel)</strong> for lifecycle-aware state persistence and <strong className="text-purple-400 font-semibold">MVI (Model-View-Intent)</strong> with <strong className="text-cyan-400 font-semibold">Unidirectional Data Flow (UDF)</strong> to eliminate race conditions and guarantee predictable, deterministic UI states.
          </p>

          <p>
            To build decoupled, easily testable applications, I leverage <strong className="text-cyan-400 font-semibold">Dependency Injection</strong> using <span className="text-slate-100 font-medium">Hilt (Dagger)</span> for compile-time safety and Android lifecycle scoping, alongside <span className="text-slate-100 font-medium">Koin</span> for lightweight, pragmatic Kotlin-first injection.
          </p>

          <p>
            My mobile mastery encompasses all four <strong className="text-white font-semibold">fundamental Android components</strong>:
          </p>

          {/* 4 Pillars Mini Bar inside Narrative */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <Activity size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 block font-semibold">01. Activities</span>
                <span className="text-xs text-slate-300">UI entry & backstack</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 block font-semibold">02. Services</span>
                <span className="text-xs text-slate-300">Background execution</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Radio size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 block font-semibold">03. Broadcasts</span>
                <span className="text-xs text-slate-300">System event listeners</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <Share2 size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 block font-semibold">04. Providers</span>
                <span className="text-xs text-slate-300">Data persistence & sync</span>
              </div>
            </div>
          </div>

          <p>
            I seamlessly bridge declarative UI with <strong className="text-purple-400 font-semibold">Jetpack Compose</strong> and traditional production layouts with <strong className="text-indigo-400 font-semibold">Android XML</strong> (ViewBinding and DataBinding). For concurrency, I utilize <strong className="text-emerald-400 font-semibold">Kotlin Coroutines</strong> and reactive hot streams via <strong className="text-cyan-400 font-semibold">StateFlow & SharedFlow</strong>, complemented by local persistence with <strong className="text-amber-400 font-semibold">Room Database (SQLite)</strong> and background task scheduling with <strong className="text-slate-100 font-medium">WorkManager</strong>.
          </p>

          <p>
            Beyond mobile, I engineer full-stack systems using <strong className="text-white font-semibold">React, TypeScript, Node.js, FastAPI (Python), and PostgreSQL</strong>, allowing me to build complete client-server architectures, integrate AI services (like Google Gemini and OpenCV facial recognition), and deliver cohesive digital products.
          </p>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/50 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Academic Background</p>
              <p className="text-sm font-semibold text-white">BS Computer Science (2022–2026)</p>
              <p className="text-xs text-indigo-400">BIIT, Rawalpindi</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/50 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Location & Availability</p>
              <p className="text-sm font-semibold text-white">Rawalpindi, Pakistan</p>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/50 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Boxes size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Core Engineering Focus</p>
              <p className="text-sm font-semibold text-white">Native Android Specialist</p>
              <p className="text-xs text-purple-300">Clean Architecture & Full-Stack</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4 Technical Architecture Bento Cards */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {ARCHITECTURE_PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${pillar.glow}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center shrink-0 ${pillar.accent} group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition-colors tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-items list */}
                <div className="space-y-2.5 mt-4">
                  {pillar.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 group/item hover:border-slate-700 transition-colors"
                    >
                      <span className={`mt-0.5 text-xs ${pillar.accent}`}>▹</span>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-white font-mono block">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-400 leading-snug block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/60 mt-5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Android Best Practices</span>
                <span className={`${pillar.accent} flex items-center gap-1 font-semibold`}>
                  <CheckCircle2 size={13} />
                  Production Ready
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
