
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ActivityTracking from './ActivityTracking';
import PlanningDashboard from './PlanningDashboard';
import DocumentationChecklist from './DocumentationChecklist';
import { ProcessData } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

type ActiveTab = 'planning' | 'documentation';

interface DashboardProps {
  selectedProcess: string;
  processData: ProcessData;
  onSelectProcess: (process: string) => void;
  onGoHome: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedProcess, processData, onSelectProcess, onGoHome }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('planning');

  return (
    <div className="relative min-h-screen font-sans selection:bg-lime-500 selection:text-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://www.infibague.gov.co/wp-content/uploads/2025/08/7-scaled.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 text-white flex flex-col min-h-screen">
        <Header onGoHome={onGoHome} />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
          <button 
            onClick={onGoHome} 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Volver al Mapa de Procesos
          </button>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4 xl:w-1/5">
              <Sidebar selectedProcess={selectedProcess} onSelectProcess={onSelectProcess} />
            </aside>
            <div className="lg:w-3/4 xl:w-4/5">
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 mb-6 text-center border border-blue-800">
                <p className="text-lg">Proceso Seleccionado: <span className="font-bold text-lime-400">{selectedProcess}</span></p>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('planning')}
                  className={`w-1/2 md:w-auto text-sm md:text-base flex-1 md:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'planning' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                >
                  Instrumentos de Planeación
                </button>
                <button
                  onClick={() => setActiveTab('documentation')}
                  className={`w-1/2 md:w-auto text-sm md:text-base flex-1 md:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'documentation' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                >
                  Verificación de Documentación
                </button>
              </div>

              {activeTab === 'planning' && (
                <div className="animate-fade-in">
                  <ActivityTracking data={processData.tracking} processName={selectedProcess} />
                  <PlanningDashboard data={processData.planning} />
                </div>
              )}
              {activeTab === 'documentation' && (
                 <div className="animate-fade-in">
                  <DocumentationChecklist data={processData.documentation} />
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer onGoHome={onGoHome} />
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
