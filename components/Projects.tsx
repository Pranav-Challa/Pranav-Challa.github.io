
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-48 pb-20 max-w-6xl mx-auto px-6 animate-in fade-in duration-1000">
      <div className="mb-24 space-y-6">
        <h2 className="text-6xl font-bold math-font italic">Curated Explorations.</h2>
        <p className="text-gray-500 text-xl font-light max-w-2xl">
          From mathematical publishing to quantum simulations—a collection of technical ventures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {PROJECTS.map((p) => (
          <div key={p.id} className="group cursor-default">
            <div className="aspect-[16/10] rounded-xl overflow-hidden glass border-white/5 mb-8 relative">
              <img 
                src={p.imageUrl} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                alt={p.title} 
              />
              <div className="absolute top-4 left-4">
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1 glass rounded-full text-white/70">
                  {p.tags[0]}
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold math-font italic mb-4 group-hover:text-blue-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
              {p.description}
            </p>
            
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-white/10" />
              <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
