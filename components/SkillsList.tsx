import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Cpu, Languages } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Programming & AI/ML": <Code2 className="w-6 h-6 text-purple-400" />,
  "Cloud & DevOps": <Server className="w-6 h-6 text-blue-400" />,
  "IoT & Embedded": <Cpu className="w-6 h-6 text-emerald-400" />,
  "Languages": <Languages className="w-6 h-6 text-rose-400" />
};

const SkillsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((category, index) => (
        <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-800 p-6 flex flex-col h-full hover:border-cyan-500/50 transition-all hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-slate-950 rounded-xl mr-3 border border-slate-800 shadow-inner">
              {iconMap[category.category] || <Code2 className="w-6 h-6" />}
            </div>
            <h4 className="font-bold text-white leading-tight">{category.category}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-cyan-900/20 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-default select-none shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;