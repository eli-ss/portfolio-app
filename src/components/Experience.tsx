import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { TIMELINE_DATA } from '../data';

export const Experience: React.FC = () => {
  const experiences = TIMELINE_DATA.filter(t => t.type === 'experience');
  const educations = TIMELINE_DATA.filter(t => t.type === 'education');

  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Career & Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            My professional digital marketing internship and formal university studies in ICT and Management.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 shadow-sm">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-700 group-hover:bg-orange-500 transition-colors duration-300" />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3 pl-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-200/60 dark:border-blue-800/60">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <div className="pl-3">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <div className="text-base font-semibold text-blue-700 dark:text-orange-400 mt-1 mb-4">
                      {exp.organization}
                    </div>

                    <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Academic Education
              </h3>
            </div>

            <div className="space-y-8">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 group-hover:bg-blue-700 transition-colors duration-300" />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3 pl-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 font-semibold text-xs border border-orange-200/60 dark:border-orange-800/60">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{edu.location}</span>
                    </span>
                  </div>

                  <div className="pl-3">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <div className="text-base font-semibold text-orange-600 dark:text-blue-400 mt-1 mb-4">
                      {edu.organization}
                    </div>

                    <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-blue-700 dark:text-orange-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {edu.skills && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                        {edu.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
