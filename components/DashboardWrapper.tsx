import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { AllProcessData, ProcessData } from '../types';
import { allProcessCategories } from '../constants';

interface DashboardWrapperProps {
    allData: AllProcessData;
    onUpdateData: () => Promise<void>;
    isLoading: boolean;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ allData, onUpdateData, isLoading }) => {
    const { processName, subProcessName } = useParams<{ processName: string; subProcessName?: string }>();
    const navigate = useNavigate();

    // Decode URL params
    const decodedProcessName = processName ? decodeURIComponent(processName) : '';
    const decodedSubProcessName = subProcessName ? decodeURIComponent(subProcessName) : undefined;

    // Resolve Data
    let currentProcessData: ProcessData | null = null;
    let parentProcessName: string | undefined = undefined;

    // We use a simple logic to find the data. 
    // If data is missing, we might want to redirect, but we'll handle that in the effect or render.
    if (decodedProcessName && allData[decodedProcessName]) {
        let data = allData[decodedProcessName];

        if (decodedSubProcessName) {
            parentProcessName = decodedProcessName;
            if (data.subProcesses && data.subProcesses[decodedSubProcessName]) {
                data = data.subProcesses[decodedSubProcessName];
                currentProcessData = data;
            }
        } else {
            currentProcessData = data;
        }
    }

    useEffect(() => {
        if (!currentProcessData) {
            // If data not found, redirect to home
            navigate('/');
        }
    }, [currentProcessData, navigate]);

    if (!currentProcessData) {
        return null; // Or a loading spinner / 404 component
    }

    // Navigation Logic
    const currentProcessIndex = allProcessCategories.indexOf(decodedProcessName);
    const previousProcess = currentProcessIndex > 0 ? allProcessCategories[currentProcessIndex - 1] : null;
    const nextProcess = currentProcessIndex < allProcessCategories.length - 1 ? allProcessCategories[currentProcessIndex + 1] : null;

    const handleGoBack = () => {
        if (decodedSubProcessName) {
            navigate(`/process/${encodeURIComponent(decodedProcessName)}`);
        } else {
            navigate('/');
        }
    };

    const handleSelectSubProcess = (sub: string) => {
        navigate(`/process/${encodeURIComponent(decodedProcessName)}/${encodeURIComponent(sub)}`);
    };

    const handleGoToPrevious = () => previousProcess && navigate(`/process/${encodeURIComponent(previousProcess)}`);
    const handleGoToNext = () => nextProcess && navigate(`/process/${encodeURIComponent(nextProcess)}`);

    // Sub-process navigation
    let subProcessSiblings: string[] = [];
    if (decodedSubProcessName && parentProcessName) {
        const parentData = allData[parentProcessName];
        if (parentData && parentData.subProcesses) {
            subProcessSiblings = Object.keys(parentData.subProcesses);
        }
    }

    const currentSubProcessIndex = decodedSubProcessName ? subProcessSiblings.indexOf(decodedSubProcessName) : -1;
    const previousSubProcess = currentSubProcessIndex > 0 ? subProcessSiblings[currentSubProcessIndex - 1] : null;
    const nextSubProcess = currentSubProcessIndex < subProcessSiblings.length - 1 ? subProcessSiblings[currentSubProcessIndex + 1] : null;

    const handleGoToPreviousSubProcess = () => {
        if (previousSubProcess) {
            navigate(`/process/${encodeURIComponent(decodedProcessName)}/${encodeURIComponent(previousSubProcess)}`);
        }
    };

    const handleGoToNextSubProcess = () => {
        if (nextSubProcess) {
            navigate(`/process/${encodeURIComponent(decodedProcessName)}/${encodeURIComponent(nextSubProcess)}`);
        }
    };

    return (
        <Dashboard
            currentProcessName={decodedSubProcessName || decodedProcessName}
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
            onUpdateData={onUpdateData}
            isLoading={isLoading}
        />
    );
};

export default DashboardWrapper;
