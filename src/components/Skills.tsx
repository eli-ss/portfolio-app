import React from 'react';
import { Cpu, Code2, Layout, Palette, Image, TrendingUp, FileCode, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA } from '../data';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Layout': return Layout;
      case 'Palette': return Palette;
      case 'Image': return Image;
      case 'TrendingUp': return TrendingUp;
      case 'FileCode': return FileCode;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            My Skills & Proficiency
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A balanced combination of web development, responsive UX design, and digital marketing strategies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skill, idx) => {
            const IconComponent = getIcon(skill.icon);
            const isBlue = idx % 2 === 0;

            return (
              <div
                key={skill.name}
                className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Corner Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${isBlue ? 'bg-blue-600/10' : 'bg-orange-500/10'} rounded-bl-full pointer-events-none transition-all group-hover:scale-125`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${isBlue ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400' : 'bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400'} shadow-inner`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-2xl font-display font-bold ${isBlue ? 'text-blue-700 dark:text-blue-400' : 'text-orange-500 dark:text-orange-400'}`}>
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {skill.category}
                    </span>
                  </div>

                  {skill.description && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-6 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Progress Bar Container */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.percentage} / 100</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${isBlue ? 'bg-gradient-to-r from-blue-700 to-blue-500' : 'bg-gradient-to-r from-orange-600 to-orange-400'}`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Additional Highlights Summary Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              Ready to bring responsive web design to your next project?
            </h3>
            <p className="mt-2 text-blue-100 text-base">
              From coding semantic HTML/CSS to designing Canva branding and SEO marketing strategies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 z-10 justify-center">
            {['SEO Optimization', 'Clean Code', 'Mobile First', 'Brand Marketing'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-medium text-sm border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
