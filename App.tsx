
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative selection:bg-blue-500/30 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="py-12 px-6 border-t border-white/5 mt-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} — Mathematics & CS
            </div>
            <div className="flex gap-6 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
              <a href="mailto:hello@example.com" className="hover:text-blue-400 transition-colors">Email</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
