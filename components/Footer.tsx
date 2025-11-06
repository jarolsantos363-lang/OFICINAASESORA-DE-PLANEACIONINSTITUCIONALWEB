import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 mt-16">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <img className="h-12 w-auto mb-4" src="https://www.infibague.gov.co/wp-content/uploads/2025/02/logo-Infibague-blanco-300x99.png" alt="INFIBAGUE Logo" />
                        <p className="text-gray-400 text-sm">Oficina Asesora De Planeación Institucional</p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold tracking-wide">Enlaces Rápidos</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#top" className="text-gray-400 hover:text-lime-400 transition-colors">Inicio</a>
                            </li>
                             <li>
                                <a href="#mission-vision" className="text-gray-400 hover:text-lime-400 transition-colors">Misión y Visión</a>
                            </li>
                            <li>
                                <a href="#planning" className="text-gray-400 hover:text-lime-400 transition-colors">Instrumentos de Planeación</a>
                            </li>
                            <li>
                                <a href="#documentation" className="text-gray-400 hover:text-lime-400 transition-colors">Verificación de Documentación</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold tracking-wide">Sitio Principal</h3>
                        <ul className="mt-4 space-y-2">
                             <li>
                                <a href="https://www.infibague.gov.co" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-lime-500">
                                    Visitar INFIBAGUE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black/30">
                <div className="container mx-auto px-6 py-4">
                     <p className="text-center text-sm text-gray-500">© 2024 Oficina Asesora De Planeación Institucional. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
