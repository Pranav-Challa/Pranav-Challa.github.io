
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <div className="pt-40 pb-20 max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold mb-6 italic math-font">Research & Projects</h2>
        <p className="text-gray-400 leading-relaxed font-light text-lg">
          A selection of explorations in mathematical theory, computational simulations, and collaborative scientific writing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col transition-all"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-8 border border-white/5 group-hover:border-blue-500/30 transition-all shadow-2xl relative">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4 px-2">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors italic math-font">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {project.longDescription}
              </p>
              
              <div className="pt-4 flex items-center gap-4">
                <span className="h-[1px] w-8 bg-white/20"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                  Case Study
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 text-center">
        <div className="inline-block glass p-1 px-2 rounded-full border-white/5">
          <div className="flex items-center gap-4 px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">More developments coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
