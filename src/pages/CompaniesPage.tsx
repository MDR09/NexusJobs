import React, { useState, useMemo } from 'react';
import { Search, MapPin, Building2, Users, Globe, Filter, Star } from 'lucide-react';
import { mockCompanies } from '../data/mockData';

const CompaniesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const industries = [...new Set(mockCompanies.map(company => company.industry))];
  const sizes = [...new Set(mockCompanies.map(company => company.size))];
  const locations = [...new Set(mockCompanies.map(company => company.location))];

  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !locationFilter || company.location.includes(locationFilter);
      const matchesIndustry = !industryFilter || company.industry === industryFilter;
      const matchesSize = !sizeFilter || company.size === sizeFilter;

      return matchesSearch && matchesLocation && matchesIndustry && matchesSize;
    });
  }, [searchTerm, locationFilter, industryFilter, sizeFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setIndustryFilter('');
    setSizeFilter('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Discover Top Companies</h1>
            <p className="text-xl text-purple-100">Explore leading organizations and find your ideal workplace</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Company name or industry"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
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
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={sizeFilter}
                    onChange={(e) => setSizeFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Sizes</option>
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCompanies.length} Companies Found
              </h2>
              <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Most Popular</option>
                <option>Company Name A-Z</option>
                <option>Most Jobs</option>
                <option>Recently Added</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCompanies.map((company) => (
                <div key={company.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building2 className="h-4 w-4 mr-1" />
                        {company.industry}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {company.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-500 mb-1">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        <span className="text-sm font-medium">4.5</span>
                      </div>
                      <div className="text-sm text-gray-500">Founded {company.founded}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{company.size}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-1" />
                      <span className="text-sm">{company.website}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {company.openJobs} Open Jobs
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                        View Profile
                      </button>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        View Jobs
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCompanies.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No companies found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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

export default CompaniesPage;