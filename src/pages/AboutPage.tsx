import React from 'react';
import { Users, MapPin, Award, Target, CheckCircle, Building2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexus Jobs</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted HR & placement partner in Jaipur, Rajasthan
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Nexus Jobs is a recognized HR & placement firm based in Jaipur, Rajasthan. We serve our clients, 
                both job seekers and employers alike, by fulfilling their requirements with excellence and dedication.
              </p>
              <p className="text-gray-600 mb-4">
                Our teams of professionals are agile in offering multiple services under the same roof. 
                We have strategic relationships with nearly all institutions where we help their students 
                to make best use of opportunities and impart them a long-term vision.
              </p>
              <p className="text-gray-600">
                We are constantly looking at expanding market width but are concentrating heavily on 
                building market depth too. We are a one-stop shop and provide manpower across all 
                levels and functions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Nexus Jobs Team"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">5000+</div>
                  <div className="text-gray-600">Placements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive HR solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Domestic & Overseas Placement</h3>
              <p className="text-gray-600">
                Comprehensive placement services for both domestic and international opportunities, 
                helping candidates find their perfect career match.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Consultancy</h3>
              <p className="text-gray-600">
                Expert career guidance and counseling services to help individuals make informed 
                career decisions and achieve their professional goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">HR Consultancy</h3>
              <p className="text-gray-600">
                Complete HR solutions including recruitment, training, performance management, 
                and organizational development services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education Consultancy</h3>
              <p className="text-gray-600">
                Educational guidance and counseling services to help students choose the right 
                academic path and institutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Statutory & Legal Compliances</h3>
              <p className="text-gray-600">
                Comprehensive legal compliance services for different industries across India, 
                ensuring regulatory adherence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Network Coverage</h3>
              <p className="text-gray-600">
                Offices in various small towns enabling us to reach out to prospective candidates 
                across different regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To bridge the gap between talented job seekers and progressive employers by providing 
                comprehensive HR solutions that drive mutual success. We strive to be the most trusted 
                partner in career development and organizational growth.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading HR & placement firm in India, known for our integrity, 
                innovation, and excellence in service delivery. We envision a future where every 
                individual finds their dream career and every organization finds the perfect talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to take the next step in your career journey?
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-700 mr-3" />
                    <span className="text-gray-600">Jaipur, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">contact@nexusjobs.in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;