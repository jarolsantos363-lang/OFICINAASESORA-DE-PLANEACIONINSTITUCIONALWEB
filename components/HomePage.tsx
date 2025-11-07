import React, { useState, useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import MissionVision from './MissionVision';
import ProcessSections from './ProcessSections';
import { strategicProcesses, misionalProcesses, supportProcesses, evaluationProcesses, ALL_PROCESS_DATA } from '../constants';
import { SearchIcon } from './icons/SearchIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface HomePageProps {
  onProcessClick: (processName: string) => void;
  onGoHome: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onProcessClick, onGoHome }) => {
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
        const allProcesses = [...strategicProcesses, ...misionalProcesses, ...supportProcesses, ...evaluationProcesses];
        
        const matchingProcesses = allProcesses.filter(name => {
            const processData = ALL_PROCESS_DATA[name] || ALL_PROCESS_DATA['default'];
            if (name.toLowerCase().includes(lowerCaseQuery)) return true;

            const hasMatchingDoc = processData.documentation.some(doc => doc.name.toLowerCase().includes(lowerCaseQuery));
            if (hasMatchingDoc) return true;

            const allPlans = [...processData.planning.mensual, ...processData.planning.trimestral, ...processData.planning.cuatrimestral, ...processData.planning.semestral, ...processData.planning.anual];
            const hasMatchingPlan = allPlans.some(plan => plan.title.toLowerCase().includes(lowerCaseQuery));
            if (hasMatchingPlan) return true;

            const hasMatchingGoal = processData.developmentPlanGoals.some(goal => goal.producto.toLowerCase().includes(lowerCaseQuery));
            if (hasMatchingGoal) return true;

            return false;
        });

        return {
            strategic: strategicProcesses.filter(p => matchingProcesses.includes(p)),
            misional: misionalProcesses.filter(p => matchingProcesses.includes(p)),
            support: supportProcesses.filter(p => matchingProcesses.includes(p)),
            evaluation: evaluationProcesses.filter(p => matchingProcesses.includes(p)),
        };

    }, [searchQuery]);


    return (
    <div className="relative min-h-screen font-sans selection:bg-lime-500 selection:text-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://www.infibague.gov.co/wp-content/uploads/2025/08/7-scaled.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 text-white">
        <Header onGoHome={onGoHome} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
          <MissionVision />
          
          <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-6">Mapa de Procesos</h2>
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar proceso, documento, meta..."
                    className="w-full py-3 pl-10 pr-10 text-lg bg-gray-900/70 border-2 border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 flex items-center pr-3 group">
                        <XCircleIcon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
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

        </main>
        <Footer onGoHome={onGoHome} />
      </div>
    </div>
  );
}

export default HomePage;