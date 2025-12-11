
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { HistorialCambio } from '../types';
import { XIcon } from './icons/XIcon';
import { RefreshIcon } from './icons/RefreshIcon';

interface HistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    processId: string;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose, processId }) => {
    const [history, setHistory] = useState<HistorialCambio[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && processId) {
            fetchHistory();
        }
    }, [isOpen, processId]);

    const fetchHistory = async () => {
        setLoading(true);
        try {
            // First get tracking ID for this process
            const { data: trackingData, error: trackingError } = await supabase
                .from('seguimientos')
                .select('id')
                .eq('proceso_id', processId)
                .eq('tipo_seguimiento', 'tracking')
                .single();

            if (trackingError) {
                // Silece error if just not found or connection issue, treating as empty history
                console.warn("Could not fetch tracking record for history:", trackingError.message);
                setHistory([]); 
                setLoading(false);
                return;
            }

            if (trackingData) {
                const { data: historyData, error: historyError } = await supabase
                    .from('historial_cambios')
                    .select('*')
                    .eq('seguimiento_id', trackingData.id)
                    .order('timestamp', { ascending: false })
                    .limit(50);
                
                if (historyError) {
                     console.warn("Error fetching history lines:", historyError.message);
                } else if (historyData) {
                    setHistory(historyData);
                }
            }
        } catch (error) {
            console.warn("Unexpected error fetching history (likely offline):", error);
            setHistory([]);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col m-4">
                <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-800/50 rounded-t-xl">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-6 bg-lime-500 rounded-full"></span>
                        Historial de Cambios
                    </h3>
                    <div className="flex items-center gap-2">
                        <button onClick={fetchHistory} className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-colors" title="Actualizar">
                            <RefreshIcon className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-colors">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    {loading && history.length === 0 ? (
                         <div className="flex justify-center py-10">
                            <div className="spinner">
                                <div className="spinner1"></div>
                            </div>
                        </div>
                    ) : history.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">
                            <p>No hay historial de cambios registrado.</p>
                            <p className="text-xs mt-2 text-gray-600">(Si está en modo offline, el historial no estará disponible)</p>
                        </div>
                    ) : (
                        <ol className="relative border-l border-gray-700 ml-3">                  
                            {history.map((item) => (
                                <li key={item.id} className="mb-8 ml-6">
                                    <div className="absolute w-3 h-3 bg-lime-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                                    <time className="mb-1 text-xs font-normal text-gray-500 font-mono">
                                        {new Date(item.timestamp).toLocaleString('es-CO', { 
                                            day: '2-digit', month: 'short', year: 'numeric', 
                                            hour: '2-digit', minute: '2-digit' 
                                        })}
                                    </time>
                                    <h3 className="text-lg font-semibold text-white">
                                        {item.descripcion}
                                    </h3>
                                    <p className="mb-2 text-base font-normal text-gray-400">
                                        Modificado por: <span className="text-lime-400">{item.usuario}</span>
                                    </p>
                                    <div className="p-3 text-xs bg-gray-800 rounded-lg border border-gray-700 font-mono text-gray-300">
                                        <div>Antes: {JSON.stringify(item.valor_anterior)}</div>
                                        <div className="text-lime-400 mt-1">Ahora: {JSON.stringify(item.valor_nuevo)}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
                
                <div className="p-4 border-t border-gray-800 bg-gray-800/30 rounded-b-xl text-center text-xs text-gray-500">
                    Solo se muestran los últimos 50 cambios.
                </div>
            </div>
        </div>
    );
};

export default HistoryModal;
