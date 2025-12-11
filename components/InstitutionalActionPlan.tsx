
import React, { useState } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  ReferenceLine, Cell 
} from 'recharts';
import { TrendingUp, DollarSign, Activity, CheckCircle, LayoutDashboard, Table as TableIcon } from 'lucide-react';

interface InstitutionalActionPlanProps {
    onGoBack: () => void;
}

const InstitutionalActionPlan: React.FC<InstitutionalActionPlanProps> = ({ onGoBack }) => {
  // Changed default viewMode to 'table'
  const [viewMode, setViewMode] = useState<'table' | 'dashboard'>('table');

  const formatCOP = (valor: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  };

  const actividades = [
    {
      id: 1,
      nombre: "Mejoramiento de parques",
      descripcionCompleta: "Mejoramiento de parques para nuestros constructores del mañana",
      unidad: "Mts2",
      cantidad: [266, 125], // [Programado, Ejecutado]
      inversion: [355000000, 135085747], // [Programado, Ejecutado]
      indiceFisico: 47,
      indiceInversion: 38,
      eficencia: 47
    },
    {
      id: 2,
      nombre: "Mantenimiento de parques",
      descripcionCompleta: "Realizar mantenimiento y/o adecuacion de parques",
      unidad: "Unidad",
      cantidad: [129, 32],
      inversion: [355000000, 85763667],
      indiceFisico: 25,
      indiceInversion: 24,
      eficencia: 25
    },
    {
      id: 3,
      nombre: "Adecuación zonas verdes",
      descripcionCompleta: "Realizar adecuaciones de zonas verdes",
      unidad: "Mts2",
      cantidad: [433, 370],
      inversion: [245000000, 14270000],
      indiceFisico: 85,
      indiceInversion: 6,
      eficencia: 85
    },
    {
      id: 4,
      nombre: "Mantenimiento zonas verdes",
      descripcionCompleta: "Realizar mantenimiento de zonas verdes",
      unidad: "Mts2",
      cantidad: [433, 370],
      inversion: [245000000, 8135461],
      indiceFisico: 85,
      indiceInversion: 3,
      eficencia: 85
    },
    {
      id: 5,
      nombre: "Complejo Cultural Panóptico",
      descripcionCompleta: "Funcionamiento y/o Dotacion del complejo cultural Panoptico",
      unidad: "Porcentaje",
      cantidad: [100, 83], 
      inversion: [1300000000, 793327109],
      indiceFisico: 83,
      indiceInversion: 61,
      eficencia: 83
    },
    {
      id: 6,
      nombre: "Sistema de Bicicletas",
      descripcionCompleta: "Operación sistema piloto de bicicletas compartidas",
      unidad: "Porcentaje",
      cantidad: [100, 83], 
      inversion: [656000000, 463538400],
      indiceFisico: 83,
      indiceInversion: 71,
      eficencia: 83
    }
  ];

  // Preparar datos para gráficos
  const chartData = actividades.map(act => ({
    name: act.nombre,
    inversionProg: act.inversion[0],
    inversionEjec: act.inversion[1],
    avanceFisico: act.indiceFisico,
    eficiencia: act.eficencia
  }));

  // Cálculos de Resumen
  const totalInversionProg = actividades.reduce((acc, curr) => acc + curr.inversion[0], 0);
  const totalInversionEjec = actividades.reduce((acc, curr) => acc + curr.inversion[1], 0);
  const promedioAvance = Math.round(actividades.reduce((acc, curr) => acc + curr.indiceFisico, 0) / actividades.length);
  const promedioInversion = Math.round((totalInversionEjec / totalInversionProg) * 100);

  // Custom Tooltip para Inversión
  const CustomTooltipInversion = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-bold mb-2">{label}</p>
          <p className="text-blue-400 text-sm">
            Programado: {formatCOP(payload[0].value)}
          </p>
          <p className="text-emerald-400 text-sm">
            Ejecutado: {formatCOP(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="animate-slide-right pb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <button 
                onClick={onGoBack} 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-700 w-fit"
            >
                <ArrowLeftIcon className="w-4 h-4" />
                Volver
            </button>
            <div className="flex bg-gray-800/50 p-1 rounded-lg border border-gray-700 w-fit self-end md:self-auto">
                <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        viewMode === 'table' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                >
                    <TableIcon className="w-4 h-4" />
                    Vista Detallada
                </button>
                <button
                    onClick={() => setViewMode('dashboard')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        viewMode === 'dashboard' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                >
                    <LayoutDashboard className="w-4 h-4" />
                    Vista Gráfica
                </button>
            </div>
        </div>

        <section className="animate-fade-in">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-3">
                    Plan de Acción Institucional 2025
                </h2>
                <p className="text-gray-400">Seguimiento a la Gestión, Inversión y Eficiencia</p>
            </div>
            
            {/* Cards Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-5 shadow-lg flex items-center justify-between hover:border-blue-500/30 transition-colors">
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Actividades Totales</p>
                        <p className="text-3xl font-bold text-white mt-1">{actividades.length}</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Activity className="text-blue-400 w-8 h-8" />
                    </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-5 shadow-lg flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Ejecución Presupuestal</p>
                        <p className="text-3xl font-bold text-white mt-1">{formatCOP(totalInversionEjec)}</p>
                        <p className="text-xs text-gray-500 mt-1">de {formatCOP(totalInversionProg)} Programados</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                        <DollarSign className="text-emerald-400 w-8 h-8" />
                    </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-5 shadow-lg flex items-center justify-between hover:border-orange-500/30 transition-colors">
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Avance Físico Prom.</p>
                        <p className="text-3xl font-bold text-white mt-1">{promedioAvance}%</p>
                    </div>
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                        <TrendingUp className="text-orange-400 w-8 h-8" />
                    </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-5 shadow-lg flex items-center justify-between hover:border-purple-500/30 transition-colors">
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Eficiencia Global</p>
                        <p className="text-3xl font-bold text-white mt-1">{promedioInversion}%</p>
                    </div>
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                        <CheckCircle className="text-purple-400 w-8 h-8" />
                    </div>
                </div>
            </div>

            {/* DASHBOARD VIEW */}
            {viewMode === 'dashboard' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
                    
                    {/* Gráfico 1: Inversión */}
                    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-emerald-400" />
                                Ejecución Financiera por Actividad
                            </h3>
                            <p className="text-sm text-gray-400">Comparativo Programado vs. Ejecutado</p>
                        </div>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                                    <XAxis type="number" hide />
                                    <YAxis 
                                        dataKey="name" 
                                        type="category" 
                                        width={150} 
                                        tick={{fill: '#9CA3AF', fontSize: 11}} 
                                        interval={0}
                                    />
                                    <Tooltip content={<CustomTooltipInversion />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                    <Bar dataKey="inversionProg" name="Programado" fill="#3b82f6" barSize={12} radius={[0, 4, 4, 0]} />
                                    <Bar dataKey="inversionEjec" name="Ejecutado" fill="#10b981" barSize={12} radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Gráfico 2: Avance Físico */}
                    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-orange-400" />
                                Avance Físico (%)
                            </h3>
                            <p className="text-sm text-gray-400">Porcentaje de cumplimiento de metas físicas</p>
                        </div>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={true} vertical={true} />
                                    <XAxis type="number" domain={[0, 100]} tick={{fill: '#9CA3AF'}} />
                                    <YAxis 
                                        dataKey="name" 
                                        type="category" 
                                        width={150} 
                                        tick={{fill: '#9CA3AF', fontSize: 11}} 
                                        interval={0}
                                    />
                                    <Tooltip 
                                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                                        itemStyle={{ color: '#fbbf24' }}
                                        formatter={(value: number) => `${value}%`}
                                    />
                                    <ReferenceLine x={100} stroke="#4B5563" strokeDasharray="3 3" />
                                    <Bar dataKey="avanceFisico" name="Avance Físico" barSize={20} radius={[0, 4, 4, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.avanceFisico >= 80 ? '#10b981' : entry.avanceFisico >= 50 ? '#f59e0b' : '#ef4444'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            )}

            {/* TABLE VIEW */}
            {viewMode === 'table' && (
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-800">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Actividad</th>
                                    <th className="px-6 py-4 text-center text-xs font-bold text-blue-400 uppercase tracking-wider">Metas Físicas (Und)</th>
                                    <th className="px-6 py-4 text-center text-xs font-bold text-emerald-400 uppercase tracking-wider">Inversión ($)</th>
                                    <th className="px-6 py-4 text-center text-xs font-bold text-orange-400 uppercase tracking-wider">Índices (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                                {actividades.map((act) => (
                                    <tr key={act.id} className="hover:bg-gray-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-white mb-1">{act.id}. {act.nombre}</div>
                                            <div className="text-xs text-gray-400 line-clamp-2">{act.descripcionCompleta}</div>
                                            <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-gray-800 text-gray-400 border border-gray-700">
                                                {act.unidad}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Prog:</span>
                                                    <span className="text-gray-300 font-mono">{act.cantidad[0]}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Ejec:</span>
                                                    <span className="text-white font-bold font-mono">{act.cantidad[1]}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-500">Prog:</span>
                                                    <span className="text-gray-300 font-mono">{formatCOP(act.inversion[0])}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-500">Ejec:</span>
                                                    <span className="text-emerald-400 font-bold font-mono">{formatCOP(act.inversion[1])}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="text-center">
                                                    <div className={`text-lg font-bold ${act.indiceFisico >= 80 ? 'text-emerald-400' : 'text-orange-400'}`}>
                                                        {act.indiceFisico}%
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 uppercase">Físico</div>
                                                </div>
                                                <div className="w-px h-8 bg-gray-700"></div>
                                                <div className="text-center">
                                                    <div className="text-lg font-bold text-blue-400">
                                                        {act.indiceInversion}%
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 uppercase">Financiero</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    </div>
  );
};

export default InstitutionalActionPlan;
