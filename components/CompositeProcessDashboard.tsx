import React, { useState } from 'react';
import { ProcessData } from '../types';
import PlanningDashboard from './PlanningDashboard';
import DocumentationChecklist from './DocumentationChecklist';
import ActivityTracking from './ActivityTracking';

type ActiveTab = 'planning' | 'documentation' | 'schemes';

interface CompositeProcessDashboardProps {
  processData: ProcessData;
  onSelectSubProcess: (subProcessName: string) => void;
}

const CompositeProcessDashboard: React.FC<CompositeProcessDashboardProps> = ({ processData, onSelectSubProcess }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('planning');

  if (!processData.subProcesses) return null;

  const schemes = Object.keys(processData.subProcesses);

  const tabs = [
    { id: 'planning', label: 'Instrumentos de Planeación' },
    { id: 'documentation', label: 'Verificación de Documentación' },
    { id: 'schemes', label: 'Unidad de Negocio' },
  ];

  return (
    <div className="pt-6">
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ActiveTab)}
            className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'planning' && (
        <div className="animate-fade-in">
          <ActivityTracking data={processData.tracking} processName="Operacion De Esquemas Empresariales" />
          <PlanningDashboard data={processData.planning} />
        </div>
      )}
      {activeTab === 'documentation' && (
        <div className="animate-fade-in">
          <DocumentationChecklist data={processData.documentation} />
        </div>
      )}
      {activeTab === 'schemes' && (
        <div className="animate-fade-in">
          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">Unidades de Negocio</h2>
            <p className="text-gray-400 mb-8">Seleccione una unidad para ver sus instrumentos de planeación y verificación de documentos individuales.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {schemes.map(name => (
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
      )}
    </div>
  );
};

export default CompositeProcessDashboard;