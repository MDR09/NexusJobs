import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Building2, Eye, EyeOff, LogIn } from 'lucide-react';
import { useUser } from '../context/UserContext';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'jobseeker' | 'company'>('jobseeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const success = await login(email, password, userType);
      
      if (success) {
        navigate(userType === 'company' ? '/company-dashboard' : '/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('jobseeker')}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                  userType === 'jobseeker'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <User className="h-8 w-8 mb-2" />
                <span className="font-semibold">Job Seeker</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('company')}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                  userType === 'company'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <Building2 className="h-8 w-8 mb-2" />
                <span className="font-semibold">Company</span>
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;