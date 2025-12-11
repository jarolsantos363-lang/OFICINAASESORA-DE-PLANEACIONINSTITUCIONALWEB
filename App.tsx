import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { ALL_PROCESS_DATA } from './constants';
import { AllProcessData } from './types';
import { fetchProcessData } from './services/api';
import ScrollToTopButton from './components/ScrollToTopButton';
import Calendar from './components/Calendar';
import PiipReport from './piip-report';
import LmsDashboard from './components/LmsDashboard';
import CourseCard from './components/CourseCard';
import InstitutionalActionPlan from './components/InstitutionalActionPlan';
import MunicipalActionPlan from './components/MunicipalActionPlan';
import DashboardWrapper from './components/DashboardWrapper';

const App: React.FC = () => {
    const [allData, setAllData] = useState<AllProcessData>(ALL_PROCESS_DATA);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleUpdateData = async () => {
        setIsLoading(true);
        try {
            const newData = await fetchProcessData();
            setAllData(newData);
        } catch (error) {
            console.error("Failed to update data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Navigation Handlers for Header
    const handleGoHome = () => navigate('/');
    const handleShowPiipReport = () => navigate('/piip-report');
    const handleShowLms = () => navigate('/lms');
    const handleShowInstitutionalPlan = () => navigate('/institutional-plan');
    const handleShowMunicipalPlan = () => navigate('/municipal-plan');

    // Layout Wrapper for standard pages
    const StandardLayout = ({ children }: { children: React.ReactNode }) => (
        <>
            <Spinner isLoading={isLoading} />
            <Header
                onGoHome={handleGoHome}
                onShowPiipReport={handleShowPiipReport}
                onShowLms={handleShowLms}
                onShowInstitutionalPlan={handleShowInstitutionalPlan}
                onShowMunicipalPlan={handleShowMunicipalPlan}
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 min-h-[calc(100vh-15rem)]">
                {children}
            </main>
            <Footer onGoHome={handleGoHome} />
            <Calendar />
            <ScrollToTopButton />
        </>
    );

    return (
        <Routes>
            <Route path="/" element={
                <StandardLayout>
                    <HomePage
                        onProcessClick={(name) => navigate(`/process/${encodeURIComponent(name)}`)}
                        onGoHome={handleGoHome}
                        allData={allData}
                        onSubProcessClick={(p, s) => navigate(`/process/${encodeURIComponent(p)}/${encodeURIComponent(s)}`)}
                    />
                </StandardLayout>
            } />

            <Route path="/process/:processName" element={
                <StandardLayout>
                    <DashboardWrapper allData={allData} onUpdateData={handleUpdateData} isLoading={isLoading} />
                </StandardLayout>
            } />

            <Route path="/process/:processName/:subProcessName" element={
                <StandardLayout>
                    <DashboardWrapper allData={allData} onUpdateData={handleUpdateData} isLoading={isLoading} />
                </StandardLayout>
            } />

            <Route path="/piip-report" element={
                <StandardLayout>
                    <PiipReport onGoBack={handleGoHome} />
                </StandardLayout>
            } />

            <Route path="/institutional-plan" element={
                <StandardLayout>
                    <InstitutionalActionPlan onGoBack={handleGoHome} />
                </StandardLayout>
            } />

            <Route path="/municipal-plan" element={
                <>
                    <Spinner isLoading={isLoading} />
                    <MunicipalActionPlan onGoBack={handleGoHome} />
                </>
            } />

            <Route path="/lms" element={
                <LmsDashboard title="Mis Cursos" onNavigate={(target) => {
                    if (target === 'back') handleGoHome();
                }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        <CourseCard title="Introducción al SIG" description="Conoce los fundamentos del Sistema Integrado de Gestión." progress={75} status="In Progress" />
                        <CourseCard title="Gestión de Riesgos" description="Aprende a identificar y mitigar riesgos en tu proceso." progress={100} status="Completed" />
                        <CourseCard title="Normatividad Aplicable" description="Curso sobre el marco legal que rige a INFIBAGUE." progress={0} status="Not Started" />
                    </div>
                </LmsDashboard>
            } />
        </Routes>
    );
};

export default App;