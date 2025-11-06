
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MissionVision from './MissionVision';
import ProcessSections from './ProcessSections';

interface HomePageProps {
  onProcessClick: (processName: string) => void;
  onGoHome: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onProcessClick, onGoHome }) => {
    return (
    <div className="relative min-h-screen font-sans selection:bg-lime-500 selection:text-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://www.infibague.gov.co/wp-content/uploads/2025/08/7-scaled.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 text-white">
        <Header onGoHome={onGoHome} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
          <MissionVision />
          <ProcessSections onProcessClick={onProcessClick} />
        </main>
        <Footer onGoHome={onGoHome} />
      </div>
    </div>
  );
}

export default HomePage;
