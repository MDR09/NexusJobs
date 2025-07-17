import React, { useState } from 'react';
import { Plus, Briefcase, Users, Eye, Edit3, Building2, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useUser } from '../context/UserContext';

const CompanyDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  const jobPostings = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      posted: '2024-01-10',
      applications: 25,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      posted: '2024-01-08',
      applications: 18,
      status: 'Active'
    }
  ];

  const candidates = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Software Engineer',
      experience: '3 years',
      status: 'Under Review',
      appliedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      position: 'Marketing Manager',
      experience: '5 years',
      status: 'Shortlisted',
      appliedDate: '2024-01-12'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Company Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-700 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{jobPostings.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Applications</p>
              <p className="text-2xl font-bold text-gray-900">43</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Eye className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Profile Views</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-orange-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Hires This Month</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Company Profile</h3>
          <button className="flex items-center text-blue-700 hover:text-blue-800">
            <Edit3 className="h-4 w-4 mr-1" />
            Edit Profile
          </button>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <Building2 className="h-10 w-10 text-blue-700" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{user?.name}</h4>
            <p className="text-gray-600">Technology Company</p>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
            <span className="text-gray-900">500-1000 employees</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJobPostings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </button>
      </div>
      
      {jobPostings.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-2">{job.department}</p>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Posted {job.posted}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  {job.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {job.applications} applications
              </p>
              <div className="flex space-x-2 mt-2">
                <button className="text-blue-700 hover:text-blue-800 text-sm">
                  <Eye className="h-4 w-4 inline mr-1" />
                  View
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm">
                  <Edit3 className="h-4 w-4 inline mr-1" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCandidates = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Candidates</h2>
      
      {candidates.map((candidate) => (
        <div key={candidate.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{candidate.name}</h3>
              <p className="text-gray-700 mb-2">{candidate.email}</p>
              <p className="text-gray-600 mb-2">Applied for: {candidate.position}</p>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <span>Experience: {candidate.experience}</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Applied {candidate.appliedDate}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm ${
                candidate.status === 'Under Review' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : candidate.status === 'Shortlisted'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {candidate.status}
              </span>
              <div className="flex space-x-2 mt-2">
                <button className="bg-blue-700 text-white px-3 py-1 rounded text-sm hover:bg-blue-800">
                  View Profile
                </button>
                <button className="border border-blue-700 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-50">
                  Schedule Interview
                </button>
              </div>
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
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Building2 className="h-5 w-5 mr-3" />
                Overview
              </button>
              
              <button
                onClick={() => setActiveTab('jobs')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'jobs' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Job Postings
              </button>
              
              <button
                onClick={() => setActiveTab('candidates')}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'candidates' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="h-5 w-5 mr-3" />
                Candidates
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'jobs' && renderJobPostings()}
            {activeTab === 'candidates' && renderCandidates()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;