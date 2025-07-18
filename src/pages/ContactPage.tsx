import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building2, Users, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-teal-100">We're here to help you with all your HR and placement needs</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      Nexus Jobs Pvt. Ltd.<br />
                      Jaipur, Rajasthan, India<br />
                      PIN: 302001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      +91 XXX XXX XXXX<br />
                      +91 XXX XXX XXXX (HR Dept.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      contact@nexusjobs.in<br />
                      hr@nexusjobs.in<br />
                      careers@nexusjobs.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">2K+</div>
                    <div className="text-sm text-gray-600">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">50K+</div>
                    <div className="text-sm text-gray-600">Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="job-placement">Job Placement</option>
                      <option value="career-consultancy">Career Consultancy</option>
                      <option value="hr-consultancy">HR Consultancy</option>
                      <option value="education-consultancy">Education Consultancy</option>
                      <option value="legal-compliance">Legal Compliance</option>
                      <option value="bpo-solutions">BPO Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter the subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
            <p className="text-lg text-gray-600">We provide comprehensive HR solutions across multiple domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Job Seekers</h3>
              <p className="text-gray-600">Career guidance, placement assistance, skill development, and interview preparation</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Companies</h3>
              <p className="text-gray-600">Talent acquisition, HR consulting, workforce solutions, and compliance services</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Domestic and international placement opportunities with strategic partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;