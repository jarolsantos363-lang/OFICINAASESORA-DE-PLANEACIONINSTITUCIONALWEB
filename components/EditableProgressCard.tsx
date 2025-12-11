
import React from 'react';
import { Plan, PlanStatus } from '../types';
import EditableCheckbox from './EditableCheckbox';

interface EditableProgressCardProps {
    plan: Plan;
    planIndex: number;
    onToggleStatus: (planIndex: number, itemIndex: number) => void;
    onUpdateValue: (planIndex: number, itemIndex: number, newValue: number) => void;
}

const statusConfig = {
    [PlanStatus.Completed]: {
        color: 'bg-lime-500/20 border-lime-500/50',
        text: 'text-lime-400',
        rowBg: 'bg-lime-500/5',
        label: 'Completado'
    },
    [PlanStatus.Missing]: {
        color: 'bg-orange-500/20 border-orange-500/50',
        text: 'text-orange-400',
        rowBg: 'bg-transparent', // Default
        label: 'Pendiente'
    },
    [PlanStatus.NotStarted]: {
        color: 'bg-slate-600/20 border-slate-600/50',
        text: 'text-slate-400',
        rowBg: 'bg-transparent',
        label: 'Sin Empezar'
    },
};

export const EditableProgressCard: React.FC<EditableProgressCardProps> = ({ 
    plan, 
    planIndex, 
    onToggleStatus, 
    onUpdateValue 
}) => {
    
    // Calculate total on the fly for display based on current items
    const currentTotal = plan.items.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="bg-[#1d2433] rounded-xl shadow-lg p-6 border border-gray-800 transition-all duration-300 hover:border-lime-500/30 group">
            <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4">
                <h4 className="font-bold text-xl text-white group-hover:text-lime-400 transition-colors">
                    {plan.title}
                </h4>
                <div className="text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Progreso Total</span>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">
                        {currentTotal.toFixed(1)}%
                    </div>
                </div>
            </div>
            
            <div className="space-y-3">
                {plan.items.map((item, index) => {
                    const isCompleted = item.status === PlanStatus.Completed;
                    const config = statusConfig[item.status] || statusConfig[PlanStatus.Missing];

                    return (
                        <div 
                            key={`${item.name}-${index}`} 
                            className={`
                                flex items-center justify-between p-3 rounded-lg border transition-all duration-300
                                ${isCompleted ? 'border-lime-500/30 bg-lime-500/5' : 'border-gray-700 bg-gray-800/30 hover:bg-gray-800'}
                            `}
                        >
                            <div className="flex items-center gap-4 flex-grow">
                                <EditableCheckbox 
                                    checked={isCompleted} 
                                    onChange={() => onToggleStatus(planIndex, index)}
                                />
                                <span className={`font-medium text-sm ${isCompleted ? 'text-gray-200' : 'text-gray-400'}`}>
                                    {item.name}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 pl-4 border-l border-gray-700/50 ml-2">
                                <div className="relative group/input">
                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        max="100"
                                        value={item.value}
                                        onChange={(e) => onUpdateValue(planIndex, index, parseFloat(e.target.value) || 0)}
                                        className={`
                                            w-16 bg-transparent text-right font-mono font-bold text-sm focus:outline-none border-b border-transparent focus:border-lime-500 transition-colors
                                            ${isCompleted ? 'text-lime-400' : 'text-gray-500'}
                                        `}
                                    />
                                    <span className="text-xs text-gray-600 absolute right-0 -bottom-3 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none">
                                        Editar %
                                    </span>
                                </div>
                                <span className="text-gray-600 text-xs font-bold">%</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div 
                       className="bg-gradient-to-r from-blue-500 to-lime-500 h-full rounded-full transition-all duration-700 ease-out relative" 
                       style={{ width: `${Math.min(currentTotal, 100)}%` }}
                     >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                     </div>
                </div>
            </div>
        </div>
    );
};
