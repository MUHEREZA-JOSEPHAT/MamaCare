import React, { useState, useEffect } from 'react';
import { 
  UserPlus, Calendar, MapPin, Phone, AlertCircle, 
  Mail, IdCard, Clock, ChevronRight, CheckCircle,
  Smartphone, MessageSquare, Shield
} from 'lucide-react';

// Step 1 Component - Moved outside
const Step1 = ({ formData, errors, setFormData, setErrors }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
      <div className="flex items-center space-x-3">
        <Shield className="text-blue-600" size={24} />
        <div>
          <h3 className="font-bold text-lg text-gray-800">Step 1: Mother Registration (BPR Step 7-8)</h3>
          <p className="text-gray-600 text-sm">Enter mother's identification details. NIN is optional but recommended for better tracking.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <UserPlus size={16} className="mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter mother's full name"
            required
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Phone size={16} className="mr-2" />
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
              +256
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
              className={`w-full pl-16 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="7XXXXXXXX"
              required
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Mail size={16} className="mr-2" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="mother@example.com"
          />
          <p className="text-gray-500 text-xs mt-1">For mobile app login credentials (Step 14)</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <IdCard size={16} className="mr-2" />
            National ID Number (NIN)
          </label>
          <input
            type="text"
            name="nin"
            value={formData.nin}
            onChange={(e) => setFormData(prev => ({ ...prev, nin: e.target.value }))}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.nin ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="CMXXXXXXXXXXXXX"
          />
          {errors.nin && <p className="text-red-500 text-sm mt-1">{errors.nin}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Complete Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Street, Zone, Parish"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-800 text-sm font-medium">System Validation (Step 8)</p>
          <p className="text-blue-700 text-xs mt-1">Data will be automatically validated by the system for completeness and format.</p>
        </div>
      </div>
    </div>
  </div>
);

// Step 2 Component - Moved outside
const Step2 = ({ formData, derivedData, errors, handleLMPChange, setFormData }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
      <div className="flex items-center space-x-3">
        <Calendar className="text-purple-600" size={24} />
        <div>
          <h3 className="font-bold text-lg text-gray-800">Step 2: Pregnancy Setup (BPR Step 9-10)</h3>
          <p className="text-gray-600 text-sm">Enter pregnancy details. System will automatically calculate gestational age and schedule.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Menstrual Period (LMP) *
          </label>
          <input
            type="date"
            name="lastPeriod"
            value={formData.lastPeriod}
            onChange={(e) => handleLMPChange(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              errors.lastPeriod ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.lastPeriod && <p className="text-red-500 text-sm mt-1">{errors.lastPeriod}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Delivery Date (EDD)
          </label>
          <input
            type="date"
            name="expectedDelivery"
            value={formData.expectedDelivery}
            onChange={(e) => setFormData(prev => ({ ...prev, expectedDelivery: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-gray-500 text-xs mt-1">Automatically calculated from LMP</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pregnancy Status
          </label>
          <select
            name="pregnancyStatus"
            value={formData.pregnancyStatus}
            onChange={(e) => setFormData(prev => ({ ...prev, pregnancyStatus: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="normal">Normal Pregnancy</option>
            <option value="high_risk">High Risk Pregnancy</option>
            <option value="multiple">Multiple Pregnancy</option>
            <option value="postpartum">Postpartum</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">System Calculations (Step 10)</span>
            <Clock size={16} className="text-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Gestational Age:</span>
              <span className="font-medium text-blue-600">{derivedData.gestationalAge || 'Enter LMP'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Trimester:</span>
              <span className="font-medium text-blue-600">
                {derivedData.trimester === '1' ? 'First' : 
                 derivedData.trimester === '2' ? 'Second' : 
                 derivedData.trimester === '3' ? 'Third' : 'Not calculated'}
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Health History / Medical Notes
          </label>
          <textarea
            name="healthHistory"
            value={formData.healthHistory}
            onChange={(e) => setFormData(prev => ({ ...prev, healthHistory: e.target.value }))}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Previous pregnancies, existing conditions, allergies, medications..."
          />
        </div>

        {derivedData.ancSchedule.length > 0 && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-purple-800 text-sm font-medium">ANC Schedule Generated</p>
            <p className="text-purple-700 text-xs mt-1">{derivedData.ancSchedule.length} visits scheduled automatically</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Step 3 Component - Moved outside
const Step3 = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
      <div className="flex items-center space-x-3">
        <MapPin className="text-green-600" size={24} />
        <div>
          <h3 className="font-bold text-lg text-gray-800">Step 3: Location & Communication</h3>
          <p className="text-gray-600 text-sm">Set location for follow-up visits and communication preferences.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Village / Parish *
          </label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={(e) => setFormData(prev => ({ ...prev, village: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Mukono Central"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            District
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Mukono District"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GPS Coordinates (Optional)
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., 0.3536° N, 32.7556° E"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-yellow-600 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-yellow-800">Communication Setup (Step 14)</p>
              <p className="text-yellow-700 text-sm mt-1">
                Mobile app login credentials will be sent to the provided email/phone.
                Reminders will be delivered via WhatsApp, SMS, or Voice Call.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Smartphone className="text-gray-500" size={20} />
            <span className="font-medium text-gray-700">Mobile App Features</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-green-500" />
              <span>Receive automated reminders (Step 16-18)</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-green-500" />
              <span>Reply to messages in app (Step 19)</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-green-500" />
              <span>AI-powered risk assessment (Step 23)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center space-x-2">
            <MessageSquare size={16} className="text-green-600" />
            <span className="font-medium text-green-800">Communication Channels</span>
          </div>
          <div className="flex space-x-2 mt-2">
            {['WhatsApp', 'SMS', 'Voice Call', 'Push Notification'].map(channel => (
              <span key={channel} className="px-3 py-1 bg-white border border-green-200 rounded-lg text-xs text-green-700">
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 4 Component - Moved outside
const Step4 = ({ formData, derivedData }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6">
      <div className="flex items-center space-x-3">
        <CheckCircle className="text-green-600" size={24} />
        <div>
          <h3 className="font-bold text-lg text-gray-800">Step 4: Review & Submit (BPR Step 11-12)</h3>
          <p className="text-gray-600 text-sm">Review all information before final submission and system processing.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
            <UserPlus size={20} className="mr-2" />
            Mother Information
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Full Name:</span>
              <span className="font-medium">{formData.fullName}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Phone:</span>
              <span className="font-medium">+256 {formData.phoneNumber}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">NIN:</span>
              <span className="font-medium">{formData.nin || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{formData.email || 'Not provided'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
            <Calendar size={20} className="mr-2" />
            Pregnancy Details
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">LMP:</span>
              <span className="font-medium">{formData.lastPeriod}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">EDD:</span>
              <span className="font-medium">{formData.expectedDelivery}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Gestational Age:</span>
              <span className="font-medium text-blue-600">{derivedData.gestationalAge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trimester:</span>
              <span className="font-medium">
                {derivedData.trimester === '1' ? 'First Trimester' : 
                 derivedData.trimester === '2' ? 'Second Trimester' : 
                 derivedData.trimester === '3' ? 'Third Trimester' : 'Not specified'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
            <MapPin size={20} className="mr-2" />
            Location Information
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Village:</span>
              <span className="font-medium">{formData.village}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">District:</span>
              <span className="font-medium">{formData.district}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Address:</span>
              <span className="font-medium text-right">{formData.address}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
            <Clock size={20} className="mr-2" />
            ANC Schedule (Generated)
          </h4>
          <div className="space-y-2">
            {derivedData.ancSchedule.map((visit, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Visit {index + 1}</p>
                  <p className="text-sm text-gray-600">Week {visit.week}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{visit.date}</p>
                  <p className="text-sm text-blue-600">{visit.type}</p>
                </div>
              </div>
            ))}
            {derivedData.ancSchedule.length === 0 && (
              <p className="text-gray-500 text-center py-4">Enter LMP to generate schedule</p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-lg text-gray-800 mb-3">System Actions on Submit</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start space-x-2">
              <CheckCircle size={14} className="text-green-500 mt-1" />
              <span><strong>Step 11:</strong> Health worker confirms registration</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle size={14} className="text-green-500 mt-1" />
              <span><strong>Step 12:</strong> Records stored in database</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle size={14} className="text-green-500 mt-1" />
              <span><strong>Step 13:</strong> Mobile app account created</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle size={14} className="text-green-500 mt-1" />
              <span><strong>Step 14:</strong> Login credentials sent to mother</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle size={14} className="text-green-500 mt-1" />
              <span><strong>Step 16:</strong> Automated reminders scheduled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Step Indicator Component - Moved outside
const StepIndicator = ({ step }) => (
  <div className="flex items-center justify-between mb-8">
    {[1, 2, 3, 4].map((stepNumber) => (
      <div key={stepNumber} className="flex items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          stepNumber === step ? 'bg-blue-600 text-white' :
          stepNumber < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
        }`}>
          {stepNumber < step ? <CheckCircle size={16} /> : stepNumber}
        </div>
        <div className="ml-2 text-sm font-medium hidden md:block">
          {stepNumber === 1 && 'Basic Info'}
          {stepNumber === 2 && 'Pregnancy'}
          {stepNumber === 3 && 'Location'}
          {stepNumber === 4 && 'Review'}
        </div>
        {stepNumber < 4 && <ChevronRight className="mx-2 text-gray-400" size={16} />}
      </div>
    ))}
  </div>
);

// Main Component
const MotherRegister = () => {
  const [formData, setFormData] = useState({
    // Basic Information (Step 7)
    fullName: '',
    phoneNumber: '',
    email: '',
    nin: '',
    address: '',
    
    // Pregnancy Details (Step 9)
    lastPeriod: '',
    expectedDelivery: '',
    pregnancyStatus: 'normal',
    healthHistory: '',
    
    // Location
    location: '',
    village: '',
    district: '',
  });

  const [derivedData, setDerivedData] = useState({
    gestationalAge: '',
    trimester: '',
    ancSchedule: [],
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateGestationalAge = (lmp) => {
    if (!lmp) return { weeks: 0, trimester: '' };
    
    const lmpDate = new Date(lmp);
    const today = new Date();
    const diffTime = Math.abs(today - lmpDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const trimester = weeks <= 12 ? '1' : weeks <= 27 ? '2' : '3';
    
    return { weeks, trimester };
  };

  const handleLMPChange = (date) => {
    // Clear previous errors
    if (errors.lastPeriod) {
      setErrors(prev => ({ ...prev, lastPeriod: undefined }));
    }

    // Validate date
    const lmpDate = new Date(date);
    const today = new Date();
    let newErrors = { ...errors };
    
    if (lmpDate > today) {
      newErrors.lastPeriod = 'LMP cannot be in the future';
      setErrors(newErrors);
      return;
    }

    // Update form data
    setFormData(prev => ({
      ...prev,
      lastPeriod: date
    }));

    // Calculate and update derived data asynchronously
    setTimeout(() => {
      const { weeks, trimester } = calculateGestationalAge(date);
      
      // Calculate EDD
      const edd = new Date(lmpDate);
      edd.setDate(edd.getDate() + 280);
      
      // Generate ANC schedule
      const schedule = [];
      const weeksList = [12, 20, 28, 36];
      weeksList.forEach(week => {
        const visitDate = new Date(lmpDate);
        visitDate.setDate(visitDate.getDate() + (week * 7));
        schedule.push({
          week: week,
          date: visitDate.toISOString().split('T')[0],
          type: 'ANC Visit'
        });
      });

      setDerivedData({
        gestationalAge: `${weeks} weeks`,
        trimester: trimester,
        ancSchedule: schedule,
      });

      // Update EDD
      setFormData(prev => ({
        ...prev,
        expectedDelivery: edd.toISOString().split('T')[0]
      }));
    }, 0);
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.phoneNumber.match(/^[0-9]{10}$/)) newErrors.phoneNumber = 'Valid 10-digit phone number required';
      if (formData.nin && !formData.nin.match(/^[A-Z0-9]{14}$/)) newErrors.nin = 'Invalid NIN format';
    }
    
    if (step === 2) {
      if (!formData.lastPeriod) newErrors.lastPeriod = 'Last menstrual period is required';
      if (formData.lastPeriod) {
        const lmpDate = new Date(formData.lastPeriod);
        const today = new Date();
        if (lmpDate > today) newErrors.lastPeriod = 'LMP cannot be in the future';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(step)) return;
    
    setIsSubmitting(true);
    
    try {
      // Combine form data with derived data
      const completeData = {
        ...formData,
        gestationalAge: derivedData.gestationalAge,
        trimester: derivedData.trimester,
        ancSchedule: derivedData.ancSchedule,
      };
      
      console.log('Registering mother:', completeData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      alert('Mother registered successfully! Mobile app account created and login details sent.');
      
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        nin: '',
        address: '',
        lastPeriod: '',
        expectedDelivery: '',
        pregnancyStatus: 'normal',
        healthHistory: '',
        location: '',
        village: '',
        district: '',
      });
      
      setDerivedData({
        gestationalAge: '',
        trimester: '',
        ancSchedule: [],
      });
      
      setStep(1);
      setErrors({});
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Mother Registration</h1>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border">
              <UserPlus size={20} className="text-blue-600" />
              <span className="font-medium">MaamaCare System</span>
            </div>
          </div>
          <p className="text-gray-600">Register new pregnant mother following the BPR process flow</p>
        </div>

        {/* Step Indicator */}
        <StepIndicator step={step} />

        {/* Form Steps */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {step === 1 && (
              <Step1 
                formData={formData}
                errors={errors}
                setFormData={setFormData}
                setErrors={setErrors}
              />
            )}
            {step === 2 && (
              <Step2 
                formData={formData}
                derivedData={derivedData}
                errors={errors}
                handleLMPChange={handleLMPChange}
                setFormData={setFormData}
              />
            )}
            {step === 3 && (
              <Step3 
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {step === 4 && (
              <Step4 
                formData={formData}
                derivedData={derivedData}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  step === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Previous
              </button>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Save as Draft
                </button>
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-lg disabled:opacity-70 flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={20} className="mr-2" />
                        Complete Registration
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Following MaamaCare BPR Steps 7-14: Mother Registration → Pregnancy Setup → Mobile App Account → Automated Communication</p>
        </div>
      </div>
    </div>
  );
};

export default MotherRegister;