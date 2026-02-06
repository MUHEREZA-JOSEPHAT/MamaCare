import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const HealthMetricsChart = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Registrations',
        data: [45, 52, 48, 65, 72, 68, 75, 82, 78, 85, 92, 98],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Completed Visits',
        data: [38, 45, 42, 58, 65, 60, 68, 72, 70, 78, 85, 90],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const riskData = {
    labels: ['Low Risk', 'Medium Risk', 'High Risk', 'Critical'],
    datasets: [
      {
        label: 'Mothers by Risk Level',
        data: [112, 28, 12, 4],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(185, 28, 28, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(185, 28, 28)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <div className="bg-white rounded-2xl border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-lg">Health Analytics Dashboard</h3>
          <p className="text-gray-600">Monthly trends and risk distribution</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last Quarter</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-80">
          <h4 className="font-semibold text-gray-700 mb-4">Registration & Visit Trends</h4>
          <Line data={lineData} options={options} />
        </div>
        
        <div className="h-80">
          <h4 className="font-semibold text-gray-700 mb-4">Risk Level Distribution</h4>
          <div className="flex items-center justify-center h-full">
            <div className="w-64 h-64">
              <Bar 
                data={riskData} 
                options={{
                  ...options,
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false,
                    }
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats below charts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-600">156</p>
          <p className="text-sm text-gray-600">Total Mothers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-600">89%</p>
          <p className="text-sm text-gray-600">Visit Completion</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-600">12</p>
          <p className="text-sm text-gray-600">High Risk Cases</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">2.4h</p>
          <p className="text-sm text-gray-600">Avg Response Time</p>
        </div>
      </div>
    </div>
  );
};

export default HealthMetricsChart;