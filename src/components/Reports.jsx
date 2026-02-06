import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { Download, Filter, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reports = () => {
  // Monthly Registrations Chart
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Mothers Registered',
        data: [12, 19, 15, 25, 22, 30, 28, 32, 29, 35, 38, 40],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Visits Completed',
        data: [8, 12, 10, 18, 20, 25, 22, 28, 25, 30, 32, 35],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  // Risk Distribution Pie Chart
  const riskData = {
    labels: ['Low Risk', 'Medium Risk', 'High Risk'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Clinic Performance Data
  const clinicData = {
    labels: ['Mukono HC', 'Nakifuma', 'Seeta MC', 'Namugongo', 'Kyetume'],
    datasets: [
      {
        label: 'Visit Completion Rate',
        data: [92, 85, 88, 78, 90],
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const keyMetrics = [
    {
      title: 'Total Registrations',
      value: '1,245',
      change: '+12.5%',
      trend: 'up',
      color: 'primary'
    },
    {
      title: 'Visit Completion Rate',
      value: '87%',
      change: '+3.2%',
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Average Risk Score',
      value: '24.3',
      change: '-1.5%',
      trend: 'down',
      color: 'yellow'
    },
    {
      title: 'Response Time',
      value: '2.4h',
      change: '-0.8h',
      trend: 'down',
      color: 'purple'
    },
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? (
      <TrendingUp className="text-green-600" size={16} />
    ) : (
      <TrendingDown className="text-red-600" size={16} />
    );
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return 'text-primary-600 bg-primary-50';
      case 'green': return 'text-green-600 bg-green-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      case 'purple': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
          <p className="text-gray-600">Performance metrics and system analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-gray-400" />
            <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Download size={20} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm">{metric.title}</p>
                <p className="text-2xl font-bold mt-2">{metric.value}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getColorClass(metric.color)}`}>
                {getTrendIcon(metric.trend)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Registrations */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Monthly Registrations & Visits</h3>
            <Filter size={20} className="text-gray-400 cursor-pointer" />
          </div>
          <Bar data={monthlyData} options={options} height={250} />
        </div>

        {/* Risk Distribution */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Risk Level Distribution</h3>
            <span className="text-sm text-gray-600">Total: 156 mothers</span>
          </div>
          <div className="h-64">
            <Pie data={riskData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Clinic Performance */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Clinic Performance</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Details →
          </button>
        </div>
        <Bar data={clinicData} options={{
          ...options,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                callback: (value) => `${value}%`
              }
            }
          }
        }} height={200} />
      </div>

      {/* Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Villages */}
        <div className="card">
          <h3 className="font-bold text-lg mb-4">Top Performing Villages</h3>
          <div className="space-y-3">
            {[
              { village: 'Mukono Central', registrations: 45, completion: 94 },
              { village: 'Seeta', registrations: 38, completion: 88 },
              { village: 'Nakifuma', registrations: 32, completion: 85 },
              { village: 'Kyetume', registrations: 28, completion: 90 },
              { village: 'Namugongo', registrations: 25, completion: 78 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{item.village}</p>
                  <p className="text-sm text-gray-600">{item.registrations} mothers</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{item.completion}%</p>
                  <p className="text-sm text-gray-600">Completion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts Summary */}
        <div className="card">
          <h3 className="font-bold text-lg mb-4">Alerts Summary (Last 30 Days)</h3>
          <div className="space-y-3">
            {[
              { type: 'Danger Signs', count: 24, resolved: 20, color: 'red' },
              { type: 'Missed Appointments', count: 38, resolved: 35, color: 'yellow' },
              { type: 'Follow-up Required', count: 56, resolved: 48, color: 'blue' },
              { type: 'Education Reminders', count: 120, resolved: 118, color: 'green' },
            ].map((item, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.type}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${item.color}-100 text-${item.color}-800`}>
                    {item.count} total
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{item.resolved} resolved</span>
                  <span className="font-medium">
                    {Math.round((item.resolved / item.count) * 100)}% success rate
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${item.color}-500 h-2 rounded-full`}
                    style={{ width: `${(item.resolved / item.count) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;