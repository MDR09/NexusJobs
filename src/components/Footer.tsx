import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Nexus Jobs Logo" className="h-12 w-12 object-contain" />
              <div>
                <span className="text-xl font-bold">Nexus Jobs</span>
                <div className="text-sm text-gray-400">Your Career Partner</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nexus Jobs is a recognized HR & placement firm based in Jaipur, Rajasthan. We serve clients 
              with domestic & overseas placement, career consultancy, HR consultancy, and education consultancy 
              services across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-300">contact@nexusjobs.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Domestic Placement</li>
              <li>Overseas Placement</li>
              <li>Career Consultancy</li>
              <li>HR Consultancy</li>
              <li>Education Consultancy</li>
              <li>Legal Compliances</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Nexus Jobs. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;