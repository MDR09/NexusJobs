import { useState, useEffect } from 'react';
import { supabase, SavedJob } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useSavedJobs = () => {
  const { user, profile } = useAuth();
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && profile?.user_type === 'jobseeker') {
      fetchSavedJobs();
    }
  }, [user, profile]);

  const fetchSavedJobs = async () => {
    if (!user || profile?.user_type !== 'jobseeker') return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('saved_jobs')
        .select(`
          *,
          jobs (
            id,
            title,
            location,
            min_salary,
            max_salary,
            job_type,
            companies (
              company_name,
              logo_url
            )
          )
        `)
        .eq('user_id', user.id)
        .order('saved_at', { ascending: false });

      if (error) throw error;
      setSavedJobs(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const saveJob = async (jobId: string) => {
    if (!user || profile?.user_type !== 'jobseeker') {
      throw new Error('Only job seekers can save jobs');
    }

    try {
      const { data, error } = await supabase
        .from('saved_jobs')
        .insert({
          job_id: jobId,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      // Refresh saved jobs
      await fetchSavedJobs();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const unsaveJob = async (jobId: string) => {
    if (!user || profile?.user_type !== 'jobseeker') {
      throw new Error('Only job seekers can unsave jobs');
    }

    try {
      const { error } = await supabase
        .from('saved_jobs')
        .delete()
        .eq('job_id', jobId)
        .eq('user_id', user.id);

      if (error) throw error;

      // Refresh saved jobs
      await fetchSavedJobs();
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const checkIfJobSaved = async (jobId: string) => {
    if (!user || profile?.user_type !== 'jobseeker') {
      return false;
    }

    try {
      const { data, error } = await supabase
        .from('saved_jobs')
        .select('id')
        .eq('job_id', jobId)
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return !!data;
    } catch (error) {
      console.error('Error checking if job is saved:', error);
      return false;
    }
  };

  return {
    savedJobs,
    loading,
    error,
    saveJob,
    unsaveJob,
    checkIfJobSaved,
    refetch: fetchSavedJobs,
  };
};