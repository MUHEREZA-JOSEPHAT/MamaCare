import React from 'react';
import { Calendar, Baby, Heart, Award, CheckCircle } from 'lucide-react';

const PregnancyTimeline = () => {
  const stages = [
    {
      id: 1,
      title: 'First Trimester',
      weeks: 'Weeks 1-12',
      icon: <Heart className="text-red-500" size={20} />,
      description: 'Critical development period',
      tasks: ['Initial checkup', 'Folic acid supplements', 'Ultrasound scan'],
      completed: true,
    },
    {
      id: 2,
      title: 'Second Trimester',
      weeks: 'Weeks 13-27',
      icon: <Baby className="text-primary-500" size={20} />,
      description: 'Growth and movement period',
      tasks: ['Anatomy scan', 'Glucose test', 'Regular checkups'],
      completed: true,
    },
    {
      id: 3,
      title: 'Third Trimester',
      weeks: 'Weeks 28-40',
      icon: <Award className="text-yellow-500" size={20} />,
      description: 'Final preparation phase',
      tasks: ['Weekly checkups', 'Birth plan', 'Hospital bag'],
      completed: false,
      current: true,
    },
    {
      id: 4,
      title: 'Postpartum',
      weeks: 'Weeks 1-6',
      icon: <CheckCircle className="text-green-500" size={20} />,
      description: 'Recovery and newborn care',
      tasks: ['Postpartum checkup', 'Vaccinations', 'Breastfeeding support'],
      completed: false,
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">Pregnancy Timeline</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Average: 40 weeks</span>
        </div>
      </div>

      <div className="space-y-6">
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative">
            {/* Timeline line */}
            {index < stages.length - 1 && (
              <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200"></div>
            )}

            <div className="flex">
              {/* Icon */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  stage.current 
                    ? 'bg-primary-100 border-2 border-primary-500' 
                    : stage.completed 
                    ? 'bg-green-100' 
                    : 'bg-gray-100'
                }`}>
                  {stage.icon}
                </div>
                {stage.current && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <div className="ml-4 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">{stage.title}</h4>
                    <p className="text-sm text-gray-600">{stage.weeks}</p>
                  </div>
                  {stage.completed ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Completed
                    </span>
                  ) : stage.current ? (
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      Current
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-700 mt-2">{stage.description}</p>

                {/* Tasks */}
                <div className="mt-3 space-y-1">
                  {stage.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        stage.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      <span className={`text-sm ${
                        stage.completed ? 'text-green-700 line-through' : 'text-gray-600'
                      }`}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar for current stage */}
                {stage.current && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Next milestone:</span>
          <span className="font-medium">Delivery - Estimated June 15, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default PregnancyTimeline;