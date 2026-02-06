// pages/AIAgentsDashboard.jsx
import React, { useState } from 'react';

const AIAgentsDashboard = () => {
  // Mock data for AI Agents based on the BPR document
  const initialAgents = [
    {
      id: 1,
      name: 'Timeline & Reminder Agent',
      description: 'Calculates pregnancy timelines, LMP, EDD, gestational age, and schedules ANC/PNC visits',
      status: 'active',
      lastActivity: '2024-01-15 14:30',
      tasksCompleted: 1245,
      currentRole: 'Schedule Generation',
      healthCheck: 'healthy',
      section: 'B' // From the document sections
    },
    {
      id: 2,
      name: 'Reminder Notification Agent',
      description: 'Sends automated reminders and push notifications to mothers about upcoming visits',
      status: 'active',
      lastActivity: '2024-01-15 14:25',
      tasksCompleted: 892,
      currentRole: 'Push Notifications',
      healthCheck: 'healthy',
      section: 'D'
    },
    {
      id: 3,
      name: 'Risk Detection Agent',
      description: 'Analyzes mother messages for risk classification (Low/Medium/High)',
      status: 'active',
      lastActivity: '2024-01-15 14:20',
      tasksCompleted: 567,
      currentRole: 'Message Analysis',
      healthCheck: 'healthy',
      section: 'E'
    },
    {
      id: 4,
      name: 'AI Agent (Low Risk Path)',
      description: 'Handles low-risk messages by providing safe responses and health advice',
      status: 'active',
      lastActivity: '2024-01-15 14:15',
      tasksCompleted: 312,
      currentRole: 'Safe Response Generation',
      healthCheck: 'healthy',
      section: 'E'
    },
    {
      id: 5,
      name: 'AI Agent (Medium Risk Path)',
      description: 'Flags medium-risk cases and creates dashboard alerts for health workers',
      status: 'active',
      lastActivity: '2024-01-15 14:10',
      tasksCompleted: 89,
      currentRole: 'Alert Generation',
      healthCheck: 'healthy',
      section: 'E'
    },
    {
      id: 6,
      name: 'AI Agent (High Risk Path)',
      description: 'Identifies high-risk emergencies and triggers immediate alerts',
      status: 'active',
      lastActivity: '2024-01-15 14:05',
      tasksCompleted: 23,
      currentRole: 'Emergency Detection',
      healthCheck: 'healthy',
      section: 'E'
    },
    {
      id: 7,
      name: 'Missed Visit Monitoring Agent',
      description: 'Monitors scheduled vs attended visits and flags missed appointments',
      status: 'active',
      lastActivity: '2024-01-15 14:00',
      tasksCompleted: 456,
      currentRole: 'Attendance Monitoring',
      healthCheck: 'healthy',
      section: 'G'
    },
    {
      id: 8,
      name: 'Follow-up Reminder Agent',
      description: 'Sends follow-up reminders for missed visits',
      status: 'active',
      lastActivity: '2024-01-15 13:55',
      tasksCompleted: 234,
      currentRole: 'Follow-up Notifications',
      healthCheck: 'healthy',
      section: 'G'
    }
  ];

  // Mock data for AI Agent Activities
  const initialActivities = [
    {
      id: 1,
      agentId: 3,
      agentName: 'Risk Detection Agent',
      action: 'Risk Classification',
      description: 'Analyzed message from Mother ID: M-0234 - Classified as Low Risk',
      timestamp: '2024-01-15 14:20:15',
      status: 'completed',
      motherId: 'M-0234'
    },
    {
      id: 2,
      agentId: 2,
      agentName: 'Reminder Notification Agent',
      action: 'Push Notification',
      description: 'Sent ANC visit reminder to 45 mothers',
      timestamp: '2024-01-15 14:18:30',
      status: 'completed',
      motherId: 'Batch'
    },
    {
      id: 3,
      agentId: 1,
      agentName: 'Timeline & Reminder Agent',
      action: 'Schedule Generation',
      description: 'Generated pregnancy timeline for new registration ID: M-0235',
      timestamp: '2024-01-15 14:15:45',
      status: 'completed',
      motherId: 'M-0235'
    },
    {
      id: 4,
      agentId: 5,
      agentName: 'AI Agent (Medium Risk Path)',
      action: 'Alert Creation',
      description: 'Flagged medium-risk case - Alert created on dashboard',
      timestamp: '2024-01-15 14:10:20',
      status: 'completed',
      motherId: 'M-0189'
    },
    {
      id: 5,
      agentId: 7,
      agentName: 'Missed Visit Monitoring Agent',
      action: 'Missed Visit Detection',
      description: 'Detected 3 missed ANC visits - Follow-up required',
      timestamp: '2024-01-15 14:05:10',
      status: 'completed',
      motherId: 'Multiple'
    },
    {
      id: 6,
      agentId: 4,
      agentName: 'AI Agent (Low Risk Path)',
      action: 'Safe Response',
      description: 'Provided health advice to Mother ID: M-0201',
      timestamp: '2024-01-15 14:00:05',
      status: 'completed',
      motherId: 'M-0201'
    },
    {
      id: 7,
      agentId: 8,
      agentName: 'Follow-up Reminder Agent',
      action: 'Follow-up Notification',
      description: 'Sent missed visit follow-up to 3 mothers',
      timestamp: '2024-01-15 13:58:30',
      status: 'completed',
      motherId: 'Batch'
    },
    {
      id: 8,
      agentId: 6,
      agentName: 'AI Agent (High Risk Path)',
      action: 'Emergency Alert',
      description: 'Triggered emergency alert for Mother ID: M-0178',
      timestamp: '2024-01-15 13:55:15',
      status: 'completed',
      motherId: 'M-0178'
    }
  ];

  const [agents] = useState(initialAgents);
  const [activities] = useState(initialActivities);
  const [filter, setFilter] = useState('all'); // 'all', 'section', 'status'
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const sections = ['all', 'B', 'D', 'E', 'G'];

  const filteredAgents = agents.filter(agent => {
    if (filter === 'section' && selectedSection !== 'all') {
      return agent.section === selectedSection;
    }
    if (filter === 'status' && selectedStatus !== 'all') {
      return agent.status === selectedStatus;
    }
    return true;
  });

  const getSectionName = (section) => {
    const sectionNames = {
      'B': 'Mother Registration & Pregnancy Setup',
      'D': 'Automated Reminders & Communication',
      'E': 'AI Risk Analysis & Escalation',
      'G': 'Missed Visit Monitoring'
    };
    return sectionNames[section] || section;
  };

  const getHealthCheckColor = (status) => {
    return status === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getActivityStatusColor = (status) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  // Statistics
  const totalAgents = agents.length;
  const activeAgents = agents.filter(a => a.status === 'active').length;
  const totalTasks = agents.reduce((sum, agent) => sum + agent.tasksCompleted, 0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">AI Agents Dashboard</h2>
        <p className="text-gray-600 mt-2">
          Monitoring and management of AI agents in the MaamaCare system
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total AI Agents</p>
              <p className="text-2xl font-bold text-gray-800">{totalAgents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Agents</p>
              <p className="text-2xl font-bold text-gray-800">{activeAgents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Tasks Completed</p>
              <p className="text-2xl font-bold text-gray-800">{totalTasks.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-medium text-gray-700">Filter by:</span>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Agents
            </button>
            
            <div className="relative">
              <select
                value={selectedSection}
                onChange={(e) => {
                  setFilter('section');
                  setSelectedSection(e.target.value);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Sections</option>
                {sections.filter(s => s !== 'all').map(section => (
                  <option key={section} value={section}>
                    Section {section}: {getSectionName(section)}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setFilter('status');
                  setSelectedStatus(e.target.value);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agents Grid */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Agents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{agent.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthCheckColor(agent.healthCheck)}`}>
                        {agent.healthCheck}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Section {agent.section}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Current Role:</span>
                    <p className="text-sm font-medium text-gray-800">{agent.currentRole}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Last Activity</span>
                      <p className="text-sm font-medium text-gray-800">{agent.lastActivity}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Tasks Completed</span>
                      <p className="text-sm font-medium text-gray-800">{agent.tasksCompleted.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">BPR Process: </span>
                    {getSectionName(agent.section)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Recent AI Agent Activities</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mother ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {activity.agentName}
                    </div>
                    <div className="text-sm text-gray-500">
                      ID: A-{activity.agentId.toString().padStart(3, '0')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {activity.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {activity.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {activity.motherId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getActivityStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {activities.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No recent activities found.
          </div>
        )}
      </div>

      {/* BPR Process Legend */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">BPR Process Sections Reference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="font-medium text-blue-600">Section B:</span>
            <p className="text-sm text-gray-600 mt-1">Mother Registration & Pregnancy Setup</p>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>Timeline & Reminder Agent</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="font-medium text-blue-600">Section D:</span>
            <p className="text-sm text-gray-600 mt-1">Automated Reminders & Communication</p>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>Reminder Notification Agent</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="font-medium text-blue-600">Section E:</span>
            <p className="text-sm text-gray-600 mt-1">AI Risk Analysis & Escalation</p>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>Risk Detection Agent</li>
              <li>Low/Medium/High Risk Path Agents</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <span className="font-medium text-blue-600">Section G:</span>
            <p className="text-sm text-gray-600 mt-1">Missed Visit Monitoring</p>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>Missed Visit Monitoring Agent</li>
              <li>Follow-up Reminder Agent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsDashboard;