
import React, { useState } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Activity, CheckCircle } from 'lucide-react';

interface InstitutionalActionPlanProps {
    onGoBack: () => void;
}

const InstitutionalActionPlan: React.FC<InstitutionalActionPlanProps> = ({ onGoBack }) => {
  const [activeView, setActiveView] = useState('tabla');

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
      nombre: "Mejoramiento de parques para nuestros constructores del mañana",
      unidad: "Mts2",
      cantidad: [266, 125],
      inversion: [355000000, 135085747],
      indiceFisico: "47%",
      indiceInversion: "38%",
      eficencia: "47%"
    },
    {
      id: 2,
      nombre: "Realizar mantenimiento y/o adecuacion de parques",
      unidad: "Unidad",
      cantidad: [129, 32],
      inversion: [355000000, 85763667],
      indiceFisico: "25%",
      indiceInversion: "24%",
      eficencia: "25%"
    },
    {
      id: 3,
      nombre: "Realizar adecuaciones de zonas verdes",
      unidad: "Mts2",
      cantidad: [433, 370],
      inversion: [245000000, 14270000],
      indiceFisico: "85%",
      indiceInversion: "6%",
      eficencia: "85%"
    },
    {
      id: 4,
      nombre: "Realizar mantenimiento de zonas verdes",
      unidad: "Mts2",
      cantidad: [433, 370],
      inversion: [245000000, 8135461],
      indiceFisico: "85%",
      indiceInversion: "3%",
      eficencia: "85%"
    },
    {
      id: 5,
      nombre: "Funcionamiento y/o Dotacion del complejo cultural Panoptico de",
      unidad: "Porcentaje",
      cantidad: ["100%", "83%"],
      inversion: [1300000000, 793327109],
      indiceFisico: "83%",
      indiceInversion: "61%",
      eficencia: "83%"
    },
    {
      id: 6,
      nombre: "Operación sistema piloto de bicicletas compartidas",
      unidad: "Porcentaje",
      cantidad: ["100%", "83%"],
      inversion: [656000000, 463538400],
      indiceFisico: "83%",
      indiceInversion: "71%",
      eficencia: "83%"
    }
  ];

  const dataCantidades = actividades.map(act => ({
    nombre: `Act. ${act.id}`,
    fullName: act.nombre,
    programado: typeof act.cantidad[0] === 'number' ? act.cantidad[0] : 100,
    ejecutado: typeof act.cantidad[1] === 'number' ? act.cantidad[1] : parseInt(String(act.cantidad[1]).replace('%', '')),
    porcentaje: parseInt(act.indiceFisico.replace('%', ''))
  }));

  const dataInversion = actividades.map(act => ({
    nombre: `Act. ${act.id}`,
    fullName: act.nombre,
    programado: act.inversion[0] / 1000000,
    ejecutado: act.inversion[1] / 1000000,
    porcentaje: parseInt(act.indiceInversion.replace('%', ''))
  }));

  const dataEficiencia = actividades.map(act => ({
    name: `Act. ${act.id}`,
    value: parseInt(act.eficencia.replace('%', ''))
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <div className="animate-slide-right pb-12">
        <div className="mb-6">
            <button 
                onClick={onGoBack} 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-700"
            >
                <ArrowLeftIcon className="w-4 h-4" />
                Volver al Inicio
            </button>
        </div>

        <section className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient mb-8">Plan de Acción Institucional 2025</h2>
            
            {/* Cards Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Total Actividades</p>
                    <p className="text-2xl font-bold text-white">{actividades.length}</p>
                </div>
                <Activity className="text-blue-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Inversión Total</p>
                    <p className="text-xl font-bold text-white">$ 3.156 M</p>
                </div>
                <DollarSign className="text-green-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Avance Promedio</p>
                    <p className="text-2xl font-bold text-white">68%</p>
                </div>
                <TrendingUp className="text-orange-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Eficiencia</p>
                    <p className="text-2xl font-bold text-white">68%</p>
                </div>
                <CheckCircle className="text-purple-500" size={32} />
                </div>
            </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow mb-6 overflow-hidden">
            <div className="border-b border-gray-700 bg-gray-800/50">
                <div className="flex flex-wrap gap-4 px-6">
                <button
                    onClick={() => setActiveView('tabla')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeView === 'tabla'
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    }`}
                >
                    Tabla de Actividades
                </button>
                <button
                    onClick={() => setActiveView('cantidades')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeView === 'cantidades'
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    }`}
                >
                    Avance en Cantidades
                </button>
                <button
                    onClick={() => setActiveView('inversion')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeView === 'inversion'
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    }`}
                >
                    Avance en Inversión
                </button>
                <button
                    onClick={() => setActiveView('eficiencia')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeView === 'eficiencia'
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    }`}
                >
                    Eficiencia
                </button>
                </div>
            </div>

            <div className="p-6 text-gray-200">
                {/* Vista de Tabla */}
                {activeView === 'tabla' && (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                        <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Actividades</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Unidad</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Cantidad</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Inversión</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Índice Físico</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Índice Inversión</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Eficiencia</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {actividades.map((act) => (
                        <React.Fragment key={act.id}>
                            <tr className="hover:bg-gray-700/50 transition-colors">
                            <td rowSpan={2} className="px-4 py-4 text-sm text-gray-300 border-r border-gray-700/50 max-w-xs">{act.id}. {act.nombre}</td>
                            <td rowSpan={2} className="px-4 py-4 text-sm text-gray-400 border-r border-gray-700/50">{act.unidad}</td>
                            <td className="px-4 py-2 text-sm text-gray-300">Prog: {act.cantidad[0]}</td>
                            <td className="px-4 py-2 text-sm text-gray-300">{formatCOP(act.inversion[0])}</td>
                            <td rowSpan={2} className="px-4 py-4 text-sm font-semibold text-blue-400 border-l border-gray-700/50 text-center">{act.indiceFisico}</td>
                            <td rowSpan={2} className="px-4 py-4 text-sm font-semibold text-green-400 border-l border-gray-700/50 text-center">{act.indiceInversion}</td>
                            <td rowSpan={2} className="px-4 py-4 text-sm font-semibold text-purple-400 border-l border-gray-700/50 text-center">{act.eficencia}</td>
                            </tr>
                            <tr className="hover:bg-gray-700/50 transition-colors border-b border-gray-700">
                            <td className="px-4 py-2 text-sm text-gray-500">Ejec: {act.cantidad[1]}</td>
                            <td className="px-4 py-2 text-sm text-gray-500">{formatCOP(act.inversion[1])}</td>
                            </tr>
                        </React.Fragment>
                        ))}
                    </tbody>
                    </table>
                </div>
                )}

                {/* Vista de Cantidades */}
                {activeView === 'cantidades' && (
                <div className="space-y-8">
                    <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Comparativo: Programado vs Ejecutado</h3>
                    <div className="h-[400px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={1}>
                            <BarChart data={dataCantidades} layout="vertical" margin={{ left: 50, right: 50 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                            <XAxis type="number" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <YAxis type="category" dataKey="nombre" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} width={80} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                                itemStyle={{ color: '#F3F4F6' }}
                                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            />
                            <Legend wrapperStyle={{ color: '#9CA3AF' }} />
                            <Bar dataKey="programado" fill="#3b82f6" name="Programado" barSize={20} />
                            <Bar dataKey="ejecutado" fill="#10b981" name="Ejecutado" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Porcentaje de Avance Físico</h3>
                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={1}>
                            <LineChart data={dataCantidades}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="nombre" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <YAxis stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                                itemStyle={{ color: '#F3F4F6' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="porcentaje" stroke="#8b5cf6" strokeWidth={3} name="% Avance" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    </div>
                </div>
                )}

                {/* Vista de Inversión */}
                {activeView === 'inversion' && (
                <div className="space-y-8">
                    <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Inversión: Programada vs Ejecutada (Millones)</h3>
                    <div className="h-[400px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={1}>
                            <BarChart data={dataInversion}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="nombre" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <YAxis stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                                itemStyle={{ color: '#F3F4F6' }}
                            />
                            <Legend />
                            <Bar dataKey="programado" fill="#f59e0b" name="Programado (M)" />
                            <Bar dataKey="ejecutado" fill="#10b981" name="Ejecutado (M)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Índice de Inversión (%)</h3>
                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={1}>
                            <LineChart data={dataInversion}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="nombre" stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <YAxis stroke="#9CA3AF" tick={{fill: '#9CA3AF'}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                                itemStyle={{ color: '#F3F4F6' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="porcentaje" stroke="#ef4444" strokeWidth={3} name="% Inversión" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    </div>
                </div>
                )}

                {/* Vista de Eficiencia */}
                {activeView === 'eficiencia' && (
                <div className="space-y-8">
                    <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <h3 className="text-lg font-semibold text-white mb-4 text-center">Distribución de Eficiencia por Actividad</h3>
                        <div className="h-[400px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={1}>
                            <PieChart>
                                <Pie
                                data={dataEficiencia}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                label={({ name, value }) => `${name}: ${value}%`}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                stroke="none"
                                >
                                {dataEficiencia.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
                                    itemStyle={{ color: '#F3F4F6' }}
                                />
                            </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {actividades.map((act, index) => (
                        <div key={act.id} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-gray-700" style={{ borderColor: COLORS[index] }}>
                        <h4 className="font-semibold text-white text-sm mb-2">Actividad {act.id}</h4>
                        <p className="text-xs text-gray-400 mb-2">{act.nombre}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-300">Eficiencia:</span>
                            <span className="text-lg font-bold" style={{ color: COLORS[index] }}>{act.eficencia}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
            </div>
        </section>
    </div>
  );
};

export default InstitutionalActionPlan;
