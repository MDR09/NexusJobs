import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Filter, Briefcase } from 'lucide-react';

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-12 LPA',
      postedDate: '2 days ago',
      description: 'Looking for a skilled software engineer with experience in React and Node.js'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Digital Marketing Co.',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹8-15 LPA',
      postedDate: '1 day ago',
      description: 'Seeking an experienced marketing manager to lead our digital marketing campaigns'
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Analytics Inc.',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹5-10 LPA',
      postedDate: '3 days ago',
      description: 'Join our analytics team to work on exciting data science projects'
    },
    {
      id: 4,
      title: 'HR Executive',
      company: 'HR Solutions Ltd',
      location: 'Delhi, NCR',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹4-8 LPA',
      postedDate: '1 week ago',
      description: 'Looking for an HR executive to manage recruitment and employee relations'
    },
    {
      id: 5,
      title: 'Frontend Developer',
      company: 'Web Development Studio',
      location: 'Pune, Maharashtra',
      type: 'Remote',
      experience: '2-5 years',
      salary: '₹7-14 LPA',
      postedDate: '4 days ago',
      description: 'Remote frontend developer position for creating amazing user experiences'
    },
    {
      id: 6,
      title: 'Business Development Executive',
      company: 'Growth Partners',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-11 LPA',
      postedDate: '5 days ago',
      description: 'Drive business growth through strategic partnerships and client acquisition'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (location === '' || job.location.toLowerCase().includes(location.toLowerCase())) &&
    (jobType === '' || job.type === jobType) &&
    (experience === '' || job.experience.includes(experience));
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and interests</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, company, or keywords"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            
            <div>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-6">3-6 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-blue-700 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="flex flex-col space-y-2">
                    <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                      Apply Now
                    </button>
                    <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      Save Job
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-right">
                    Posted {job.postedDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p className="text-xl">No jobs found matching your criteria</p>
              <p>Try adjusting your search filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;