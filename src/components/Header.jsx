import React from 'react';
import { Bell, Search, Calendar } from 'lucide-react';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b">
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800"> Mama care Dashboard</h1>
          <p className="text-gray-500 flex items-center space-x-2 mt-1">
            <Calendar size={16} />
            <span>{today}</span>
          </p>
        </div>
        <div classname="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search mothers, reports..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="font-medium">Dr.Yiga Jonathan M.</p>
              <p className="text-sm text-gray-500">Senior Midwife</p>
            </div>
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-primary-700">SM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;