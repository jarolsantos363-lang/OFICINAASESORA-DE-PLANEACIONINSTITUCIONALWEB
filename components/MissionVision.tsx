import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-3">Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                    Somos el Instituto de financiamiento, promoción y desarrollo de Ibagué, una empresa industrial y comercial del estado, que gestiona y ejecuta proyectos de desarrollo urbano e inmobiliario, y presta servicios de alumbrado público, concesiones y arrendamientos, para el mejoramiento de la calidad de vida de los Ibaguereños.
                </p>
            </div>
             <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                    En el 2025 seremos la empresa líder en la gestión y ejecución de proyectos de infraestructura y desarrollo para la ciudad de Ibagué, generadora de recursos, innovadora y competitiva.
                </p>
            </div>
        </div>
    </section>
  );
};

export default MissionVision;
