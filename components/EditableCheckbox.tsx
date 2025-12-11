
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { CircleIcon } from './icons/CircleIcon';

interface EditableCheckboxProps {
    checked: boolean;
    onChange: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}

const EditableCheckbox: React.FC<EditableCheckboxProps> = ({ checked, onChange, isLoading, disabled }) => {
    
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                if (!disabled && !isLoading) onChange();
            }}
            disabled={disabled || isLoading}
            className={`
                group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-lime-500
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
                ${checked ? 'bg-lime-500/20' : 'bg-gray-800/50 hover:bg-gray-700'}
            `}
            aria-label={checked ? "Marcar como pendiente" : "Marcar como completado"}
        >
            {isLoading ? (
                <div className="w-4 h-4 border-2 border-lime-500 border-t-transparent rounded-full animate-spin" />
            ) : checked ? (
                <CheckIcon className="w-5 h-5 text-lime-400 group-hover:text-lime-300 transition-colors" />
            ) : (
                <CircleIcon className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
            )}
            
            {/* Hover glow effect */}
            <span className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${checked ? 'shadow-[0_0_10px_rgba(132,204,22,0.4)]' : ''}`}></span>
        </button>
    );
};

export default EditableCheckbox;
