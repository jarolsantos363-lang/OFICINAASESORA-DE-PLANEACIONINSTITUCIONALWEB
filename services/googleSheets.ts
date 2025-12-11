import { AllProcessData } from '../types';
import { ALL_PROCESS_DATA } from '../constants';

/**
 * NOTE: This is a simulation of fetching data from an external source like Google Sheets.
 * In a real-world application, this function would make an API call to a secure backend endpoint
 * that fetches and parses data from a Google Sheet. The backend is crucial to protect API keys
 * and handle data processing.
 * 
 * This mock function returns a slightly modified version of the initial data to demonstrate
 * the update functionality in the UI.
 */
export const fetchDataFromGoogleSheets = (): Promise<AllProcessData> => {
    return new Promise(resolve => {
        setTimeout(() => {
            // Create a deep copy to avoid mutating the original constant data
            const updatedData = JSON.parse(JSON.stringify(ALL_PROCESS_DATA));

            // --- SIMULATE DATA CHANGES ---
            
            // 1. Update a documentation status
            const gestDoc = updatedData['Gestión Estratégica']?.documentation;
            if (gestDoc) {
                const docToUpdate = gestDoc.find((d: any) => d.name === "ACTUALIZACIÓN INDICADORES Feb-2025");
                if (docToUpdate) {
                    docToUpdate.status = 'SI';
                }
            }

            // 2. Update monthly progress in 'Gestión Estratégica'
            const planAccion = updatedData['Gestión Estratégica']?.planning.mensual[0];
            if (planAccion) {
                 planAccion.items[6].status = 'COMPLETED'; // Julio
                 planAccion.items[6].value = 8.0;
                 planAccion.items[7].status = 'COMPLETED'; // Agosto
                 planAccion.items[7].value = 8.0;
                 planAccion.total = 66.0;
            }

            // 3. Update a development goal for 'Alumbrado Público'
            const alumbradoGoals = updatedData['Operacion De Esquemas Empresariales']?.subProcesses['Alumbrado Público']?.developmentPlanGoals;
            if (alumbradoGoals && alumbradoGoals[0]) {
                alumbradoGoals[0].meta2025Ejecutado = 2500; // Increase executed value
            }

            resolve(updatedData);
        }, 1200); // Simulate network latency
    });
};