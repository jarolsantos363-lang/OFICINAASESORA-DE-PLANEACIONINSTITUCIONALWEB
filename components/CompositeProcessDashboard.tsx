
import React, { useState } from 'react';
import { ProcessData } from '../types';
import ActivityTracking from './ActivityTracking';
import DocumentationChecklist from './DocumentationChecklist';
import PlanningDashboard from './PlanningDashboard';
import ImprovementPlanDashboard from './ImprovementPlanDashboard';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';
import { ChevronDown } from './icons/ChevronDown';

interface CompositeProcessDashboardProps {
  processData: ProcessData;
  onSelectSubProcess: (subProcessName: string) => void;
  processName: string;
}

const CompositeProcessDashboard: React.FC<CompositeProcessDashboardProps> = ({ processData, onSelectSubProcess, processName }) => {
  type ActiveCompositeTab = 'planning' | 'documentation' | 'businessUnits' | 'improvement';

  if (!processData.subProcesses) return null;

  // FIX: Add an Array.isArray check to resolve a TypeScript error where the type of 'arr' was inferred as 'unknown', causing an issue with accessing the 'length' property.
  const hasPlanningData = (processData.planning && Object.values(processData.planning).some(arr => Array.isArray(arr) && arr.length > 0)) || (processData.tracking && processData.tracking.length > 0);
  const hasDocumentation = processData.documentation && processData.documentation.length > 0;
  const hasBusinessUnits = processData.subProcesses && Object.keys(processData.subProcesses).length > 0;
  const hasImprovementPlan = !!processData.improvementPlan;

  const showTabs = (hasPlanningData || hasDocumentation || hasImprovementPlan) && hasBusinessUnits;
  
  const getDefaultTab = (): ActiveCompositeTab => {
      if (hasPlanningData) return 'planning';
      if (hasDocumentation) return 'documentation';
      if (hasImprovementPlan) return 'improvement';
      return 'businessUnits';
  }
  const [activeTab, setActiveTab] = useState<ActiveCompositeTab>(getDefaultTab());
  const [isExpanded, setIsExpanded] = useState(false);

  // This logic is to handle processes that only have sub-processes, like "Operacion De Esquemas Empresariales"
  if (!showTabs) {
    // FIX: Refactored this block to resolve obscure TypeScript errors about missing 'children' props.
    return (
        <div className="pt-6 animate-fade-in">
            <CardContainer containerClassName="py-0" className="w-full">
                <CardBody className="bg-gray-900/80 relative group/card border-lime-500/40 w-full max-w-2xl mx-auto rounded-xl p-6 border h-auto">
                    <CardItem translateZ={50} className="text-2xl font-bold text-white">
                        {processName}
                    </CardItem>
                    <CardItem as="p" translateZ={60} className="text-neutral-300 text-sm max-w-sm mt-2">
                        Unidades de negocio bajo este proceso. Seleccione una para ver sus detalles.
                    </CardItem>
                    <CardItem translateZ={100} className="w-full mt-4">
                        <img
                            src="https://www.infibague.gov.co/wp-content/uploads/2025/08/7-scaled.jpg"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl opacity-80"
                            alt="Imagen del proceso"
                        />
                    </CardItem>
                    <div className="flex justify-center items-center mt-10">
                        <CardItem
                            translateZ={20}
                            as="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="px-6 py-3 rounded-xl bg-lime-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-lime-500/20 hover:bg-lime-400 transition-colors"
                        >
                            <span>{isExpanded ? 'Ocultar' : 'Mostrar'} Unidades de Negocio</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </CardItem>
                    </div>

                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] mt-8 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                        <div className="space-y-3 pt-6 border-t border-gray-700">
                            {Object.keys(processData.subProcesses).map((name) => (
                                <button
                                key={name}
                                onClick={() => onSelectSubProcess(name)}
                                className="w-full text-left bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:bg-gray-700/80 hover:border-lime-500/60 transition-all duration-300 group shadow-pop-tr"
                                >
                                <p className="font-semibold text-gray-200 group-hover:text-white">{name}</p>
                                <span className="text-sm text-lime-500/80 group-hover:text-lime-400 font-semibold mt-1 block transition-colors">
                                    Ver dashboard →
                                </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
  }

  // This renders the tabbed view for processes like "Gestión de Proyectos de Promoción y Desarrollo"
  return (
    <div className="pt-6 animate-fade-in">
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-8">
        {hasPlanningData && (
          <button
            onClick={() => setActiveTab('planning')}
            className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'planning' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
          >
            Instrumentos de Planeación
          </button>
        )}
        {hasDocumentation && (
            <button
                onClick={() => setActiveTab('documentation')}
                className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'documentation' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
            >
                Alistamiento Auditoria 2026
            </button>
        )}
        {hasImprovementPlan && (
            <button
            onClick={() => setActiveTab('improvement')}
            className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'improvement' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
            >
            Plan de Mejoramiento
            </button>
        )}
        {hasBusinessUnits && (
          <button
            onClick={() => setActiveTab('businessUnits')}
            className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'businessUnits' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
          >
            Unidad de Negocio
          </button>
        )}
      </div>

      {activeTab === 'planning' && hasPlanningData && (
        <div className="animate-fade-in">
          <ActivityTracking data={processData.tracking} processName={processName} />
          <PlanningDashboard data={processData.planning} processName={processName} />
        </div>
      )}
      {activeTab === 'documentation' && hasDocumentation && (
         <div className="animate-fade-in">
          <DocumentationChecklist data={processData.documentation} />
        </div>
      )}
      {activeTab === 'improvement' && processData.improvementPlan && (
        <div className="animate-fade-in">
         <ImprovementPlanDashboard data={processData.improvementPlan} processName={processName} />
       </div>
     )}
      {activeTab === 'businessUnits' && hasBusinessUnits && (
        <section className="my-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Unidades de Negocio</h2>
          <p className="text-gray-400 mb-8">Seleccione una unidad para ver sus instrumentos de planeación y verificación de documentos individuales.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {Object.keys(processData.subProcesses).map(name => (
              <button
                key={name}
                onClick={() => onSelectSubProcess(name)}
                className="text-left bg-gray-900/70 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-lime-500/80 transition-all duration-300 transform hover:-translate-y-1 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 group"
              >
                <p className="font-semibold text-gray-200 group-hover:text-white">{name}</p>
                  <span className="text-sm text-lime-500/80 group-hover:text-lime-400 font-semibold mt-1 block transition-colors">
                    Ver dashboard →
                  </span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CompositeProcessDashboard;
