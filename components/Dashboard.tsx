import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { ProcessData } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import CompositeProcessDashboard from './CompositeProcessDashboard';
import ProcessDetailView from './ProcessDetailView';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SidebarIcon } from './icons/SidebarIcon';
import { RefreshIcon } from './icons/RefreshIcon';

interface DashboardProps {
  sidebarSelectedProcess: string;
  currentProcessName: string;
  processData: ProcessData;
  onSelectProcess: (process: string) => void;
  onGoHome: () => void;
  onGoBack: () => void;
  parentProcessName?: string;
  onSelectSubProcess: (subProcessName: string) => void;
  previousProcess: string | null;
  nextProcess: string | null;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  previousSubProcess: string | null;
  nextSubProcess: string | null;
  onGoToPreviousSubProcess: () => void;
  onGoToNextSubProcess: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  sidebarSelectedProcess,
  currentProcessName, 
  processData, 
  onSelectProcess, 
  onGoHome,
  onGoBack,
  parentProcessName,
  onSelectSubProcess,
  previousProcess,
  nextProcess,
  onGoToPrevious,
  onGoToNext,
  previousSubProcess,
  nextSubProcess,
  onGoToPreviousSubProcess,
  onGoToNextSubProcess,
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  const backButtonText = parentProcessName ? `Volver a ${parentProcessName}` : 'Volver al Mapa de Procesos';
  
  const toggleSidebar = () => setIsSidebarVisible(v => !v);
  
  const handleUpdateData = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 1500);
  };

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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={onGoBack} 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                {backButtonText}
              </button>
              <button
                onClick={handleUpdateData}
                disabled={isUpdating}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors border border-blue-500 disabled:opacity-70 disabled:cursor-wait"
              >
                <RefreshIcon className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} />
                {isUpdating ? 'Actualizando...' : 'Actualizar Datos'}
              </button>
            </div>
             {!isSidebarVisible && (
                <button
                    onClick={toggleSidebar}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600"
                    aria-label="Mostrar menú"
                >
                    <SidebarIcon className="w-5 h-5" />
                    Mostrar Menú
                </button>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {isSidebarVisible && (
              <aside className="lg:w-1/4 xl:w-1/5">
                <Sidebar 
                    selectedProcess={sidebarSelectedProcess} 
                    onSelectProcess={onSelectProcess}
                    onHideMenu={toggleSidebar}
                />
              </aside>
            )}
            <div className={isSidebarVisible ? "lg:w-3/4 xl:w-4/5" : "w-full"}>
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 mb-6 text-center border border-blue-800">
                <p className="text-lg">Proceso Seleccionado: <span className="font-bold text-lime-400">{currentProcessName}</span></p>
              </div>
              
              {processData.subProcesses ? (
                <CompositeProcessDashboard processData={processData} onSelectSubProcess={onSelectSubProcess} />
              ) : (
                <ProcessDetailView processData={processData} processName={currentProcessName} />
              )}
              
              {!parentProcessName && (
                <div className="mt-12 flex justify-between items-center">
                    <button
                        onClick={onGoToPrevious}
                        disabled={!previousProcess}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Anterior
                    </button>
                    <button
                        onClick={onGoToNext}
                        disabled={!nextProcess}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Siguiente
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
              )}

              {parentProcessName && (
                <div className="mt-12 flex justify-between items-center">
                    <button
                        onClick={onGoToPreviousSubProcess}
                        disabled={!previousSubProcess}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Anterior
                    </button>
                    <button
                        onClick={onGoToNextSubProcess}
                        disabled={!nextSubProcess}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Siguiente
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer onGoHome={onGoHome} />
      </div>

      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in z-50">
            <p className="font-semibold">¡Éxito!</p>
            <p className="text-sm">Los datos se han actualizado correctamente.</p>
        </div>
      )}

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