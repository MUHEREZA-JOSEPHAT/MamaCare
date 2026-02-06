// pages/HealthWorkersList.jsx
import React, { useState } from 'react';

const HealthWorkersList = () => {
  // Mock data - in a real app, this would come from an API
  const mockHealthWorkers = [
    {
      id: 1,
      name: 'Dr. Mugula Stuart',
      email: 'Stuart.j@health.org',
      phone: '+1234567890',
      facility: 'Main Hospital',
      location: 'New York',
      status: 'active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Nurse Mark ',
      email: 'mark.d@health.org',
      phone: '+1234567891',
      facility: 'Community Clinic A',
      location: 'Boston',
      status: 'active',
      lastLogin: '2024-01-14',
    },
    {
      id: 3,
      name: 'Dr. Lisa Mugera',
      email: 'lisa.w@health.org',
      phone: '+1234567892',
      facility: 'Regional Health Center',
      location: 'Chicago',
      status: 'disabled',
      lastLogin: '2024-01-10',
    },
    {
      id: 4,
      name: 'Paramedic James Walugembe',
      email: 'james.w@health.org',
      phone: '+1234567893',
      facility: 'Mobile Unit 1',
      location: 'Miami',
      status: 'active',
      lastLogin: '2024-01-16',
    },
    {
      id: 5,
      name: 'Nurse Emily Mugenyi',
      email: 'emily.b@health.org',
      phone: '+1234567894',
      facility: 'Community Clinic B',
      location: 'Seattle',
      status: 'active',
      lastLogin: '2024-01-15',
    },
  ];

  // Initialize state directly with mock data
  const [healthWorkers, setHealthWorkers] = useState(mockHealthWorkers);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'disabled'

  const filteredWorkers = healthWorkers.filter(worker => {
    if (filter === 'all') return true;
    return worker.status === filter;
  });

  const toggleWorkerStatus = (id) => {
    setHealthWorkers(workers =>
      workers.map(worker =>
        worker.id === id
          ? { ...worker, status: worker.status === 'active' ? 'disabled' : 'active' }
          : worker
      )
    );
  };

  const resetPassword = (id, name) => {
    // In a real app, this would make an API call
    const newPassword = Math.random().toString(36).slice(-8) + '!@#';
    alert(`Password reset for ${name}\nNew temporary password: ${newPassword}`);
    
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      disabled: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Health Workers List</h2>
        <div className="text-sm text-gray-600">
          Total: {healthWorkers.length} | 
          Active: {healthWorkers.filter(w => w.status === 'active').length} | 
          Disabled: {healthWorkers.filter(w => w.status === 'disabled').length}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-medium text-gray-700">Filter by status:</span>
          {['all', 'active', 'disabled'].map((statusType) => (
            <button
              key={statusType}
              onClick={() => setFilter(statusType)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === statusType
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {statusType.charAt(0).toUpperCase() + statusType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Health Workers Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Health Worker
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Facility/Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredWorkers.map((worker) => (
                <tr key={worker.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {worker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {worker.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: HW-{worker.id.toString().padStart(3, '0')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{worker.email}</div>
                    <div className="text-sm text-gray-500">{worker.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{worker.facility}</div>
                    <div className="text-sm text-gray-500">{worker.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(worker.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {worker.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => toggleWorkerStatus(worker.id)}
                        className={`px-3 py-1 rounded text-sm ${
                          worker.status === 'active'
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {worker.status === 'active' ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => resetPassword(worker.id, worker.name)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                      >
                        Reset Password
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredWorkers.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No health workers found with the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthWorkersList;