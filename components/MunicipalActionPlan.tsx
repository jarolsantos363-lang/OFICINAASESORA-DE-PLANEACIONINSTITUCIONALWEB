
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';
import { Bike, Building2, Trees, TrendingUp, Calendar, DollarSign, Target, Activity, ArrowLeft, Wallet } from 'lucide-react';

interface MunicipalActionPlanProps {
    onGoBack: () => void;
}

const PlanAccionMunicipal: React.FC<MunicipalActionPlanProps> = ({ onGoBack }) => {
  const [activeModule, setActiveModule] = useState('bicicletas');

  // Datos para Bicicletas (Estaciones Mantenidas)
  const bicicletasData = {
    actividades: [
      { nombre: 'Servicios mecánicos', cantidadPropuesta: 90, cantidadEjecutada: 85, presupuesto: 126000000, fisico: 94, inversion: 71, eficiencia: 125 },
      { nombre: 'Eventos ciclopaseos', cantidadPropuesta: 15, cantidadEjecutada: 10, presupuesto: 109000000, fisico: 67, inversion: 68, eficiencia: 66 },
      { nombre: 'Mantenimiento tecnológico', cantidadPropuesta: 6, cantidadEjecutada: 4, presupuesto: 188375000, fisico: 67, inversion: 27, eficiencia: 167 },
      { nombre: 'Mantenimiento bicicletas', cantidadPropuesta: 40, cantidadEjecutada: 10, presupuesto: 195805000, fisico: 25, inversion: 32, eficiencia: 20 },
      { nombre: 'Balanceo de flota', cantidadPropuesta: 480, cantidadEjecutada: 285, presupuesto: 290000000, fisico: 59, inversion: 45, eficiencia: 78 },
      { nombre: 'Atención al usuario', cantidadPropuesta: 1000, cantidadEjecutada: 1000, presupuesto: 81000000, fisico: 100, inversion: 64, eficiencia: 156 }
    ],
    totales: {
      presupuesto: 990180000,
      inicio: '01/01/2025',
      fin: '30/09/2025',
      corte: 'Corte al 30 de septiembre de 2025'
    }
  };

  // Datos para Panóptico
  const panopticoData = {
    actividades: [
      { nombre: 'Operación y desarrollo cultural', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 310000000, fisico: 100, inversion: 82, eficiencia: 123 },
      { nombre: 'Planes centro cultural', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 35260732, fisico: 100, inversion: 96, eficiencia: 104 },
      { nombre: 'Protección patrimonio', cantidadPropuesta: 3, cantidadEjecutada: 1, presupuesto: 32413500, fisico: 33, inversion: 96, eficiencia: 12 },
      { nombre: 'Agenda cultural', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 190269891, fisico: 100, inversion: 56, eficiencia: 180 },
      { nombre: 'Restauración y mantenimiento', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 1984684962, fisico: 100, inversion: 9, eficiencia: 1090 },
      { nombre: 'Mantenimiento complejo', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 79500000, fisico: 100, inversion: 38, eficiencia: 266 }
    ],
    totales: {
      presupuesto: 2632129085,
      inicio: '01/01/2025',
      fin: '31/12/2025'
    }
  };

  // Datos para Parques y Zonas Verdes
  const parquesData = {
    proyectos: [
      {
        nombre: 'Parques Mejorados',
        actividades: [
          { nombre: 'Adquisición insumos', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 373704131, fisico: 100, inversion: 15, eficiencia: 677, unidad: 'unidades' },
          { nombre: 'Labores sensibilización', cantidadPropuesta: 30, cantidadEjecutada: 10, presupuesto: 69000000, fisico: 33, inversion: 7, eficiencia: 148, unidad: 'unidades' },
          { nombre: 'Mejoramiento parques', cantidadPropuesta: 266, cantidadEjecutada: 125, mts2: 266, presupuesto: 413448273, fisico: 47, inversion: 8, eficiencia: 279, unidad: 'm²' },
          { nombre: 'Podas y talas', cantidadPropuesta: 20000, cantidadEjecutada: 4344, mts2: 20000, presupuesto: 42000000, fisico: 22, inversion: 86, eficiencia: 6, unidad: 'm²' }
        ]
      },
      {
        nombre: 'Parques Mantenidos',
        actividades: [
          { nombre: 'Adquisición insumos', cantidadPropuesta: 1, cantidadEjecutada: 1, presupuesto: 290057937, fisico: 100, inversion: 20, eficiencia: 507, unidad: 'unidades' },
          { nombre: 'Labores sensibilización', cantidadPropuesta: 86, cantidadEjecutada: 32, presupuesto: 39000000, fisico: 37, inversion: 8, eficiencia: 171, unidad: 'unidades' },
          { nombre: 'Mantenimiento zonas verdes', cantidadPropuesta: 126, cantidadEjecutada: 32, presupuesto: 156000000, fisico: 25, inversion: 16, eficiencia: 40, unidad: 'unidades' }
        ]
      },
      {
        nombre: 'Zonas Verdes Adecuadas',
        actividades: [
          { nombre: 'Adecuación zonas verdes', cantidadPropuesta: 433, cantidadEjecutada: 370, mts2: 433, presupuesto: 182778095, fisico: 85, inversion: 8, eficiencia: 935, unidad: 'm²' }
        ]
      },
      {
        nombre: 'Zonas Verdes Mantenidas',
        actividades: [
          { nombre: 'Mantenimiento zonas verdes', cantidadPropuesta: 433, cantidadEjecutada: 370, mts2: 433, presupuesto: 182777802, fisico: 85, inversion: 4, eficiencia: 1640, unidad: 'm²' }
        ]
      }
    ],
    totales: {
      presupuesto: 1748766238,
      inicio: '01/01/2025',
      fin: '31/12/2025'
    }
  };

  const modules = [
    { id: 'bicicletas', name: 'BICICLETAS', icon: Bike, color: 'from-blue-500 to-cyan-500', data: bicicletasData },
    { id: 'panoptico', name: 'PANÓPTICO', icon: Building2, color: 'from-purple-500 to-pink-500', data: panopticoData },
    { id: 'parques', name: 'PARQUES Y ZONAS VERDES', icon: Trees, color: 'from-green-500 to-emerald-500', data: parquesData }
  ];

  const currentModule = modules.find(m => m.id === activeModule);
  // Default to first module if not found, though id selection guarantees it
  const displayData = currentModule || modules[0];
  
  const COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('es-CO')} COP`;
  };

  const calculateExecuted = (presupuesto: number, inversionPercentage: number) => {
      return Math.round(presupuesto * (inversionPercentage / 100));
  };

  const renderIndicadores = (actividad: any) => {
    const faltantes = actividad.cantidadPropuesta - actividad.cantidadEjecutada;
    const porcentajeCumplimiento = actividad.cantidadPropuesta > 0 ? ((actividad.cantidadEjecutada / actividad.cantidadPropuesta) * 100).toFixed(0) : 0;
    const unidad = actividad.unidad || 'unidades';
    
    return (
      <div className="space-y-3 mt-3">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="text-xs font-semibold text-slate-600 mb-2 uppercase">CANTIDAD ({unidad})</div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-slate-500">Propuesta:</span>
            <span className="font-bold text-slate-700">{actividad.cantidadPropuesta} {unidad}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-500">Ejecutada:</span>
            <span className="font-bold text-green-600">{actividad.cantidadEjecutada} {unidad}</span>
          </div>
          {faltantes > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded p-2 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-amber-600 text-lg">⚠️</span>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-amber-800">Faltan {faltantes} {unidad}</div>
                  <div className="text-xs text-amber-600">Cumplimiento: {porcentajeCumplimiento}%</div>
                </div>
              </div>
            </div>
          )}
          {faltantes <= 0 && (
            <div className="bg-green-50 border border-green-200 rounded p-2 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✅</span>
                <div className="text-xs font-semibold text-green-800">Meta cumplida</div>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-blue-600 font-semibold">Físico</div>
            <div className="text-lg font-bold text-blue-700">{actividad.fisico}%</div>
          </div>
          <div className="bg-purple-50 p-2 rounded">
            <div className="text-xs text-purple-600 font-semibold">Inversión</div>
            <div className="text-lg font-bold text-purple-700">{actividad.inversion}%</div>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-xs text-green-600 font-semibold">Eficiencia</div>
            <div className="text-lg font-bold text-green-700">{actividad.eficiencia}%</div>
          </div>
        </div>
      </div>
    );
  };

  const renderBicicletasContent = () => {
    // Calculos para gráfico global
    const totalPresupuesto = bicicletasData.actividades.reduce((acc, curr) => acc + curr.presupuesto, 0);
    const totalEjecutado = bicicletasData.actividades.reduce((acc, curr) => acc + calculateExecuted(curr.presupuesto, curr.inversion), 0);
    const chartData = [
        { name: 'Total', Presupuesto: totalPresupuesto, Ejecutado: totalEjecutado }
    ];

    return (
    <div className="space-y-6">
        {/* Gráfico Global de Ejecución Presupuestal */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Wallet className="w-6 h-6 text-green-600" />
                Ejecución Presupuestal Global
            </h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                        <XAxis type="number" tickFormatter={(val) => `${(val/1000000).toFixed(0)}M`} />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend />
                        <Bar dataKey="Presupuesto" fill="#3b82f6" name="Presupuesto Asignado" barSize={30} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="Ejecutado" fill="#10b981" name="Presupuesto Ejecutado" barSize={30} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
             <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Presupuesto</p>
                    <p className="text-xl font-bold text-blue-600">{formatCurrency(totalPresupuesto)}</p>
                </div>
                 <div className="text-center">
                    <p className="text-sm text-gray-500">Ejecutado</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(totalEjecutado)}</p>
                </div>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Presupuesto por Actividad
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bicicletasData.actividades}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" angle={-45} textAnchor="end" height={100} fontSize={10} />
              <YAxis tickFormatter={(value) => `${(value/1000000).toFixed(0)}M`} width={60} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Bar dataKey="presupuesto" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-600" />
            Índices de Gestión
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart innerRadius="10%" outerRadius="80%" data={bicicletasData.actividades.map((a, i) => ({ ...a, fill: COLORS[i] }))}>
              <RadialBar dataKey="fisico" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-4">Detalle de Actividades</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bicicletasData.actividades.map((act, idx) => {
             const ejecutado = calculateExecuted(act.presupuesto, act.inversion);
             return (
                <div key={idx} className="border-2 border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm text-blue-900 mb-2">{act.nombre}</h4>
                <div className="bg-gray-50 p-2 rounded mb-2">
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                        <span>Presupuesto:</span>
                        <span className="font-semibold">{formatCurrency(act.presupuesto)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-green-700">
                        <span>Ejecutado:</span>
                        <span className="font-bold">{formatCurrency(ejecutado)}</span>
                    </div>
                </div>
                {renderIndicadores(act)}
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )};

  const renderPanopticoContent = () => {
    // Calculos para gráfico global
    const totalPresupuesto = panopticoData.actividades.reduce((acc, curr) => acc + curr.presupuesto, 0);
    const totalEjecutado = panopticoData.actividades.reduce((acc, curr) => acc + calculateExecuted(curr.presupuesto, curr.inversion), 0);
    const chartData = [
        { name: 'Total', Presupuesto: totalPresupuesto, Ejecutado: totalEjecutado }
    ];

    return (
    <div className="space-y-6">
       {/* Gráfico Global de Ejecución Presupuestal */}
       <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Wallet className="w-6 h-6 text-green-600" />
                Ejecución Presupuestal Global
            </h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                        <XAxis type="number" tickFormatter={(val) => `${(val/1000000).toFixed(0)}M`} />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend />
                        <Bar dataKey="Presupuesto" fill="#3b82f6" name="Presupuesto Asignado" barSize={30} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="Ejecutado" fill="#10b981" name="Presupuesto Ejecutado" barSize={30} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
             <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Presupuesto</p>
                    <p className="text-xl font-bold text-blue-600">{formatCurrency(totalPresupuesto)}</p>
                </div>
                 <div className="text-center">
                    <p className="text-sm text-gray-500">Ejecutado</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(totalEjecutado)}</p>
                </div>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            Distribución Presupuestal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={panopticoData.actividades}
                dataKey="presupuesto"
                nameKey="nombre"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={(entry) => `${entry.name.slice(0, 15)}...`}
              >
                {panopticoData.actividades.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatCurrency(value)} labelStyle={{fontSize: 11}} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-pink-600" />
            Eficiencia por Actividad
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={panopticoData.actividades} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="nombre" type="category" width={150} fontSize={10} />
              <Tooltip formatter={(value, name) => name === 'eficiencia' ? `${value}%` : value} />
              <Bar dataKey="eficiencia" fill="#ec4899" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-4">Servicios del Complejo Cultural</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {panopticoData.actividades.map((act, idx) => {
            const ejecutado = calculateExecuted(act.presupuesto, act.inversion);
            return (
            <div key={idx} className="border-2 border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-sm text-purple-900 mb-2">{act.nombre}</h4>
                <div className="bg-gray-50 p-2 rounded mb-2">
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                        <span>Presupuesto:</span>
                        <span className="font-semibold">{formatCurrency(act.presupuesto)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-green-700">
                        <span>Ejecutado:</span>
                        <span className="font-bold">{formatCurrency(ejecutado)}</span>
                    </div>
                </div>
              {renderIndicadores(act)}
            </div>
          )})}
        </div>
      </div>
    </div>
  )};

  const renderParquesContent = () => {
    // Flatten activities for global calculation
    const allActivities = parquesData.proyectos.flatMap(p => p.actividades);
    const totalPresupuesto = allActivities.reduce((acc: number, curr: any) => acc + curr.presupuesto, 0);
    const totalEjecutado = allActivities.reduce((acc: number, curr: any) => acc + calculateExecuted(curr.presupuesto, curr.inversion), 0);
    
    const chartData = [
        { name: 'Total', Presupuesto: totalPresupuesto, Ejecutado: totalEjecutado }
    ];

    return (
    <div className="space-y-6">
        {/* Gráfico Global de Ejecución Presupuestal */}
       <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
                <Wallet className="w-6 h-6 text-green-600" />
                Ejecución Presupuestal Global
            </h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                        <XAxis type="number" tickFormatter={(val) => `${(val/1000000).toFixed(0)}M`} />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend />
                        <Bar dataKey="Presupuesto" fill="#3b82f6" name="Presupuesto Asignado" barSize={30} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="Ejecutado" fill="#10b981" name="Presupuesto Ejecutado" barSize={30} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
             <div className="flex justify-around mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Presupuesto</p>
                    <p className="text-xl font-bold text-blue-600">{formatCurrency(totalPresupuesto)}</p>
                </div>
                 <div className="text-center">
                    <p className="text-sm text-gray-500">Ejecutado</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(totalEjecutado)}</p>
                </div>
            </div>
        </div>

      {parquesData.proyectos.map((proyecto, pidx) => (
        <div key={pidx} className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
            <Trees className="w-6 h-6" />
            {proyecto.nombre}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {proyecto.actividades.map((act: any, idx) => {
                const ejecutado = calculateExecuted(act.presupuesto, act.inversion);
                return (
                <div key={idx} className="border-2 border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm text-green-900 mb-2">{act.nombre}</h4>
                    {act.cantidad && <div className="text-xs text-gray-600 mb-1">Cantidad: <span className="font-semibold">{act.cantidad}</span></div>}
                    {act.mts2 && <div className="text-xs text-gray-600 mb-1">Área: <span className="font-semibold">{act.mts2} m²</span></div>}
                    
                    <div className="bg-gray-50 p-2 rounded mb-2">
                        <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                            <span>Presupuesto:</span>
                            <span className="font-semibold">{formatCurrency(act.presupuesto)}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-green-700">
                            <span>Ejecutado:</span>
                            <span className="font-bold">{formatCurrency(ejecutado)}</span>
                        </div>
                    </div>
                    {renderIndicadores(act)}
                </div>
            )})}
          </div>
        </div>
      ))}

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-4">Comparativo de Proyectos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={parquesData.proyectos.map(p => ({
            nombre: p.nombre,
            presupuesto: p.actividades.reduce((sum, a) => sum + a.presupuesto, 0),
            actividades: p.actividades.length
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" angle={-15} textAnchor="end" height={80} fontSize={11} />
            <YAxis tickFormatter={(value) => `${(value/1000000).toFixed(0)}M`} width={60} />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Bar dataKey="presupuesto" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto mb-6">
          <button 
              onClick={onGoBack} 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg transition-colors border border-gray-300 shadow-sm"
          >
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
          </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Plan de Acción Municipal
          </h1>
          <p className="text-gray-600 text-lg">Gestión y Seguimiento de Proyectos 2025</p>
        </div>

        {/* Module Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeModule === module.id
                    ? `bg-gradient-to-br ${module.color} text-white shadow-2xl scale-105`
                    : 'bg-white text-gray-700 hover:shadow-lg hover:scale-102'
                }`}
              >
                <Icon className={`w-12 h-12 mx-auto mb-3 ${activeModule === module.id ? '' : 'text-gray-400'}`} />
                <h3 className="text-lg font-bold">{module.name}</h3>
                <p className="text-sm mt-2 opacity-90">
                  {formatCurrency(module.data.totales.presupuesto)}
                </p>
              </button>
            );
          })}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-xs text-gray-500">Presupuesto Total</div>
                <div className="text-xl font-bold text-gray-800">{formatCurrency(displayData.data.totales.presupuesto)}</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-xs text-gray-500">Fecha Inicio</div>
                <div className="text-xl font-bold text-gray-800">{displayData.data.totales.inicio}</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-xs text-gray-500">Fecha Corte</div>
                <div className="text-xl font-bold text-gray-800">{displayData.data.totales.fin}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fadeIn">
          {activeModule === 'bicicletas' && renderBicicletasContent()}
          {activeModule === 'panoptico' && renderPanopticoContent()}
          {activeModule === 'parques' && renderParquesContent()}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PlanAccionMunicipal;
