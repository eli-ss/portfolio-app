import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Utensils, Building2, FlaskConical, UserCheck, Sparkles, X, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectHeader = (id: string) => {
    switch (id) {
      case 'wow-burger':
        return {
          icon: Utensils,
          bg: 'bg-gradient-to-br from-blue-700 to-blue-900',
          badge: 'Restaurant Web'
        };
      case 'siltawi-company':
        return {
          icon: Building2,
          bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
          badge: 'SEO Profile'
        };
      case 'liquid-soap-plan':
        return {
          icon: FlaskConical,
          bg: 'bg-gradient-to-br from-indigo-600 to-blue-800',
          badge: 'Venture Plan'
        };
      case 'personal-portfolio':
      default:
        return {
          icon: UserCheck,
          bg: 'bg-gradient-to-br from-slate-800 to-slate-950',
          badge: 'Portfolio'
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Business Plans
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Each project represents a practical application of coding, responsive design, or business planning.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((proj) => {
            const header = getProjectHeader(proj.id);
            const Icon = header.icon;

            return (
              <div
                key={proj.id}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Visual Banner */}
                <div className={`${header.bg} p-8 sm:p-12 relative overflow-hidden flex items-center justify-center min-h-[220px]`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Badge */}
                  <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/30">
                    {header.badge}
                  </span>

                  {/* Icon */}
                  <div className="p-5 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-14 h-14" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
                        {proj.category}
                      </span>
                    </div>

                    <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
                      "{proj.description}"
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                      {proj.longDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-5 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-4">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm shadow-md transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Link</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(proj)}
                        type="button"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-orange-400 hover:underline cursor-pointer"
                      >
                        <span>Project Overview</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Project Details</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
              {selectedProject.title}
            </h3>

            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-blue-800 dark:text-blue-300 font-medium text-sm mb-6">
              Short Description: "{selectedProject.description}"
            </div>

            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Full Architecture & Scope:</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Applied:</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map(t => (
                <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  <span>{t}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md transition-all text-center"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
