import React from 'react';
import { GRANTS, RESEARCH_INTERESTS } from '../constants';
import { Coins, Lightbulb, ArrowUpRight, Globe, Layers, Cpu, Leaf } from 'lucide-react';

const ResearchGrants: React.FC = () => {
  const getIconForInterest = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-7 h-7 text-amber-600" />;
      case 1: return <Layers className="w-7 h-7 text-purple-600" />;
      case 2: return <Leaf className="w-7 h-7 text-emerald-600" />;
      default: return <Lightbulb className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-20">
      {/* Research Interests */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <div className="bg-amber-50 p-2 rounded-lg mr-3 border border-amber-100">
             <Lightbulb className="w-6 h-6 text-amber-500" />
          </div>
          Core Research Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_INTERESTS.map((interest, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-amber-200 hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)] transition-all duration-300 group flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform shadow-inner">
                  {getIconForInterest(index)}
                </div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                    Pillar 0{index + 1}
                  </span>
                  <h4 className="font-bold text-lg text-slate-900 mt-2 group-hover:text-amber-600 transition-colors">
                    {interest.title}
                  </h4>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-amber-100 via-slate-100 to-transparent"></div>
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">{interest.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Impact focus
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grants */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <div className="bg-blue-50 p-2 rounded-lg mr-3 border border-blue-100">
             <Coins className="w-6 h-6 text-blue-600" />
          </div>
          International Projects & Technical Contributions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GRANTS.map((grant, index) => (
            <a 
              key={index} 
              href={grant.url}
              target="_blank"
              rel="noreferrer"
              className="group block bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(59,130,246,0.10)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="pr-8">
                  <h4 className="font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                    {grant.title}
                    {grant.url && <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </h4>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">{grant.period}</span>
                </div>
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                  {grant.amount}
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-700 mb-4 relative z-10 bg-blue-50 inline-block px-3 py-1 rounded-md border border-blue-100">
                {grant.role}
              </p>
              <ul className="space-y-2 relative z-10">
                  {grant.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-700 leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                        {desc}
                      </li>
                  ))}
              </ul>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                 <Globe className="w-40 h-40 text-blue-200" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchGrants;
