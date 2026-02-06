import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  MessageCircle, 
  Phone, 
  Globe, 
  Shield,
  User,
  Save,
  Moon,
  Sun,
  Wifi,
  Volume2,
  Download,
  Clock  // Added this
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    whatsapp: true,
    voice: false,
    reminders: true,
    alerts: true,
    reports: false,
  });

  const [preferences, setPreferences] = useState({
    language: 'english',
    timezone: 'Africa/Kampala',
    theme: 'light',
    autoBackup: true,
    offlineMode: true,
    dataSaver: false,
  });

  const healthWorkers = [
    { id: 1, name: 'Dr.Yiga Jonathan M.', role: 'Senior Midwife', phone: '+256 712 111 111', status: 'active' },
    { id: 2, name: 'Nurse Grace K.', role: 'Field Nurse', phone: '+256 712 111 112', status: 'active' },
    { id: 3, name: 'Dr. James L.', role: 'Gynecologist', phone: '+256 712 111 113', status: 'inactive' },
    { id: 4, name: 'Nurse Hope N.', role: 'Community Nurse', phone: '+256 712 111 114', status: 'active' },
  ];

  const clinics = [
    { id: 1, name: 'Mukono Health Center', location: 'Mukono Central', mothers: 45, status: 'active' },
    { id: 2, name: 'Nakifuma Clinic', location: 'Nakifuma', mothers: 32, status: 'active' },
    { id: 3, name: 'Seeta Medical Center', location: 'Seeta', mothers: 38, status: 'active' },
    { id: 4, name: 'Namugongo Clinic', location: 'Namugongo', mothers: 25, status: 'maintenance' },
  ];

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <SettingsIcon size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'communication', label: 'Communication', icon: <MessageCircle size={18} /> },
    { id: 'security', label: 'Security', icon: <Shield size={18} /> },
    { id: 'health-workers', label: 'Health Workers', icon: <User size={18} /> },
    { id: 'clinics', label: 'Clinics', icon: <Globe size={18} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
          <p className="text-gray-600 dark:text-gray-400">Configure MaamaCare system preferences</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64">
          <div className="card sticky top-6">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="card space-y-6">
              <h3 className="font-bold text-lg dark:text-white">General Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    System Language
                  </label>
                  <select
                    value={preferences.language}
                    onChange={(e) => handlePreferenceChange('language', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    <option value="english">English</option>
                    <option value="luganda">Luganda</option>
                    <option value="swahili">Swahili</option>
                    <option value="french">French</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time Zone
                  </label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    <option value="Africa/Kampala">East Africa Time (EAT)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Theme
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handlePreferenceChange('theme', 'light')}
                      className={`flex-1 p-4 border rounded-lg flex flex-col items-center space-y-2 ${
                        preferences.theme === 'light' 
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-700' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700'
                      }`}
                    >
                      <Sun size={24} className="text-yellow-500" />
                      <span className="dark:text-gray-300">Light Mode</span>
                    </button>
                    <button
                      onClick={() => handlePreferenceChange('theme', 'dark')}
                      className={`flex-1 p-4 border rounded-lg flex flex-col items-center space-y-2 ${
                        preferences.theme === 'dark' 
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-700' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700'
                      }`}
                    >
                      <Moon size={24} className="text-indigo-500" />
                      <span className="dark:text-gray-300">Dark Mode</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Wifi size={20} className="text-gray-500" />
                      <div>
                        <p className="font-medium dark:text-gray-300">Offline Mode</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Work without internet connection</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('offlineMode', !preferences.offlineMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        preferences.offlineMode ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        preferences.offlineMode ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Download size={20} className="text-gray-500" />
                      <div>
                        <p className="font-medium dark:text-gray-300">Auto Backup</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Daily backup to cloud</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('autoBackup', !preferences.autoBackup)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        preferences.autoBackup ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        preferences.autoBackup ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card space-y-6">
              <h3 className="font-bold text-lg dark:text-white">Notification Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Bell size={20} className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-gray-300">Email Notifications</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates via email</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('email')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notifications.email ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications.email ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-gray-300">SMS Alerts</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Important alerts via SMS</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('sms')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notifications.sms ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications.sms ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={20} className="text-green-500" />
                    <div>
                      <p className="font-medium dark:text-gray-300">WhatsApp Reminders</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Appointment reminders via WhatsApp</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('whatsapp')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notifications.whatsapp ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications.whatsapp ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Volume2 size={20} className="text-gray-500" />
                    <div>
                      <p className="font-medium dark:text-gray-300">Voice Call Alerts</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Emergency alerts via voice calls</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotificationChange('voice')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      notifications.voice ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications.voice ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'communication' && (
            <div className="card space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg flex items-center space-x-2 dark:text-white">
                  <MessageCircle className="text-blue-600" size={20} />
                  <span>Communication Settings</span>
                </h3>
                <button 
                  onClick={() => alert('Settings saved!')}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save size={18} />
                  <span>Save Settings</span>
                </button>
              </div>

              {/* Reminder Channels */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Reminder Channels</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Configure how mothers receive reminders and alerts
                </p>

                <div className="space-y-3">
                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <MessageCircle className="text-green-600 dark:text-green-400" size={20} />
                      </div>
                      <div>
                        <p className="font-medium dark:text-gray-300">WhatsApp Messages</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Appointment reminders, health tips, follow-ups
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select className="border rounded-lg px-3 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>English</option>
                        <option>Luganda</option>
                        <option>Swahili</option>
                      </select>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-green-500`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                  </div>

                  {/* SMS */}
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <MessageCircle className="text-blue-600 dark:text-blue-400" size={20} />
                      </div>
                      <div>
                        <p className="font-medium dark:text-gray-300">SMS Text Messages</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Works with all phones, no internet needed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select className="border rounded-lg px-3 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>English</option>
                        <option>Luganda</option>
                      </select>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                  </div>

                  {/* Voice Calls */}
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Volume2 className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <div>
                        <p className="font-medium dark:text-gray-300">Voice Call Alerts</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Emergency alerts, important updates in local language
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select className="border rounded-lg px-3 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>Luganda</option>
                        <option>English</option>
                        <option>Swahili</option>
                      </select>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-purple-500`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Templates */}
              <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Message Templates</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Appointment Reminder
                    </label>
                    <textarea 
                      defaultValue="Hello {name}, your appointment at {clinic} is on {date} at {time}. Please arrive 15 minutes early."
                      className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      rows="3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Danger Alert
                    </label>
                    <textarea 
                      defaultValue="URGENT: Please contact health worker immediately for {symptom}. Call {phone}."
                      className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      rows="3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nutrition Advice
                    </label>
                    <textarea 
                      defaultValue="Hi {name}, remember to eat iron-rich foods today. Include greens, beans, and fruits."
                      className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      rows="3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Follow-up Check
                    </label>
                    <textarea 
                      defaultValue="Hello {name}, this is a follow-up from your visit. How are you and baby feeling today?"
                      className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              {/* Scheduling & Timing */}
              <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Scheduling & Timing</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium dark:text-gray-300">Appointment Reminders</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Send before appointment</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="border rounded-lg px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <option>2 days</option>
                          <option>1 day</option>
                          <option>Same day</option>
                        </select>
                        <select className="border rounded-lg px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                          <option>10:00 AM</option>
                          <option>9:00 AM</option>
                          <option>2:00 PM</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium dark:text-gray-300">Daily Health Tips</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nutrition & wellness advice</p>
                      </div>
                      <select className="border rounded-lg px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium dark:text-gray-300">Offline Retry</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Retry failed messages</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="number" 
                          defaultValue="3"
                          className="w-16 px-2 py-1 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">times</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium dark:text-gray-300">Data Saver Mode</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Reduce data usage</p>
                      </div>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Communication */}
              <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Test Communication</h4>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-medium text-blue-800 dark:text-blue-300">Send Test Message</p>
                      <p className="text-sm text-blue-700 dark:text-blue-400">
                        Test your communication settings with a sample message
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <select className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>WhatsApp</option>
                        <option>SMS</option>
                        <option>Voice Call</option>
                      </select>
                      <button 
                        onClick={() => alert('Test message sent!')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        Send Test
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Settings */}
              <div className="space-y-4 pt-6 border-t dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Network Settings</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Wifi size={20} className="text-gray-500" />
                        <div>
                          <p className="font-medium dark:text-gray-300">Offline Mode</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Work without internet</p>
                        </div>
                      </div>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-green-500`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Clock size={20} className="text-gray-500" />
                        <div>
                          <p className="font-medium dark:text-gray-300">Sync Interval</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Data synchronization</p>
                        </div>
                      </div>
                      <select className="border rounded-lg px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Download size={20} className="text-gray-500" />
                        <div>
                          <p className="font-medium dark:text-gray-300">Auto Sync</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Sync when online</p>
                        </div>
                      </div>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-green-500`}>
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Globe size={20} className="text-gray-500" />
                        <div>
                          <p className="font-medium dark:text-gray-300">Fallback Language</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">When primary fails</p>
                        </div>
                      </div>
                      <select className="border rounded-lg px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <option>Luganda</option>
                        <option>English</option>
                        <option>Swahili</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'health-workers' && (
            <div className="card space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg dark:text-white">Health Workers</h3>
                <button className="btn-primary">Add Health Worker</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Name</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Role</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Contact</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-gray-700">
                    {healthWorkers.map((worker) => (
                      <tr key={worker.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                              <span className="text-primary-700 dark:text-primary-300 font-medium">
                                {worker.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="font-medium dark:text-white">{worker.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-700 dark:text-gray-300">{worker.role}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Phone size={16} className="text-gray-400" />
                            <span className="dark:text-gray-300">{worker.phone}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            worker.status === 'active' 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                          }`}>
                            {worker.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                              Edit
                            </button>
                            <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'clinics' && (
            <div className="card space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg dark:text-white">Clinics & Facilities</h3>
                <button className="btn-primary">Add Clinic</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinics.map((clinic) => (
                  <div key={clinic.id} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold dark:text-white">{clinic.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{clinic.location}</p>
                        <div className="flex items-center space-x-4 mt-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {clinic.mothers} mothers
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            clinic.status === 'active' 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                              : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                          }`}>
                            {clinic.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                          <span className="dark:text-gray-300">Edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;