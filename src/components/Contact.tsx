import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { MessageCircle, Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${resumeData.basics.rawPhone}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.basics.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim() || !formData.email.trim()) return;
    
    // Check for optional Web3Forms key
    // @ts-ignore
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY;

    if (accessKey) {
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
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3500);
    } else {
      // Fallback: mailto link
      const emailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${resumeData.basics.email}?subject=${emailSubject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3500);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="scroll-mt-24 relative">
      {/* Decorative subtle background light */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-wider uppercase mb-2">
          <Mail size={16} />
          <span>Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Interested in working together or have questions? Let's talk directly.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Contact & Instant WhatsApp (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Main Info Box */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-7 sm:p-8 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col justify-between flex-1">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Projects</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Let's discuss your next project.
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Whether you need an Android mobile app, full-stack web architecture, or technical collaboration, I'm ready to help.
              </p>

              {/* High-Visibility WhatsApp Action Card */}
              <button
                type="button"
                onClick={handleWhatsappClick}
                className="w-full p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all flex items-center justify-between group active:scale-[0.99] mb-6 text-left shadow-lg shadow-green-500/5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-green-600/30 group-hover:scale-105 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Instant Chat</p>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Chat on WhatsApp</p>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 text-slate-400 group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-5 border-t border-slate-800/80">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-slate-400 leading-none mb-1">Email</p>
                    <a
                      href={`mailto:${resumeData.basics.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white truncate block"
                    >
                      {resumeData.basics.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email"
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 leading-none mb-1">Phone</p>
                  <a
                    href={`tel:${resumeData.basics.rawPhone}`}
                    className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white"
                  >
                    {resumeData.basics.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 leading-none mb-1">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    {resumeData.basics.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Direct Message Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-3xl p-7 sm:p-10 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
        >
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Drop a note and I will get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono text-slate-300">
                  Your Name <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono text-slate-300">
                  Your Email <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity / Collaboration"
                className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                disabled={isSubmitting}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 flex-grow">
              <label htmlFor="message" className="text-xs font-mono text-slate-300">
                Message <span className="text-indigo-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all resize-none min-h-[140px] flex-grow"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/25 active:scale-[0.99] mt-2"
              style={{ 
                background: submitStatus === 'success' 
                  ? '#10b981' 
                  : submitStatus === 'error'
                  ? '#ef4444'
                  : 'linear-gradient(to right, #4f46e5, #7c3aed)' 
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle size={18} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <AlertCircle size={18} />
                  <span>Error Sending — Please Email Directly</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
