import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Academic & Professional Experience */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <div className="bg-blue-500/10 p-2 rounded-lg mr-3 border border-blue-500/30">
             <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          Professional Experience
        </h3>
        <div className="border-l border-blue-900/50 ml-3 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start mb-3">
                   <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                   <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-900/20 text-blue-300 rounded-full border border-blue-700/30">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center text-slate-400 font-medium mb-2">
                   {exp.url ? (
                     <a href={exp.url} target="_blank" rel="noreferrer" className="hover:text-white flex items-center transition-colors">
                       {exp.company}
                       <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                     </a>
                   ) : (
                     <span>{exp.company}</span>
                   )}
                   <span className="mx-2 text-slate-700">|</span>
                   <span className="text-sm text-slate-500">{exp.location}</span>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start leading-relaxed">
                      <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <div className="bg-emerald-500/10 p-2 rounded-lg mr-3 border border-emerald-500/30">
             <GraduationCap className="w-6 h-6 text-emerald-400" />
          </div>
          Education
        </h3>
        <div className="border-l border-emerald-900/50 ml-3 space-y-12">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 group">
               {/* Timeline Dot */}
               <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] group-hover:scale-150 transition-all duration-300"></div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start mb-3">
                   <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{edu.degree}</h4>
                   <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-900/20 text-emerald-300 rounded-full border border-emerald-700/30">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center text-slate-400 font-medium mb-4">
                   {edu.url ? (
                     <a href={edu.url} target="_blank" rel="noreferrer" className="hover:text-white flex items-center transition-colors">
                       {edu.institution}
                       <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                     </a>
                   ) : (
                     <span>{edu.institution}</span>
                   )}
                </div>

                {edu.thesis && (
                  <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 mb-4 hover:border-emerald-500/20 transition-colors">
                    <p className="text-sm text-slate-400 italic">
                      <span className="font-semibold not-italic text-emerald-400">Thesis:</span> {edu.thesis}
                    </p>
                  </div>
                )}
                {edu.details.length > 0 && (
                  <ul className="space-y-2">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start leading-relaxed">
                        <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;