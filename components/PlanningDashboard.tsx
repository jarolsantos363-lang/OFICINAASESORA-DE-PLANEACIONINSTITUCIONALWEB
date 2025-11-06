
import React from 'react';
import { MENSUAL_DATA, TRIMESTRAL_DATA, CUATRIMESTRAL_DATA, SEMESTRAL_DATA, ANUAL_DATA } from '../constants';
import { Plan } from '../types';
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


const PlanningDashboard: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-4xl font-bold text-center mb-2">Instrumentos de Planeación</h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Visualización interactiva del progreso de las actividades planificadas para el año 2025.</p>
      
      <Section title="Mensual">
        {MENSUAL_DATA.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
      </Section>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8">
        <div>
            <Section title="Trimestral" gridCols="lg:grid-cols-1">
                {TRIMESTRAL_DATA.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
            </Section>
            
            <Section title="Semestral" gridCols="lg:grid-cols-1">
                {SEMESTRAL_DATA.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
            </Section>
        </div>
        <div>
            <Section title="Cuatrimestral" gridCols="lg:grid-cols-1">
                {CUATRIMESTRAL_DATA.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
            </Section>
        </div>
      </div>

       <Section title="Anual" gridCols="lg:grid-cols-3">
            {ANUAL_DATA.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
       </Section>

    </section>
  );
};

export default PlanningDashboard;