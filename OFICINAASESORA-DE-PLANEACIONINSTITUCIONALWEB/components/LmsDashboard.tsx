
import React from 'react';
import LmsSidebar from './LmsSidebar';

interface LmsDashboardProps {
    title: string;
    children: React.ReactNode;
    onNavigate: (target: 'home' | 'back') => void;
}

const LmsDashboard: React.FC<LmsDashboardProps> = ({ title, children, onNavigate }) => {
    return (
        <div className="flex bg-[#F1F5F9] min-h-screen font-sans">
            <LmsSidebar onNavigate={onNavigate} />
            <div className="flex-1 flex flex-col">
                 <header className="bg-white shadow-sm h-20 flex items-center px-8 border-b border-slate-200 z-10 flex-shrink-0">
                    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                </header>
                <main className="flex-1 p-8 overflow-y-auto">
                   {children}
                </main>
            </div>
        </div>
    );
};

export default LmsDashboard;
