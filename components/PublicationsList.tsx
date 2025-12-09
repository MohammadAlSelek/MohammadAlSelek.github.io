import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Mic, Book, ExternalLink, ArrowUpRight } from 'lucide-react';

const PublicationsList: React.FC = () => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
      <div className="bg-slate-950/50 px-8 py-5 border-b border-slate-800 flex justify-between items-center">
         <h4 className="font-bold text-slate-200 flex items-center">
            Recent Work
         </h4>
         <span className="text-xs font-normal text-slate-500 hidden sm:block">Selected from Google Scholar</span>
      </div>
      <div className="divide-y divide-slate-800">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="p-8 hover:bg-white/5 transition-colors group break-inside-avoid">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-600 transition-colors">
                {pub.type === 'Journal' && <FileText className="w-5 h-5 text-blue-400" />}
                {pub.type === 'Conference' && <Mic className="w-5 h-5 text-purple-400" />}
                {pub.type === 'Book Chapter' && <Book className="w-5 h-5 text-emerald-400" />}
              </div>
              <div className="ml-5 flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{pub.year}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded border ${
                    pub.type === 'Journal' ? 'bg-blue-900/20 text-blue-300 border-blue-800' : 
                    pub.type === 'Conference' ? 'bg-purple-900/20 text-purple-300 border-purple-800' : 
                    'bg-emerald-900/20 text-emerald-300 border-emerald-800'
                  }`}>
                    {pub.type}
                  </span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">
                  {pub.citation}
                </p>
                {pub.url && (
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center mt-3 text-xs font-bold text-cyan-500 hover:text-cyan-300 hover:underline print:hidden"
                    >
                      Read Paper <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-950/50 px-6 py-4 border-t border-slate-800 text-center print:hidden">
        <a 
          href="https://scholar.google.com/citations?user=fzMvRkgAAAAJ&hl=en" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-300 transition-colors"
        >
          View complete list on Google Scholar <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default PublicationsList;