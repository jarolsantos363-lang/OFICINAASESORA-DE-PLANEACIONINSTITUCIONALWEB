
import React from 'react';
import { ImprovementPlan } from '../types';

interface ImprovementPlanDashboardProps {
  data: ImprovementPlan;
}

const ImprovementPlanDashboard: React.FC<ImprovementPlanDashboardProps> = ({ data }) => {
  if (!data) return null;
  
  return (
    <section className="my-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Auditorias Internas: Plan de Mejoramiento</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 h-full">
          <h3 className="text-lg font-semibold text-lime-400 mb-3">Hallazgos</h3>
          <p className="text-gray-300">{data.hallazgos}</p>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 h-full">
          <h3 className="text-lg font-semibold text-lime-400 mb-3">Fortalezas</h3>
          <p className="text-gray-300">{data.fortalezas}</p>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 h-full">
          <h3 className="text-lg font-semibold text-lime-400 mb-3">Plan de Mejoramiento</h3>
          <p className="text-gray-300">{data.planDeMejoramiento}</p>
        </div>
      </div>
    </section>
  );
};

export default ImprovementPlanDashboard;