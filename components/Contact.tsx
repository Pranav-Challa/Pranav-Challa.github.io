
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-60 pb-20 max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="space-y-12">
        <h2 className="text-6xl md:text-2xl font-bold math-font italic tracking-tighter">Connect.</h2>
        
        <div className="space-y-4">
          <p className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.4em]">Primary Correspondence</p>
          <a 
            href="mailto:pranav.moony.challa@gmail.com" 
            className="block text-3xl md:text-5xl font-light hover:text-blue-400 transition-all duration-500 hover:tracking-wider"
          >
            pranav.moony.challa@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-16 pt-20 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <a href="https://www.linkedin.com/in/pranav-challa/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">CV</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
