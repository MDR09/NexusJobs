import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Building2, TrendingUp, CheckCircle, ArrowRight, Star, Globe, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Find Your Dream
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Career Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with top companies and discover opportunities that match your skills. 
              Your next career move starts here with Nexus Jobs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/jobs"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <Search className="h-5 w-5 mr-2" />
                Explore Jobs
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <Users className="h-5 w-5 mr-2" />
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Building2 className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Jobs Posted</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR solutions designed to connect talent with opportunity across India and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Domestic & Overseas Placement</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic partnerships with institutions helping students maximize opportunities with long-term vision and global reach.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Career Consultancy</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional guidance and strategic career planning to help you navigate your professional journey effectively.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">HR Consultancy</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete manpower solutions across all levels and functions, providing comprehensive HR support for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Nexus Jobs?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Recognized HR Firm</h3>
                    <p className="text-gray-600">Based in Jaipur with offices in various small towns across India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Partnerships</h3>
                    <p className="text-gray-600">Relationships with nearly all institutions for maximum opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Services</h3>
                    <p className="text-gray-600">One-stop shop for all HR and placement needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                    <p className="text-gray-600">Statutory & legal compliance services across different industries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-3xl">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join thousands of job seekers and companies who trust Nexus Jobs for their career and hiring needs.
              </p>
              <div className="space-y-4">
                <Link
                  to="/signup"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </Link>
                <Link
                  to="/about"
                  className="block w-full border-2 border-indigo-600 text-indigo-600 text-center py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl mb-10 text-indigo-200 max-w-2xl mx-auto">
            Whether you're looking for your next career opportunity or seeking top talent for your company, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/jobs"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Browse Jobs
            </Link>
            <Link
              to="/signup"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;