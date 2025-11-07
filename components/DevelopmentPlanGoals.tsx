
import React from 'react';
import { DevelopmentPlanGoal } from '../types';
import { InformationCircleIcon } from './icons/InformationCircleIcon';

interface RadialProgressProps {
  percentage: number;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ percentage }) => {
    const radius = 54;
    const strokeWidth = 12;
    const size = 128; // Fixed size for the container
    const viewBoxSize = radius * 2 + strokeWidth;
    const center = viewBoxSize / 2;
    const circumference = 2 * Math.PI * radius;
    // We clamp the percentage for the visual part to handle cases over 100%
    const clampedPercentage = Math.min(percentage, 100);
    const offset = circumference - (clampedPercentage / 100) * circumference;

    let strokeColorClass = 'stroke-orange-500';
    if (percentage >= 100) {
        strokeColorClass = 'stroke-cyan-400';
    } else if (percentage > 80) {
        strokeColorClass = 'stroke-lime-400';
    } else if (percentage > 50) {
        strokeColorClass = 'stroke-yellow-400';
    }

    let textColorClass = 'text-orange-400';
     if (percentage >= 100) {
        textColorClass = 'text-cyan-300';
    } else if (percentage > 80) {
        textColorClass = 'text-lime-300';
    } else if (percentage > 50) {
        textColorClass = 'text-yellow-300';
    }

    return (
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="-rotate-90">
                <circle
                    className="stroke-gray-700/50"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center}
                />
                <circle
                    className={`${strokeColorClass} transition-all duration-1000 ease-out`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center}
                />
            </svg>
            <div className={`absolute inset-0 flex items-center justify-center font-bold text-3xl ${textColorClass}`}>
                <span>{percentage.toFixed(0)}</span>
                <span className="text-xl ml-0.5">%</span>
            </div>
        </div>
    );
};

// FIX: Define DevelopmentPlanGoalsProps interface
interface DevelopmentPlanGoalsProps {
  data: DevelopmentPlanGoal[];
}

const DevelopmentPlanGoals: React.FC<DevelopmentPlanGoalsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-4">Metas de Plan de Desarrollo</h2>
        <div className="bg-gray-900 rounded-xl p-8 text-center border border-gray-800">
            <p className="text-gray-400">No hay metas del plan de desarrollo para este proceso.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8">Metas de Plan de Desarrollo</h2>
      <div className="space-y-8">
        {data.map((item, index) => {
          const percentage = item.metaProductoCuatrienio > 0 ? (item.meta2025Ejecutado / item.metaProductoCuatrienio) * 100 : 0;
          const faltante = item.metaProductoCuatrienio - item.meta2025Ejecutado;
          
          return (
            <div key={index} className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg flex flex-col md:flex-row items-center gap-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-grow w-full">
                    <p className="text-lg text-gray-200 font-semibold mb-5">{item.producto}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 text-center sm:text-left">
                        <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">Meta Cuatrienio</p>
                          <p className="text-2xl font-bold text-white">{item.metaProductoCuatrienio.toLocaleString('es-ES')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">Programado 2025</p>
                          <p className="text-2xl font-bold text-white">{item.meta2025Programado.toLocaleString('es-ES')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">Ejecutado 2025</p>
                          <p className="text-2xl font-bold text-lime-400">{item.meta2025Ejecutado.toLocaleString('es-ES')}</p>
                        </div>
                    </div>
                    {faltante > 0 && (
                        <div className="mt-5 flex items-start gap-3 bg-blue-900/30 border border-blue-800/50 rounded-lg p-3">
                            <InformationCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-200">
                                <span className="font-bold">{faltante.toLocaleString('es-ES')}</span> unidades restantes para cumplir la meta al 31 de Diciembre de 2025.
                            </p>
                        </div>
                    )}
                </div>
                
                <RadialProgress key={`${item.producto}-${index}`} percentage={percentage} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentPlanGoals;