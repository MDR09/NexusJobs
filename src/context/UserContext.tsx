import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'jobseeker' | 'company';
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string, type: 'jobseeker' | 'company') => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, type: 'jobseeker' | 'company'): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    if (email && password) {
      setUser({
        id: '1',
        name: type === 'company' ? 'TechCorp Solutions' : 'John Doe',
        email,
        type,
        avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
      });
      return true;
    }
    return false;
  };

  const signup = async (userData: any): Promise<boolean> => {
    // Mock signup - in real app, this would call an API
    if (userData.email && userData.password) {
      setUser({
        id: '1',
        name: userData.userType === 'company' ? userData.companyName : userData.name,
        email: userData.email,
        type: userData.userType,
        avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};