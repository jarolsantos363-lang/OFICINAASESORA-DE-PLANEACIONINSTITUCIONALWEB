
import React from 'react';
import { Bell, AlertTriangle, Pin } from "lucide-react";

export default function AlertsWidget() {
  const alertas = [
    {
      id: 1,
      icono: <Bell className="text-yellow-400 w-5 h-5" />,
      titulo: "Actividad por vencer",
      descripcion: "Reporte mensual del SIAR. Vence en 3 días.",
      color: "border-yellow-500/40 bg-yellow-500/10"
    },
    {
      id: 2,
      icono: <AlertTriangle className="text-orange-500 w-5 h-5" />,
      titulo: "Mes sin progreso",
      descripcion: "Septiembre aún no registra avances.",
      color: "border-orange-500/40 bg-orange-500/10"
    },
    {
      id: 3,
      icono: <Pin className="text-blue-400 w-5 h-5" />,
      titulo: "Recordatorio semanal",
      descripcion: "Actualizar el cronograma del plan de acción.",
      color: "border-blue-500/40 bg-blue-500/10"
    }
  ];

  return (
    <div className="w-full h-full min-h-[300px] bg-[#1d2433] rounded-xl p-5 shadow-lg border border-gray-800 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5 text-yellow-400" />
        Alertas y Pendientes
      </h2>

      <div className="space-y-3 overflow-y-auto pr-1 custom-scrollbar">
        {alertas.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 p-4 rounded-xl border ${item.color} 
              transition-all hover:bg-white/5 hover:scale-[1.02] cursor-pointer`}
          >
            <div className="mt-0.5">{item.icono}</div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">{item.titulo}</span>
              <span className="text-gray-300 text-xs">{item.descripcion}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
