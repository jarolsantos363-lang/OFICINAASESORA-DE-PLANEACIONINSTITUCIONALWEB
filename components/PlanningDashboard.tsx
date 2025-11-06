
import React from 'react';
import { ProcessData } from '../types';
import { ProgressCard } from './ProgressCard';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    gridCols?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, gridCols = 'lg:grid-cols-2' }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 border-l-4 border-lime-500 pl-4">{title}</h3>
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {children}
        </div>
    </div>
);

interface PlanningDashboardProps {
  data: ProcessData['planning'];
}

const PlanningDashboard: React.FC<PlanningDashboardProps> = ({ data }) => {
  const { mensual, trimestral, cuatrimestral, semestral, anual } = data;

  const hasData = [mensual, trimestral, cuatrimestral, semestral, anual].some(arr => arr.length > 0);

  if (!hasData) {
    return (
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-8">Instrumentos de Planeación</h2>
        <div className="bg-gray-900 rounded-xl p-8 text-center border border-gray-800">
            <p className="text-gray-400">No hay datos de planeación para este proceso.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-8">Instrumentos de Planeación</h2>
      
      {mensual.length > 0 && (
        <Section title="Mensual">
          {mensual.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
        </Section>
      )}
      
      {(trimestral.length > 0 || semestral.length > 0 || cuatrimestral.length > 0) && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8">
            <div>
                {trimestral.length > 0 && (
                    <Section title="Trimestral" gridCols="lg:grid-cols-1">
                        {trimestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
                    </Section>
                )}
                
                {semestral.length > 0 && (
                    <Section title="Semestral" gridCols="lg:grid-cols-1">
                        {semestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
                    </Section>
                )}
            </div>
            <div>
                {cuatrimestral.length > 0 && (
                    <Section title="Cuatrimestral" gridCols="lg:grid-cols-1">
                        {cuatrimestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
                    </Section>
                )}
            </div>
        </div>
      )}

       {anual.length > 0 && (
            <Section title="Anual" gridCols="lg:grid-cols-3">
                {anual.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
            </Section>
       )}
    </section>
  );
};

export default PlanningDashboard;
