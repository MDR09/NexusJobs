import React, { useState } from 'react';
import { Plus, Briefcase, Users, Eye, Edit3, Building2, MapPin, Phone, Mail, Calendar, TrendingUp } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { mockJobs } from '../data/mockData';

const CompanyDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for company dashboard
  const companyJobs = mockJobs.slice(0, 4);
  const mockApplications = [
    {
      id: '1',
      jobTitle: 'Senior Frontend Developer',
      candidateName: 'John Doe',
      candidateEmail: 'john@example.com',
      appliedDate: '2024-01-15',
      status: 'under_review'
    },
    {
      id: '2',
      jobTitle: 'Digital Marketing Manager',
      candidateName: 'Jane Smith',
      candidateEmail: 'jane@example.com',
      appliedDate: '2024-01-14',
      status: 'shortlisted'
    },
    {
      id: '3',
      jobTitle: 'Data Scientist',
      candidateName: 'Mike Johnson',
      candidateEmail: 'mike@example.com',
      appliedDate: '2024-01-13',
      status: 'applied'
    }
  ];

  if (!user || user.type !== 'company') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Access denied. This page is for companies only.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderOverview = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Company Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{companyJobs.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Applications</p>
              <p className="text-2xl font-bold text-gray-900">{mockApplications.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Profile Views</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Hires This Month</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold text-gray-900">Company Profile</h3>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
        </div>
        
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
            <Building2 className="h-12 w-12 text-white" />
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-900">{user.name}</h4>
            <p className="text-gray-600 text-lg">Technology Company</p>
            <p className="text-gray-500">Founded in 2015</p>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <Users className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-900">100-500 employees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJobPostings = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Job Postings</h2>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center transform hover:scale-105">
          <Plus className="h-5 w-5 mr-2" />
          Post New Job
        </button>
      </div>
      
      {companyJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No job postings yet</p>
          <p className="text-gray-500">Create your first job posting to start hiring</p>
        </div>
      ) : (
        <div className="space-y-6">
          {companyJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-700 mb-2">{job.category}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
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
                  <p className="text-gray-600 line-clamp-2">{job.description}</p>
                </div>
                
                <div className="text-right ml-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    12 applications
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {job.salary}
                  </p>
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm bg-indigo-50 px-3 py-1 rounded-lg transition-colors">
                      <Eye className="h-4 w-4 inline mr-1" />
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 text-sm bg-gray-50 px-3 py-1 rounded-lg transition-colors">
                      <Edit3 className="h-4 w-4 inline mr-1" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCandidates = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Candidates</h2>
      
      {mockApplications.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No applications yet</p>
          <p className="text-gray-500">Applications will appear here once candidates apply</p>
        </div>
      ) : (
        <div className="space-y-6">
          {mockApplications.map((application) => (
            <div key={application.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {application.candidateName}
                    </h3>
                    <p className="text-gray-700 mb-2">{application.candidateEmail}</p>
                    <p className="text-gray-600 mb-2">Applied for: {application.jobTitle}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Applied {new Date(application.appliedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    application.status === 'under_review' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : application.status === 'shortlisted'
                      ? 'bg-green-100 text-green-800'
                      : application.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {application.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <div className="flex space-x-2 mt-4">
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      View Profile
                    </button>
                    <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors">
                      Schedule Interview
                    </button>
                  </div>
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
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'overview' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Building2 className="h-5 w-5 mr-3" />
                Overview
              </button>
              
              <button
                onClick={() => setActiveTab('jobs')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'jobs' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Job Postings
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs">
                  {companyJobs.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('candidates')}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === 'candidates' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="h-5 w-5 mr-3" />
                Candidates
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs">
                  {mockApplications.length}
                </span>
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