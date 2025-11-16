
import React, { useState, useMemo } from 'react';
import MissionVision from './MissionVision';
import ProcessSections from './ProcessSections';
import { strategicProcesses, misionalProcesses, supportProcesses, evaluationProcesses } from '../constants';
import { SearchIcon } from './icons/SearchIcon';
import { XCircleIcon } from './icons/XCircleIcon';
import { AllProcessData } from '../types';

interface HomePageProps {
  onProcessClick: (processName: string) => void;
  onGoHome: () => void;
  allData: AllProcessData;
}

const HomePage: React.FC<HomePageProps> = ({ onProcessClick, allData }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProcesses = useMemo(() => {
        if (!searchQuery) {
            return {
                strategic: strategicProcesses,
                misional: misionalProcesses,
                support: supportProcesses,
                evaluation: evaluationProcesses,
            };
        }

        const lowerCaseQuery = searchQuery.toLowerCase();

        const deepSearch = (obj: any, query: string): boolean => {
            if (obj === null || obj === undefined) {
                return false;
            }
            if (typeof obj === 'string' || typeof obj === 'number') {
                return String(obj).toLowerCase().includes(query);
            }
            if (Array.isArray(obj)) {
                return obj.some(item => deepSearch(item, query));
            }
            if (typeof obj === 'object') {
                return Object.entries(obj).some(([key, value]) => {
                    if (key.toLowerCase().includes(query)) return true;
                    return deepSearch(value, query);
                });
            }
            return false;
        };

        const allProcesses = [...strategicProcesses, ...misionalProcesses, ...supportProcesses, ...evaluationProcesses];
        
        const matchingProcesses = allProcesses.filter(name => {
            if (name.toLowerCase().includes(lowerCaseQuery)) return true;
            const processData = allData[name] || allData['default'];
            return deepSearch(processData, lowerCaseQuery);
        });

        return {
            strategic: strategicProcesses.filter(p => matchingProcesses.includes(p)),
            misional: misionalProcesses.filter(p => matchingProcesses.includes(p)),
            support: supportProcesses.filter(p => matchingProcesses.includes(p)),
            evaluation: evaluationProcesses.filter(p => matchingProcesses.includes(p)),
        };

    }, [searchQuery, allData]);


    return (
    <>
        <MissionVision />
        
        <div className="my-16">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">Mapa de Procesos</h2>
        <div className="max-w-xl mx-auto mb-10 flex justify-center">
            <div className="input__container">
                <div className="shadow__input"></div>
                <button className="input__button__shadow" aria-label="Buscar" type="button">
                    <SearchIcon className="w-6 h-6 text-slate-800" />
                </button>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar proceso, documento, meta..."
                    className="input__search"
                />
                {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="input__button__shadow" aria-label="Limpiar búsqueda" type="button">
                        <XCircleIcon className="w-6 h-6 text-slate-600 hover:text-slate-800 transition-colors" />
                    </button>
                )}
            </div>
        </div>

        <ProcessSections 
            onProcessClick={onProcessClick} 
            strategicProcesses={filteredProcesses.strategic}
            misionalProcesses={filteredProcesses.misional}
            supportProcesses={filteredProcesses.support}
            evaluationProcesses={filteredProcesses.evaluation}
        />
        </div>
    </>
  );
}

export default HomePage;
