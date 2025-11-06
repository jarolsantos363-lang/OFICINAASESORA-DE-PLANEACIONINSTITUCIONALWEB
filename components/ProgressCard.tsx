import React from 'react';
import { Plan, PlanStatus, Activity } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';
import { ClockIcon } from './icons/ClockIcon';

interface ProgressCardProps {
    plan: Plan;
}

const statusConfig = {
    [PlanStatus.Completed]: {
        color: 'bg-lime-500',
        text: 'text-lime-100',
        icon: <CheckIcon className="w-4 h-4" />,
        label: 'Completado'
    },
    [PlanStatus.Missing]: {
        color: 'bg-orange-500',
        text: 'text-orange-100',
        icon: <XIcon className="w-4 h-4" />,
        label: 'Falta'
    },
    [PlanStatus.NotStarted]: {
        color: 'bg-slate-500',
        text: 'text-slate-100',
        icon: <ClockIcon className="w-4 h-4" />,
        label: 'Sin Empezar'
    },
};

const ActivityBar: React.FC<{ activity: Activity }> = ({ activity }) => {
    const config = statusConfig[activity.status];
    // FIX: Removed line `const isSingle = plan.items.length === 1;` which caused an error because `plan` is not defined in this scope.
    // The `isSingle` variable was also unused within this component.

    return (
        <div className="flex items-center space-x-3 text-sm my-1">
            <div className="w-1/3 truncate font-medium text-gray-300">{activity.name}</div>
            <div className="w-2/3 flex items-center">
                 <div className="w-12 text-right pr-2">
                    {activity.status === PlanStatus.Completed && (
                        <div className={`p-1 rounded-full ${config.color} inline-block`}>
                           {config.icon}
                        </div>
                    )}
                     {activity.status === PlanStatus.Missing && (
                        <div className={`p-1 rounded-full ${config.color} inline-block`}>
                           {config.icon}
                        </div>
                    )}
                </div>
                <div className="flex-1 bg-slate-700 rounded-full h-5 overflow-hidden relative">
                   <div 
                     className={`${config.color} h-full rounded-full transition-all duration-500`} 
                     style={{ width: `${activity.value}%` }}
                   />
                   <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white mix-blend-difference">
                       {activity.value.toFixed(1)}%
                   </span>
                </div>
            </div>
        </div>
    );
};


export const ProgressCard: React.FC<ProgressCardProps> = ({ plan }) => {
    const isSingle = plan.items.length === 1;
    
    return (
        <div className="bg-gray-900 rounded-xl shadow-lg p-5 border border-gray-800 transition-all duration-300">
            <h4 className="font-bold text-lg text-lime-400 mb-3">{plan.title}</h4>
            
            <div className="space-y-2">
                {plan.items.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                        <span className="w-32 font-medium text-gray-300 truncate">{item.name}</span>
                        <div className="flex-1 flex items-center space-x-2">
                            <div className="h-2 flex-1 bg-slate-700 rounded-full">
                                <div 
                                    className={`${statusConfig[item.status].color} h-2 rounded-full`}
                                    style={{width: isSingle ? `${item.value}%` : item.status === PlanStatus.Completed ? '100%' : '0%'}}
                                ></div>
                            </div>
                            <span className={`font-semibold w-14 text-right ${statusConfig[item.status].text.replace('100', '400')}`}>{item.value.toFixed(1)}%</span>
                        </div>
                    </div>
                ))}
            </div>

            {plan.total !== undefined && (
                 <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-sm font-semibold text-gray-300 mb-1">Total Progreso</p>
                    <div className="h-6 bg-slate-700 rounded-full overflow-hidden relative">
                         <div 
                           className="bg-gradient-to-r from-blue-500 to-lime-500 h-full rounded-full transition-all duration-500" 
                           style={{ width: `${plan.total}%` }}
                         />
                         <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                            {plan.total.toFixed(1)}%
                         </span>
                    </div>
                </div>
            )}
        </div>
    );
};