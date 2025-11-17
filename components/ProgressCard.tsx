import React from 'react';
import { Plan, PlanStatus } from '../types';

interface ProgressCardProps {
    plan: Plan;
}

const statusConfig = {
    [PlanStatus.Completed]: {
        color: 'bg-lime-500',
        text: 'text-lime-300',
        label: 'Completado'
    },
    [PlanStatus.Missing]: {
        color: 'bg-orange-500',
        text: 'text-orange-300',
        label: 'Falta'
    },
    [PlanStatus.NotStarted]: {
        color: 'bg-slate-600',
        text: 'text-slate-300',
        label: 'Sin Empezar'
    },
};

export const ProgressCard: React.FC<ProgressCardProps> = ({ plan }) => {
    return (
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl shadow-lg p-5 border border-gray-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-lime-500/20 group">
            <h4 className="font-bold text-lg text-lime-400 mb-4 group-hover:text-lime-300 transition-colors">{plan.title}</h4>
            
            <div className="space-y-1">
                {plan.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-10 gap-2 items-center text-sm py-1">
                        <span className="font-medium text-gray-300 truncate col-span-5">{item.name}</span>
                        <div className={`h-6 rounded col-span-3 flex items-center justify-center text-white font-bold text-xs ${statusConfig[item.status].color}`}>
                           {item.status === PlanStatus.Completed && 'X'}
                        </div>
                        <span className={`font-semibold text-right col-span-2 ${statusConfig[item.status].text}`}>{item.value.toFixed(1)}%</span>
                    </div>
                ))}
            </div>

            {plan.total !== undefined && (
                 <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-semibold text-gray-300">Total Progreso</p>
                        <p className="text-lg font-bold text-white">{plan.total.toFixed(1)}%</p>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden relative">
                         <div 
                           className="bg-gradient-to-r from-blue-500 to-lime-500 h-full rounded-full transition-all duration-500" 
                           style={{ width: `${plan.total}%` }}
                         />
                    </div>
                </div>
            )}
        </div>
    );
};