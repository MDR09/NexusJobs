import React from 'react';
import { Globe, Users, TrendingUp, Award, CheckCircle, ArrowRight, Building2, BookOpen, Scale } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Domestic & Overseas Placement',
      description: 'Strategic partnerships with institutions helping students maximize opportunities with long-term vision and global reach.',
      features: [
        'Pan-India placement network',
        'International job opportunities',
        'Industry partnerships',
        'Career guidance and counseling'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Career Consultancy',
      description: 'Professional guidance and strategic career planning to help you navigate your professional journey effectively.',
      features: [
        'Personalized career assessment',
        'Resume and profile optimization',
        'Interview preparation',
        'Skill development guidance'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'HR Consultancy',
      description: 'Complete manpower solutions across all levels and functions, providing comprehensive HR support for businesses.',
      features: [
        'Talent acquisition and recruitment',
        'HR process optimization',
        'Performance management systems',
        'Employee engagement strategies'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: BookOpen,
      title: 'Education Consultancy',
      description: 'Educational guidance and counseling services to help students choose the right academic path and institutions.',
      features: [
        'Course and college selection',
        'Admission process guidance',
        'Scholarship assistance',
        'Academic career planning'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Scale,
      title: 'Statutory & Legal Compliances',
      description: 'Comprehensive legal compliance services for different industries across India, ensuring regulatory adherence.',
      features: [
        'Labor law compliance',
        'Statutory documentation',
        'Regulatory advisory',
        'Audit and assessment services'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Building2,
      title: 'BPO Solutions',
      description: 'One-stop shop providing manpower across all levels and functions for Business Process Outsourcing needs.',
      features: [
        'End-to-end BPO services',
        'Scalable workforce solutions',
        'Quality assurance programs',
        'Technology integration support'
      ],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive HR solutions designed to connect talent with opportunity across India and beyond. 
              We provide end-to-end services for both job seekers and employers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-8">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}>
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience and strategic partnerships, we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Proven track record in HR and placement services</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Building2 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2000+ Companies</h3>
              <p className="text-gray-600">Strong network of partner organizations</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-100 to-violet-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">50K+ Placements</h3>
              <p className="text-gray-600">Successful career transformations</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pan-India Presence</h3>
              <p className="text-gray-600">Offices in various cities and towns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
            Let us help you achieve your career goals or find the perfect talent for your organization. 
            Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;