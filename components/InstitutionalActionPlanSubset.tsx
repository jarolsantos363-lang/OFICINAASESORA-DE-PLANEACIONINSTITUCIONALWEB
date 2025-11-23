
import React, { useState } from 'react';
import { InstitutionalActivity } from '../types';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Activity, CheckCircle } from 'lucide-react';

interface InstitutionalActionPlanSubsetProps {
  activities: InstitutionalActivity[];
}

const InstitutionalActionPlanSubset: React.FC<InstitutionalActionPlanSubsetProps> = ({ activities }) => {
  const [activeView, setActiveView] = useState('tabla');

  const formatCOP = (valor: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  };

  // Process data for charts
  const dataCantidades = activities.map(act => ({
    nombre: `Act. ${act.id}`,
    fullName: act.nombre,
    programado: typeof act.cantidad[0] === 'number' ? act.cantidad[0] : 100,
    ejecutado: typeof act.cantidad[1] === 'number' ? act.cantidad[1] : parseInt(String(act.cantidad[1]).replace('%', '')),
    porcentaje: parseInt(act.indiceFisico.replace('%', ''))
  }));

  const dataInversion = activities.map(act => ({
    nombre: `Act. ${act.id}`,
    fullName: act.nombre,
    programado: act.inversion[0] / 1000000,
    ejecutado: act.inversion[1] / 1000000,
    porcentaje: parseInt(act.indiceInversion.replace('%', ''))
  }));

  const dataEficiencia = activities.map(act => ({
    nombre: `Act. ${act.id}`,
    value: parseInt(act.eficencia.replace('%', ''))
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  // Calculate summaries
  const totalInversion = activities.reduce((acc, curr) => acc + curr.inversion[0], 0);
  const totalInversionMillions = (totalInversion / 1000000).toLocaleString('es-CO', { maximumFractionDigits: 0 });
  
  const promedioAvance = Math.round(
    activities.reduce((acc, curr) => acc + parseInt(curr.indiceFisico.replace('%', '')), 0) / activities.length
  );

  const promedioEficiencia = Math.round(
    activities.reduce((acc, curr) => acc + parseInt(curr.eficencia.replace('%', '')), 0) / activities.length
  );

  return (
    <section className="my-8 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Plan de Acción Institucional 2025</h2>
        
        {/* Cards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Total Actividades</p>
                    <p className="text-2xl font-bold text-white">{activities.length}</p>
                </div>
                <Activity className="text-blue-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Inversión Programada</p>
                    <p className="text-xl font-bold text-white">$ {totalInversionMillions} M</p>
                </div>
                <DollarSign className="text-green-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Avance Promedio</p>
                    <p className="text-2xl font-bold text-white">{promedioAvance}%</p>
                </div>
                <TrendingUp className="text-orange-500" size={32} />
                </div>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">Eficiencia Promedio</p>
                    <p className="text-2xl font-bold text-white">{promedioEficiencia}%</p>
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Actividad</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Unidad</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Cantidad</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Inversión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Índice Físico</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Índice Inv.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-lime-400 uppercase">Eficiencia</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {activities.map((act) => (
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
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
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
            </div>
            )}

            {/* Vista de Inversión */}
            {activeView === 'inversion' && (
            <div className="space-y-8">
                <div>
                <h3 className="text-lg font-semibold text-white mb-4">Inversión: Programada vs Ejecutada (Millones)</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
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
            </div>
            )}

            {/* Vista de Eficiencia */}
            {activeView === 'eficiencia' && (
            <div className="space-y-8">
                <div className="flex justify-center">
                <div className="w-full max-w-lg">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">Distribución de Eficiencia</h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={dataEficiencia}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ nombre, value }) => `${nombre}: ${value}%`}
                            outerRadius={100}
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
            </div>
            )}
        </div>
        </div>
    </section>
  );
};

export default InstitutionalActionPlanSubset;
