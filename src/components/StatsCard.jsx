import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const StatsCard = ({ title, value, change, trend, icon, bgColor, details }) => {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp size={16} className="text-green-500" />;
    if (trend === 'down') return <TrendingDown size={16} className="text-red-500" />;
    if (trend === 'warning') return <AlertCircle size={16} className="text-amber-500" />;
    return null;
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border group hover:shadow-lg transition-all duration-300">
      {/* Background accent */}
      <div className={`absolute top-0 left-0 w-1 h-full ${bgColor}`}></div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            
            <div className="flex items-center space-x-2 mt-3">
              {getTrendIcon()}
              <span className={`text-sm font-medium ${
                trend === 'up' ? 'text-green-600' :
                trend === 'down' ? 'text-red-600' :
                trend === 'warning' ? 'text-amber-600' : 'text-gray-600'
              }`}>
                {change}
              </span>
            </div>
            
            {details && (
              <p className="text-xs text-gray-500 mt-2">{details}</p>
            )}
          </div>
          
          <div className={`p-3 rounded-xl ${bgColor} shadow-md`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;