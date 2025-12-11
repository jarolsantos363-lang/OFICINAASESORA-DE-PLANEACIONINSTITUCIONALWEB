
import React from 'react';
import { ActivityTrackingItem } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { CircleIcon } from './icons/CircleIcon';

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
        <div className={`${bgColor} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
            {completed}/{total}
        </div>
    );
};

const ActivityTracking: React.FC<ActivityTrackingProps> = ({ data, processName }) => {
    return (
        <section className="mb-16">
             <h2 className="text-3xl font-bold mb-1">Seguimiento de Actividades 2025</h2>
             <p className="text-lime-400 font-semibold mb-8">{processName}</p>

            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
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
                                        <td className="p-4 font-medium text-gray-200">{item.name}</td>
                                        {item.months.map((isCompleted, index) => (
                                            <td key={index} className="p-4 text-center">
                                                {isCompleted ? <CheckIcon className="w-6 h-6 text-green-400 mx-auto" /> : <CircleIcon className="w-5 h-5 text-gray-500 mx-auto" />}
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
        </section>
    );
}

export default ActivityTracking;
