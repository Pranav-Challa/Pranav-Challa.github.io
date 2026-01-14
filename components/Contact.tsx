
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-20 max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="text-5xl font-bold mb-12 italic math-font">Get in touch.</h2>
      
      <div className="flex flex-col items-center space-y-8">
        <a 
          href="mailto:hello@example.com" 
          className="text-2xl md:text-4xl font-light hover:text-blue-400 transition-all hover:tracking-wider duration-500"
        >
          hello@example.com
        </a>
        
        <div className="h-[1px] w-12 bg-white/10" />
        
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
