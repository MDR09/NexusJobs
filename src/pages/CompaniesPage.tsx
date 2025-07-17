import React, { useState } from 'react';
import { Search, MapPin, Users, Building2, ExternalLink } from 'lucide-react';

const CompaniesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');

  const companies = [
    {
      id: 1,
      name: 'Tech Solutions Pvt Ltd',
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Technology',
      location: 'Jaipur, Rajasthan',
      employees: '500-1000',
      openJobs: 15,
      description: 'Leading technology company providing innovative software solutions to businesses worldwide.'
    },
    {
      id: 2,
      name: 'Digital Marketing Co.',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Marketing',
      location: 'Mumbai, Maharashtra',
      employees: '200-500',
      openJobs: 8,
      description: 'Full-service digital marketing agency helping brands grow their online presence.'
    },
    {
      id: 3,
      name: 'Analytics Inc.',
      logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Data & Analytics',
      location: 'Bangalore, Karnataka',
      employees: '100-200',
      openJobs: 12,
      description: 'Data analytics company specializing in business intelligence and machine learning solutions.'
    },
    {
      id: 4,
      name: 'HR Solutions Ltd',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Human Resources',
      location: 'Delhi, NCR',
      employees: '50-100',
      openJobs: 6,
      description: 'Comprehensive HR services including recruitment, training, and employee management.'
    },
    {
      id: 5,
      name: 'Web Development Studio',
      logo: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Web Development',
      location: 'Pune, Maharashtra',
      employees: '20-50',
      openJobs: 10,
      description: 'Creative web development studio crafting beautiful and functional websites for clients.'
    },
    {
      id: 6,
      name: 'Growth Partners',
      logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      industry: 'Business Development',
      location: 'Hyderabad, Telangana',
      employees: '100-200',
      openJobs: 7,
      description: 'Business consulting firm focused on helping companies scale and expand their operations.'
    }
  ];

  const filteredCompanies = companies.filter(company => {
    return (
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (location === '' || company.location.toLowerCase().includes(location.toLowerCase())) &&
    (industry === '' || company.industry === industry);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Top Companies</h1>
          <p className="text-gray-600">Find great companies to work with through Nexus Jobs</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Company name or industry"
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
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Data & Analytics">Data & Analytics</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Web Development">Web Development</option>
                <option value="Business Development">Business Development</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCompanies.length} of {companies.length} companies
          </p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-gray-600">{company.industry}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{company.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {company.employees} employees
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Building2 className="h-4 w-4 mr-2" />
                    {company.openJobs} open positions
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors text-sm">
                    View Jobs
                  </button>
                  <button className="flex-1 border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Building2 className="h-12 w-12 mx-auto mb-4" />
              <p className="text-xl">No companies found matching your criteria</p>
              <p>Try adjusting your search filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesPage;