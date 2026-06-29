import React from 'react';
import { ArrowRight, Download, Sparkles, MapPin, Code2, Globe, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section id="hero" className="relative pt-12 sm:pt-20 pb-20 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 to-orange-500/15 dark:from-blue-600/20 dark:to-orange-500/15 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 font-medium text-xs sm:text-sm mb-6 border border-orange-200 dark:border-orange-800/60 shadow-2xs">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Available for Internship & Freelance</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hello, I am <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle Badge */}
            <div className="mt-5 sm:mt-6 inline-block">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 font-sans tracking-wide">
                {PERSONAL_INFO.heroSubtitle}
              </h2>
            </div>

            {/* Introduction Quote */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              "{PERSONAL_INFO.heroIntro}"
            </p>

            {/* Location & Ethiopia Highlight */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="inline-block px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                🇪🇹 Ethiopia
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 hover:-translate-y-0.5 transition-all active:translate-y-0 cursor-pointer"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white dark:bg-slate-900 border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold text-base hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick stats / Highlights */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-blue-700 dark:text-blue-400">4+</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Key Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-orange-500 dark:text-orange-400">90%</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Web Mastery</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">2026</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Intern Hub</div>
              </div>
            </div>

          </div>

          {/* Right Photo Frame Circle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-orange-500 opacity-60 blur-xl group-hover:opacity-100 transition duration-700 animate-spin" style={{ animationDuration: '20s' }} />

              {/* Photo Frame Circle */}
              <div className="relative w-64 sm:w-80 md:w-96 aspect-square rounded-full p-2.5 bg-gradient-to-tr from-blue-700 to-orange-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative border-4 border-white dark:border-slate-900">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Web Dev */}
              <div className="absolute -top-3 -right-3 sm:top-2 sm:-right-6 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Web Dev</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Tailwind & React</div>
                </div>
              </div>

              {/* Floating Badge 2: Digital Marketing */}
              <div className="absolute -bottom-4 -left-3 sm:bottom-4 sm:-left-8 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Marketing</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">SEO & Social Media</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
