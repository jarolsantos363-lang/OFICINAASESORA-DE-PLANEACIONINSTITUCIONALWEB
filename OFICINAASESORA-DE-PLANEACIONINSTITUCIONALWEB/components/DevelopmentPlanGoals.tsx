
import React from 'react';
import { DevelopmentPlanGoal } from '../types';
import { InformationCircleIcon } from './icons/InformationCircleIcon';
import { CheckIcon } from './icons/CheckIcon';

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
          const percentage = item.meta2025Programado > 0 ? (item.meta2025Ejecutado / item.meta2025Programado) * 100 : 0;
          const faltante2025 = item.meta2025Programado - item.meta2025Ejecutado;
          const totalEjecutado = item.meta2024Ejecutado + item.meta2025Ejecutado;
          const faltanteCuatrienio = item.metaProductoCuatrienio - totalEjecutado;
          
          // Logic to determine if the product should be displayed in M²
          const isSquareMeters = [
              "4002023-Parques mejorados",
              "4002025-Zonas verdes adecuadas",
              "4002026-Zonas verdes mantenidas"
          ].includes(item.producto);

          const unitLabel = isSquareMeters ? " M²" : "";

          // Render Logic for the Status Box
          let statusContent;

          if (faltante2025 > 0) {
              // Caso: Hay meta programada en 2025 y falta por ejecutar
              statusContent = (
                  <div className="mt-5 flex items-start gap-3 bg-blue-900/30 border border-blue-800/50 rounded-lg p-3">
                      <InformationCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-200">
                          <span className="font-bold">{faltante2025.toLocaleString('es-ES')}{unitLabel}</span> restantes para cumplir la meta programada para 2025.
                      </p>
                  </div>
              );
          } else if (item.meta2025Programado === 0 && faltanteCuatrienio > 0) {
              // Caso: NO hay meta programada en 2025 (es 0), pero falta para el cuatrienio.
              // Mostramos alerta amarilla en lugar de "Meta cumplida".
              statusContent = (
                  <div className="mt-5 flex items-start gap-3 bg-yellow-900/30 border border-yellow-800/50 rounded-lg p-3">
                      <InformationCircleIcon className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-200">
                          Sin programación para 2025. <span className="font-bold">Faltan {faltanteCuatrienio.toLocaleString('es-ES')}{unitLabel}</span> para la meta del cuatrienio.
                      </p>
                  </div>
              );
          } else {
              // Caso: Meta 2025 cumplida (o excedida) O Meta Cuatrienio cumplida.
              statusContent = (
                  <div className="mt-5 flex items-start gap-3 bg-green-900/30 border border-green-800/50 rounded-lg p-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-200">
                          <span className="font-bold">¡Meta de 2025 cumplida!</span> 
                          {faltanteCuatrienio > 0 
                              ? ` Faltan ${faltanteCuatrienio.toLocaleString('es-ES')}${unitLabel} para la meta del cuatrienio.`
                              : ' ¡Meta del cuatrienio también cumplida!'}
                      </p>
                  </div>
              );
          }

          return (
            <div key={index} className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg flex flex-col md:flex-row items-center gap-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-grow w-full">
                    <p className="text-lg text-gray-200 font-semibold">{item.producto}</p>
                    <p className="text-sm text-gray-400 font-mono mb-5">{item.indicador}</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 text-center">
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Meta Cuatrienio</p>
                            <p className="text-2xl font-bold text-white">
                                {item.metaProductoCuatrienio.toLocaleString('es-ES')}
                                <span className="text-sm font-normal text-gray-400 ml-1">{unitLabel}</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 text-center">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Programado 2024</p>
                                <p className="text-xl font-bold text-white">
                                    {item.meta2024Programado.toLocaleString('es-ES')}
                                    <span className="text-xs font-normal text-gray-400 ml-1">{unitLabel}</span>
                                </p>
                            </div>
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 text-center">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Ejecutado 2024</p>
                                <p className="text-xl font-bold text-lime-400">
                                    {item.meta2024Ejecutado.toLocaleString('es-ES')}
                                    <span className="text-xs font-normal text-lime-600/70 ml-1">{unitLabel}</span>
                                </p>
                            </div>
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 text-center">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Programado 2025</p>
                                <p className="text-xl font-bold text-white">
                                    {item.meta2025Programado.toLocaleString('es-ES')}
                                    <span className="text-xs font-normal text-gray-400 ml-1">{unitLabel}</span>
                                </p>
                            </div>
                            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 text-center">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Ejecutado 2025</p>
                                <p className="text-xl font-bold text-lime-400">
                                    {item.meta2025Ejecutado.toLocaleString('es-ES')}
                                    <span className="text-xs font-normal text-lime-600/70 ml-1">{unitLabel}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {statusContent}
                </div>
                
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <RadialProgress key={`${item.producto}-${index}`} percentage={percentage} />
                  {item.ejecutado2025OP && item.ejecutado2025OP > 0 && (
                      <div className="bg-slate-800/60 p-3 rounded-lg text-center border border-slate-700 w-40">
                          <p className="text-xs text-gray-400 uppercase">Ejecutado OP 2025</p>
                          <p className="text-lg font-bold text-cyan-400 mt-1">
                              ${item.ejecutado2025OP.toLocaleString('es-CO')}
                          </p>
                      </div>
                  )}
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentPlanGoals;
