import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Phone, 
  MessageCircle, 
  Calendar, 
  MapPin,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const MothersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const mothers = [
    {
      id: 1,
      name: 'Sarah K.',
      phone: '+256 712 345 678',
      age: 28,
      village: 'Mukono Central',
      trimester: '2nd',
      edd: '2024-06-15',
      lastVisit: '2024-01-10',
      status: 'active',
      risk: 'low'
    },
    {
      id: 2,
      name: 'Grace M.',
      phone: '+256 712 345 679',
      age: 32,
      village: 'Nakifuma',
      trimester: '3rd',
      edd: '2024-03-20',
      lastVisit: '2024-01-12',
      status: 'active',
      risk: 'medium'
    },
    {
      id: 3,
      name: 'Joyce N.',
      phone: '+256 712 345 680',
      age: 25,
      village: 'Seeta',
      trimester: '1st',
      edd: '2024-08-30',
      lastVisit: '2024-01-05',
      status: 'active',
      risk: 'low'
    },
    {
      id: 4,
      name: 'Mary A.',
      phone: '+256 712 345 681',
      age: 35,
      village: 'Namugongo',
      trimester: '3rd',
      edd: '2024-02-28',
      lastVisit: '2024-01-15',
      status: 'postpartum',
      risk: 'high'
    },
    {
      id: 5,
      name: 'Esther W.',
      phone: '+256 712 345 682',
      age: 22,
      village: 'Kyetume',
      trimester: '2nd',
      edd: '2024-07-10',
      lastVisit: '2024-01-08',
      status: 'active',
      risk: 'low'
    },
  ];

  const filteredMothers = mothers.filter(mother => {
    const matchesSearch = mother.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mother.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mother.phone.includes(searchTerm);
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'high-risk') return matchesSearch && mother.risk === 'high';
    if (filter === 'postpartum') return matchesSearch && mother.status === 'postpartum';
    return matchesSearch && mother.trimester.includes(filter);
  });

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' 
      ? 'bg-primary-100 text-primary-800' 
      : 'bg-purple-100 text-purple-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Registered Mothers</h2>
          <p className="text-gray-600">Manage and monitor all pregnant mothers in the system</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <Users size={20} />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, village, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Mothers</option>
                <option value="1st">1st Trimester</option>
                <option value="2nd">2nd Trimester</option>
                <option value="3rd">3rd Trimester</option>
                <option value="postpartum">Postpartum</option>
                <option value="high-risk">High Risk</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Mother</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Contact</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Trimester</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Village</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">EDD</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Risk Level</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredMothers.map((mother) => (
                <tr key={mother.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium">{mother.name}</p>
                      <p className="text-sm text-gray-500">Age: {mother.age}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(mother.status)}`}>
                        {mother.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-400" />
                      <span className="font-medium">{mother.phone}</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button className="p-1 text-green-600 hover:text-green-700">
                        <MessageCircle size={16} />
                      </button>
                      <button className="p-1 text-blue-600 hover:text-blue-700">
                        <Phone size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {mother.trimester} Trimester
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{mother.village}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} className="text-gray-400" />
                      <span>{mother.edd}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(mother.risk)}`}>
                      {mother.risk.charAt(0).toUpperCase() + mother.risk.slice(1)} Risk
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="More">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">{mothers.length}</span> mothers
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600">Total Mothers</p>
          <p className="text-2xl font-bold mt-1">{mothers.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600">Active Pregnancies</p>
          <p className="text-2xl font-bold mt-1">{mothers.filter(m => m.status === 'active').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600">High Risk</p>
          <p className="text-2xl font-bold mt-1">{mothers.filter(m => m.risk === 'high').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-sm text-gray-600">Due This Month</p>
          <p className="text-2xl font-bold mt-1">3</p>
        </div>
      </div>
    </div>
  );
};

export default MothersList;