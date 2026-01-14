
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <div className="glass px-6 py-2 rounded-full flex items-center gap-8 shadow-2xl border-white/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                  isActive ? 'text-blue-400' : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
