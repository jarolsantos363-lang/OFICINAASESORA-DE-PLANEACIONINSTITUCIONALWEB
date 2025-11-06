
import React, { useState } from 'react';
import { ALL_PROCESS_DATA } from './constants';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    const [view, setView] = useState<'home' | 'dashboard'>('home');
    const [selectedProcess, setSelectedProcess] = useState<string>("Gestión Estratégica");

    const handleProcessSelect = (processName: string) => {
        setSelectedProcess(processName);
        setView('dashboard');
        window.scrollTo(0, 0);
    };

    const handleGoHome = () => {
        setView('home');
    };
    
    const handleDashboardProcessChange = (processName: string) => {
        setSelectedProcess(processName);
        window.scrollTo(0, 0);
    }

    const processData = ALL_PROCESS_DATA[selectedProcess] || ALL_PROCESS_DATA['default'];

    if (view === 'home') {
        return <HomePage onProcessClick={handleProcessSelect} onGoHome={handleGoHome} />;
    }

    return (
        <Dashboard
            selectedProcess={selectedProcess}
            processData={processData}
            onSelectProcess={handleDashboardProcessChange}
            onGoHome={handleGoHome}
        />
    );
};

export default App;
