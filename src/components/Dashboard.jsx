import React from 'react';
import { 
  Users, 
  Baby, 
  CalendarCheck, 
  AlertTriangle,
  TrendingUp,
  Clock,
  Activity,
  Heart,
  Shield,
} from 'lucide-react';
import StatsCard from './StatsCard';
import PregnancyTimeline from './PregnancyTimeline';
import DangerAlerts from './DangerAlerts';
import RecentMothers from './Recentmothers';
import UpcomingVisits from './UpcomingVisits';
import HealthMetricsChart from './HealthMetricsChart';
import WeeklySchedule from './WeeklySchedule';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Mothers',
      value: '156',
      change: '+12 this week',
      trend: 'up',
      icon: <Users className="text-white" size={24} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      details: '89% low risk • 8% high risk'
    },
    {
      title: 'Upcoming Visits',
      value: '23',
      change: 'Next 7 days',
      trend: 'neutral',
      icon: <CalendarCheck className="text-white" size={24} />,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-500 to-green-500',
      details: '15 confirmed • 8 pending'
    },
    
    
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6">
      {/* Main Content Container */}
      <div className="space-y-6 max-w-7xl mx-auto">
        
        {/* Header with Welcome */}
        <div className="bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Welcome back, Dr. Sarah
                  </h2>
                  <p className="text-gray-600 mt-1">Here's what's happening with your mothers today</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">System: Online</span>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 flex items-center space-x-2 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <Users size={20} />
                <span className="font-medium">New Registration</span>
              </button>
            </div>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Metrics Chart with Gradient Background */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
              <HealthMetricsChart />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Danger Alerts with Gradient */}
              <div className="bg-gradient-to-br from-white to-rose-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
                <DangerAlerts />
              </div>
              
              {/* Upcoming Visits with Gradient */}
              <div className="bg-gradient-to-br from-blue to-red-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
                <UpcomingVisits />
              </div>
            </div>
            
            {/* Weekly Schedule with Gradient */}
            <div className="bg-gradient-to-br from-white to-indigo-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
              <WeeklySchedule />
            </div>
          </div>

          {/* Right Column - Timeline & Recent */}
          <div className="space-y-6">
            {/* Pregnancy Timeline with Gradient */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
              <PregnancyTimeline />
            </div>
            
            {/* Recent Mothers with Gradient */}
            <div className="bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm">
              <RecentMothers />
            </div>
            
            {/* System Status */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">System Status</h3>
                <div className="flex items-center space-x-1 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Optimal</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">AI Agent</span>
                  <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Active</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">SMS Gateway</span>
                  <span className="font-medium bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">98% Success</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Database</span>
                  <span className="font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Healthy</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Last Sync</span>
                  <span className="font-medium">2 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;