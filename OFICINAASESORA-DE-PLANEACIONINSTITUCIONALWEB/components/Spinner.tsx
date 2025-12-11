import React from 'react';

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in"
        style={{ animationDuration: '200ms' }}
        aria-label="Cargando..."
        role="alert"
        aria-live="assertive"
    >
        <div className="spinner">
            <div className="spinner1"></div>
        </div>
    </div>
  );
};

export default Spinner;
