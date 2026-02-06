import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MotherRegister from './components/MotherRegister';
import MothersList from './components/MotherList';
import CreateHealthworker from './components/CreateHealthworker'



import HealthWorkerDashboard from './components/HealthWorkerDashboard';
import Reports from './components/Reports';
import Settings from './components/Settings';
import HealthWorkersList from './components/HealthWorkersList';
import AIAgentsDashboard from './components/AIAgentDashboard';


function App() {
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'register':
        return <MotherRegister />;
      case 'mothers':
        return <MothersList />;
      case'CreateHealthworkers':
        return <CreateHealthworker />;
      case 'HealthWorkersList':
      return <HealthWorkersList/>;
      case 'healthworkers':
        return <HealthWorkerDashboard />;
      
      case 'reports':
        return <Reports />;
      case 'Ai Agent':
        return <AIAgentsDashboard/>
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <Header />
        <main className="p-4 md:p-6">
          {renderContent()}
        </main>
        
        {/* Footer */}
        <footer className="border-t px-6 py-4 text-center text-gray-500 text-sm">
          <p>Mamacare AI Maternal Follow-Up Agent </p>
          <p className="mt-1">© 2024 Carely. Protecting mothers and babies through AI-powered healthcare.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
