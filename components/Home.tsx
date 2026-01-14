
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_BIO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6 space-y-32">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <div className="space-y-8">
          <div className="inline-block glass px-4 py-1.5 rounded-full border-white/5">
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mono-font">University Applicant · Maths & CS</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            Logic <span className="math-font italic text-gray-400">&</span> <span className="gradient-text">Code.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Exploring the elegant intersection of pure mathematics and computational modelling.
          </p>

          <div className="pt-4">
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
            >
              View Research
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section (Integrated) */}
      <section className="grid md:grid-cols-12 gap-16 items-start animate-in fade-in duration-1000 delay-300">
        <div className="md:col-span-4 lg:col-span-5">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden glass border-white/10 relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
            <div className="w-full h-full bg-white/5 flex items-center justify-center flex-col text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-20"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Profile Photo</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-7">
          <h2 className="text-4xl font-bold mb-8 italic math-font text-white">About</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line">
              {PERSONAL_BIO}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;