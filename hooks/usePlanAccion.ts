
import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../services/supabaseClient';
import { ActivityTrackingItem } from '../types';

const normalizeProcessId = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');

export const usePlanAccion = (processName: string, initialData: ActivityTrackingItem[]) => {
    const [data, setData] = useState<ActivityTrackingItem[]>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    
    const processId = normalizeProcessId(processName);
    const tipo = 'tracking'; 
    const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const seguimientoIdRef = useRef<string | null>(null);
    const useLocalStorageRef = useRef<boolean>(false);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            
            // Helper to load from local storage
            const loadLocal = () => {
                try {
                    const local = localStorage.getItem(`tracking_${processId}`);
                    if (local) {
                        const parsed = JSON.parse(local);
                        // Merge with initial data structure to ensure new fields appear
                        const merged = initialData.map(item => {
                            const found = parsed.find((p: any) => p.name === item.name);
                            return found || item;
                        });
                        if (mounted) {
                            setData(merged);
                            setLastSaved(new Date()); // Indicates loaded from storage
                        }
                    } else {
                        if (mounted) setData(initialData);
                    }
                } catch (e) {
                    console.warn("Failed to load from local storage", e);
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
                    // Check if row missing (valid state) or actual error
                    if (error.code === 'PGRST116') {
                        // Row doesn't exist yet, valid state.
                        if (mounted) setData(initialData);
                    } else {
                        // Backend issue (auth, connection, table missing)
                        console.warn(`Supabase unavailable (${error.message}). Falling back to local storage.`);
                        useLocalStorageRef.current = true;
                        loadLocal();
                    }
                } else if (mounted && records) {
                    const dbData = records.datos as ActivityTrackingItem[];
                    // Merge logic
                    const mergedData = initialData.map(initialItem => {
                        const dbItem = dbData.find(d => d.name === initialItem.name);
                        return dbItem ? dbItem : initialItem;
                    });
                    
                    setData(mergedData);
                    seguimientoIdRef.current = records.id;
                    setLastSaved(new Date(records.updated_at || Date.now()));
                }
            } catch (err) {
                // Network error
                console.warn("Network error fetching data. Falling back to local storage.");
                useLocalStorageRef.current = true;
                loadLocal();
            } finally {
                if (mounted) setIsLoading(false);
            }
        };

        fetchData();

        return () => { mounted = false; };
    }, [processId, initialData]);

    const saveToSupabase = useCallback(async (newData: ActivityTrackingItem[], changeDescription: string, oldValue: any, newValue: any) => {
        setIsSaving(true);
        setError(null);
        
        const saveLocal = () => {
            localStorage.setItem(`tracking_${processId}`, JSON.stringify(newData));
            setLastSaved(new Date());
            setIsSaving(false);
        };

        if (useLocalStorageRef.current) {
            saveLocal();
            return;
        }

        try {
            const { data: savedRecord, error: saveError } = await supabase
                .from('seguimientos')
                .upsert({
                    proceso_id: processId,
                    tipo_seguimiento: tipo,
                    datos: newData,
                    ...(seguimientoIdRef.current ? { id: seguimientoIdRef.current } : {})
                }, { onConflict: 'proceso_id,tipo_seguimiento' })
                .select()
                .single();

            if (saveError) throw saveError;
            
            if (savedRecord) {
                seguimientoIdRef.current = savedRecord.id;
                setLastSaved(new Date());
            }

            if (seguimientoIdRef.current) {
                // Fire and forget history log
                supabase.from('historial_cambios').insert({
                    seguimiento_id: seguimientoIdRef.current,
                    campo_modificado: 'actividad_mes',
                    valor_anterior: oldValue,
                    valor_nuevo: newValue,
                    usuario: 'Usuario Invitado',
                    descripcion: changeDescription
                }).then(({ error }) => {
                    if (error) console.warn("Failed to save history log:", error.message);
                });
            }

        } catch (err: any) {
            console.warn("Error saving to Supabase, falling back to local storage.", err.message);
            useLocalStorageRef.current = true;
            saveLocal();
        } finally {
            setIsSaving(false);
        }
    }, [processId, tipo]);

    const toggleMonth = useCallback((activityName: string, monthIndex: number) => {
        setData(prevData => {
            const activityIndex = prevData.findIndex(a => a.name === activityName);
            if (activityIndex === -1) return prevData;

            const newData = JSON.parse(JSON.stringify(prevData));
            const oldValue = newData[activityIndex].months[monthIndex];
            const newValue = !oldValue;
            
            newData[activityIndex].months[monthIndex] = newValue;

            const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
            const desc = `Actividad "${activityName}": Mes ${monthNames[monthIndex]} cambiado a ${newValue ? 'Completado' : 'Pendiente'}`;

            if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
            
            saveTimeoutRef.current = setTimeout(() => {
                saveToSupabase(newData, desc, { completed: oldValue }, { completed: newValue });
            }, 500);

            return newData;
        });
    }, [saveToSupabase]);

    return {
        data,
        isLoading,
        isSaving,
        error,
        lastSaved,
        toggleMonth,
        processId 
    };
};
