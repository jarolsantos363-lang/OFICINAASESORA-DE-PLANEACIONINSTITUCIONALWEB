
import React from 'react';
import { ArrowLeftIcon } from './components/icons/ArrowLeftIcon';

const piipData = [
  {
    actividad: 'PARQUES Y ZONAS VERDES\nCODIGO: 2024730010028',
    plataColocada: 1748766238,
    reporteMiGestion: 237254874,
    reportePiip: 819672034,
  },
  {
    actividad: 'PANOPTICO CODIGO:',
    plataColocada: 2632129085,
    reporteMiGestion: 63535566,
    reportePiip: 769175085,
  },
  {
    actividad: 'BICICLETAS',
    plataColocada: 998180000,
    reporteMiGestion: 458260000,
    reportePiip: 461060000,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

interface PieChartProps {
    data: { name: string, value: number, color: string }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    if (total === 0) {
        return <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center"><span className="text-gray-400 text-sm">Sin datos</span></div>;
    }
    let cumulativePercent = 0;

    const segments = data.map(item => {
        const percent = (item.value / total) * 100;
        const startAngle = (cumulativePercent / 100) * 360;
        cumulativePercent += percent;
        const endAngle = (cumulativePercent / 100) * 360;
        
        const startX = 50 + 50 * Math.cos(startAngle * Math.PI / 180);
        const startY = 50 + 50 * Math.sin(startAngle * Math.PI / 180);
        const endX = 50 + 50 * Math.cos(endAngle * Math.PI / 180);
        const endY = 50 + 50 * Math.sin(endAngle * Math.PI / 180);

        const largeArcFlag = percent > 50 ? 1 : 0;

        return {
            path: `M 50,50 L ${startX},${startY} A 50,50 0 ${largeArcFlag},1 ${endX},${endY} Z`,
            color: item.color,
            name: item.name
        };
    });

    return (
        <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
            {segments.map((segment, index) => (
                <path key={index} d={segment.path} fill={segment.color}>
                    <title>{`${segment.name}: ${data[index].value.toLocaleString()}`}</title>
                </path>
            ))}
        </svg>
    );
};

interface PiipReportProps {
    onGoBack: () => void;
}

const PiipReport: React.FC<PiipReportProps> = ({ onGoBack }) => {
    return (
        <div className="animate-slide-right">
            <div className="mb-6">
                <button 
                    onClick={onGoBack} 
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-700"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Volver al Mapa de Procesos
                </button>
            </div>
            <header className="mb-8">
                <div className="flex items-center gap-4">
                     <img className="h-12 w-auto" src="https://www.infibague.gov.co/wp-content/uploads/2025/02/logo-Infibague-blanco-300x99.png" alt="INFIBAGUE Logo" />
                     <h1 className="text-3xl md:text-4xl font-bold font-heading text-gradient">Reporte de la PIIP</h1>
                </div>
            </header>

            <main>
                <section className="mb-12 animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-4 border-l-4 border-lime-500 pl-4">Tabla de Datos</h2>
                    <div className="overflow-x-auto bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700">
                        <table className="w-full min-w-[800px] text-sm text-left">
                            <thead className="bg-gray-800/50 text-xs text-lime-400 uppercase tracking-wider">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Actividad</th>
                                    <th scope="col" className="px-6 py-3 text-right">Plata Colocada</th>
                                    <th scope="col" className="px-6 py-3 text-right">Reporte Plan de Acción Mi Gestión</th>
                                    <th scope="col" className="px-6 py-3 text-right">Reporte PIIP</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {piipData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-800/60 transition-colors">
                                        <td className="px-6 py-4 font-medium whitespace-pre-wrap">{item.actividad}</td>
                                        <td className="px-6 py-4 text-right font-mono">{formatCurrency(item.plataColocada)}</td>
                                        <td className="px-6 py-4 text-right font-mono">{formatCurrency(item.reporteMiGestion)}</td>
                                        <td className="px-6 py-4 text-right font-mono">{formatCurrency(item.reportePiip)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="animate-fade-in" style={{animationDelay: '200ms'}}>
                    <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">Análisis Gráfico</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {piipData.map((item, index) => {
                            const totalEjecutado = item.reporteMiGestion + item.reportePiip;
                            const diferencia = item.plataColocada - totalEjecutado;
                            const tieneDiferencia = Math.abs(diferencia) > 0.01; // Allow for floating point inaccuracies

                            const chartData = [
                                { name: 'Reporte Mi Gestión', value: item.reporteMiGestion, color: '#3b82f6' }, // blue-500
                                { name: 'Reporte PIIP', value: item.reportePiip, color: '#84cc16' }, // lime-500
                            ];

                            if (tieneDiferencia && diferencia > 0) {
                                chartData.push({ name: 'Diferencia (Faltante)', value: diferencia, color: '#ef4444' }); // red-500
                            }
                            
                            return (
                                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 p-6 flex flex-col items-center shadow-lg">
                                    <h3 className="text-lg font-bold text-center mb-4 text-white whitespace-pre-wrap">{item.actividad.split('\n')[0]}</h3>
                                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                                        <div className="flex-shrink-0">
                                            <PieChart data={chartData} />
                                        </div>
                                        <div className="text-sm space-y-2 flex-grow">
                                            {chartData.map(d => (
                                                <div key={d.name} className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: d.color }}></span>
                                                    <span className="text-gray-300">{d.name}:</span>
                                                    <span className="font-mono font-semibold text-white ml-auto">{formatCurrency(d.value)}</span>
                                                </div>
                                            ))}
                                            <div className="pt-2 border-t border-gray-700 w-full mt-2">
                                                <div className="flex items-center gap-2 text-base">
                                                    <span className="text-gray-300 font-semibold">Total Colocado:</span>
                                                    <span className="font-mono font-bold text-white ml-auto">{formatCurrency(item.plataColocada)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {tieneDiferencia && (
                                        <div className="mt-6 w-full bg-red-900/50 border border-red-700 rounded-lg p-4 text-center">
                                            <p className="font-bold text-red-300">¡ALERTA!</p>
                                            <p className="text-red-400 text-sm">
                                                EL DINERO EJECUTADO NO ES IGUAL AL REPORTADO EN LA PLATAFORMA MI GESTION HAY UNA DIFERENCIA DE PLATA POR <strong className="font-mono">{formatCurrency(diferencia)}</strong>.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PiipReport;
