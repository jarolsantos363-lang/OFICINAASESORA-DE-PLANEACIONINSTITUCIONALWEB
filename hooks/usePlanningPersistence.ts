
import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../services/supabaseClient';
import { Plan, PlanStatus } from '../types';

const normalizeProcessId = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');

export const usePlanningPersistence = (processName: string, initialData: Plan[], storageKey: string) => {
    const [data, setData] = useState<Plan[]>(initialData);
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    
    const processId = normalizeProcessId(processName);
    // Dynamic type based on the section (e.g., planning_mensual, planning_anual, planning_trimestral)
    const tipo = `planning_${storageKey}`; 
    
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
                        const merged = initialData.map((plan) => {
                            const foundPlan = parsed.find((p: Plan) => p.title === plan.title);
                            if (!foundPlan) return plan;
                            return {
                                ...plan,
                                items: plan.items.map((item) => {
                                    const foundItem = foundPlan.items.find((fi: any) => fi.name === item.name);
                                    return foundItem || item;
                                })
                            };
                        });
                        if (mounted) {
                            setData(merged);
                            setLastSaved(new Date());
                        }
                    } else {
                        // If no local data, ensure we set initial data to state
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
                    const dbData = records.datos as Plan[];
                     // Merge structure
                     const merged = initialData.map((plan) => {
                        const foundPlan = dbData.find((p: Plan) => p.title === plan.title);
                        if (!foundPlan) return plan;
                        return {
                            ...plan,
                            items: plan.items.map((item) => {
                                const foundItem = foundPlan.items.find((fi: any) => fi.name === item.name);
                                return foundItem || item;
                            })
                        };
                    });

                    setData(merged);
                    seguimientoIdRef.current = records.id;
                    setLastSaved(new Date(records.updated_at || Date.now()));
                }
            } catch (err) {
                useLocalStorageRef.current = true;
                loadLocal();
            }
        };

        // Only fetch if there is data to track
        if (initialData.length > 0) {
            fetchData();
        } else {
            setData([]);
        }

        return () => { mounted = false; };
    }, [processId, initialData, tipo]);

    // 2. Save Logic
    const saveToSupabase = useCallback(async (newData: Plan[]) => {
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
    const toggleItemStatus = (planIndex: number, itemIndex: number) => {
        setData(prev => {
            const next = JSON.parse(JSON.stringify(prev));
            const currentStatus = next[planIndex].items[itemIndex].status;
            
            // Toggle logic: If completed -> Missing (unchecked). If anything else -> Completed.
            next[planIndex].items[itemIndex].status = 
                currentStatus === PlanStatus.Completed ? PlanStatus.Missing : PlanStatus.Completed;

            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
            saveTimeoutRef.current = setTimeout(() => saveToSupabase(next), 1000);
            
            return next;
        });
    };

    const updateItemValue = (planIndex: number, itemIndex: number, newValue: number) => {
        setData(prev => {
            const next = JSON.parse(JSON.stringify(prev));
            next[planIndex].items[itemIndex].value = newValue;
            
            // Auto-update total
            const items = next[planIndex].items;
            const total = items.reduce((sum: number, item: any) => sum + (item.value || 0), 0);
            next[planIndex].total = total;

            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
            saveTimeoutRef.current = setTimeout(() => saveToSupabase(next), 1000);

            return next;
        });
    };

    return {
        data,
        toggleItemStatus,
        updateItemValue,
        isSaving,
        lastSaved
    };
};
