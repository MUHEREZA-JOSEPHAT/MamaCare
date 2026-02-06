import React from 'react';
import { AlertTriangle, Phone, Clock, CheckCircle } from 'lucide-react';

const DangerAlerts = () => {
  const alerts = [
    {
      id: 1,
      mother: 'Sarah K.',
      village: 'Mukono Central',
      symptom: 'High Fever & Bleeding',
      time: '2 hours ago',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      mother: 'Grace M.',
      village: 'Nakifuma',
      symptom: 'Severe Headache',
      time: '5 hours ago',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: 3,
      mother: 'Joyce N.',
      village: 'Seeta',
      symptom: 'Reduced Fetal Movement',
      time: '1 day ago',
      status: 'resolved',
      priority: 'high'
    },
    {
      id: 4,
      mother: 'Mary Namirember.',
      village: 'Juuko',
      symptom: 'Reduced Fetal Movement',
      time: '2 day ago',
      status: 'resolved',
      priority: 'high'
    },
    {
      id: 5,
      mother: 'Joyce N.',
      village: 'Seeta',
      symptom: 'Reduced Fetal Movement',
      time: '1 day ago',
      status: 'resolved',
      priority: 'high'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority) => {
    return priority === 'high' ? '🔴' : '🟡';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg flex items-center space-x-2">
          <AlertTriangle className="text-red-600" size={20} />
          <span>Danger Alerts</span>
        </h3>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
          {alerts.filter(a => a.status !== 'resolved').length} Active
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{alert.mother}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                    {alert.village}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.symptom}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(alert.status)}`}>
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{alert.time}</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getPriorityIcon(alert.priority)}</span>
                {alert.status === 'pending' && (
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                    <Phone size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default DangerAlerts;