import React from 'react';
import { ArrowUp, Github, Linkedin, Send, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white font-display font-bold text-sm">
            ES
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Eleni Sirak<span className="text-orange-500">.</span>
          </span>
        </div>

        <p className="text-sm text-slate-400 max-w-md mb-8">
          ICT student at College & Dire Dawa University. Building responsive web experiences and growing brands through digital marketing.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400 mb-8 pb-8 border-b border-slate-800 w-full max-w-2xl">
          <a href="#hero" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-orange-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {year} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with pride in Dire Dawa,</span>
            <span>🇪🇹</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Back to top"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
