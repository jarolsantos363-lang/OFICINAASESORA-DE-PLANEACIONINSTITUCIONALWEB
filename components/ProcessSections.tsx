import React, { useState } from 'react';
import { AllProcessData, ProcessData } from '../types';
import { ChevronDown } from './icons/ChevronDown';


interface ExpandableProcessButtonProps {
    process: string;
    subProcesses: { [key: string]: ProcessData };
    onProcessClick: (processName: string) => void;
    onSubProcessClick: (processName: string, subProcessName: string) => void;
}

const ExpandableProcessButton: React.FC<ExpandableProcessButtonProps> = ({ process, subProcesses, onProcessClick, onSubProcessClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="stylish-card bg-gray-900/70 rounded-lg border border-gray-700 transition-all duration-300 w-full overflow-hidden shadow-lg">
            <div className="flex items-stretch justify-between">
                <button 
                    onClick={() => onProcessClick(process)}
                    className="text-left flex-grow p-4 focus:outline-none group"
                >
                    <p className="text-gray-300 font-medium group-hover:text-lime-400 transition-colors">{process}</p>
                </button>
                <button 
                    onClick={toggleExpansion}
                    className="p-4 flex-shrink-0 hover:bg-gray-800 transition-colors focus:outline-none border-l border-gray-800"
                    aria-label={isExpanded ? 'Ocultar unidades de negocio' : 'Mostrar unidades de negocio'}
                    aria-expanded={isExpanded}
                >
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-3 px-4">
                    <div className="border-t border-gray-800 pt-3">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Unidades de Negocio</h4>
                        <ul className="space-y-1">
                            {Object.keys(subProcesses).map(subProcessName => (
                                <li key={subProcessName}>
                                    <button
                                        onClick={() => onSubProcessClick(process, subProcessName)}
                                        className="w-full text-left text-sm text-gray-300 p-2 rounded hover:bg-gray-800 transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-lime-500">↳</span> {subProcessName}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProcessCategoryProps {
  id: string;
  title: string;
  processes: string[];
  borderColor: string;
  onProcessClick: (processName: string) => void;
  allData: AllProcessData;
  onSubProcessClick: (processName: string, subProcessName: string) => void;
}

const ProcessCategory: React.FC<ProcessCategoryProps> = ({ id, title, processes, borderColor, onProcessClick, allData, onSubProcessClick }) => {
    if (processes.length === 0) {
        return null;
    }

    return (
      <section id={id} className="mb-12 scroll-mt-28">
        <h3 className={`font-heading text-2xl font-semibold mb-6 border-l-4 ${borderColor} pl-4 text-gray-200`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processes.map((process) => {
            const processData = allData[process];
            const subProcesses = processData?.subProcesses;

            if (subProcesses && Object.keys(subProcesses).length > 0) {
                return (
                    <ExpandableProcessButton 
                        key={process} 
                        process={process}
                        subProcesses={subProcesses}
                        onProcessClick={onProcessClick}
                        onSubProcessClick={onSubProcessClick}
                    />
                );
            }
            
            return (
                <button 
                key={process} 
                onClick={() => onProcessClick(process)}
                className="stylish-card text-left bg-gray-900/70 p-4 rounded-lg border border-gray-700 transition-all duration-300 w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                >
                <p className="text-gray-300 font-medium">{process}</p>
                </button>
            );
          })}
        </div>
      </section>
    );
};

interface ProcessSectionsProps {
    onProcessClick: (processName: string) => void;
    strategicProcesses: string[];
    misionalProcesses: string[];
    supportProcesses: string[];
    evaluationProcesses: string[];
    allData: AllProcessData;
    onSubProcessClick: (processName: string, subProcessName: string) => void;
}

const ProcessSections: React.FC<ProcessSectionsProps> = ({ 
    onProcessClick,
    strategicProcesses,
    misionalProcesses,
    supportProcesses,
    evaluationProcesses,
    allData,
    onSubProcessClick
}) => {
  const allProcessesCount = strategicProcesses.length + misionalProcesses.length + supportProcesses.length + evaluationProcesses.length;

  return (
    <>
        {allProcessesCount > 0 ? (
            <>
                <ProcessCategory 
                    id="procesos-estrategicos" 
                    title="Procesos Estratégicos" 
                    processes={strategicProcesses} 
                    borderColor="border-gray-400"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                />
                <ProcessCategory 
                    id="procesos-misionales" 
                    title="Procesos Misionales" 
                    processes={misionalProcesses} 
                    borderColor="border-orange-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                />
                <ProcessCategory 
                    id="procesos-de-apoyo" 
                    title="Procesos de Apoyo" 
                    processes={supportProcesses} 
                    borderColor="border-blue-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                />
                <ProcessCategory 
                    id="procesos-de-evaluacion" 
                    title="Procesos de Evaluación" 
                    processes={evaluationProcesses} 
                    borderColor="border-green-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                />
            </>
        ) : (
            <div className="text-center py-16 bg-gray-900/50 border border-dashed border-gray-700 rounded-xl">
                <p className="text-xl text-gray-400">No se encontraron resultados.</p>
                <p className="text-gray-500 mt-2">Intenta con otro término de búsqueda.</p>
            </div>
        )}
    </>
  );
};

export default ProcessSections;