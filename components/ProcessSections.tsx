
import React, { useState, useMemo, useEffect } from 'react';
import { AllProcessData, ProcessData } from '../types';
import { ChevronDown } from './icons/ChevronDown';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  Target, ShieldCheck, BookOpen, FileCheck, Radio, Cpu, 
  Users, Calculator, Rocket, Briefcase, UserCheck, 
  FileSignature, Scale, Building, Archive, Gavel, 
  ClipboardCheck, Activity
} from 'lucide-react';

const normalizeStringForSearch = (str: string) => 
  str.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const deepSearch = (obj: any, query: string): boolean => {
    if (!query) return false;
    const normalizedQuery = normalizeStringForSearch(query);

    const search = (current: any): boolean => {
        if (current === null || current === undefined) {
            return false;
        }
        if (typeof current === 'string' || typeof current === 'number' || typeof current === 'boolean') {
            return normalizeStringForSearch(String(current)).includes(normalizedQuery);
        }
        if (Array.isArray(current)) {
            return current.some(item => search(item));
        }
        if (typeof current === 'object') {
            return Object.entries(current).some(([key, value]) => {
                if (normalizeStringForSearch(key).includes(normalizedQuery)) return true;
                return search(value);
            });
        }
        return false;
    };
    
    return search(obj);
};

// --- STYLE & ICON MAPPING ---
interface ProcessStyleConfig {
    icon: React.ElementType;
    gradient: string;
    shadow: string;
}

const getProcessConfig = (name: string): ProcessStyleConfig => {
    const n = normalizeStringForSearch(name);

    // Estratégicos
    if (n.includes("estrategica")) return { 
        icon: Target, 
        gradient: "bg-gradient-to-r from-emerald-600 to-teal-600", 
        shadow: "hover:shadow-emerald-500/30" 
    };
    if (n.includes("riesgos")) return { 
        icon: ShieldCheck, 
        gradient: "bg-gradient-to-r from-rose-600 to-pink-600", 
        shadow: "hover:shadow-rose-500/30" 
    };
    if (n.includes("conocimiento")) return { 
        icon: BookOpen, 
        gradient: "bg-gradient-to-r from-violet-600 to-purple-600", 
        shadow: "hover:shadow-violet-500/30" 
    };
    if (n.includes("sig")) return { 
        icon: FileCheck, 
        gradient: "bg-gradient-to-r from-cyan-600 to-blue-600", 
        shadow: "hover:shadow-cyan-500/30" 
    };
    if (n.includes("comunicacion")) return { 
        icon: Radio, 
        gradient: "bg-gradient-to-r from-orange-500 to-amber-600", 
        shadow: "hover:shadow-orange-500/30" 
    };
    if (n.includes("tecnologica")) return { 
        icon: Cpu, 
        gradient: "bg-gradient-to-r from-indigo-600 to-blue-700", 
        shadow: "hover:shadow-indigo-500/30" 
    };

    // Misionales
    if (n.includes("ciudadano")) return { 
        icon: Users, 
        gradient: "bg-gradient-to-r from-sky-500 to-blue-600", 
        shadow: "hover:shadow-sky-500/30" 
    };
    if (n.includes("operaciones financieras")) return { 
        icon: Calculator, 
        gradient: "bg-gradient-to-r from-blue-600 to-indigo-700", 
        shadow: "hover:shadow-blue-500/30" 
    };
    if (n.includes("promocion")) return { 
        icon: Rocket, 
        gradient: "bg-gradient-to-r from-fuchsia-600 to-purple-700", 
        shadow: "hover:shadow-fuchsia-500/30" 
    };
    if (n.includes("esquemas")) return { 
        icon: Briefcase, 
        gradient: "bg-gradient-to-r from-amber-500 to-orange-600", 
        shadow: "hover:shadow-amber-500/30" 
    };

    // Apoyo
    if (n.includes("humana")) return { 
        icon: UserCheck, 
        gradient: "bg-gradient-to-r from-pink-500 to-rose-600", 
        shadow: "hover:shadow-pink-500/30" 
    };
    if (n.includes("financiera")) return { 
        icon: Calculator, 
        gradient: "bg-gradient-to-r from-indigo-500 to-violet-600", 
        shadow: "hover:shadow-indigo-500/30" 
    };
    if (n.includes("contractual")) return { 
        icon: FileSignature, 
        gradient: "bg-gradient-to-r from-slate-600 to-slate-700", 
        shadow: "hover:shadow-slate-500/30" 
    };
    if (n.includes("juridica")) return { 
        icon: Scale, 
        gradient: "bg-gradient-to-r from-red-600 to-red-700", 
        shadow: "hover:shadow-red-500/30" 
    };
    if (n.includes("recursos")) return { 
        icon: Building, 
        gradient: "bg-gradient-to-r from-lime-600 to-green-700", 
        shadow: "hover:shadow-lime-500/30" 
    };
    if (n.includes("documental")) return { 
        icon: Archive, 
        gradient: "bg-gradient-to-r from-yellow-500 to-amber-600", 
        shadow: "hover:shadow-yellow-500/30" 
    };
    if (n.includes("disciplinario")) return { 
        icon: Gavel, 
        gradient: "bg-gradient-to-r from-gray-600 to-gray-700", 
        shadow: "hover:shadow-gray-500/30" 
    };

    // Evaluación
    if (n.includes("evaluacion")) return { 
        icon: ClipboardCheck, 
        gradient: "bg-gradient-to-r from-teal-500 to-emerald-600", 
        shadow: "hover:shadow-teal-500/30" 
    };

    // Default
    return { 
        icon: Activity, 
        gradient: "bg-gradient-to-r from-gray-600 to-slate-700", 
        shadow: "hover:shadow-gray-500/30" 
    };
};

interface ExpandableProcessButtonProps {
    process: string;
    subProcesses: { [key: string]: ProcessData };
    onProcessClick: (processName: string) => void;
    onSubProcessClick: (processName: string, subProcessName: string) => void;
    searchQuery: string;
}

const ExpandableProcessButton: React.FC<ExpandableProcessButtonProps> = ({ process, subProcesses, onProcessClick, onSubProcessClick, searchQuery }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { icon: Icon, gradient, shadow } = getProcessConfig(process);

    useEffect(() => {
        if (searchQuery) {
            const hasMatch = Object.keys(subProcesses).some(name => {
                const normalizedQuery = normalizeStringForSearch(searchQuery);
                if (normalizeStringForSearch(name).includes(normalizedQuery)) return true;
                return deepSearch(subProcesses[name], searchQuery);
            });
            setIsExpanded(hasMatch);
        } else {
            setIsExpanded(false);
        }
    }, [searchQuery, subProcesses]);

    const toggleExpansion = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const filteredSubProcesses = useMemo(() => {
        const subProcessNames = Object.keys(subProcesses);
        if (!searchQuery) {
            return subProcessNames;
        }
        const normalizedQuery = normalizeStringForSearch(searchQuery);
        return subProcessNames.filter(name => {
            if (normalizeStringForSearch(name).includes(normalizedQuery)) return true;
            return deepSearch(subProcesses[name], searchQuery);
        });
    }, [subProcesses, searchQuery]);

    return (
        <div className={`relative group rounded-xl transition-all duration-300 w-full hover:scale-[1.02] hover:shadow-xl shadow-lg ${shadow} overflow-hidden`}>
            {/* Main Button Area */}
            <div className={`${gradient} p-0`}>
                {/* Watermark Icon */}
                <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700 ease-out pointer-events-none" />

                <div className="flex items-stretch justify-between min-h-[90px] relative z-10">
                    <button 
                        onClick={() => onProcessClick(process)}
                        className="text-left flex-grow p-5 focus:outline-none flex items-center gap-5"
                    >
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-sm">{process}</p>
                    </button>
                    <button 
                        onClick={toggleExpansion}
                        className="px-4 flex-shrink-0 hover:bg-black/10 transition-colors focus:outline-none border-l border-white/10 flex items-center"
                        aria-label={isExpanded ? 'Ocultar unidades de negocio' : 'Mostrar unidades de negocio'}
                        aria-expanded={isExpanded}
                    >
                        <ChevronDown className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
            
            {/* Sub-processes List */}
            <div className={`bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {filteredSubProcesses.length > 0 ? (
                    <div className="py-2 px-2 bg-gray-50">
                        <ul className="space-y-1">
                            {filteredSubProcesses.map(subProcessName => (
                                <li key={subProcessName}>
                                    <button
                                        onClick={() => onSubProcessClick(process, subProcessName)}
                                        className="w-full text-left text-sm text-gray-600 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 group/sub font-medium"
                                    >
                                        <span className="text-gray-400 group-hover/sub:text-blue-500 transition-colors">↳</span> 
                                        {subProcessName}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    searchQuery && <p className="text-xs text-gray-500 p-4 text-center">Ninguna unidad coincide.</p>
                )}
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
  searchQuery: string;
}

const ProcessCategory: React.FC<ProcessCategoryProps> = ({ id, title, processes, borderColor, onProcessClick, allData, onSubProcessClick, searchQuery }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    
    if (processes.length === 0) {
        return null;
    }

    return (
      <section 
        id={id} 
        ref={ref}
        className={`mb-12 scroll-mt-28 scroll-fade-up ${isIntersecting ? 'is-visible' : ''}`}
      >
        <h3 className={`font-heading text-2xl font-bold mb-6 border-l-4 ${borderColor} pl-4 text-gray-100 tracking-wide`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        searchQuery={searchQuery}
                    />
                );
            }
            
            const { icon: Icon, gradient, shadow } = getProcessConfig(process);

            return (
                <button 
                    key={process} 
                    onClick={() => onProcessClick(process)}
                    className={`relative group rounded-xl transition-all duration-300 w-full hover:scale-[1.02] hover:shadow-xl shadow-lg ${shadow} ${gradient} overflow-hidden min-h-[90px] text-left p-0`}
                >
                    {/* Watermark Icon */}
                    <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700 ease-out pointer-events-none" />

                    {/* Main Content */}
                    <div className="relative z-10 h-full p-5 flex items-center gap-5">
                        {/* Icon Box */}
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Text */}
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-sm">{process}</p>
                    </div>
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
    searchQuery: string;
}

const ProcessSections: React.FC<ProcessSectionsProps> = ({ 
    onProcessClick,
    strategicProcesses,
    misionalProcesses,
    supportProcesses,
    evaluationProcesses,
    allData,
    onSubProcessClick,
    searchQuery
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
                    borderColor="border-emerald-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                    searchQuery={searchQuery}
                />
                <ProcessCategory 
                    id="procesos-misionales" 
                    title="Procesos Misionales" 
                    processes={misionalProcesses} 
                    borderColor="border-blue-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                    searchQuery={searchQuery}
                />
                <ProcessCategory 
                    id="procesos-de-apoyo" 
                    title="Procesos de Apoyo" 
                    processes={supportProcesses} 
                    borderColor="border-purple-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                    searchQuery={searchQuery}
                />
                <ProcessCategory 
                    id="procesos-de-evaluacion" 
                    title="Procesos de Evaluación" 
                    processes={evaluationProcesses} 
                    borderColor="border-teal-500"
                    onProcessClick={onProcessClick}
                    allData={allData}
                    onSubProcessClick={onSubProcessClick}
                    searchQuery={searchQuery}
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
