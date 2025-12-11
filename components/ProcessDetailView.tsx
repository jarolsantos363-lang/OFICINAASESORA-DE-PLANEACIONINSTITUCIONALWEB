
import React, { useState, useEffect } from 'react';
import { ProcessData } from '../types';
import ActivityTracking from './ActivityTracking';
import PlanningDashboard from './PlanningDashboard';
import DocumentationChecklist from './DocumentationChecklist';
import DevelopmentPlanGoals from './DevelopmentPlanGoals';
import ImprovementPlanDashboard from './ImprovementPlanDashboard';
import InstitutionalActionPlanSubset from './InstitutionalActionPlanSubset';

type ActiveTab = 'planning' | 'documentation' | 'goals' | 'improvement' | 'institutionalSubset';

interface ProcessDetailViewProps {
  processData: ProcessData;
  processName: string;
}

const ProcessDetailView: React.FC<ProcessDetailViewProps> = ({ processData, processName }) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('planning');
    
    const hasDevelopmentGoals = processData.developmentPlanGoals && processData.developmentPlanGoals.length > 0;
    const hasDocumentation = processData.documentation && processData.documentation.length > 0;
    const hasImprovementPlan = !!processData.improvementPlan;
    const hasInstitutionalSubset = processData.institutionalActivities && processData.institutionalActivities.length > 0;

    useEffect(() => {
        if (activeTab === 'goals' && !hasDevelopmentGoals) {
            setActiveTab('planning');
        }
         if (activeTab === 'documentation' && !hasDocumentation) {
            setActiveTab('planning');
        }
        if (activeTab === 'improvement' && !hasImprovementPlan) {
            setActiveTab('planning');
        }
        if (activeTab === 'institutionalSubset' && !hasInstitutionalSubset) {
            setActiveTab('planning');
        }
    }, [processName, hasDevelopmentGoals, hasDocumentation, hasImprovementPlan, hasInstitutionalSubset, activeTab]);

    return (
        <div className="pt-6">
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('planning')}
                  className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'planning' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                >
                  Instrumentos de Planeación
                </button>
                {hasDocumentation && (
                    <button
                        onClick={() => setActiveTab('documentation')}
                        className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'documentation' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                    >
                        Alistamiento Auditoria 2026
                    </button>
                )}
                {hasDevelopmentGoals && (
                  <button
                    onClick={() => setActiveTab('goals')}
                    className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'goals' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                  >
                    Metas de Plan de Desarrollo
                  </button>
                )}
                {hasInstitutionalSubset && (
                  <button
                    onClick={() => setActiveTab('institutionalSubset')}
                    className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'institutionalSubset' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                  >
                    Plan de Acción Institucional 2025
                  </button>
                )}
                 {hasImprovementPlan && (
                  <button
                    onClick={() => setActiveTab('improvement')}
                    className={`w-full sm:w-auto text-sm md:text-base flex-1 sm:flex-none px-4 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 ${activeTab === 'improvement' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                  >
                    Plan de Mejoramiento
                  </button>
                )}
              </div>

              {activeTab === 'planning' && (
                <div className="animate-fade-in">
                  <ActivityTracking data={processData.tracking} processName={processName} />
                  <PlanningDashboard data={processData.planning} processName={processName} />
                </div>
              )}
              {activeTab === 'documentation' && (
                 <div className="animate-fade-in">
                  <DocumentationChecklist data={processData.documentation} />
                </div>
              )}
              {activeTab === 'goals' && (
                 <div className="animate-fade-in">
                  <DevelopmentPlanGoals data={processData.developmentPlanGoals} />
                </div>
              )}
              {activeTab === 'institutionalSubset' && processData.institutionalActivities && (
                 <div className="animate-fade-in">
                  <InstitutionalActionPlanSubset activities={processData.institutionalActivities} />
                </div>
              )}
              {activeTab === 'improvement' && processData.improvementPlan && (
                 <div className="animate-fade-in">
                  <ImprovementPlanDashboard data={processData.improvementPlan} processName={processName} />
                </div>
              )}
        </div>
    );
};

export default ProcessDetailView;
