import React from 'react';
import { User, Laptop, Megaphone, Lightbulb, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const About: React.FC = () => {
  const interests = [
    {
      title: "Web Development",
      desc: "Building modern, fast, and responsive websites that look great on all devices.",
      icon: Laptop,
      color: "bg-blue-500",
      lightBg: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/50"
    },
    {
      title: "Digital Marketing",
      desc: "Helping businesses grow their audience and improve their online presence through SEO and campaigns.",
      icon: Megaphone,
      color: "bg-orange-500",
      lightBg: "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-900/50"
    },
    {
      title: "Entrepreneurship",
      desc: "Passionate about creating innovative business solutions and turning ideas into feasible enterprises.",
      icon: Lightbulb,
      color: "bg-amber-500",
      lightBg: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900/50"
    },
    {
      title: "ICT & Tech Learning",
      desc: "Continuously mastering new IT frameworks, networking principles, and digital tools at Dire Dawa University.",
      icon: GraduationCap,
      color: "bg-indigo-500",
      lightBg: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900/50"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Bridging ICT, Coding & Digital Growth
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Statement Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800/80 dark:to-slate-800/40 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-md relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-700/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span>Who is Eleni?</span>
              <span className="text-xs font-normal px-2.5 py-1 bg-blue-700 text-white rounded-full">Ethiopian Talent</span>
            </h3>

            <blockquote className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
              "{PERSONAL_INFO.aboutBio}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Institution</span>
                <span className="font-semibold text-slate-900 dark:text-white">Dire Dawa University & College</span>
              </div>
              <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-orange-400 hover:underline">
                <span>See My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Interests Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-orange-500/50 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.lightBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
