
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
import PiipReport from './piip-report';
import LmsDashboard from './components/LmsDashboard';
import CourseCard from './components/CourseCard';
import InstitutionalActionPlan from './components/InstitutionalActionPlan';

const App: React.FC = () => {
    const [view, setView] = useState<'planning' | 'lms' | 'institutional-plan'>('planning');
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

    const handleGoHome = useCallback(() => {
        setView('planning');
        withLoading(() => setProcessStack([]))
    }, []);
    const handleSelectProcess = (processName: string) => withLoading(() => setProcessStack([processName]));
    const handleSelectSubProcess = (subProcessName: string) => withLoading(() => setProcessStack(stack => [...stack, subProcessName]));
    const handleDirectToSubProcess = (processName: string, subProcessName: string) => {
        withLoading(() => setProcessStack([processName, subProcessName]));
    };
    const handleGoBack = () => withLoading(() => setProcessStack(stack => stack.slice(0, -1)));
    const handleShowPiipReport = () => withLoading(() => setProcessStack(['piip-report']));
    const handleShowLms = () => withLoading(() => setView('lms'));
    const handleShowInstitutionalPlan = () => withLoading(() => setView('institutional-plan'));

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
    
    if (view === 'lms') {
        return (
            <LmsDashboard title="Mis Cursos" onNavigate={(target) => {
                if (target === 'back') {
                    setView('planning');
                }
            }}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <CourseCard title="Introducción al SIG" description="Conoce los fundamentos del Sistema Integrado de Gestión." progress={75} status="In Progress" />
                    <CourseCard title="Gestión de Riesgos" description="Aprende a identificar y mitigar riesgos en tu proceso." progress={100} status="Completed" />
                    <CourseCard title="Normatividad Aplicable" description="Curso sobre el marco legal que rige a INFIBAGUE." progress={0} status="Not Started" />
                </div>
            </LmsDashboard>
        );
    }

    if (view === 'institutional-plan') {
        return (
            <>
                <Spinner isLoading={isLoading} />
                <Header 
                    onGoHome={handleGoHome} 
                    onShowPiipReport={handleShowPiipReport} 
                    onShowLms={handleShowLms} 
                    onShowInstitutionalPlan={handleShowInstitutionalPlan}
                />
                 <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 min-h-[calc(100vh-15rem)]">
                    <InstitutionalActionPlan onGoBack={handleGoHome} />
                 </main>
                 <Footer onGoHome={handleGoHome} />
                 <ScrollToTopButton />
            </>
        )
    }

    const isHomePage = processStack.length === 0;
    const isPiipReport = processStack.length === 1 && processStack[0] === 'piip-report';
    const currentProcessName = processStack.length > 0 && !isPiipReport ? processStack[processStack.length - 1] : "";
    const parentProcessName = processStack.length > 1 && !isPiipReport ? processStack[processStack.length - 2] : undefined;
    
    const getProcessData = (): ProcessData | null => {
        if (isHomePage || isPiipReport) return null;
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
            <Header 
                onGoHome={handleGoHome} 
                onShowPiipReport={handleShowPiipReport} 
                onShowLms={handleShowLms}
                onShowInstitutionalPlan={handleShowInstitutionalPlan}
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 min-h-[calc(100vh-15rem)]">
                {isPiipReport ? (
                    <PiipReport onGoBack={handleGoHome} />
                ) : isHomePage || !currentProcessData ? (
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
