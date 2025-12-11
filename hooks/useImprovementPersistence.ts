
import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../services/supabaseClient';
import { ImprovementPlan } from '../types';

const normalizeProcessId = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');

export const useImprovementPersistence = (processName: string, initialData: ImprovementPlan) => {
    const [data, setData] = useState<ImprovementPlan>(initialData);
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    
    const processId = normalizeProcessId(processName);
    const tipo = 'improvement_plan';
    
    const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const seguimientoIdRef = useRef<string | null>(null);
    const useLocalStorageRef = useRef<boolean>(false);

    // 1. Load Data
    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            const loadLocal = () => {
                try {
                    const local = localStorage.getItem(`${processId}_${tipo}`);
                    if (local) {
                        const parsed = JSON.parse(local);
                        if (mounted) {
                            setData(prev => ({ ...prev, ...parsed }));
                            setLastSaved(new Date());
                        }
                    } else {
                         if (mounted) setData(initialData);
                    }
                } catch (e) { 
                    console.warn(e);
                    if (mounted) setData(initialData);
                }
            };

            try {
                const { data: records, error } = await supabase
                    .from('seguimientos')
                    .select('*')
                    .eq('proceso_id', processId)
                    .eq('tipo_seguimiento', tipo)
                    .single();

                if (error) {
                    if (error.code !== 'PGRST116') {
                        useLocalStorageRef.current = true;
                        loadLocal();
                    } else {
                        // Valid "not found", stick with initial data
                         if (mounted) setData(initialData);
                    }
                } else if (mounted && records) {
                    const dbData = records.datos as ImprovementPlan;
                    setData(prev => ({ ...prev, ...dbData }));
                    seguimientoIdRef.current = records.id;
                    setLastSaved(new Date(records.updated_at || Date.now()));
                }
            } catch (err) {
                useLocalStorageRef.current = true;
                loadLocal();
            }
        };

        if (initialData) {
            fetchData();
        }

        return () => { mounted = false; };
    }, [processId, initialData, tipo]);

    // 2. Save Logic
    const saveToSupabase = useCallback(async (newData: ImprovementPlan) => {
        setIsSaving(true);
        
        const saveLocal = () => {
            localStorage.setItem(`${processId}_${tipo}`, JSON.stringify(newData));
            setLastSaved(new Date());
            setIsSaving(false);
        };

        if (useLocalStorageRef.current) {
            saveLocal();
            return;
        }

        try {
            const { data: savedRecord, error } = await supabase
                .from('seguimientos')
                .upsert({
                    proceso_id: processId,
                    tipo_seguimiento: tipo,
                    datos: newData,
                    ...(seguimientoIdRef.current ? { id: seguimientoIdRef.current } : {})
                }, { onConflict: 'proceso_id,tipo_seguimiento' })
                .select()
                .single();

            if (error) throw error;
            if (savedRecord) {
                seguimientoIdRef.current = savedRecord.id;
                setLastSaved(new Date());
            }
        } catch (err) {
            console.warn("Error saving to supabase, falling back to local", err);
            useLocalStorageRef.current = true;
            saveLocal();
        } finally {
            setIsSaving(false);
        }
    }, [processId, tipo]);

    // 3. Actions
    const updateField = (field: keyof ImprovementPlan, value: string) => {
        setData(prev => {
            const next = { ...prev, [field]: value };
            
            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
            saveTimeoutRef.current = setTimeout(() => saveToSupabase(next), 1000); // 1 second debounce
            
            return next;
        });
    };

    return {
        data,
        updateField,
        isSaving,
        lastSaved
    };
};
