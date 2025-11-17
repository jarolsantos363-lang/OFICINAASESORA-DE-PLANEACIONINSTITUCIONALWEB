import React, { useState } from 'react';
import { ProcessData } from '../types';
import { ProgressCard } from './ProgressCard';

const Section: React.FC<{ title: string; children: React.ReactNode; gridCols?: string }> = ({ title, children, gridCols = 'lg:grid-cols-2' }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 border-l-4 border-lime-500 pl-4">{title}</h3>
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {children}
        </div>
    </div>
);

type TabKey = 'mensual' | 'periodico' | 'anual';

const PlanningDashboard: React.FC<{ data: ProcessData['planning'] }> = ({ data }) => {
    const { mensual, trimestral, cuatrimestral, semestral, anual } = data;

    const hasMensual = mensual.length > 0;
    const hasPeriodico = trimestral.length > 0 || cuatrimestral.length > 0 || semestral.length > 0;
    const hasAnual = anual.length > 0;

    const getDefaultTab = (): TabKey => {
        if (hasMensual) return 'mensual';
        if (hasPeriodico) return 'periodico';
        if (hasAnual) return 'anual';
        return 'mensual'; // fallback
    };
    
    const [activeTab, setActiveTab] = useState<TabKey>(getDefaultTab());

    const hasData = hasMensual || hasPeriodico || hasAnual;
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
            
            <div className="planning-tabs-container">
                {hasMensual && <button onClick={() => setActiveTab('mensual')} className={`planning-tab ${activeTab === 'mensual' ? 'active' : ''}`}>Mensual</button>}
                {hasPeriodico && <button onClick={() => setActiveTab('periodico')} className={`planning-tab ${activeTab === 'periodico' ? 'active' : ''}`}>Periódico</button>}
                {hasAnual && <button onClick={() => setActiveTab('anual')} className={`planning-tab ${activeTab === 'anual' ? 'active' : ''}`}>Anual</button>}
            </div>

            <div key={activeTab} className="animate-tab-content-fade-in">
                {activeTab === 'mensual' && hasMensual && (
                    <Section title="Planes Mensuales">
                        {mensual.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
                    </Section>
                )}

                {activeTab === 'periodico' && hasPeriodico && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8">
                        <div>
                            {trimestral.length > 0 && <Section title="Trimestral" gridCols="lg:grid-cols-1">{trimestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}</Section>}
                            {semestral.length > 0 && <Section title="Semestral" gridCols="lg:grid-cols-1">{semestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}</Section>}
                        </div>
                        <div>
                            {cuatrimestral.length > 0 && <Section title="Cuatrimestral" gridCols="lg:grid-cols-1">{cuatrimestral.map(plan => <ProgressCard key={plan.title} plan={plan} />)}</Section>}
                        </div>
                    </div>
                )}
                
                {activeTab === 'anual' && hasAnual && (
                    <Section title="Planes Anuales" gridCols="lg:grid-cols-3">
                        {anual.map(plan => <ProgressCard key={plan.title} plan={plan} />)}
                    </Section>
                )}
            </div>
        </section>
    );
};

export default PlanningDashboard;