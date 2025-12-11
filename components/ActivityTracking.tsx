
import React, { useState } from 'react';
import { ActivityTrackingItem } from '../types';
import { usePlanAccion } from '../hooks/usePlanAccion';
import EditableCheckbox from './EditableCheckbox';
import HistoryModal from './HistoryModal';
import { ClockIcon } from './icons/ClockIcon';

interface ActivityTrackingProps {
    data: ActivityTrackingItem[];
    processName: string;
}

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const StatusBadge: React.FC<{ completed: number; total: number }> = ({ completed, total }) => {
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    let bgColor = 'bg-orange-500';
    if (percentage > 99) bgColor = 'bg-green-500';
    else if (percentage < 50) bgColor = 'bg-red-500';

    return (
        <div className={`${bgColor} text-white text-sm font-bold px-4 py-1.5 rounded-full transition-colors duration-500`}>
            {completed}/{total}
        </div>
    );
};

const ActivityTracking: React.FC<ActivityTrackingProps> = ({ data: initialData, processName }) => {
    // We use the new hook to manage state and persistence
    const { data, isLoading, isSaving, lastSaved, toggleMonth, processId } = usePlanAccion(processName, initialData);
    const [showHistory, setShowHistory] = useState(false);

    return (
        <section className="mb-16">
             <div className="flex justify-between items-end mb-4">
                 <div>
                    <h2 className="text-3xl font-bold mb-1">Seguimiento de Actividades 2025</h2>
                    <p className="text-lime-400 font-semibold">{processName}</p>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                     <div className="flex items-center gap-3">
                         {isSaving && <span className="text-xs text-yellow-400 animate-pulse">Guardando...</span>}
                         {!isSaving && lastSaved && <span className="text-xs text-gray-500">Guardado: {lastSaved.toLocaleTimeString()}</span>}
                         <button 
                            onClick={() => setShowHistory(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded-lg transition-colors border border-gray-700"
                         >
                             <ClockIcon className="w-3.5 h-3.5" />
                             Historial
                         </button>
                     </div>
                 </div>
             </div>

            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
                        <div className="spinner"><div className="spinner1"></div></div>
                    </div>
                )}
                
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead className="bg-gray-800/50">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-lime-400 tracking-wider w-1/4">Actividad</th>
                                {months.map(month => (
                                    <th key={month} className="p-4 text-center text-sm font-semibold text-lime-400">{month}</th>
                                ))}
                                <th className="p-4 text-center text-sm font-semibold text-lime-400">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {data.map(item => {
                                const completedCount = item.months.filter(Boolean).length;
                                return (
                                    <tr key={item.name} className="hover:bg-gray-800/60 transition-colors">
                                        <td className="p-4 font-medium text-gray-200">
                                            {/* In future updates, this can also be EditableText */}
                                            {item.name}
                                        </td>
                                        {item.months.map((isCompleted, index) => (
                                            <td key={index} className="p-4 text-center">
                                                <div className="flex justify-center">
                                                    <EditableCheckbox 
                                                        checked={isCompleted} 
                                                        onChange={() => toggleMonth(item.name, index)}
                                                        isLoading={isSaving && false} // Optional: specific loading state per cell if needed
                                                    />
                                                </div>
                                            </td>
                                        ))}
                                        <td className="p-4">
                                           <div className="flex justify-center">
                                                <StatusBadge completed={completedCount} total={item.months.length} />
                                           </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <HistoryModal 
                isOpen={showHistory} 
                onClose={() => setShowHistory(false)} 
                processId={processId} 
            />
        </section>
    );
}

export default ActivityTracking;
