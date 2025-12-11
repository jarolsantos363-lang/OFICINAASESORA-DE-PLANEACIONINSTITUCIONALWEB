import React, { useState } from 'react';
import { ProcessData } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import CompositeProcessDashboard from './CompositeProcessDashboard';
import ProcessDetailView from './ProcessDetailView';
import { RefreshIcon } from './icons/RefreshIcon';
import NavButton from './NavButton';

interface DashboardProps {
  currentProcessName: string;
  processData: ProcessData;
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
  onUpdateData: () => Promise<void>;
  isLoading: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  currentProcessName, 
  processData, 
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
  onUpdateData,
  isLoading,
}) => {
  const [showNotification, setShowNotification] = useState(false);
  
  const backButtonText = parentProcessName ? `Volver a ${parentProcessName}` : 'Volver al Mapa de Procesos';
  
  const handleUpdateData = async () => {
    await onUpdateData();
    setShowNotification(true);
    setTimeout(() => {
        setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="animate-slide-right">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
                <button 
                onClick={onGoBack} 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-700"
                >
                <ArrowLeftIcon className="w-4 h-4" />
                {backButtonText}
                </button>
                <button
                onClick={handleUpdateData}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors border border-blue-500 disabled:opacity-70 disabled:cursor-wait"
                >
                <RefreshIcon className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Actualizando...' : 'Actualizar Datos'}
                </button>
            </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-lg shadow-sm p-4 sm:p-6 md:p-8 border border-gray-800">
            {processData.subProcesses ? (
                <CompositeProcessDashboard
                    processData={processData}
                    onSelectSubProcess={onSelectSubProcess}
                    processName={currentProcessName}
                />
            ) : (
                <ProcessDetailView processData={processData} processName={currentProcessName} />
            )}
            
            {!parentProcessName && (
            <div className="mt-12 flex justify-between items-center">
                <NavButton
                    onClick={onGoToPrevious}
                    disabled={!previousProcess || isLoading}
                    direction="prev"
                >
                    Anterior
                </NavButton>
                <NavButton
                    onClick={onGoToNext}
                    disabled={!nextProcess || isLoading}
                    direction="next"
                >
                    Siguiente
                </NavButton>
            </div>
            )}

            {parentProcessName && (
            <div className="mt-12 flex justify-between items-center">
                <NavButton
                    onClick={onGoToPreviousSubProcess}
                    disabled={!previousSubProcess || isLoading}
                    direction="prev"
                >
                    Anterior
                </NavButton>
                <NavButton
                    onClick={onGoToNextSubProcess}
                    disabled={!nextSubProcess || isLoading}
                    direction="next"
                >
                    Siguiente
                </NavButton>
            </div>
            )}
        </div>

        {showNotification && (
            <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in z-50">
                <p className="font-semibold">¡Éxito!</p>
                <p className="text-sm">Los datos se han actualizado correctamente.</p>
            </div>
        )}
    </div>
  );
};

export default Dashboard;