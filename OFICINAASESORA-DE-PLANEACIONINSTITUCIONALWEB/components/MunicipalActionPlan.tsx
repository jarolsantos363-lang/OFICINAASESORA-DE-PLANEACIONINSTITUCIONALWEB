
import React, { useState, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend
} from 'recharts';
import {
  Bike, Building2, Trees, TrendingUp, Calendar, DollarSign, Target, Activity
} from 'lucide-react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

/* ----------  HELPERS  ---------- */
const COP = (v: number) => `$ ${v.toLocaleString('es-CO')}`;
const M = (v: number) => `${(v / 1000000).toFixed(0)}M`;

/* ----------  DATOS  ---------- */
const raw = {
  bicicletas: {
    act: [
      { n: 'Servicios mecánicos', p: 90, e: 85, b: 126000000, f: 94, i: 71, efi: 125 },
      { n: 'Eventos ciclopaseos', p: 15, e: 10, b: 109000000, f: 67, i: 68, efi: 66 },
      { n: 'Mantenimiento tecnológico', p: 6, e: 4, b: 188375000, f: 67, i: 27, efi: 167 },
      { n: 'Mantenimiento bicicletas', p: 40, e: 10, b: 195805000, f: 25, i: 32, efi: 20 },
      { n: 'Balanceo de flota', p: 480, e: 285, b: 290000000, f: 59, i: 45, efi: 78 },
      { n: 'Atención al usuario', p: 1000, e: 1000, b: 81000000, f: 100, i: 64, efi: 156 }
    ],
    tot: { b: 990180000, ini: '01/01/2025', fin: '30/09/2025' }
  },
  panoptico: {
    act: [
      { n: 'Operación y desarrollo cultural', p: 1, e: 1, b: 310000000, f: 100, i: 82, efi: 123 },
      { n: 'Planes centro cultural', p: 1, e: 1, b: 35260732, f: 100, i: 96, efi: 104 },
      { n: 'Protección patrimonio', p: 3, e: 1, b: 32413500, f: 33, i: 96, efi: 12 },
      { n: 'Agenda cultural', p: 1, e: 1, b: 190269891, f: 100, i: 56, efi: 180 },
      { n: 'Restauración y mantenimiento', p: 1, e: 1, b: 1984684962, f: 100, i: 9, efi: 1090 },
      { n: 'Mantenimiento complejo', p: 1, e: 1, b: 79500000, f: 100, i: 38, efi: 266 }
    ],
    tot: { b: 2632129085, ini: '01/01/2025', fin: '31/12/2025' }
  },
  parques: {
    proy: [
      {
        n: 'Parques Mejorados',
        act: [
          { n: 'Adquisición insumos', p: 1, e: 1, b: 373704131, f: 100, i: 15, efi: 677 },
          { n: 'Labores sensibilización', p: 30, e: 10, b: 69000000, f: 33, i: 7, efi: 148 },
          { n: 'Mejoramiento parques', p: 266, e: 125, m2: 266, b: 413448273, f: 47, i: 8, efi: 279 },
          { n: 'Podas y talas', p: 20000, e: 4344, m2: 20000, b: 42000000, f: 22, i: 86, efi: 6 }
        ]
      },
      {
        n: 'Parques Mantenidos',
        act: [
          { n: 'Adquisición insumos', p: 1, e: 1, b: 290057937, f: 100, i: 20, efi: 507 },
          { n: 'Labores sensibilización', p: 86, e: 32, b: 39000000, f: 37, i: 8, efi: 171 },
          { n: 'Mantenimiento zonas verdes', p: 126, e: 32, b: 156000000, f: 25, i: 16, efi: 40 }
        ]
      },
      {
        n: 'Zonas Verdes Adecuadas',
        act: [
          { n: 'Adecuación zonas verdes', p: 433, e: 370, m2: 433, b: 182778095, f: 85, i: 8, efi: 935 }
        ]
      },
      {
        n: 'Zonas Verdes Mantenidas',
        act: [
          { n: 'Mantenimiento zonas verdes', p: 433, e: 370, m2: 433, b: 182777802, f: 85, i: 4, efi: 1640 }
        ]
      }
    ],
    tot: { b: 1748766238, ini: '01/01/2025', fin: '31/12/2025' }
  }
};

/* ----------  COMPONENTES RE-UTILIZABLES  ---------- */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative ${className}`}>{children}</div>
);

const Indicadores: React.FC<{ a: any }> = ({ a }) => {
  const falta = a.p - a.e;
  const cumpl = a.p > 0 ? ((a.e / a.p) * 100).toFixed(0) : '0';
  const unit = a.m2 ? 'm²' : 'und';
  
  return (
    <div className="space-y-3 mt-3">
      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <div className="text-xs font-semibold text-slate-600 mb-2">CANTIDAD</div>
        <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-500">Propuesta:</span>
            <span className="font-bold text-slate-700">{a.p.toLocaleString()} {unit}</span>
        </div>
        <div className="flex justify-between text-xs">
            <span className="text-slate-500">Ejecutada:</span>
            <span className="font-bold text-green-600">{a.e.toLocaleString()} {unit}</span>
        </div>
        
        {falta > 0
          ? <div className="bg-amber-50 border border-amber-200 rounded p-2 mt-2 text-xs text-amber-800 font-medium">⚠️ Faltan {falta.toLocaleString()} {unit} ({cumpl}%)</div>
          : <div className="bg-green-50 border border-green-200 rounded p-2 mt-2 text-xs text-green-800 font-medium">✅ Meta cumplida al 100%</div>}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-blue-50 p-2 rounded border border-blue-100"><div className="text-[10px] uppercase text-blue-600 font-bold">Físico</div><div className="font-bold text-blue-700 text-sm">{a.f}%</div></div>
        <div className="bg-purple-50 p-2 rounded border border-purple-100"><div className="text-[10px] uppercase text-purple-600 font-bold">Inversión</div><div className="font-bold text-purple-700 text-sm">{a.i}%</div></div>
        <div className="bg-green-50 p-2 rounded border border-green-100"><div className="text-[10px] uppercase text-green-600 font-bold">Eficiencia</div><div className="font-bold text-green-700 text-sm">{a.efi}%</div></div>
      </div>
    </div>
  );
};

const Selector: React.FC<{ mods: any[]; active: string; set: (id: string) => void }> = ({ mods, active, set }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    {mods.map(m => {
      const Icon = m.ico;
      const isActive = active === m.id;
      return (
        <button
          key={m.id}
          onClick={() => set(m.id)}
          className={`p-6 rounded-2xl transition-all duration-300 border ${
             isActive 
             ? `bg-gradient-to-br ${m.color} text-white shadow-xl scale-105 border-transparent` 
             : 'bg-white text-gray-700 hover:shadow-lg hover:border-gray-300 border-gray-100'
          }`}
        >
          <Icon className={`w-12 h-12 mx-auto mb-3 ${!isActive && 'text-gray-400'}`} />
          <h3 className="text-lg font-bold tracking-tight">{m.n}</h3>
          <p className="text-sm mt-2 opacity-90 font-mono bg-black/10 inline-block px-2 py-0.5 rounded">{COP(m.tot.b)}</p>
        </button>
      );
    })}
  </div>
);

const Info: React.FC<{ mod: any }> = ({ mod }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
    <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-green-100 rounded-full"><DollarSign className="w-6 h-6 text-green-600" /></div>
        <div><div className="text-gray-500 text-xs uppercase font-bold">Presupuesto Total</div><div className="font-bold text-lg text-slate-800">{COP(mod.tot.b)}</div></div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-blue-100 rounded-full"><Calendar className="w-6 h-6 text-blue-600" /></div>
        <div><div className="text-gray-500 text-xs uppercase font-bold">Fecha Inicio</div><div className="font-bold text-lg text-slate-800">{mod.tot.ini}</div></div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-purple-100 rounded-full"><Calendar className="w-6 h-6 text-purple-600" /></div>
        <div><div className="text-gray-500 text-xs uppercase font-bold">Fecha Corte</div><div className="font-bold text-lg text-slate-800">{mod.tot.fin}</div></div>
    </div>
  </div>
);

/* ----------  VISTAS POR MÓDULO  ---------- */
const Bicicletas: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-700"><TrendingUp className="w-5 h-5 text-blue-600" />Presupuesto por Actividad</h3>
        <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={50}>
            <BarChart data={data.act}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="n" angle={-45} textAnchor="end" height={80} fontSize={10} tick={{fill: '#64748b'}} interval={0} />
                <YAxis tickFormatter={M} width={40} tick={{fill: '#64748b'}} fontSize={11} />
                <Tooltip formatter={COP} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="b" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Presupuesto" />
            </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>
      <Card>
        <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-700"><Activity className="w-5 h-5 text-purple-600" />Índices de Gestión</h3>
        <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={50}>
            <RadialBarChart innerRadius="20%" outerRadius="100%" data={data.act.map((a: any, i: number) => ({ ...a, fill: ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i % 6] }))} startAngle={180} endAngle={0}>
                <RadialBar background dataKey="f" label={{ position: 'insideStart', fill: '#fff', fontSize: 10 }} />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{right: 0, fontSize: '10px'}} />
                <Tooltip />
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
    <Card>
      <h3 className="font-bold mb-4 text-slate-700 border-b pb-2">Detalle de Actividades</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.act.map((a: any, i: number) => (
          <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 hover:shadow-md transition-all hover:border-blue-300 group">
            <h4 className="font-bold text-sm text-blue-900 mb-2 group-hover:text-blue-700">{a.n}</h4>
            <div className="text-xs text-gray-500 mb-2 font-mono bg-blue-50/50 inline-block px-2 py-1 rounded">Presupuesto: <span className="font-semibold text-slate-700">{COP(a.b)}</span></div>
            <Indicadores a={a} />
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const Panoptico: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-700"><DollarSign className="w-5 h-5 text-purple-600" />Distribución Presupuestal</h3>
        <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={50}>
            <PieChart>
                <Pie data={data.act} dataKey="b" nameKey="n" cx="50%" cy="50%" outerRadius={100} label={({ n }) => n?.slice(0, 15) + '...'} paddingAngle={2}>
                {data.act.map((_: any, i: number) => <Cell key={i} fill={['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i % 6]} />)}
                </Pie>
                <Tooltip formatter={COP} contentStyle={{borderRadius: '8px', border: 'none'}} />
            </PieChart>
            </ResponsiveContainer>
        </div>
      </Card>
      <Card>
        <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-700"><Target className="w-5 h-5 text-pink-600" />Eficiencia por Actividad</h3>
        <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={50}>
            <BarChart data={data.act} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="n" type="category" width={120} fontSize={10} tick={{fill: '#64748b'}} />
                <Tooltip formatter={(v: number) => `${v}%`} cursor={{fill: 'transparent'}} />
                <Bar dataKey="efi" fill="#ec4899" radius={[0, 4, 4, 0]} name="Eficiencia">
                     {data.act.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.efi > 100 ? '#10b981' : '#ec4899'} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
    <Card>
      <h3 className="font-bold mb-4 text-slate-700 border-b pb-2">Servicios del Complejo Cultural</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.act.map((a: any, i: number) => (
          <div key={i} className="bg-white border border-purple-100 rounded-xl p-4 hover:shadow-md transition-all hover:border-purple-300 group">
            <h4 className="font-bold text-sm text-purple-900 mb-2 group-hover:text-purple-700">{a.n}</h4>
            <div className="text-xs text-gray-500 mb-2 font-mono bg-purple-50/50 inline-block px-2 py-1 rounded">Presupuesto: <span className="font-semibold text-slate-700">{COP(a.b)}</span></div>
            <Indicadores a={a} />
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const Parques: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-6 animate-fade-in">
    {data.proy.map((p: any, i: number) => (
      <Card key={i}>
        <h3 className="flex items-center gap-2 font-bold mb-4 text-green-800 border-b border-green-100 pb-2">
            <Trees className="w-6 h-6 text-green-600" />
            {p.n}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.act.map((a: any, j: number) => (
            <div key={j} className="bg-white border border-green-100 rounded-xl p-4 hover:shadow-md transition-all hover:border-green-300">
              <h4 className="font-bold text-sm text-green-900 mb-2">{a.n}</h4>
              {a.m2 && <div className="text-xs text-gray-500 mb-1">Área: <span className="font-bold text-slate-700">{a.m2} m²</span></div>}
              <div className="text-xs text-gray-500 mb-2 font-mono bg-green-50/50 inline-block px-2 py-1 rounded">Presupuesto: <span className="font-semibold text-slate-700">{COP(a.b)}</span></div>
              <Indicadores a={a} />
            </div>
          ))}
        </div>
      </Card>
    ))}
    <Card>
      <h3 className="font-bold mb-4 text-slate-700">Comparativo de Proyectos</h3>
      <div className="h-[300px] w-full relative">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={50}>
            <BarChart data={data.proy.map((p: any) => ({ n: p.n, b: p.act.reduce((s: any, x: any) => s + x.b, 0) }))}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="n" angle={-15} textAnchor="end" height={60} fontSize={11} tick={{fill: '#64748b'}} interval={0} />
            <YAxis tickFormatter={M} width={40} tick={{fill: '#64748b'}} fontSize={11} />
            <Tooltip formatter={COP} cursor={{fill: '#f1f5f9'}} />
            <Bar dataKey="b" fill="#10b981" radius={[8, 8, 0, 0]} name="Presupuesto Total" />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </div>
);

/* ----------  MAIN  ---------- */
interface MunicipalActionPlanProps {
    onGoBack: () => void;
}

export default function PlanAccionMunicipal({ onGoBack }: MunicipalActionPlanProps) {
  const [mod, setMod] = useState('bicicletas');

  const modules = useMemo(() => [
    { id: 'bicicletas', ico: Bike,      n: 'BICICLETAS',            color: 'from-blue-500 to-cyan-500',   tot: raw.bicicletas.tot },
    { id: 'panoptico',  ico: Building2, n: 'PANÓPTICO',             color: 'from-purple-500 to-pink-500', tot: raw.panoptico.tot },
    { id: 'parques',    ico: Trees,     n: 'PARQUES Y ZONAS VERDES',color: 'from-green-500 to-emerald-500',tot: raw.parques.tot }
  ], []);

  const current = useMemo(() => {
    switch (mod) {
      case 'bicicletas': return <Bicicletas data={raw.bicicletas} />;
      case 'panoptico':  return <Panoptico  data={raw.panoptico} />;
      case 'parques':    return <Parques    data={raw.parques} />;
      default:           return null;
    }
  }, [mod]);

  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-12">
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-20 px-6 py-4 flex items-center justify-between">
         <button 
            onClick={onGoBack} 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300"
        >
            <ArrowLeftIcon className="w-4 h-4" />
            Volver al Inicio
        </button>
        <span className="text-sm font-semibold text-slate-400 hidden sm:block">Gestión 2025</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">Plan de Acción Municipal</h1>
          <p className="text-slate-500 text-lg font-light">Seguimiento Estratégico de Proyectos</p>
        </div>

        <Selector mods={modules} active={mod} set={setMod} />
        <Info mod={modules.find(m => m.id === mod)} />

        {current}
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn .5s ease-in-out }
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
      `}</style>
    </div>
  );
}
