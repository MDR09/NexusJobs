import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter, Heart, Building2 } from 'lucide-react';
import { mockJobs, jobCategories, locations } from '../data/mockData';

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !locationFilter || job.location.includes(locationFilter);
      const matchesCategory = !categoryFilter || job.category === categoryFilter;
      const matchesType = !typeFilter || job.type === typeFilter;
      const matchesExperience = !experienceFilter || job.experience === experienceFilter;

      return matchesSearch && matchesLocation && matchesCategory && matchesType && matchesExperience;
    });
  }, [searchTerm, locationFilter, categoryFilter, typeFilter, experienceFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setCategoryFilter('');
    setTypeFilter('');
    setExperienceFilter('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Job</h1>
            <p className="text-xl text-indigo-100">Discover opportunities that match your skills and aspirations</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {jobCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">All Levels</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredJobs.length} Jobs Found
              </h2>
              <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Company A-Z</option>
              </select>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.posted}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <span
                              key={index}
                              className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="flex items-center justify-end space-x-2 mb-4">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="text-right mb-4">
                        <div className="text-lg font-semibold text-gray-900 mb-1">{job.salary}</div>
                        <div className="text-sm text-gray-500">{job.type}</div>
                        <div className="text-sm text-gray-500">{job.experience}</div>
                      </div>
                      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;