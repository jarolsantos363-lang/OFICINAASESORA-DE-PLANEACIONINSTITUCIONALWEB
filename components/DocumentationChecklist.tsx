
import React, { useState } from 'react';
import { VerificationItem, VerificationStatus } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';
import { ClockIcon } from './icons/ClockIcon';
import { MinusIcon } from './icons/MinusIcon';

type FilterStatus = VerificationStatus | 'ALL';

const statusConfig = {
  [VerificationStatus.SI]: {
    label: 'SI',
    Icon: (props: React.SVGProps<SVGSVGElement>) => <CheckIcon {...props} />,
    textColor: 'text-green-300',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
    filterBorder: 'border-green-500',
    filterText: 'text-green-400',
  },
  [VerificationStatus.NO]: {
    label: 'NO',
    Icon: (props: React.SVGProps<SVGSVGElement>) => <XIcon {...props} />,
    textColor: 'text-red-300',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
    filterBorder: 'border-red-500',
    filterText: 'text-red-400',
  },
  [VerificationStatus.PENDIENTE]: {
    label: 'PENDIENTE',
    Icon: (props: React.SVGProps<SVGSVGElement>) => <ClockIcon {...props} />,
    textColor: 'text-yellow-300',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    filterBorder: 'border-yellow-500',
    filterText: 'text-yellow-400',
  },
  [VerificationStatus.NA]: {
    label: 'N/A',
    Icon: (props: React.SVGProps<SVGSVGElement>) => <MinusIcon {...props} />,
    textColor: 'text-gray-400',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500/30',
    iconColor: 'text-gray-500',
    filterBorder: 'border-gray-500',
    filterText: 'text-gray-400',
  },
};

const filterOptions: {label: string; status: FilterStatus}[] = [
    { label: 'Todos', status: 'ALL' },
    { label: 'Si', status: VerificationStatus.SI },
    { label: 'No', status: VerificationStatus.NO },
    { label: 'Pendiente', status: VerificationStatus.PENDIENTE },
    { label: 'N/A', status: VerificationStatus.NA },
];


interface DocumentationChecklistProps {
  data: VerificationItem[];
}

const DocumentationChecklist: React.FC<DocumentationChecklistProps> = ({ data }) => {
    const [activeFilter, setActiveFilter] = useState<FilterStatus>('ALL');

    const filteredData = activeFilter === 'ALL'
        ? data
        : data.filter(item => item.status === activeFilter);
    
    const statusCounts = data.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, {} as Record<VerificationStatus, number>);

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-4">Verificación de Documentación</h2>
      <p className="text-gray-400 mb-8">Estado de los documentos requeridos para la auditoría externa.</p>
      
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10">
        {filterOptions.map(({label, status}) => {
            const count = status === 'ALL' ? data.length : statusCounts[status] || 0;
            const config = status !== 'ALL' ? statusConfig[status] : null;
            const isActive = activeFilter === status;

            return (
                <button
                    key={status}
                    onClick={() => setActiveFilter(status)}
                    className={`
                        px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300
                        flex items-center gap-2
                        ${isActive 
                            ? `${config ? `${config.filterBorder} ${config.filterText} bg-white/10` : 'border-lime-500 text-lime-400 bg-white/10'}` 
                            : 'border-gray-700 text-gray-400 bg-gray-900/50 hover:border-gray-500 hover:text-white'
                        }
                    `}
                >
                    {label}
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? 'bg-white/10' : 'bg-gray-700/80'}`}>
                        {count}
                    </span>
                </button>
            )
        })}
      </div>

      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item, index) => {
            const config = statusConfig[item.status];
            if (!config) return null;
            const { Icon, textColor, bgColor, borderColor, iconColor } = config;

            return (
              <div
                key={`${item.name}-${index}`}
                className={`
                    ${bgColor} ${borderColor} border rounded-xl shadow-lg
                    flex flex-col h-full
                    transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30
                    animate-fade-in
                `}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className={`flex items-center gap-3 p-4 rounded-t-lg ${bgColor} border-b ${borderColor}`}>
                    <Icon className={`w-7 h-7 flex-shrink-0 ${iconColor}`} />
                    <span className={`text-xl font-bold uppercase ${textColor}`}>
                        {item.value !== undefined ? item.value : config.label}
                    </span>
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-gray-200 font-medium leading-tight text-sm">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-xl">
            <p className="text-gray-400">No hay documentos que coincidan con el filtro seleccionado.</p>
        </div>
      )}
    </section>
  );
};

export default DocumentationChecklist;
