import React from 'react';
import { Calendar, Clock, MapPin, Bell, CheckCircle } from 'lucide-react';

const UpcomingVisits = () => {
  const visits = [
    {
      id: 1,
      mother: 'Sarah K.',
      type: 'Routine Checkup',
      date: '2024-01-20',
      time: '10:00 AM',
      clinic: 'Mukono Health Center',
      reminder: 'Maama App',
      status: 'confirmed'
    },
    {
      id: 2,
      mother: 'Grace M.',
      type: 'Ultrasound Scan',
      date: '2024-01-22',
      time: '2:00 PM',
      clinic: 'Nakifuma Clinic',
      reminder: 'Maama App',
      status: 'pending'
    },
    {
      id: 3,
      mother: 'Joyce N.',
      type: 'Vaccination',
      date: '2024-01-25',
      time: '9:30 AM',
      clinic: 'Seeta Medical Center',
      reminder: 'Voice Call',
      status: 'confirmed'
    },
    {
      id: 4,
      mother: 'Mary A.',
      type: 'Postpartum Check',
      date: '2024-01-18',
      time: '11:00 AM',
      clinic: 'Namugongo Clinic',
      reminder: 'WhatsApp',
      status: 'confirmed'
    },
  ];

  const getReminderColor = (reminder) => {
    switch (reminder) {
      case 'Maama App': return 'bg-green-100 text-green-800';
      case 'SMS': return 'bg-blue-100 text-blue-800';
      case 'Voice Call': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    return status === 'confirmed' ? (
      <CheckCircle className="text-green-500" size={16} />
    ) : (
      <Clock className="text-yellow-500" size={16} />
    );
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-bold text-lg flex items-center space-x-21">
          <Calendar className="text-primary-600" size={40} />
          <span>Upcoming Visits</span>
        </h3>
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
          This Week
        </span>
      </div>

      <div className="space-y-4">
        {visits.map((visit) => (
          <div key={visit.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{visit.mother}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getReminderColor(visit.reminder)}`}>
                    {visit.reminder}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{visit.type}</p>
                
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{visit.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{visit.time}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{visit.clinic}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                {getStatusIcon(visit.status)}
                <button className="p-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100">
                  <Bell size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Total upcoming visits: {visits.length}</span>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Calendar →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingVisits;