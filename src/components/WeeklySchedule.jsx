import React from 'react';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

const WeeklySchedule = () => {
  const schedule = [
    { day: 'Mon', date: '15', visits: 8, highlight: true },
    { day: 'Tue', date: '16', visits: 12, highlight: false },
    { day: 'Wed', date: '17', visits: 10, highlight: false },
    { day: 'Thu', date: '18', visits: 6, highlight: false },
    { day: 'Fri', date: '19', visits: 14, highlight: false },
    { day: 'Sat', date: '20', visits: 4, highlight: false },
    { day: 'Sun', date: '21', visits: 2, highlight: false },
  ];

  const todaysVisits = [
    { time: '09:00', mother: 'Sarah K.', type: 'Routine', location: 'Mukono HC', priority: 'normal' },
    { time: '11:30', mother: 'Grace M.', type: 'Ultrasound', location: 'Nakifuma', priority: 'high' },
    { time: '14:00', mother: 'Joyce N.', type: 'Checkup', location: 'Seeta MC', priority: 'normal' },
    { time: '16:30', mother: 'Mary A.', type: 'Postpartum', location: 'Namugongo', priority: 'medium' },
  ];

  return (
    <div className="bg-white rounded-2xl border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="text-primary-600" size={24} />
          <div>
            <h3 className="font-bold text-lg">Weekly Schedule</h3>
            <p className="text-sm text-gray-600">Today: 4 visits scheduled</p>
          </div>
        </div>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View Calendar →
        </button>
      </div>

      {/* Week View */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {schedule.map((day, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl text-center ${
              day.highlight
                ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <p className="text-sm font-medium">{day.day}</p>
            <p className="text-xl font-bold mt-1">{day.date}</p>
            <div className="mt-2">
              <div className={`text-xs px-2 py-1 rounded-full ${
                day.highlight ? 'bg-white/20' : 'bg-primary-100 text-primary-800'
              }`}>
                {day.visits} visits
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Visits */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Today's Appointments</h4>
        {todaysVisits.map((visit, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="font-bold text-gray-800">{visit.time}</p>
                <div className={`w-3 h-3 rounded-full mx-auto mt-1 ${
                  visit.priority === 'high' ? 'bg-red-500' :
                  visit.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                }`}></div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <User size={14} className="text-gray-400" />
                  <span className="font-medium">{visit.mother}</span>
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-600">{visit.type}</span>
                  <div className="flex items-center space-x-1">
                    <MapPin size={12} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{visit.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;