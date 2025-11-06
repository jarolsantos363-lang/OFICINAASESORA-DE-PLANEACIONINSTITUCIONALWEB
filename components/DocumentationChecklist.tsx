import React from 'react';
import { DOCUMENTATION_DATA } from '../constants';
import { VerificationStatus } from '../types';

const statusStyles: { [key in VerificationStatus]: string } = {
  [VerificationStatus.SI]: 'bg-green-500/20 text-green-300 border-green-500/30',
  [VerificationStatus.NO]: 'bg-red-500/20 text-red-300 border-red-500/30',
  [VerificationStatus.PENDIENTE]: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  [VerificationStatus.NA]: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
};

const StatusBadge: React.FC<{ status: VerificationStatus }> = ({ status }) => (
  <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full border ${statusStyles[status]}`}>
    {status}
  </span>
);

const DocumentationChecklist: React.FC = () => {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-2">Verificación de Documentación</h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Estado de la documentación requerida para la auditoría externa. Cada item debe ser verificado.</p>
      
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
        <div className="p-1 md:p-2">
            <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                    <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-800/50 rounded-t-lg">
                        <div className="col-span-9 font-semibold text-lime-400">Documento / Actividad</div>
                        <div className="col-span-3 font-semibold text-lime-400 text-center">Estado</div>
                    </div>
                    <div className="divide-y divide-gray-800">
                        {DOCUMENTATION_DATA.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-800/60 transition-colors duration-200 items-center">
                                <div className="col-span-9 text-gray-200 font-medium text-sm">{item.name}</div>
                                <div className="col-span-3 flex justify-center">
                                    <StatusBadge status={item.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationChecklist;
