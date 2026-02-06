import React, { useState } from 'react';
import { 
  Users, 
  ClipboardList, 
  Bell, 
  CheckCircle, 
  AlertTriangle, 
  MessageSquare,
  Phone,
  Calendar,
  MapPin,
  Download,
  Filter,
  Search
} from 'lucide-react';

const HealthWorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  const tasks = [
    {
      id: 1,
      type: 'follow-up',
      title: 'Follow-up with Sarah K.',
      description: 'Check blood pressure and baby movement',
      priority: 'high',
      due: 'Today',
      mother: 'Sarah K.',
      village: 'Mukono Central'
    },
    {
      id: 2,
      type: 'visit',
      title: 'Home Visit - Grace M.',
      description: 'Postpartum checkup',
      priority: 'medium',
      due: 'Tomorrow',
      mother: 'Grace M.',
      village: 'Nakifuma'
    },
    {
      id: 3,
      type: 'assessment',
      title: 'Risk Assessment - Mary A.',
      description: 'High fever reported, needs assessment',
      priority: 'high',
      due: 'Today',
      mother: 'Mary A.',
      village: 'Namugongo'
    },
    {
      id: 4,
      type: 'education',
      title: 'Nutrition Education',
      description: 'Group session for 2nd trimester mothers',
      priority: 'low',
      due: 'Jan 25',
      mother: 'Group Session',
      village: 'Community Hall'
    },
  ];

  const alerts = [
    {
      id: 1,
      type: 'danger',
      message: 'Sarah K. reported severe headache',
      time: '2 hours ago',
      status: 'unread'
    },
    {
      id: 2,
      type: 'reminder',
      message: 'Grace M. missed her appointment',
      time: '1 day ago',
      status: 'read'
    },
    {
      id: 3,
      type: 'update',
      message: 'Joyce N. delivered successfully',
      time: '2 days ago',
      status: 'read'
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'danger': return 'bg-red-50 border-red-200';
      case 'reminder': return 'bg-yellow-50 border-yellow-200';
      case 'update': return 'bg-green-50 border-green-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Health Worker Dashboard</h2>
          <p className="text-gray-600">Tools and tasks for field health workers</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <Download size={20} />
            <span>Daily Report</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Assigned Mothers</p>
              <p className="text-3xl font-bold mt-2">24</p>
            </div>
            <div className="p-3 bg-primary-50 rounded-lg">
              <Users className="text-primary-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Tasks</p>
              <p className="text-3xl font-bold mt-2">8</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <ClipboardList className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pending Alerts</p>
              <p className="text-3xl font-bold mt-2">3</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Completed Today</p>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <CheckCircle className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks List */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h3 className="font-bold text-lg">Today's Tasks</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setActiveTab('tasks')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'tasks' ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All Tasks
                  </button>
                  <button 
                    onClick={() => setActiveTab('completed')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'completed' ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    Completed
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Search size={20} className="text-gray-400" />
                <Filter size={20} className="text-gray-400" />
              </div>
            </div>

            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{task.title}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      
                      <div className="flex items-center space-x-4 mt-3">
                        <div className="flex items-center space-x-1 text-sm">
                          <User size={14} className="text-gray-400" />
                          <span>{task.mother}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <MapPin size={14} className="text-gray-400" />
                          <span>{task.village}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <Calendar size={14} className="text-gray-400" />
                          <span>Due: {task.due}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100">
                        <CheckCircle size={16} />
                      </button>
                      <button className="p-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-dashed rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors">
              + Add New Task
            </button>
          </div>
        </div>

        {/* Alerts & Quick Actions */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
              <Bell className="text-red-600" size={20} />
              <span>Recent Alerts</span>
            </h3>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-3 border rounded-lg ${getAlertColor(alert.type)}`}>
                  <div className="flex items-start space-x-3">
                    {alert.type === 'danger' ? (
                      <AlertTriangle className="text-red-600 mt-0.5" size={16} />
                    ) : alert.type === 'reminder' ? (
                      <Bell className="text-yellow-600 mt-0.5" size={16} />
                    ) : (
                      <CheckCircle className="text-green-600 mt-0.5" size={16} />
                    )}
                    <div>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
                    </div>
                    {alert.status === 'unread' && (
                      <div className="w-2 h-2 bg-red-500 rounded-full ml-auto"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <MessageSquare className="text-primary-600" size={24} />
                  <span className="text-sm font-medium">Send Bulk SMS</span>
                </div>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="text-green-600" size={24} />
                  <span className="text-sm font-medium">Quick Call</span>
                </div>
              </button>
              <button className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <ClipboardList className="text-yellow-600" size={24} />
                  <span className="text-sm font-medium">Log Visit</span>
                </div>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <Users className="text-purple-600" size={24} />
                  <span className="text-sm font-medium">Add Mother</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWorkerDashboard;