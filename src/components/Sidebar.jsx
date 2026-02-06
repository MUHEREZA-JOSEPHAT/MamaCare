import React from 'react';
import { 
  Home, 
  UserPlus, 
  Users, 
  Stethoscope, 
  BarChart3, 
  Settings, 
  Menu, 
  X,
  Shield,
  Bell,
  MessageCircle,
  LogOut,
  AppWindowIcon,
  AppleIcon,
  BotIcon,
  BotMessageSquareIcon
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={22} /> },
    { id: 'register', label: 'Register Mother', icon: <UserPlus size={22} /> },
    { id: 'mothers', label: 'Mothers List', icon: <Users size={22} /> },
    {id :'CreateHealthworkers',label:'Create Health worker',icon :<UserPlus size={22}/>},
    
    { id: 'HealthWorkersList', label: 'HealthWorkersList', icon: <Stethoscope size={22} /> },
    { id: 'reports', label: 'Reports & Analytics', icon: <BarChart3 size={22} /> },
    {id :'Ai Agent',label:'AI agent',icon:<BotMessageSquareIcon size={22}/>},
    { id: 'settings', label: 'Settings', icon: <Settings size={22} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white z-40 transition-all duration-300 shadow-2xl ${
        isOpen ? 'w-64' : 'w-20'
      }`}>
        
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {isOpen ? (
              <div className="flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Mamacare</h1>
                  <p className="text-xs text-gray-400">AI Maternal Care</p>
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                <Shield size={24} />
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className={`text-xs font-medium text-gray-400 mb-3 ${!isOpen && 'text-center'}`}>
            {isOpen ? 'NAVIGATION' : '≡'}
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg'
                      : 'hover:bg-gray-700/50'
                  }`}
                >
                  <span className={`flex-shrink-0 ${
                    activeTab === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}>
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        {isOpen && (
          <div className="px-4 mt-8">
            <p className="text-xs font-medium text-gray-400 mb-3">QUICK ACTIONS</p>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <Bell size={18} className="text-amber-400" />
                <span className="font-medium text-sm">Alerts Center</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <MessageCircle size={18} className="text-green-400" />
                <span className="font-medium text-sm">Messages</span>
              </button>
               <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <BotIcon size={18} className="text-yellow-400" />
                <span className="font-medium text-sm">Agent</span>
              </button>
            </div>
          </div>
        )}

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="font-bold">Sd</span>
            </div>
            
            {isOpen && (
              <div className="flex-1">
                <p className="font-medium text-sm">Dr.Yiga Jonathan M.</p>
                <p className="text-xs text-gray-400">system Admin</p>
              </div>
            )}
            
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;