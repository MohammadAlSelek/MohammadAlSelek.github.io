import React from 'react';
import { GRANTS, RESEARCH_INTERESTS } from '../constants';
import { Coins, Lightbulb, ArrowUpRight, Globe, Layers, Cpu, Leaf } from 'lucide-react';

const ResearchGrants: React.FC = () => {
  const getIconForInterest = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-6 h-6 text-amber-400" />;
      case 1: return <Layers className="w-6 h-6 text-purple-400" />;
      case 2: return <Leaf className="w-6 h-6 text-emerald-400" />;
      default: return <Lightbulb className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20">
      {/* Research Interests */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <div className="bg-amber-500/10 p-2 rounded-lg mr-3 border border-amber-500/30">
             <Lightbulb className="w-6 h-6 text-amber-400" />
          </div>
          Core Research Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_INTERESTS.map((interest, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 group flex flex-col">
              <div className="mb-6 bg-slate-950 w-14 h-14 rounded-full flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform shadow-inner">
                 {getIconForInterest(index)}
              </div>
              <h4 className="font-bold text-lg text-white mb-4 group-hover:text-amber-400 transition-colors">{interest.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grants */}
      <div>
        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
          <div className="bg-blue-500/10 p-2 rounded-lg mr-3 border border-blue-500/30">
             <Coins className="w-6 h-6 text-blue-400" />
          </div>
          Funding Portfolio &gt;€20M
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GRANTS.map((grant, index) => (
            <a 
              key={index} 
              href={grant.url}
              target="_blank"
              rel="noreferrer"
              className="group block bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="pr-8">
                  <h4 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {grant.title}
                    {grant.url && <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </h4>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">{grant.period}</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  {grant.amount}
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-400 mb-4 relative z-10 bg-blue-900/20 inline-block px-3 py-1 rounded-md border border-blue-700/30">{grant.role}</p>
              <ul className="space-y-2 relative z-10">
                  {grant.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-300 leading-relaxed">{desc}</li>
                  ))}
              </ul>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                 <Globe className="w-40 h-40 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchGrants;