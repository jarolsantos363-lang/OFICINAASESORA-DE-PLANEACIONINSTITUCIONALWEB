import React, { useState, useCallback } from 'react';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { ALL_PROCESS_DATA, allProcessCategories } from './constants';
import { AllProcessData, ProcessData } from './types';
import { fetchDataFromGoogleSheets } from './services/googleSheets';
import ScrollToTopButton from './components/ScrollToTopButton';
import Calendar from './components/Calendar';

const App: React.FC = () => {
    const [processStack, setProcessStack] = useState<string[]>([]);
    const [allData, setAllData] = useState<AllProcessData>(ALL_PROCESS_DATA);
    const [isLoading, setIsLoading] = useState(false);

    const withLoading = (action: () => void) => {
        setIsLoading(true);
        setTimeout(() => {
            action();
            setIsLoading(false);
        }, 500); // Simulate loading time
    };

    const handleGoHome = useCallback(() => withLoading(() => setProcessStack([])), []);
    const handleSelectProcess = (processName: string) => withLoading(() => setProcessStack([processName]));
    const handleSelectSubProcess = (subProcessName: string) => withLoading(() => setProcessStack(stack => [...stack, subProcessName]));
    const handleDirectToSubProcess = (processName: string, subProcessName: string) => {
        withLoading(() => setProcessStack([processName, subProcessName]));
    };
    const handleGoBack = () => withLoading(() => setProcessStack(stack => stack.slice(0, -1)));
    
    const handleUpdateData = async () => {
        setIsLoading(true);
        try {
            const newData = await fetchDataFromGoogleSheets();
            setAllData(newData);
        } catch (error) {
            console.error("Failed to update data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const isHomePage = processStack.length === 0;
    const currentProcessName = processStack[processStack.length - 1];
    const parentProcessName = processStack.length > 1 ? processStack[processStack.length - 2] : undefined;
    
    const getProcessData = (): ProcessData | null => {
        if (isHomePage) return null;
        try {
            let data = allData[processStack[0]];
            if (!data) throw new Error("Process not found");
            for (let i = 1; i < processStack.length; i++) {
                data = data.subProcesses?.[processStack[i]];
                if (!data) throw new Error("Sub-process not found");
            }
            return data;
        } catch (error) {
            console.error(error);
            return allData['default'];
        }
    };
    const currentProcessData = getProcessData();

    // Navigation logic for main processes
    const currentProcessIndex = allProcessCategories.indexOf(processStack[0]);
    const previousProcess = currentProcessIndex > 0 ? allProcessCategories[currentProcessIndex - 1] : null;
    const nextProcess = currentProcessIndex < allProcessCategories.length - 1 ? allProcessCategories[currentProcessIndex + 1] : null;

    const handleGoToPrevious = () => previousProcess && withLoading(() => setProcessStack([previousProcess]));
    const handleGoToNext = () => nextProcess && withLoading(() => setProcessStack([nextProcess]));

    // Navigation logic for sub-processes
    let subProcessSiblings: string[] = [];
    if (parentProcessName) {
        let parentData = allData[processStack[0]];
        for (let i = 1; i < processStack.length - 1; i++) {
            parentData = parentData.subProcesses?.[processStack[i]];
        }
        if(parentData && parentData.subProcesses) {
            subProcessSiblings = Object.keys(parentData.subProcesses);
        }
    }
    const currentSubProcessIndex = subProcessSiblings.indexOf(currentProcessName);
    const previousSubProcess = currentSubProcessIndex > 0 ? subProcessSiblings[currentSubProcessIndex - 1] : null;
    const nextSubProcess = currentSubProcessIndex < subProcessSiblings.length - 1 ? subProcessSiblings[currentSubProcessIndex + 1] : null;

    const handleGoToPreviousSubProcess = () => {
        if (previousSubProcess) {
            withLoading(() => setProcessStack(stack => [...stack.slice(0, -1), previousSubProcess]));
        }
    };
    const handleGoToNextSubProcess = () => {
        if (nextSubProcess) {
            withLoading(() => setProcessStack(stack => [...stack.slice(0, -1), nextSubProcess]));
        }
    };

    return (
        <>
            <Spinner isLoading={isLoading} />
            <Header onGoHome={handleGoHome} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 min-h-[calc(100vh-15rem)]">
                {isHomePage || !currentProcessData ? (
                    <HomePage 
                        onProcessClick={handleSelectProcess} 
                        onGoHome={handleGoHome} 
                        allData={allData}
                        onSubProcessClick={handleDirectToSubProcess}
                    />
                ) : (
                    <Dashboard
                        key={processStack.join('-')}
                        currentProcessName={currentProcessName}
                        processData={currentProcessData}
                        onGoBack={handleGoBack}
                        parentProcessName={parentProcessName}
                        onSelectSubProcess={handleSelectSubProcess}
                        previousProcess={previousProcess}
                        nextProcess={nextProcess}
                        onGoToPrevious={handleGoToPrevious}
                        onGoToNext={handleGoToNext}
                        previousSubProcess={previousSubProcess}
                        nextSubProcess={nextSubProcess}
                        onGoToPreviousSubProcess={handleGoToPreviousSubProcess}
                        onGoToNextSubProcess={handleGoToNextSubProcess}
                        onUpdateData={handleUpdateData}
                        isLoading={isLoading}
                    />
                )}
            </main>
            <Footer onGoHome={handleGoHome} />
            <Calendar />
            <ScrollToTopButton />
        </>
    );
};

export default App;