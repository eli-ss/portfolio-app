import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, GraduationCap, Briefcase, Code } from 'lucide-react';
import { CV_DOCUMENT, PERSONAL_INFO } from '../data';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Resume Container */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Top Sticky Bar */}
        <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
              CV
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {CV_DOCUMENT.name} • ICT Student & Web Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all font-semibold text-xs sm:text-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="p-6 sm:p-12 overflow-y-auto print:p-0 space-y-8 bg-white dark:bg-slate-900 selection:bg-orange-500 selection:text-white">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-blue-700 dark:text-blue-400 tracking-tight">
                {CV_DOCUMENT.name}
              </h1>
              <h2 className="text-base sm:text-lg font-medium text-orange-600 dark:text-orange-400 mt-1">
                ICT Student | Web Developer | Digital Marketing Intern
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{CV_DOCUMENT.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>{CV_DOCUMENT.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{CV_DOCUMENT.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Professional Profile
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {CV_DOCUMENT.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-700" />
              <span>Experience</span>
            </h3>
            <div className="border-l-2 border-blue-700 pl-4 py-1">
              <div className="flex justify-between items-baseline flex-wrap">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Digital Marketing Intern</h4>
                <span className="text-xs font-semibold text-blue-700 dark:text-orange-400">2026 - Present</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Orbit Innovation Hub</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <li>• Conduct marketing research.</li>
                <li>• Manage social media marketing activities.</li>
                <li>• Create digital content and branding materials.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-orange-500" />
              <span>Education</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">ICT Student</h4>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">College, Department of ICT</p>
                <p className="text-xs text-slate-500 mt-1">Specializing in web technologies, networking & troubleshooting.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Department of Management</h4>
                <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">Dire Dawa University</p>
                <p className="text-xs text-slate-500 mt-1">Higher education in organizational administration & business strategy.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-700" />
              <span>Core Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {CV_DOCUMENT.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-medium text-xs border border-blue-100 dark:border-blue-900">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Featured Notice */}
          <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/60 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-orange-600 dark:text-orange-400">Featured Web Projects: </span>
            Wow Burger Website (Restaurant Web + Admin), Siltawi Company Website (Corporate SEO), Liquid Soap Business Plan (Feasibility), Personal Portfolio Website.
          </div>

        </div>

        {/* Bottom Footer Action Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
