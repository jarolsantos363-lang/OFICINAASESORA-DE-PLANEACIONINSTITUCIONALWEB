import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from './icons/ChevronDown';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleViewChange = (view: ActiveView) => {
    setActiveView(view);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <a href="#top" onClick={handleLinkClick} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Inicio</a>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors flex items-center"
        >
          Índice
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button onClick={() => handleViewChange('planning')} className={`w-full text-left block px-4 py-2 text-sm transition-colors ${activeView === 'planning' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} role="menuitem">
                Instrumentos de Planeación
              </button>
              <button onClick={() => handleViewChange('documentation')} className={`w-full text-left block px-4 py-2 text-sm transition-colors ${activeView === 'documentation' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} role="menuitem">
                Verificación de Documentación
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <header className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <a href="#top" className="flex-shrink-0">
                <img className="h-10 w-auto" src="https://www.infibague.gov.co/wp-content/uploads/2025/02/logo-Infibague-blanco-300x99.png" alt="INFIBAGUE Logo" />
            </a>
            <div className="hidden md:block ml-4">
                <h1 className="text-sm font-bold tracking-wider text-white uppercase">
                    Oficina Asesora De Planeación Institucional
                </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;