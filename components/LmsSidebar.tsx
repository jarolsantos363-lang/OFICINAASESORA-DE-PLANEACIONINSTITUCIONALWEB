
import React, { useState } from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { CertificateIcon } from './icons/CertificateIcon';
import { UserIcon } from './icons/UserIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface LmsSidebarProps {
    onNavigate: (target: 'home' | 'back') => void;
}

const LmsSidebar: React.FC<LmsSidebarProps> = ({ onNavigate }) => {
    const [activeItem, setActiveItem] = useState('Mis Cursos');

    const navItems = [
        { name: 'Mis Cursos', icon: HomeIcon, target: 'home' as const },
        { name: 'Mis Certificados', icon: CertificateIcon, target: null },
        { name: 'Mi Perfil', icon: UserIcon, target: null },
    ];

    return (
        <aside className="w-64 bg-[#0F172A] text-white flex flex-col flex-shrink-0 h-screen sticky top-0">
            <div className="h-20 flex items-center px-6 border-b border-gray-700/50">
                <h1 className="text-lg font-bold tracking-wider uppercase">Campus INFIBAGUE</h1>
            </div>
            <nav className="flex-grow p-4">
                <ul>
                    {navItems.map(item => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.name;
                        return (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (item.target) {
                                            setActiveItem(item.name);
                                        }
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-blue-600 text-white font-semibold shadow-lg'
                                            : 'text-gray-300 hover:bg-blue-600/30 hover:text-white'
                                    } ${!item.target ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="mt-auto p-4 border-t border-gray-700/50">
                <button
                    onClick={() => onNavigate('back')}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-600/30 hover:text-white transition-colors"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Volver a Planeación</span>
                </button>
            </div>
        </aside>
    );
};

export default LmsSidebar;
