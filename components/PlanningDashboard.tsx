
import React, { useState, useMemo } from 'react';
import { ProcessData, Plan, PlanStatus } from '../types';
import { EditableProgressCard } from './EditableProgressCard';
import AlertsWidget from './AlertsWidget';
import { usePlanningPersistence } from '../hooks/usePlanningPersistence';
import { Save, AlertTriangle, CheckCircle2 } from 'lucide-react';

// Helper to calculate missing items based on calendar
const getMissingItems = (plans: Plan[]) => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = Enero, 11 = Diciembre
    
    // Mapping period names to their deadline month index (End of period)
    const deadlines: { [key: string]: number } = {
        // Mensual
        "ENERO": 0, "FEBRERO": 1, "MARZO": 2, "ABRIL": 3, "MAYO": 4, "JUNIO": 5,
        "JULIO": 6, "AGOSTO": 7, "SEPTIEMBRE": 8, "OCTUBRE": 9, "NOVIEMBRE": 10, "DICIEMBRE": 11,
        // Trimestral
        "1 TRIMESTRE": 2, "2 TRIMESTRE": 5, "3 TRIMESTRE": 8, "4 TRIMESTRE": 11,
        // Cuatrimestral (fixing typo from data 'CAUTRIMESTRE')
        "1 CAUTRIMESTRE": 3, "1 CUATRIMESTRE": 3,
        "2 CAUTRIMESTRE": 7, "2 CUATRIMESTRE": 7,
        "3 CAUTRIMESTRE": 11, "3 CUATRIMESTRE": 11,
        // Semestral
        "1 SEMESTRE": 5, "2 SEMESTRE": 11,
        // Anual - Checks if year is ending or specific logic
        "ANUAL": 11 
    };

    const missing: string[] = [];

    plans.forEach(plan => {
        plan.items.forEach(item => {
            const nameUpper = item.name.toUpperCase();
            let deadline = -1;

            // Find deadline match
            for (const [key, val] of Object.entries(deadlines)) {
                if (nameUpper.includes(key)) {
                    deadline = val;
                    break;
                }
            }

            // Logic:
            // 1. If we are PAST the deadline month (currentMonth > deadline) AND it's not completed -> LATE.
            // 2. OR if it is explicitly marked as MISSING (orange) regardless of date -> LATE.
            const isLateByDate = deadline !== -1 && currentMonth > deadline;
            const isExplicitlyMissing = item.status === PlanStatus.Missing;
            const isNotCompleted = item.status !== PlanStatus.Completed;

            if ((isLateByDate && isNotCompleted) || isExplicitlyMissing) {
                // Formatting name for readability
                const cleanName = item.name.charAt(0) + item.name.slice(1).toLowerCase();
                missing.push(cleanName);
            }
        });
    });

    // Remove duplicates
    return [...new Set(missing)];
};

// Generic Wrapper for any editable section
interface EditablePlanSectionProps {
    title: string;
    initialData: Plan[];
    processName: string;
    storageKey: string; // 'mensual', 'trimestral', 'anual', etc.
    gridCols?: string;
    showAlerts?: boolean;
}

const EditablePlanSection: React.FC<EditablePlanSectionProps> = ({ 
    title, 
    initialData, 
    processName, 
    storageKey, 
    gridCols = 'lg:grid-cols-2',
    showAlerts = false
}) => {
    // Unique hook instance for this specific section
    const { data, toggleItemStatus, updateItemValue, isSaving, lastSaved } = usePlanningPersistence(
        processName || 'default', 
        initialData, 
        storageKey
    );

    const missingItems = useMemo(() => getMissingItems(data || []), [data]);

    if (!data || data.length === 0) return null;

    return (
        <div className="mb-12 relative">
             <div className="flex justify-between items-center mb-4 border-l-4 border-lime-500 pl-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
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

            <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
                {data.map((plan, index) => (
                    <EditableProgressCard 
                        key={`${plan.title}-${index}`}
                        plan={plan}
                        planIndex={index}
                        onToggleStatus={toggleItemStatus}
                        onUpdateValue={updateItemValue}
                    />
                ))}
                {showAlerts && data.length === 1 && <AlertsWidget />}
            </div>

            {/* Calendar Alert Section */}
            {missingItems.length > 0 ? (
                <div className="mt-6 mx-1 bg-red-900/20 border border-red-500/50 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-1">
                            Atención: Periodos vencidos o faltantes
                        </h4>
                        <p className="text-gray-300 text-sm">
                            Hace falta completar la información de: <span className="font-semibold text-white">{missingItems.join(", ")}</span>.
                            <br/>
                            <span className="text-red-300 font-medium">Por favor ponerte al día con el reporte de estos periodos.</span>
                        </p>
                    </div>
                </div>
            ) : (
                <div className="mt-6 mx-1 bg-green-900/20 border border-green-500/30 rounded-lg p-3 flex items-center gap-3 animate-fade-in opacity-70">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p className="text-green-400 text-sm font-medium">Estás al día con los periodos vencidos de esta sección.</p>
                </div>
            )}
        </div>
    );
};

type TabKey = 'mensual' | 'periodico' | 'anual';

const PlanningDashboard: React.FC<{ data: ProcessData['planning']; processName?: string }> = ({ data, processName }) => {
    const { mensual, trimestral, cuatrimestral, semestral, anual } = data;

    const hasMensual = mensual.length > 0;
    const hasPeriodico = trimestral.length > 0 || cuatrimestral.length > 0 || semestral.length > 0;
    const hasAnual = anual.length > 0;

    const getDefaultTab = (): TabKey => {
        if (hasMensual) return 'mensual';
        if (hasPeriodico) return 'periodico';
        if (hasAnual) return 'anual';
        return 'mensual'; 
    };
    
    const [activeTab, setActiveTab] = useState<TabKey>(getDefaultTab());
    const procName = processName || 'general';

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
                    <EditablePlanSection 
                        title="PLAN DE ACCION MENSUAL"
                        initialData={mensual}
                        processName={procName}
                        storageKey="mensual"
                        showAlerts={true}
                    />
                )}

                {activeTab === 'periodico' && hasPeriodico && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8">
                        <div>
                            {trimestral.length > 0 && (
                                <EditablePlanSection 
                                    title="Trimestral" 
                                    initialData={trimestral}
                                    processName={procName}
                                    storageKey="trimestral"
                                    gridCols="lg:grid-cols-1"
                                />
                            )}
                            {semestral.length > 0 && (
                                <EditablePlanSection 
                                    title="Semestral" 
                                    initialData={semestral}
                                    processName={procName}
                                    storageKey="semestral"
                                    gridCols="lg:grid-cols-1"
                                />
                            )}
                        </div>
                        <div>
                            {cuatrimestral.length > 0 && (
                                <EditablePlanSection 
                                    title="Cuatrimestral" 
                                    initialData={cuatrimestral}
                                    processName={procName}
                                    storageKey="cuatrimestral"
                                    gridCols="lg:grid-cols-1"
                                />
                            )}
                        </div>
                    </div>
                )}
                
                {activeTab === 'anual' && hasAnual && (
                     <EditablePlanSection 
                        title="Planes Anuales" 
                        initialData={anual}
                        processName={procName}
                        storageKey="anual"
                        gridCols="lg:grid-cols-3"
                    />
                )}
            </div>
        </section>
    );
};

export default PlanningDashboard;
