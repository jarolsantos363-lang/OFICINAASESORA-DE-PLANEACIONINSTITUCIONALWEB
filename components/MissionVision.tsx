
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section 
      ref={ref} 
      className={`my-24 scroll-fade-up ${isIntersecting ? 'is-visible' : ''}`}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Misión Card */}
            <div className="relative group h-full">
                {/* Outer Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
                
                <div className="relative bg-[#0F172A] h-full rounded-3xl p-8 md:p-10 border border-gray-800 overflow-hidden flex flex-col items-center text-center">
                    {/* Decorative Background Glow */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                        <div className="absolute inset-0 bg-blue-500 blur-[20px] opacity-20 rounded-full"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-blue-500/30 flex items-center justify-center shadow-2xl shadow-blue-900/50 group-hover:scale-110 transition-transform duration-500">
                            <Target className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                    </div>

                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight drop-shadow-lg group-hover:text-blue-100 transition-colors">
                        Misión
                    </h3>
                    
                    <p className="text-slate-300 text-lg leading-relaxed font-medium relative z-10">
                        Somos el Instituto de financiamiento, promoción y desarrollo de Ibagué, una empresa industrial y comercial del estado, que gestiona y ejecuta proyectos de desarrollo urbano e inmobiliario, y presta servicios de alumbrado público, concesiones y arrendamientos, para el mejoramiento de la calidad de vida de los Ibaguereños.
                    </p>
                </div>
            </div>

             {/* Visión Card */}
             <div className="relative group h-full">
                {/* Outer Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
                
                <div className="relative bg-[#0F172A] h-full rounded-3xl p-8 md:p-10 border border-gray-800 overflow-hidden flex flex-col items-center text-center">
                    {/* Decorative Background Glow */}
                    <div className="absolute top-0 left-0 -ml-16 -mt-16 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl group-hover:bg-lime-500/20 transition-colors duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                        <div className="absolute inset-0 bg-lime-500 blur-[20px] opacity-20 rounded-full"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-lime-500/30 flex items-center justify-center shadow-2xl shadow-lime-900/50 group-hover:scale-110 transition-transform duration-500">
                            <Eye className="w-10 h-10 text-lime-400 group-hover:text-lime-300 transition-colors" />
                        </div>
                    </div>

                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight drop-shadow-lg group-hover:text-lime-100 transition-colors">
                        Visión
                    </h3>
                    
                    <p className="text-slate-300 text-lg leading-relaxed font-medium relative z-10">
                        En el 2025 seremos la empresa líder en la gestión y ejecución de proyectos de infraestructura y desarrollo para la ciudad de Ibagué, generadora de recursos, innovadora y competitiva.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default MissionVision;
