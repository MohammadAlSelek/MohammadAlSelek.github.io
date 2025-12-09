import React from 'react';
import { AWARDS, MEMBERSHIPS } from '../constants';
import { Award, Users, CheckCircle2 } from 'lucide-react';

const AwardsService: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Honors & Awards */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-lg h-full hover:border-amber-500/30 transition-colors">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center">
            <Award className="w-5 h-5 text-amber-400 mr-2" />
            Honors & Awards
        </h3>
        <div className="space-y-8">
            {AWARDS.map((award, index) => (
                <div key={index} className="relative pl-6 border-l border-slate-700">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                    <div className="flex justify-between items-start flex-wrap mb-1">
                        <h4 className="font-bold text-slate-200 text-sm">{award.title}</h4>
                        <span className="text-xs font-mono text-amber-300 bg-amber-900/20 px-2 py-0.5 rounded ml-2 border border-amber-800">{award.year}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold mb-2 uppercase tracking-wide">{award.institution}</p>
                    <p className="text-sm text-slate-400">{award.description}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Memberships & Service */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 shadow-lg h-full hover:border-blue-500/30 transition-colors">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center">
            <Users className="w-5 h-5 text-blue-400 mr-2" />
            Professional Standing & Affiliations
        </h3>
        <div className="space-y-6">
            {MEMBERSHIPS.map((item, index) => (
                <div key={index} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                    <div>
                        <h4 className="font-bold text-slate-200 text-sm group-hover:text-blue-300 transition-colors">{item.organization}</h4>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-blue-400 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-900/50">{item.role}</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-snug">{item.details}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsService;