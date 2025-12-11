import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    progress: number;
    status: 'Completed' | 'In Progress' | 'Not Started';
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, progress, status }) => {
    return (
        <div className="bg-[#0F172A] rounded-lg shadow-lg p-6 flex flex-col justify-between border border-gray-700 h-full">
            <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{status}</p>
                <h3 className="text-xl font-bold text-white my-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 h-12 overflow-hidden">{description}</p>
            </div>
            <div className="mt-auto">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-semibold text-blue-400">{progress}% Completado</p>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden relative">
                    <div
                        className="bg-blue-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Revisar Curso
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
