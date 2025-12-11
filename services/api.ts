import { supabase } from './supabase';
import { AllProcessData } from '../types';
import { ALL_PROCESS_DATA } from '../constants';

export const fetchProcessData = async (): Promise<AllProcessData> => {
    try {
        // TODO: Replace with actual Supabase query when schema is ready
        // const { data, error } = await supabase.from('processes').select('*');
        // if (error) throw error;

        // For now, return the constant data but simulated as async
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ALL_PROCESS_DATA);
            }, 500);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return ALL_PROCESS_DATA;
    }
};

export const updateProcessData = async (data: AllProcessData): Promise<void> => {
    // TODO: Implement Supabase update
    console.log('Saving data to Supabase...', data);
};
