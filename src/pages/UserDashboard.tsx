import React, { useState } from 'react';
import { User, FileText, Briefcase, Heart, Settings, Edit3, MapPin, Calendar, Phone, Mail, Star } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { mockJobs } from '../data/mockData';

const UserDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock data for user dashboard
  const appliedJobs = mockJobs.slice(0, 3);
  const savedJobs = mockJobs.slice(3, 6);

  if (!user || user.type !== 'jobseeker') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Access denied. This page is for job seekers only.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderProfile = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Profile Information</h2>
        <button className="flex items-center text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
          <Edit3 className="h-4 w-4 mr-2" />
          Edit Profile
        </button>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
            <User className="h-12 w-12 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{user.name}</h3>
            <p className="text-gray-600 text-lg">Software Developer</p>
            <div className="flex items-center mt-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 text-gray-300" />
              <span className="ml-2 text-sm text-gray-600">4.0 Profile Rating</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-900">{user.email}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-900">+91 98765 43210</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-900">Jaipur, Rajasthan</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-900">3 years</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills & Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Git'].map((skill) => (
            <span key={skill} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppliedJobs = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Applied Jobs</h2>
      
      {appliedJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No applications yet</p>
          <p className="text-gray-500">Start applying to jobs that match your skills</p>
        </div>
      ) : (
        <div className="space-y-6">
          {appliedJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-700 mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Applied 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Under Review
                  </span>
                  <div className="mt-2 text-sm text-gray-600">{job.salary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSavedJobs = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Saved Jobs</h2>
      
      {savedJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No saved jobs yet</p>
          <p className="text-gray-500">Save jobs you're interested in to apply later</p>
        </div>
      ) : (
        <div className="space-y-6">
          {savedJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-700 mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Saved 1 week ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right mr-4">
                    <div className="text-lg font-semibold text-gray-900">{job.salary}</div>
                    <div className="text-sm text-gray-500">{job.type}</div>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                  <button className="text-red-500 hover:text-red-600 p-2">
                    <Heart className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'profile' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
              
              <button
                onClick={() => setActiveTab('applied')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'applied' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Applied Jobs
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs">
                  {appliedJobs.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('saved')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'saved' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Heart className="h-5 w-5 mr-3" />
                Saved Jobs
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs">
                  {savedJobs.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('resume')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'resume' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Resume
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'settings' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
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
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Management</h3>
                <p className="text-gray-600 mb-6">Upload and manage your resume to apply for jobs</p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Upload Resume
                </button>
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Settings</h3>
                <p className="text-gray-600 mb-6">Manage your account preferences and privacy settings</p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Manage Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;