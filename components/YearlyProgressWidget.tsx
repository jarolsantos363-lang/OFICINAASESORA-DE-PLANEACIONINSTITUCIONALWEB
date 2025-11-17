import React from 'react';
import { Plan, PlanStatus } from '../types';

const statusConfig = {
    [PlanStatus.Completed]: { color: 'bg-lime-500' },
    [PlanStatus.Missing]: { color: 'bg-orange-500' },
    [PlanStatus.NotStarted]: { color: 'bg-slate-600' },
};

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const YearlyProgressWidget: React.FC<{ plan: Plan }> = ({ plan }) => {
    const completedMonths = plan.items.filter(item => item.status === PlanStatus.Completed).length;
    const totalMonths = plan.items.length;

    const maxValue = React.useMemo(() => {
        const max = Math.max(...plan.items.map(i => i.value));
        return max > 0 ? max : 1; // Avoid division by zero
    }, [plan.items]);

    return (
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl shadow-lg p-5 border border-gray-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/20 group h-full flex flex-col">
            <h4 className="font-bold text-lg text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">Resumen Anual del Progreso</h4>
            <p className="text-sm text-gray-400 mb-4">{`Completado: ${completedMonths} de ${totalMonths} meses.`}</p>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-4 gap-y-2 mb-6">
                {plan.items.map((item, index) => (
                    <div key={index} className="flex items-center" title={`${item.name}: ${item.status}`}>
                        <span className={`w-2.5 h-2.5 rounded-full ${statusConfig[item.status].color}`}></span>
                        <span className="text-sm ml-2 text-gray-300">{months[index]}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <h5 className="text-sm font-semibold mb-2 text-gray-300">Progreso Mensual (%)</h5>
                <div className="flex items-end h-28 gap-1 bg-gray-800/50 p-2 rounded-lg border border-gray-700/50">
                    {plan.items.map((item, index) => {
                        const heightPercent = (item.value / maxValue) * 95 + 5; // Scale from 5% to 100% for better visualization
                        return (
                            <div 
                                key={index}
                                className="w-full h-full flex items-end"
                                title={`${months[index]}: ${item.value.toFixed(1)}%`}
                            >
                                <div
                                    className={`w-full rounded-t-sm transition-all duration-500 ${statusConfig[item.status].color}`}
                                    style={{ height: `${item.value > 0 ? heightPercent : 5}%` }}
                                >
                                    <div className="text-[10px] text-white text-center opacity-0 group-hover:opacity-100 transition-opacity -translate-y-4">{item.value > 0 ? `${item.value.toFixed(0)}%` : ''}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default YearlyProgressWidget;
