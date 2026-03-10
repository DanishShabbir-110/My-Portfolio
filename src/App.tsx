// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Mail } from 'lucide-react'; // Added Mail icon for heading
// import AnimatedBackground from './components/AnimatedBackground';
// import Hero from './components/Hero';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// export default function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1800);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
//       <AnimatePresence>
//         {loading ? (
//           <Splash key="splash" />
//         ) : (
//           <motion.div
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Navbar />
//             <AnimatedBackground />
//             <main className="max-w-6xl mx-auto px-6 pb-8 space-y-32">
//               <Hero />
//               <Experience />
//               <Projects />
//               <Skills />
//               <Education />
              
//               {/* --- Contact Section with Heading --- */}
//               <section id="contact-section">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="mb-12"
//                 >
//                   <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//                     <Mail className="text-indigo-400" />
//                     Get In Touch
//                   </h2>
//                 </motion.div>
//                 <Contact />
//               </section>

//             </main>
//             <Footer />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function Splash() {
//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="text-5xl font-bold tracking-tighter text-white mb-8"
//       >
//         Danish Shabbir
//       </motion.div>
//       <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-indigo-500"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         />
//       </div>
//     </motion.div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 bg-[#020617]">
      <AnimatePresence>
        {loading ? (
          <Splash key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-0"
          >
            {/* Background is here, sitting at -z-10 */}
            <AnimatedBackground />
            
            <Navbar />
            
            {/* Main content is z-10, so it floats above the particles */}
            <main className="relative z-10 max-w-6xl mx-auto px-6 pb-8 space-y-32">
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              
              <section id="contact-section">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Mail className="text-indigo-400" />
                    Get In Touch
                  </h2>
                </motion.div>
                <Contact />
              </section>
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Splash() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold tracking-tighter text-white mb-8"
      >
        Danish Shabbir
      </motion.div>
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}