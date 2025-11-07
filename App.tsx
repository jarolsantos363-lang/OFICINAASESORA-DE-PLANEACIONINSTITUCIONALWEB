import React, { useState } from 'react';
import { ALL_PROCESS_DATA, allProcessCategories } from './constants';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import { AllProcessData } from './types';
import { fetchDataFromGoogleSheets } from './services/googleSheets';

const App: React.FC = () => {
    const [selectedProcess, setSelectedProcess] = useState<string | null>(null);
    const [selectedSubProcess, setSelectedSubProcess] = useState<string | null>(null);
    const [processData, setProcessData] = useState<AllProcessData>(ALL_PROCESS_DATA);

    const handleProcessSelect = (processName: string) => {
        setSelectedProcess(processName);
        setSelectedSubProcess(null);
        window.scrollTo(0, 0);
    };

    const handleSubProcessSelect = (subProcessName: string) => {
        setSelectedSubProcess(subProcessName);
        window.scrollTo(0, 0);
    };

    const handleGoHome = () => {
        setSelectedProcess(null);
        setSelectedSubProcess(null);
    };

    const handleGoBack = () => {
        if (selectedSubProcess) {
            setSelectedSubProcess(null);
        } else {
            handleGoHome();
        }
    };
    
    const handleUpdateData = async () => {
        const newData = await fetchDataFromGoogleSheets();
        setProcessData(newData);
    };

    // This is for the sidebar.
    const handleDashboardProcessChange = (processName: string) => {
        setSelectedProcess(processName);
        setSelectedSubProcess(null); // Always reset sub-process when changing from sidebar
        window.scrollTo(0, 0);
    };

    const { previousProcess, nextProcess } = (() => {
        if (!selectedProcess || selectedSubProcess) {
            return { previousProcess: null, nextProcess: null };
        }
        const currentIndex = allProcessCategories.indexOf(selectedProcess);
        const previous = currentIndex > 0 ? allProcessCategories[currentIndex - 1] : null;
        const next = currentIndex < allProcessCategories.length - 1 ? allProcessCategories[currentIndex + 1] : null;
        return { previousProcess: previous, nextProcess: next };
    })();
    
    const handleGoToPrevious = () => {
        if (previousProcess) {
            handleDashboardProcessChange(previousProcess);
        }
    };

    const handleGoToNext = () => {
        if (nextProcess) {
            handleDashboardProcessChange(nextProcess);
        }
    };
    
    const { previousSubProcess, nextSubProcess } = (() => {
        if (!selectedProcess || !selectedSubProcess || !processData[selectedProcess]?.subProcesses) {
            return { previousSubProcess: null, nextSubProcess: null };
        }
        const subProcessNames = Object.keys(processData[selectedProcess].subProcesses!);
        const currentIndex = subProcessNames.indexOf(selectedSubProcess);
        const previous = currentIndex > 0 ? subProcessNames[currentIndex - 1] : null;
        const next = currentIndex < subProcessNames.length - 1 ? subProcessNames[currentIndex + 1] : null;
        return { previousSubProcess: previous, nextSubProcess: next };
    })();

    const handleGoToPreviousSubProcess = () => {
        if (previousSubProcess) {
            handleSubProcessSelect(previousSubProcess);
        }
    };

    const handleGoToNextSubProcess = () => {
        if (nextSubProcess) {
            handleSubProcessSelect(nextSubProcess);
        }
    };


    if (!selectedProcess) {
        return <HomePage onProcessClick={handleProcessSelect} onGoHome={handleGoHome} />;
    }

    const parentProcessData = processData[selectedProcess] || processData['default'];
    const isSubProcessView = !!(selectedSubProcess && parentProcessData.subProcesses?.[selectedSubProcess]);

    const currentProcessData = isSubProcessView
        ? parentProcessData.subProcesses![selectedSubProcess!]
        : parentProcessData;

    const currentProcessName = isSubProcessView ? selectedSubProcess! : selectedProcess;
    
    // The sidebar needs to know the top-level process to highlight it correctly
    const sidebarSelectedProcess = selectedProcess;

    return (
        <Dashboard
            key={currentProcessName} // Force re-render when navigating between processes
            sidebarSelectedProcess={sidebarSelectedProcess}
            currentProcessName={currentProcessName}
            processData={currentProcessData}
            onSelectProcess={handleDashboardProcessChange}
            onGoHome={handleGoHome}
            onGoBack={handleGoBack}
            parentProcessName={isSubProcessView ? selectedProcess : undefined}
            onSelectSubProcess={handleSubProcessSelect}
            previousProcess={previousProcess}
            nextProcess={nextProcess}
            onGoToPrevious={handleGoToPrevious}
            onGoToNext={handleGoToNext}
            previousSubProcess={previousSubProcess}
            nextSubProcess={nextSubProcess}
            onGoToPreviousSubProcess={handleGoToPreviousSubProcess}
            onGoToNextSubProcess={handleGoToNextSubProcess}
            onUpdateData={handleUpdateData}
        />
    );
};

export default App;