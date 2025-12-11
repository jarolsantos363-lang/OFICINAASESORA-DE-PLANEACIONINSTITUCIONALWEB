import React, { useState, useEffect } from 'react';
import { strategicProcesses, misionalProcesses, supportProcesses, evaluationProcesses } from '../constants';
import { ChevronUp } from './icons/ChevronUp';
import { EyeOffIcon } from './icons/EyeOffIcon';

interface SidebarProps {
    selectedProcess: string;
    onSelectProcess: (process: string) => void;
    onHideMenu: () => void;
}

interface AccordionSectionProps {
  title: string;
  processes: string[];
  selectedProcess: string;
  onSelectProcess: (process: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, processes, selectedProcess, onSelectProcess, isOpen, onToggle }) => {
    return (
        <div className="mb-1 overflow-hidden rounded-lg bg-gray-800/50">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-3 hover:bg-gray-700/70 transition-colors duration-200"
            >
                <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-200">{title}</h4>
                <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-1 pl-3 pr-1">
                    {processes.map(process => (
                        <button
                            key={process}
                            onClick={() => onSelectProcess(process)}
                            className={`w-full text-left p-2.5 my-0.5 text-sm rounded-md transition-all duration-200 ${selectedProcess === process ? 'bg-lime-500/20 text-lime-300 font-semibold border-l-2 border-lime-400' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                        >
                            {process}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Sidebar: React.FC<SidebarProps> = ({ selectedProcess, onSelectProcess, onHideMenu }) => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const sections = [
        { title: "Procesos Estratégicos", processes: strategicProcesses },
        { title: "Procesos Misionales", processes: misionalProcesses },
        { title: "Procesos de Apoyo", processes: supportProcesses },
        { title: "Procesos de Evaluación", processes: evaluationProcesses },
    ];
    
    useEffect(() => {
        const section = sections.find(s => s.processes.includes(selectedProcess));
        if (section) {
            setOpenSection(section.title);
        }
    }, [selectedProcess]);

    const handleToggle = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 sticky top-28 h-[calc(100vh-8rem)] flex flex-col">
            <div className="p-4 flex-shrink-0">
                <h3 className="text-xl font-bold mb-4 px-2">Seleccionar Proceso</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4">
               {sections.map((section) => (
                   <AccordionSection 
                        key={section.title}
                        title={section.title}
                        processes={section.processes}
                        selectedProcess={selectedProcess}
                        onSelectProcess={onSelectProcess}
                        isOpen={openSection === section.title}
                        onToggle={() => handleToggle(section.title)}
                   />
               ))}
            </div>
            <div className="p-4 mt-auto border-t border-gray-800 flex-shrink-0">
                <button
                    onClick={onHideMenu}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <EyeOffIcon className="w-5 h-5" />
                    Ocultar Menú
                </button>
            </div>
        </div>
    );
};

export default Sidebar;