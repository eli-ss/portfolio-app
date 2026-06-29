import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, MessageSquare, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/5 dark:bg-blue-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project, web development inquiry, or marketing opportunity in Ethiopia? Send me a message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-4 group hover:border-blue-500 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</h3>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-orange-400 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center gap-4 group hover:border-orange-500 transition-all">
              <div className="p-4 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone Number</h3>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors">
                  {PERSONAL_INFO.formattedPhone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center gap-4 group hover:border-blue-500 transition-all">
              <div className="p-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h3>
                <div className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-blue-700 to-slate-900 text-white shadow-xl">
              <h3 className="font-display font-bold text-lg mb-2">Connect on Social Media</h3>
              <p className="text-xs text-blue-100 mb-6">
                Follow my GitHub repositories or connect with me on LinkedIn and Telegram.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all active:scale-95 group"
                >
                  <Github className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all active:scale-95 group"
                >
                  <Linkedin className="w-6 h-6 mb-1 text-blue-300 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">Linkedin</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all active:scale-95 group"
                >
                  <Send className="w-6 h-6 mb-1 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">Telegram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/60 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-lg relative">
            
            {formSubmitted ? (
              <div className="py-16 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-950/80 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm sm:text-base mb-8">
                  Thank you for reaching out, {formData.name || 'friend'}. I have received your note at <span className="font-semibold text-blue-700 dark:text-orange-400">{PERSONAL_INFO.email}</span> and will respond promptly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                  <span className="text-xs text-orange-500 font-semibold">• Direct to Eleni's Inbox</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Abebe Kebede"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. abebe@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Subject / Inquiry Type
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Web Development Opportunity / Digital Marketing Consult"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Describe your project, website goals, or marketing collaboration ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden transition-all shadow-xs resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-base shadow-lg shadow-blue-700/25 hover:shadow-xl transition-all active:scale-99 cursor-pointer"
                >
                  <span>Send Message to Eleni</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
