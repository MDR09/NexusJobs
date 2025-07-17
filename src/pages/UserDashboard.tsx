import React, { useState } from 'react';
import { User, FileText, Briefcase, Heart, Settings, Edit3, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import { useUser } from '../context/UserContext';

const UserDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  const appliedJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Jaipur, Rajasthan',
      appliedDate: '2024-01-15',
      status: 'Under Review'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Web Development Studio',
      location: 'Pune, Maharashtra',
      appliedDate: '2024-01-10',
      status: 'Interview Scheduled'
    }
  ];

  const savedJobs = [
    {
      id: 1,
      title: 'Data Analyst',
      company: 'Analytics Inc.',
      location: 'Bangalore, Karnataka',
      savedDate: '2024-01-12',
      salary: '₹5-10 LPA'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Digital Marketing Co.',
      location: 'Mumbai, Maharashtra',
      savedDate: '2024-01-08',
      salary: '₹8-15 LPA'
    }
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
        <button className="flex items-center text-blue-700 hover:text-blue-800">
          <Edit3 className="h-4 w-4 mr-1" />
          Edit Profile
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <User className="h-10 w-10 text-blue-700" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user?.name}</h3>
            <p className="text-gray-600">Job Seeker</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-900">{user?.email}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-900">+91 98765 43210</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-900">Jaipur, Rajasthan</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <span className="text-gray-900">3 years</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git'].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppliedJobs = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Applied Jobs</h2>
      
      {appliedJobs.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-2">{job.company}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="mr-4">{job.location}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>Applied on {job.appliedDate}</span>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm ${
                job.status === 'Under Review' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {job.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSavedJobs = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Saved Jobs</h2>
      
      {savedJobs.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-2">{job.company}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="mr-4">{job.location}</span>
                <span className="mr-4">{job.salary}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>Saved on {job.savedDate}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Apply Now
              </button>
              <button className="text-red-600 hover:text-red-700">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
              
              <button
                onClick={() => setActiveTab('applied')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'applied' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Applied Jobs
              </button>
              
              <button
                onClick={() => setActiveTab('saved')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'saved' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Heart className="h-5 w-5 mr-3" />
                Saved Jobs
              </button>
              
              <button
                onClick={() => setActiveTab('resume')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'resume' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Resume
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'applied' && renderAppliedJobs()}
            {activeTab === 'saved' && renderSavedJobs()}
            {activeTab === 'resume' && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Resume management coming soon...</p>
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Settings panel coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;