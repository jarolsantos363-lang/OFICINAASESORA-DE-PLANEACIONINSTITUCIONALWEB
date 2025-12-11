
import React from 'react';
import { ImprovementPlan } from '../types';
import { useImprovementPersistence } from '../hooks/useImprovementPersistence';
import { Save, AlertOctagon, Shield, FileText } from 'lucide-react';

interface ImprovementPlanDashboardProps {
  data: ImprovementPlan;
  processName: string; // Needed for persistence key
}

const ImprovementPlanDashboard: React.FC<ImprovementPlanDashboardProps> = ({ data: initialData, processName }) => {
  const { data, updateField, isSaving, lastSaved } = useImprovementPersistence(processName, initialData);

  if (!data) return null;
  
  return (
    <section className="my-16 animate-fade-in">
       <div className="flex justify-between items-center mb-8 border-l-4 border-lime-500 pl-4">
            <h2 className="text-3xl font-bold">Auditorias Internas: Plan de Mejoramiento NC 2025</h2>
            <div className="flex items-center gap-2 text-xs font-mono h-6">
                {isSaving ? (
                    <span className="text-yellow-400 flex items-center gap-1 animate-pulse">
                        <Save className="w-3 h-3" /> Guardando...
                    </span>
                ) : lastSaved ? (
                    <span className="text-gray-500 flex items-center gap-1">
                        <Save className="w-3 h-3" /> Guardado
                    </span>
                ) : null}
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Hallazgos Card */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-1 border border-gray-800 h-full flex flex-col group hover:border-red-500/30 transition-colors">
            <div className="bg-gray-800/50 p-4 rounded-t-lg border-b border-gray-800 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-semibold text-red-300">Hallazgos</h3>
            </div>
            <div className="p-4 flex-grow">
                <textarea 
                    className="w-full h-full min-h-[150px] bg-transparent text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-red-500/50 rounded p-2 transition-all placeholder-gray-600 text-sm leading-relaxed custom-scrollbar"
                    value={data.hallazgos}
                    onChange={(e) => updateField('hallazgos', e.target.value)}
                    placeholder="Escriba aquí los hallazgos encontrados..."
                />
            </div>
        </div>

        {/* Fortalezas Card */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-1 border border-gray-800 h-full flex flex-col group hover:border-lime-500/30 transition-colors">
            <div className="bg-gray-800/50 p-4 rounded-t-lg border-b border-gray-800 flex items-center gap-2">
                <Shield className="w-5 h-5 text-lime-400" />
                <h3 className="text-lg font-semibold text-lime-300">Fortalezas</h3>
            </div>
            <div className="p-4 flex-grow">
                <textarea 
                    className="w-full h-full min-h-[150px] bg-transparent text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-lime-500/50 rounded p-2 transition-all placeholder-gray-600 text-sm leading-relaxed custom-scrollbar"
                    value={data.fortalezas}
                    onChange={(e) => updateField('fortalezas', e.target.value)}
                    placeholder="Escriba aquí las fortalezas identificadas..."
                />
            </div>
        </div>

        {/* Plan Card */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-1 border border-gray-800 h-full flex flex-col group hover:border-blue-500/30 transition-colors">
            <div className="bg-gray-800/50 p-4 rounded-t-lg border-b border-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-300">Plan de Mejoramiento</h3>
            </div>
            <div className="p-4 flex-grow">
                <textarea 
                    className="w-full h-full min-h-[150px] bg-transparent text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/50 rounded p-2 transition-all placeholder-gray-600 text-sm leading-relaxed custom-scrollbar"
                    value={data.planDeMejoramiento}
                    onChange={(e) => updateField('planDeMejoramiento', e.target.value)}
                    placeholder="Describa el plan de mejoramiento..."
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default ImprovementPlanDashboard;
