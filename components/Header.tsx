
import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';
import { ChevronDown } from './icons/ChevronDown';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onGoHome();
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
      return;
    }

    event.preventDefault();
    onGoHome(); // First go to home page, then scroll
    
    setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100); // Small delay to allow home page to render

    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const processLinks = (className: string) => (
    <>
      <a href="#procesos-estrategicos" onClick={handleLinkClick} className={className}>Procesos Estratégicos</a>
      <a href="#procesos-misionales" onClick={handleLinkClick} className={className}>Procesos Misionales</a>
      <a href="#procesos-de-apoyo" onClick={handleLinkClick} className={className}>Procesos de Apoyo</a>
      <a href="#procesos-de-evaluacion" onClick={handleLinkClick} className={className}>Procesos de Evaluación</a>
    </>
  );

  return (
    <header className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <a href="#top" onClick={handleHomeClick} className="flex-shrink-0">
                <img className="h-10 w-auto" src="https://www.infibague.gov.co/wp-content/uploads/2025/02/logo-Infibague-blanco-300x99.png" alt="INFIBAGUE Logo" />
            </a>
            <div className="hidden md:block ml-4">
                <h1 className="text-sm font-bold tracking-wider text-white uppercase">
                    Oficina Asesora De Planeación Institucional
                </h1>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#top" onClick={handleHomeClick} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                Inicio
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors inline-flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span>Procesos</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900/80 backdrop-blur-md ring-1 ring-white/10 focus:outline-none">
                    <div className="p-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {processLinks("block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-md")}
                    </div>
                  </div>
                )}
              </div>
              <a href="https://www.infibague.gov.co" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                Sitio Principal
              </a>
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            <a href="#top" onClick={handleHomeClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Inicio</a>
            <div className="border-t border-gray-700 my-2"></div>
            <h3 className="px-3 pt-2 pb-1 text-xs font-semibold text-lime-400 uppercase tracking-wider">Procesos</h3>
            <div className="pl-2 space-y-1">
                {processLinks("block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700")}
            </div>
            <div className="border-t border-gray-700 my-2"></div>
            <a href="https://www.infibague.gov.co" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Sitio Principal
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
