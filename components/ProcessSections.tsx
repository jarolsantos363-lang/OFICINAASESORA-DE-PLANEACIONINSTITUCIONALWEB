import React from 'react';

interface ProcessCategoryProps {
  id: string;
  title: string;
  processes: string[];
  borderColor: string;
  onProcessClick: (processName: string) => void;
}

const ProcessCategory: React.FC<ProcessCategoryProps> = ({ id, title, processes, borderColor, onProcessClick }) => {
    if (processes.length === 0) {
        return null; // Don't render the category if there are no matching processes
    }

    return (
      <section id={id} className="mb-12 scroll-mt-28">
        <h3 className={`text-2xl font-semibold mb-6 border-l-4 ${borderColor} pl-4`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processes.map((process) => (
            <button 
              key={process} 
              onClick={() => onProcessClick(process)}
              className="text-left bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-lime-500/50 transition-all duration-300 transform hover:-translate-y-1 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-black/50"
            >
              <p className="text-gray-200 font-medium">{process}</p>
            </button>
          ))}
        </div>
      </section>
    );
};

interface ProcessSectionsProps {
    onProcessClick: (processName: string) => void;
    strategicProcesses: string[];
    misionalProcesses: string[];
    supportProcesses: string[];
    evaluationProcesses: string[];
}

const ProcessSections: React.FC<ProcessSectionsProps> = ({ 
    onProcessClick,
    strategicProcesses,
    misionalProcesses,
    supportProcesses,
    evaluationProcesses
}) => {
  const allProcessesCount = strategicProcesses.length + misionalProcesses.length + supportProcesses.length + evaluationProcesses.length;

  return (
    <>
        {allProcessesCount > 0 ? (
            <>
                <ProcessCategory 
                    id="procesos-estrategicos" 
                    title="Procesos Estratégicos" 
                    processes={strategicProcesses} 
                    borderColor="border-gray-400"
                    onProcessClick={onProcessClick}
                />
                <ProcessCategory 
                    id="procesos-misionales" 
                    title="Procesos Misionales" 
                    processes={misionalProcesses} 
                    borderColor="border-orange-500"
                    onProcessClick={onProcessClick}
                />
                <ProcessCategory 
                    id="procesos-de-apoyo" 
                    title="Procesos de Apoyo" 
                    processes={supportProcesses} 
                    borderColor="border-blue-500"
                    onProcessClick={onProcessClick}
                />
                <ProcessCategory 
                    id="procesos-de-evaluacion" 
                    title="Procesos de Evaluación" 
                    processes={evaluationProcesses} 
                    borderColor="border-green-500"
                    onProcessClick={onProcessClick}
                />
            </>
        ) : (
            <div className="text-center py-16 bg-gray-900/50 border border-dashed border-gray-700 rounded-xl">
                <p className="text-xl text-gray-400">No se encontraron resultados.</p>
                <p className="text-gray-500 mt-2">Intenta con otro término de búsqueda.</p>
            </div>
        )}
    </>
  );
};

export default ProcessSections;