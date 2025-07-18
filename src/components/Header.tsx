import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const getDashboardPath = () => {
    return user?.type === 'company' ? '/company-dashboard' : '/dashboard';
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt="Nexus Jobs Logo" className="h-12 w-12 object-contain" />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Nexus Jobs
              </span>
              <div className="text-xs text-gray-500 -mt-1">Your Career Partner</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium flex items-center space-x-1">
              <Search className="h-4 w-4" />
              <span>Find Jobs</span>
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Companies
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-700 font-medium">{user?.name}</span>
                </div>
                <Link
                  to={getDashboardPath()}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-600 transition-colors p-2"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/jobs" 
                className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="h-4 w-4" />
                <span>Find Jobs</span>
              </Link>
              <Link 
                to="/companies" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 mb-4">
                      <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-gray-700 font-medium">{user?.name}</span>
                    </div>
                    <Link
                      to={getDashboardPath()}
                      className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center mb-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-red-600 hover:text-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block text-gray-700 hover:text-indigo-600 transition-colors mb-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;