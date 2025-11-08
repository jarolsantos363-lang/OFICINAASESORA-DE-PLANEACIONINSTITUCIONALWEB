import React, { useState } from 'react';
import { ProcessData } from '../types';
import ActivityTracking from './ActivityTracking';
import DocumentationChecklist from './DocumentationChecklist';
import PlanningDashboard from './PlanningDashboard';

interface CompositeProcessDashboardProps {
  processData: ProcessData;
  onSelectSubProcess: (subProcessName: string) => void;
  processName: string;
}

const CompositeProcessDashboard: React.FC<CompositeProcessDashboardProps> = ({ processData, onSelectSubProcess, processName }) => {
  type ActiveCompositeTab = 'planning' | 'documentation' | 'businessUnits';

  if (!processData.subProcesses) return null;

  // FIX: Add an Array.isArray check to resolve a TypeScript error where the type of 'arr' was inferred as 'unknown', causing an issue with accessing the 'length' property.
  const hasPlanningData = (processData.planning && Object.values(processData.planning).some(arr => Array.isArray(arr) && arr.length > 0)) || (processData.tracking && processData.tracking.length > 0);
  const hasDocumentation = processData.documentation && processData.documentation.length > 0;
  const hasBusinessUnits = processData.subProcesses && Object.keys(processData.subProcesses).length > 0;

  const showTabs = (hasPlanningData || hasDocumentation) && hasBusinessUnits;
  
  const getDefaultTab = (): ActiveCompositeTab => {
      if (hasPlanningData) return 'planning';
      if (hasDocumentation) return 'documentation';
      return 'businessUnits';
  }
  const [activeTab, setActiveTab] = useState<ActiveCompositeTab>(getDefaultTab());

  // This logic is to handle processes that only have sub-processes, like "Operacion De Esquemas Empresariales"
  if (!showTabs) {
    return (
      <div className="pt-6 animate-fade-in">
        <section className="my-8">
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
                Verificación de Documentación
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
          <PlanningDashboard data={processData.planning} />
        </div>
      )}
      {activeTab === 'documentation' && hasDocumentation && (
         <div className="animate-fade-in">
          <DocumentationChecklist data={processData.documentation} />
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