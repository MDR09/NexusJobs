import { useState, useEffect } from 'react';
import { supabase, Application } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useApplications = () => {
  const { user, profile } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && profile) {
      fetchApplications();
    }
  }, [user, profile]);

  const fetchApplications = async () => {
    if (!user || !profile) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      let query;

      if (profile.user_type === 'jobseeker') {
        // Fetch applications by job seeker
        query = supabase
          .from('applications')
          .select(`
            *,
            jobs (
              id,
              title,
              location,
              companies (
                company_name,
                logo_url
              )
            )
          `)
          .eq('applicant_id', user.id)
          .order('applied_at', { ascending: false });
      } else {
        // Fetch applications for company's jobs
        query = supabase
          .from('applications')
          .select(`
            *,
            jobs (
              id,
              title,
              location
            ),
            job_seekers (
              id,
              profiles (
                full_name,
                email,
                phone
              )
            )
          `)
          .eq('jobs.company_id', user.id)
          .order('applied_at', { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching applications:', error);
        throw error;
      }
      setApplications(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching applications';
      setError(errorMessage);
      console.error('Applications fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyToJob = async (jobId: string, coverLetter?: string) => {
    if (!user || profile?.user_type !== 'jobseeker') {
      throw new Error('Only job seekers can apply to jobs');
    }

    try {
      const { data, error } = await supabase
        .from('applications')
        .insert({
          job_id: jobId,
          applicant_id: user.id,
          cover_letter: coverLetter,
          status: 'applied',
        })
        .select()
        .single();

      if (error) throw error;

      // Refresh applications
      await fetchApplications();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const updateApplicationStatus = async (
    applicationId: string,
    status: Application['status'],
    notes?: string
  ) => {
    if (!user || profile?.user_type !== 'company') {
      throw new Error('Only companies can update application status');
    }

    try {
      const { data, error } = await supabase
        .from('applications')
        .update({
          status,
          notes,
          updated_at: new Date().toISOString(),
        })
        .eq('id', applicationId)
        .select()
        .single();

      if (error) throw error;

      // Refresh applications
      await fetchApplications();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const checkApplicationStatus = async (jobId: string) => {
    if (!user || profile?.user_type !== 'jobseeker') {
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('applications')
        .select('id, status')
        .eq('job_id', jobId)
        .eq('applicant_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (error) {
      console.error('Error checking application status:', error);
      return null;
    }
  };

  return {
    applications,
    loading,
    error,
    applyToJob,
    updateApplicationStatus,
    checkApplicationStatus,
    refetch: fetchApplications,
  };
};