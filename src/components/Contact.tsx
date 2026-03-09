import { motion } from 'motion/react';
import { resumeData } from '../data';
import { MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleWhatsappClick = () => {
    const formattedPhone = resumeData.basics.phone.replace(/\D/g, '');
    const whatsappNumber = formattedPhone.startsWith('0') 
      ? `92${formattedPhone.substring(1)}` 
      : formattedPhone;
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    
    // Check if Web3Forms key is provided in environment variables
    // @ts-ignore
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_KEY;

    if (accessKey) {
      // Send email silently in the background using Web3Forms API
      setIsSubmitting(true);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } else {
      // Fallback: Open user's default email client (mailto:)
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${resumeData.basics.email}?subject=${subject}&body=${body}`;
      
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50  border border-slate-800/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight ">
              Let's build something<br />amazing together!
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <button
              onClick={handleWhatsappClick}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-3 w-fit mb-12 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </button>
          </div>

          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-2">
              <strong className="text-white">Email:</strong> {resumeData.basics.email}
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-white">Phone:</strong> {resumeData.basics.phone}
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-white">Location:</strong> {resumeData.basics.location}
            </p>
          </div>
        </motion.div>

        {/* Right Card (Form) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none h-full min-h-[150px]"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 mt-2 transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                background: submitStatus === 'success' 
                  ? '#10b981' 
                  : submitStatus === 'error'
                  ? '#ef4444'
                  : 'linear-gradient(to right, #06b6d4, #8b5cf6)' 
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <AlertCircle size={20} />
                  Error Sending
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
