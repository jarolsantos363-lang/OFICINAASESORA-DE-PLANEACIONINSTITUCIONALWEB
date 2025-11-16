import React, { useState } from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { CertificateIcon } from './icons/CertificateIcon';
import { UserIcon } from './icons/UserIcon';

interface LmsSidebarProps {
    onNavigate: (target: 'home') => void;
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
                                        setActiveItem(item.name);
                                        if (item.target === 'home') {
                                            onNavigate(item.target);
                                        }
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-blue-600 text-white font-semibold shadow-lg'
                                            : 'text-gray-300 hover:bg-blue-600/30 hover:text-white'
                                    }`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default LmsSidebar;