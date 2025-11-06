import React, { useState } from 'react';
import Header from './components/Header';
import PlanningDashboard from './components/PlanningDashboard';
import DocumentationChecklist from './components/DocumentationChecklist';
import MissionVision from './components/MissionVision';
import { ActiveView } from './types';


const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('planning');

  return (
    <div className="relative min-h-screen font-sans selection:bg-lime-500 selection:text-black">
       <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://www.infibague.gov.co/wp-content/uploads/2025/08/7-scaled.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 text-white">
        <Header activeView={activeView} setActiveView={setActiveView} />
        <main className="container mx-auto p-4 md:p-6 lg:p-8 pt-24 md:pt-28">
          <MissionVision />
          
          <div className="mt-8">
            {activeView === 'planning' && <PlanningDashboard />}
            {activeView === 'documentation' && <DocumentationChecklist />}
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;