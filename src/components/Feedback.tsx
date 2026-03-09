import { motion } from 'motion/react';
import { resumeData } from '../data';
import { MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    const subject = encodeURIComponent(`Feedback from Portfolio Website`);
    const body = encodeURIComponent(feedback);
    window.location.href = `mailto:${resumeData.basics.email}?subject=${subject}&body=${body}`;
    setFeedback('');
  };

  return (
    <section id="feedback" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <MessageSquare className="text-indigo-400" />
          Leave a Comment
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What do you think about my portfolio?"
            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none h-32"
            required
          />
          <button
            type="submit"
            className="self-end px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-colors flex items-center gap-2"
          >
            <Send size={18} />
            Send Feedback
          </button>
        </form>
      </motion.div>
    </section>
  );
}
