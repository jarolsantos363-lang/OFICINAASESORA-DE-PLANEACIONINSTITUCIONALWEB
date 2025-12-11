
import React from 'react';
import { ArrowLeftIcon } from './components/icons/ArrowLeftIcon';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AlertTriangle, TrendingUp, DollarSign, FileText } from 'lucide-react';

const piipData = [
  {
    actividad: 'PARQUES Y ZONAS VERDES',
    codigo: '2024730010028',
    plataColocada: 1748766238,
    reporteMiGestion: 237254874,
    reportePiip: 819672034,
  },
  {
    actividad: 'PANOPTICO',
    codigo: '',
    plataColocada: 2632129085,
    reporteMiGestion: 63535566,
    reportePiip: 769175085,
  },
  {
    actividad: 'BICICLETAS',
    codigo: '',
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

// --- Main PiipReport Component ---

interface PiipReportProps {
    onGoBack: () => void;
}

const PiipReport: React.FC<PiipReportProps> = ({ onGoBack }) => {
    return (
        <div className="animate-slide-right pb-12">
            <div className="mb-8 flex items-center justify-between">
                <button 
                    onClick={onGoBack} 
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all shadow-lg hover:shadow-xl border border-slate-700 transform hover:-translate-y-0.5"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Volver al Mapa
                </button>
                <div className="hidden md:block text-right">
                    <p className="text-sm text-gray-400">Oficina Asesora de Planeación</p>
                    <p className="text-xs text-gray-500 font-mono">Actualizado: 2025</p>
                </div>
            </div>
            
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500 mb-2 drop-shadow-sm">
                    Reporte de la PIIP
                </h1>
                <p className="text-gray-400 text-lg">Seguimiento Financiero y Presupuestal</p>
            </div>

            <div className="space-y-16">
                {/* Tabla de Datos */}
                <section className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-lime-500/10 rounded-lg">
                            <FileText className="w-6 h-6 text-lime-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Resumen de Datos</h2>
                    </div>
                    
                    <div className="overflow-hidden rounded-2xl border border-gray-700 shadow-2xl bg-[#1e293b]/60 backdrop-blur-md">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[900px]">
                                <thead>
                                    <tr className="bg-slate-800/80 border-b border-gray-700 text-left">
                                        <th className="px-6 py-5 text-xs font-bold text-lime-400 uppercase tracking-wider">Actividad / Código</th>
                                        <th className="px-6 py-5 text-right text-xs font-bold text-blue-400 uppercase tracking-wider">Plata Colocada</th>
                                        <th className="px-6 py-5 text-right text-xs font-bold text-purple-400 uppercase tracking-wider">Reporte Mi Gestión</th>
                                        <th className="px-6 py-5 text-right text-xs font-bold text-emerald-400 uppercase tracking-wider">Reporte PIIP</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700/50">
                                    {piipData.map((item, index) => (
                                        <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                                            <td className="px-6 py-5">
                                                <div className="font-bold text-white text-base">{item.actividad}</div>
                                                {item.codigo && <div className="text-xs text-gray-500 font-mono mt-1">{item.codigo}</div>}
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <span className="font-mono text-gray-300 font-medium text-base bg-slate-800/50 px-2 py-1 rounded">
                                                    {formatCurrency(item.plataColocada)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <span className="font-mono text-gray-300 font-medium text-base">
                                                    {formatCurrency(item.reporteMiGestion)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <span className="font-mono text-gray-300 font-medium text-base">
                                                    {formatCurrency(item.reportePiip)}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Gráficos */}
                <section className="animate-fade-in" style={{animationDelay: '150ms'}}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Análisis Gráfico y Balance</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {piipData.map((item, index) => {
                            const totalEjecutado = item.reporteMiGestion + item.reportePiip;
                            const diferencia = item.plataColocada - totalEjecutado;
                            const tieneDiferencia = diferencia > 1000; // Margen de error pequeño

                            // Datos para el gráfico
                            const chartData = [
                                { name: 'Mi Gestión', value: item.reporteMiGestion, color: '#8b5cf6' }, // violet-500
                                { name: 'PIIP', value: item.reportePiip, color: '#10b981' }, // emerald-500
                            ];

                            // Si hay diferencia positiva (falta dinero por reportar), la agregamos al gráfico
                            if (tieneDiferencia) {
                                chartData.push({ name: 'Faltante', value: diferencia, color: '#ef4444' }); // red-500
                            }
                            
                            return (
                                <div key={index} className="flex flex-col h-full bg-[#1e293b] rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Header de la tarjeta */}
                                    <div className="p-6 bg-slate-800/50 border-b border-gray-700 min-h-[5rem] flex items-center justify-center">
                                        <h3 className="text-lg font-bold text-white text-center leading-tight">
                                            {item.actividad}
                                        </h3>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        {/* Gráfico */}
                                        <div className="h-64 w-full relative mb-6">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={chartData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={60}
                                                        outerRadius={80}
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                        stroke="none"
                                                    >
                                                        {chartData.map((entry, i) => (
                                                            <Cell key={`cell-${i}`} fill={entry.color} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip 
                                                        formatter={(value: number) => formatCurrency(value)}
                                                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '0.5rem' }}
                                                        itemStyle={{ color: '#e2e8f0' }}
                                                    />
                                                    <Legend 
                                                        verticalAlign="bottom" 
                                                        height={36} 
                                                        iconType="circle"
                                                        wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            
                                            {/* Centro del Donut con Total */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <span className="text-xs text-gray-500 uppercase font-bold">Total</span>
                                                <DollarSign className="w-5 h-5 text-gray-400 my-1" />
                                            </div>
                                        </div>

                                        {/* Detalles Numéricos */}
                                        <div className="space-y-3 bg-black/20 rounded-xl p-4 border border-gray-700/50 mb-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="flex items-center gap-2 text-gray-400">
                                                    <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                                                    Mi Gestión
                                                </span>
                                                <span className="font-mono text-gray-200">{formatCurrency(item.reporteMiGestion)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="flex items-center gap-2 text-gray-400">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                    PIIP
                                                </span>
                                                <span className="font-mono text-gray-200">{formatCurrency(item.reportePiip)}</span>
                                            </div>
                                            <div className="h-px bg-gray-700 my-2"></div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-sm font-bold text-white">Total Colocado</span>
                                                <span className="font-mono text-lg font-bold text-lime-400">{formatCurrency(item.plataColocada)}</span>
                                            </div>
                                        </div>

                                        {/* Alerta de Diferencia */}
                                        {tieneDiferencia ? (
                                            <div className="mt-auto bg-red-500/10 border border-red-500/30 rounded-xl p-4 animate-pulse-slow">
                                                <div className="flex items-center gap-2 mb-2 text-red-400">
                                                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                                                    <span className="font-bold text-xs uppercase tracking-wider">Discrepancia Detectada</span>
                                                </div>
                                                <p className="text-sm text-red-200 leading-relaxed">
                                                    Faltan por justificar <span className="font-mono font-bold text-white bg-red-500/20 px-1.5 py-0.5 rounded mx-1">{formatCurrency(diferencia)}</span> respecto al total colocado.
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="mt-auto bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-center gap-2">
                                                 <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                 </div>
                                                 <span className="text-emerald-400 font-bold text-sm">Balance Cuadrado</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
            <style>{`
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .85; }
                }
            `}</style>
        </div>
    );
};

export default PiipReport;
