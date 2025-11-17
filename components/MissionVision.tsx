import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MissionVision: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section 
      ref={ref} 
      className={`my-20 scroll-fade-up ${isIntersecting ? 'is-visible' : ''}`}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="stylish-card bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-800 transition-all duration-300">
                <h3 className="font-heading text-3xl font-bold text-lime-400 mb-3">Misión</h3>
                <div className="w-20 h-1 bg-lime-500 rounded-full mb-6"></div>
                <p className="text-slate-300 leading-relaxed text-base">
                    Somos el Instituto de financiamiento, promoción y desarrollo de Ibagué, una empresa industrial y comercial del estado, que gestiona y ejecuta proyectos de desarrollo urbano e inmobiliario, y presta servicios de alumbrado público, concesiones y arrendamientos, para el mejoramiento de la calidad de vida de los Ibaguereños.
                </p>
            </div>
             <div className="stylish-card bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-800 transition-all duration-300">
                <h3 className="font-heading text-3xl font-bold text-blue-400 mb-3">Visión</h3>
                <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
                <p className="text-slate-300 leading-relaxed text-base">
                    En el 2025 seremos la empresa líder en la gestión y ejecución de proyectos de infraestructura y desarrollo para la ciudad de Ibagué, generadora de recursos, innovadora y competitiva.
                </p>
            </div>
        </div>
    </section>
  );
};

export default MissionVision;