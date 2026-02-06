import React from 'react';
import { User, Phone, Calendar, MapPin, Clock, MessageCircle } from 'lucide-react';

const RecentMothers = () => {
  const recentMothers = [
    {
      id: 1,
      name: 'Esther W.',
      age: 22,
      phone: '+256 712 345 682',
      village: 'Kyetume',
      registeredDate: '2024-01-15',
      trimester: '2nd',
      lastContact: '2 hours ago'
    },
    {
      id: 2,
      name: 'Faith N.',
      age: 26,
      phone: '+256 712 345 683',
      village: 'Kasana',
      registeredDate: '2024-01-14',
      trimester: '1st',
      lastContact: '1 day ago'
    },
    {
      id: 3,
      name: 'Hope K.',
      age: 31,
      phone: '+256 712 345 684',
      village: 'Ntinda',
      registeredDate: '2024-01-13',
      trimester: '3rd',
      lastContact: '3 days ago'
    },
    {
      id: 4,
      name: 'Peace M.',
      age: 24,
      phone: '+256 712 345 685',
      village: 'Bweyogerere',
      registeredDate: '2024-01-12',
      trimester: '2nd',
      lastContact: 'Yesterday'
    },
  ];

  const getTrimesterColor = (trimester) => {
    switch (trimester) {
      case '1st': return 'bg-blue-100 text-blue-800';
      case '2nd': return 'bg-green-100 text-green-800';
      case '3rd': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Recently Registered</h3>
        <span className="text-sm text-primary-600 font-medium">Last 7 days</span>
      </div>

      <div className="space-y-4">
        {recentMothers.map((mother) => (
          <div key={mother.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="text-primary-600" size={20} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{mother.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getTrimesterColor(mother.trimester)}`}>
                      {mother.trimester}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Age: {mother.age} • {mother.village}</p>
                  
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Phone size={12} />
                      <span>{mother.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{mother.lastContact}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <span className="text-xs text-gray-500 flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>Reg: {mother.registeredDate}</span>
                </span>
                <div className="flex space-x-1">
                  <button className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100">
                    <MessageCircle size={14} />
                  </button>
                  <button className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                    <Phone size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <button className="w-full py-2 text-center text-primary-600 hover:text-primary-700 font-medium">
          View All Recent Registrations →
        </button>
      </div>
    </div>
  );
};

export default RecentMothers;