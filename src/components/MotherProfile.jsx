import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Phone, 
  MessageSquare, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Heart,
  Shield,
  TrendingUp,
  Bell,
  MoreVertical,
  Edit,
  Download,
  Printer
} from 'lucide-react';

const MotherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app this would come from API
  const motherData = {
    id: id || '001',
    name: 'Sarah K.',
    age: 28,
    location: 'Kawempe West',
    phone: '+254 712 345 678',
    dueDate: '2024-06-15',
    gestationalAge: '24 weeks 3 days',
    riskLevel: 'medium',
    nextVisit: '2024-01-28',
    bloodPressure: '120/80',
    weight: '68 kg',
    height: '165 cm',
    bloodType: 'O+',
    parity: 'G2P1',
    edd: '2024-06-15',
    lmp: '2023-12-01',
    registeredDate: '2023-12-15',
    healthWorker: 'Dr. Sarah Johnson'
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User size={18} /> },
    { id: 'timeline', label: 'Pregnancy Timeline', icon: <Calendar size={18} /> },
    { id: 'messages', label: 'Messages & Symptoms', icon: <MessageSquare size={18} /> },
    { id: 'visits', label: 'Visit Attendance', icon: <CheckCircle size={18} /> },
    { id: 'interactions', label: 'Interaction Log', icon: <FileText size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-2xl font-bold">Mother Profile</h1>
                <p className="text-blue-100">Health Worker View</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Printer size={20} />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Download size={20} />
              </button>
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <Edit size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
                <User size={32} className="text-blue-600" />
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold text-gray-800">{motherData.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    motherData.riskLevel === 'high' 
                      ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800' 
                      : motherData.riskLevel === 'medium'
                      ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800'
                      : 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800'
                  }`}>
                    {motherData.riskLevel.charAt(0).toUpperCase() + motherData.riskLevel.slice(1)} Risk
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-gray-600">{motherData.age} years</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart size={16} className="text-gray-500" />
                    <span className="text-gray-600">{motherData.gestationalAge}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-gray-500" />
                    <span className="text-gray-600">{motherData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
              <div className="text-center">
                <p className="text-sm text-gray-600">Next Visit</p>
                <p className="text-xl font-bold text-gray-800">{motherData.nextVisit}</p>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Clock size={14} className="text-blue-500" />
                  <span className="text-sm text-blue-600">In 3 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab data={motherData} />}
            {activeTab === 'timeline' && <TimelineTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'visits' && <VisitsTab />}
            {activeTab === 'interactions' && <InteractionsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab Components
const OverviewTab = ({ data }) => (
  <div className="space-y-6">
    {/* Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Gestational Age</p>
            <p className="text-xl font-bold text-gray-800">{data.gestationalAge}</p>
          </div>
          <Calendar className="text-blue-500" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Blood Pressure</p>
            <p className="text-xl font-bold text-gray-800">{data.bloodPressure}</p>
          </div>
          <TrendingUp className="text-emerald-500" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Weight</p>
            <p className="text-xl font-bold text-gray-800">{data.weight}</p>
          </div>
          <TrendingUp className="text-amber-500" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Parity</p>
            <p className="text-xl font-bold text-gray-800">{data.parity}</p>
          </div>
          <User className="text-purple-500" />
        </div>
      </div>
    </div>

    {/* Details Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Personal Information */}
      <div className="bg-gray-50 rounded-xl p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Personal Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Age</span>
            <span className="font-medium">{data.age} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location</span>
            <span className="font-medium">{data.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone</span>
            <span className="font-medium">{data.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Blood Type</span>
            <span className="font-medium">{data.bloodType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Height</span>
            <span className="font-medium">{data.height}</span>
          </div>
        </div>
      </div>

      {/* Pregnancy Information */}
      <div className="bg-gray-50 rounded-xl p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Pregnancy Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Due Date</span>
            <span className="font-medium">{data.edd}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Menstrual Period</span>
            <span className="font-medium">{data.lmp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Registered Date</span>
            <span className="font-medium">{data.registeredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Assigned Health Worker</span>
            <span className="font-medium">{data.healthWorker}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Risk Level</span>
            <span className={`px-2 py-1 rounded text-sm font-medium ${
              data.riskLevel === 'high' 
                ? 'bg-red-100 text-red-800' 
                : data.riskLevel === 'medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-emerald-100 text-emerald-800'
            }`}>
              {data.riskLevel.charAt(0).toUpperCase() + data.riskLevel.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-center space-x-2">
          <Phone size={20} />
          <span>Call Mother</span>
        </div>
      </button>
      <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-center space-x-2">
          <MessageSquare size={20} />
          <span>Send Message</span>
        </div>
      </button>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-center space-x-2">
          <Calendar size={20} />
          <span>Schedule Visit</span>
        </div>
      </button>
      <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-center space-x-2">
          <AlertTriangle size={20} />
          <span>Report Alert</span>
        </div>
      </button>
    </div>
  </div>
);

const TimelineTab = () => (
  <div className="space-y-6">
    {/* Trimester Indicators */}
    <div className="grid grid-cols-3 gap-4">
      {[
        { trimester: 'First', weeks: '1-13', status: 'completed', color: 'from-emerald-500 to-green-500' },
        { trimester: 'Second', weeks: '14-26', status: 'current', color: 'from-blue-500 to-cyan-500' },
        { trimester: 'Third', weeks: '27-40', status: 'upcoming', color: 'from-purple-500 to-pink-500' },
      ].map((trimester, index) => (
        <div key={index} className="relative">
          <div className={`bg-gradient-to-r ${trimester.color} text-white p-4 rounded-xl text-center ${
            trimester.status === 'current' ? 'ring-2 ring-offset-2 ring-blue-500' : ''
          }`}>
            <h4 className="font-bold">{trimester.trimester} Trimester</h4>
            <p className="text-sm opacity-90">{trimester.weeks} weeks</p>
            <div className="mt-2">
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                {trimester.status === 'completed' ? '✓ Completed' : 
                 trimester.status === 'current' ? '● Current' : 'Upcoming'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ANC Schedule */}
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-4">ANC Schedule</h3>
      <div className="space-y-3">
        {[
          { visit: 'ANC 1', date: '2023-12-20', status: 'completed', action: 'Baseline assessment' },
          { visit: 'ANC 2', date: '2024-01-10', status: 'completed', action: 'TT vaccination' },
          { visit: 'ANC 3', date: '2024-01-28', status: 'scheduled', action: 'Ultrasound scan' },
          { visit: 'ANC 4', date: '2024-02-15', status: 'pending', action: 'Nutrition counseling' },
          { visit: 'ANC 5', date: '2024-03-05', status: 'pending', action: 'Growth monitoring' },
        ].map((visit, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-sm transition-all">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                visit.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                visit.status === 'scheduled' ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                {visit.status === 'completed' ? '✓' : visit.status === 'scheduled' ? '●' : '○'}
              </div>
              <div>
                <p className="font-medium">{visit.visit}</p>
                <p className="text-sm text-gray-600">{visit.action}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{visit.date}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                visit.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                visit.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {visit.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MessagesTab = () => (
  <div className="space-y-6">
    {/* Mother's Latest Submission */}
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-800">Latest Symptoms Report</h3>
        <span className="text-sm text-gray-600">Today, 10:30 AM</span>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-gray-700">
          "I've been experiencing mild headaches and some swelling in my feet for the past 2 days. 
          No fever or severe pain, but I wanted to report it."
        </p>
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
          ⚠️ Requires follow-up
        </span>
      </div>
    </div>

    {/* AI Response */}
    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-800">AI Assistant Response</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">AI Generated</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-gray-700">
          "Hello Sarah, thank you for reporting your symptoms. Mild headaches and swelling 
          can be common during pregnancy, but it's good that you're monitoring them. 
          I recommend: 1) Rest with feet elevated, 2) Drink plenty of water, 3) Monitor 
          blood pressure if possible. If headaches worsen or you experience vision changes, 
          please contact your health worker immediately."
        </p>
      </div>
    </div>

    {/* Message History */}
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-4">Message History</h3>
      <div className="space-y-3">
        {[
          { date: 'Jan 12', type: 'symptoms', message: 'Reported fatigue and nausea', status: 'responded' },
          { date: 'Jan 10', type: 'question', message: 'Asked about diet restrictions', status: 'answered' },
          { date: 'Jan 8', type: 'check-in', message: 'Weekly wellness check-in', status: 'completed' },
          { date: 'Jan 5', type: 'symptoms', message: 'Mild back pain', status: 'monitoring' },
        ].map((msg, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <MessageSquare size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium">{msg.message}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">{msg.date}</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">{msg.type}</span>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs ${
              msg.status === 'responded' ? 'bg-green-100 text-green-800' :
              msg.status === 'answered' ? 'bg-blue-100 text-blue-800' :
              'bg-amber-100 text-amber-800'
            }`}>
              {msg.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VisitsTab = () => (
  <div className="space-y-6">
    {/* Upcoming Visits */}
    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-4">Upcoming Visit</h3>
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-bold text-lg">ANC 3 - Ultrasound Scan</h4>
            <p className="text-gray-600">Scheduled for January 28, 2024</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-blue-600">
              <Clock size={16} />
              <span>10:00 AM</span>
            </div>
            <span className="text-sm text-gray-600">Health Center 2</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-2.5 rounded-lg hover:shadow-md transition-all">
            Mark as Attended
          </button>
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 rounded-lg hover:shadow-md transition-all">
            Reschedule
          </button>
          <button className="flex-1 bg-gradient-to-r from-red-500 to-rose-500 text-white py-2.5 rounded-lg hover:shadow-md transition-all">
            Mark as Missed
          </button>
        </div>
      </div>
    </div>

    {/* Visit History */}
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-4">Visit History</h3>
      <div className="space-y-3">
        {[
          { date: 'Jan 10, 2024', type: 'ANC 2', status: 'attended', healthWorker: 'Dr. Sarah', notes: 'TT vaccination given' },
          { date: 'Dec 20, 2023', type: 'ANC 1', status: 'attended', healthWorker: 'Nurse Jane', notes: 'Baseline assessment completed' },
          { date: 'Nov 15, 2023', type: 'Registration', status: 'attended', healthWorker: 'Nurse Jane', notes: 'Initial registration and history' },
        ].map((visit, index) => (
          <div key={index} className="p-4 bg-white rounded-lg hover:shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  visit.status === 'attended' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                }`}>
                  {visit.status === 'attended' ? '✓' : '✗'}
                </div>
                <div>
                  <p className="font-medium">{visit.type}</p>
                  <p className="text-sm text-gray-600">{visit.date}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                visit.status === 'attended' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
              }`}>
                {visit.status}
              </span>
            </div>
            <div className="pl-11">
              <p className="text-gray-700">{visit.notes}</p>
              <p className="text-sm text-gray-500 mt-1">Health Worker: {visit.healthWorker}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InteractionsTab = () => (
  <div className="space-y-6">
    {/* Interaction Log */}
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-4">Interaction Log</h3>
      <div className="space-y-4">
        {[
          { 
            type: 'call', 
            title: 'Outgoing Call', 
            time: 'Today, 11:30 AM', 
            duration: '15m 24s',
            outcome: 'Successful',
            color: 'from-blue-100 to-cyan-100',
            icon: <Phone className="text-blue-600" />
          },
          { 
            type: 'ai_action', 
            title: 'AI Risk Assessment', 
            time: 'Today, 10:35 AM', 
            duration: 'Generated',
            outcome: 'Medium Risk',
            color: 'from-purple-100 to-pink-100',
            icon: <Shield className="text-purple-600" />
          },
          { 
            type: 'message', 
            title: 'SMS Response Sent', 
            time: 'Today, 10:32 AM', 
            duration: 'Auto-sent',
            outcome: 'Delivered',
            color: 'from-emerald-100 to-green-100',
            icon: <MessageSquare className="text-emerald-600" />
          },
          { 
            type: 'ai_action', 
            title: 'Symptom Analysis', 
            time: 'Today, 10:30 AM', 
            duration: 'AI Processing',
            outcome: 'Mild Symptoms',
            color: 'from-amber-100 to-orange-100',
            icon: <AlertTriangle className="text-amber-600" />
          },
          { 
            type: 'system', 
            title: 'Automated Check-in', 
            time: 'Yesterday, 9:00 AM', 
            duration: 'System',
            outcome: 'Completed',
            color: 'from-gray-100 to-gray-200',
            icon: <Bell className="text-gray-600" />
          },
        ].map((log, index) => (
          <div key={index} className={`bg-gradient-to-r ${log.color} p-4 rounded-lg`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {log.icon}
                </div>
                <div>
                  <p className="font-medium">{log.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-600">{log.time}</span>
                    <span className="text-xs px-2 py-0.5 bg-white/50 rounded">Duration: {log.duration}</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                log.outcome.includes('Successful') || log.outcome === 'Delivered' || log.outcome === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : log.outcome.includes('Medium')
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {log.outcome}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Audit Trail */}
    <div className="bg-white rounded-xl p-5 border">
      <h3 className="font-bold text-lg text-gray-800 mb-4">AI Actions Audit Trail</h3>
      <div className="space-y-3">
        {[
          { action: 'Risk score calculation', timestamp: '2024-01-15 10:35:22', user: 'AI System', changes: 'Risk: Low → Medium' },
          { action: 'Symptom classification', timestamp: '2024-01-15 10:32:18', user: 'AI Model v2.1', changes: 'Classified as mild symptoms' },
          { action: 'Response generation', timestamp: '2024-01-15 10:31:45', user: 'AI Assistant', changes: 'Generated personalized advice' },
        ].map((audit, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{audit.action}</p>
                <p className="text-sm text-gray-600 mt-1">By: {audit.user}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{audit.timestamp}</p>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded mt-1 inline-block">
                  {audit.changes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MotherProfile;