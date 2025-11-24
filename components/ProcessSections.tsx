
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
const getProcessConfig = (name: string) => {
    const n = normalizeStringForSearch(name);

    // Estratégicos
    if (n.includes("estrategica")) return { from: "from-emerald-600", to: "to-teal-600", icon: Target, shadow: "shadow-emerald-500/20" };
    if (n.includes("riesgos")) return { from: "from-rose-600", to: "to-pink-600", icon: ShieldCheck, shadow: "shadow-rose-500/20" };
    if (n.includes("conocimiento")) return { from: "from-violet-600", to: "to-purple-600", icon: BookOpen, shadow: "shadow-violet-500/20" };
    if (n.includes("sig")) return { from: "from-cyan-600", to: "to-blue-600", icon: FileCheck, shadow: "shadow-cyan-500/20" };
    if (n.includes("comunicacion")) return { from: "from-orange-500", to: "to-amber-600", icon: Radio, shadow: "shadow-orange-500/20" };
    if (n.includes("tecnologica")) return { from: "from-blue-600", to: "to-indigo-600", icon: Cpu, shadow: "shadow-blue-500/20" };

    // Misionales
    if (n.includes("ciudadano")) return { from: "from-sky-500", to: "to-blue-600", icon: Users, shadow: "shadow-sky-500/20" };
    if (n.includes("operaciones financieras")) return { from: "from-blue-600", to: "to-blue-800", icon: Calculator, shadow: "shadow-blue-500/20" };
    if (n.includes("promocion")) return { from: "from-fuchsia-600", to: "to-purple-700", icon: Rocket, shadow: "shadow-fuchsia-500/20" };
    if (n.includes("esquemas")) return { from: "from-amber-500", to: "to-orange-600", icon: Briefcase, shadow: "shadow-amber-500/20" };

    // Apoyo
    if (n.includes("humana")) return { from: "from-pink-500", to: "to-rose-500", icon: UserCheck, shadow: "shadow-pink-500/20" };
    if (n.includes("financiera")) return { from: "from-indigo-500", to: "to-violet-600", icon: Calculator, shadow: "shadow-indigo-500/20" };
    if (n.includes("contractual")) return { from: "from-slate-500", to: "to-gray-600", icon: FileSignature, shadow: "shadow-slate-500/20" };
    if (n.includes("juridica")) return { from: "from-red-700", to: "to-red-900", icon: Scale, shadow: "shadow-red-500/20" };
    if (n.includes("recursos")) return { from: "from-lime-600", to: "to-green-700", icon: Building, shadow: "shadow-lime-500/20" };
    if (n.includes("documental")) return { from: "from-yellow-500", to: "to-amber-600", icon: Archive, shadow: "shadow-yellow-500/20" };
    if (n.includes("disciplinario")) return { from: "from-gray-600", to: "to-slate-700", icon: Gavel, shadow: "shadow-gray-500/20" };

    // Evaluación
    if (n.includes("evaluacion")) return { from: "from-teal-500", to: "to-emerald-600", icon: ClipboardCheck, shadow: "shadow-teal-500/20" };

    return { from: "from-gray-700", to: "to-gray-800", icon: Activity, shadow: "shadow-gray-500/20" };
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
    const { from, to, icon: Icon, shadow } = getProcessConfig(process);

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
        <div className={`relative overflow-hidden rounded-xl transition-all duration-300 w-full shadow-lg hover:scale-[1.02] hover:shadow-2xl ${shadow} group`}>
            {/* Main Button Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${from} ${to} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
            
            {/* Watermark Icon */}
            <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500 ease-out pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-stretch justify-between min-h-[80px]">
                    <button 
                        onClick={() => onProcessClick(process)}
                        className="text-left flex-grow p-5 focus:outline-none flex items-center gap-4"
                    >
                        <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg shadow-inner">
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-md">{process}</p>
                    </button>
                    <button 
                        onClick={toggleExpansion}
                        className="p-4 flex-shrink-0 hover:bg-black/10 transition-colors focus:outline-none border-l border-white/10 flex items-center"
                        aria-label={isExpanded ? 'Ocultar unidades de negocio' : 'Mostrar unidades de negocio'}
                        aria-expanded={isExpanded}
                    >
                        <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                
                <div className={`bg-gray-900/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {filteredSubProcesses.length > 0 ? (
                        <div className="py-3 px-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">Unidades de Negocio</h4>
                            <ul className="space-y-1">
                                {filteredSubProcesses.map(subProcessName => (
                                    <li key={subProcessName}>
                                        <button
                                            onClick={() => onSubProcessClick(process, subProcessName)}
                                            className="w-full text-left text-sm text-gray-300 p-3 rounded-lg hover:bg-white/10 hover:text-white transition-all flex items-center gap-3 group/sub"
                                        >
                                            <span className="text-gray-500 group-hover/sub:text-lime-400 transition-colors">↳</span> 
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
        <h3 className={`font-heading text-2xl font-semibold mb-6 border-l-4 ${borderColor} pl-4 text-gray-200`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            
            const { from, to, icon: Icon, shadow } = getProcessConfig(process);

            return (
                <button 
                    key={process} 
                    onClick={() => onProcessClick(process)}
                    className={`relative overflow-hidden rounded-xl w-full shadow-lg hover:scale-[1.02] hover:shadow-2xl ${shadow} group transition-all duration-300 min-h-[90px] text-left`}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${from} ${to} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                    
                    {/* Watermark */}
                    <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500 ease-out" />

                    {/* Content */}
                    <div className="relative z-10 p-5 flex items-center gap-4 h-full">
                        <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg shadow-inner flex-shrink-0">
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-md">{process}</p>
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
