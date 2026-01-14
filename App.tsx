
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#050505]">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="py-20 px-6 border-t border-white/5 bg-black/20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              © {new Date().getFullYear()} — PRANAV CHALLA
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <a href="mailto:pranav.moony.challa@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
              <a href="https://linkedin.com/in/pranav-challa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
