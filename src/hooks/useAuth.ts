import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase, Profile } from '../lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      if (!userId) {
        setLoading(false);
        return;
      }
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        // If profile doesn't exist, that's okay for new users
        if (error.code !== 'PGRST116') {
          throw error;
        }
      }
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, userData: {
    full_name: string;
    phone: string;
    user_type: 'jobseeker' | 'company';
    company_name?: string;
    company_size?: string;
    industry?: string;
  }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email,
            full_name: userData.full_name,
            phone: userData.phone,
            user_type: userData.user_type,
          });

        if (profileError) throw profileError;

        // Create user-specific record
        if (userData.user_type === 'company') {
          const { error: companyError } = await supabase
            .from('companies')
            .insert({
              id: data.user.id,
              company_name: userData.company_name!,
              company_size: userData.company_size,
              industry: userData.industry,
            });

          if (companyError) throw companyError;
        } else {
          const { error: jobSeekerError } = await supabase
            .from('job_seekers')
            .insert({
              id: data.user.id,
            });

          if (jobSeekerError) throw jobSeekerError;
        }
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };
};