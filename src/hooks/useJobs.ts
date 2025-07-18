import { useState, useEffect } from 'react';
import { supabase, Job } from '../lib/supabase';

interface JobFilters {
  search?: string;
  location?: string;
  jobType?: string;
  experienceLevel?: string;
  categoryId?: string;
  minSalary?: number;
  maxSalary?: number;
}

export const useJobs = (filters: JobFilters = {}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('jobs')
        .select(`
          *,
          companies (
            id,
            company_name,
            logo_url,
            industry
          ),
          categories (
            id,
            name
          )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      // Apply filters
      if (filters.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      if (filters.location) {
        query = query.or(`location.ilike.%${filters.location}%,city.ilike.%${filters.location}%,state.ilike.%${filters.location}%`);
      }

      if (filters.jobType) {
        query = query.eq('job_type', filters.jobType);
      }

      if (filters.experienceLevel) {
        query = query.eq('experience_level', filters.experienceLevel);
      }

      if (filters.categoryId) {
        query = query.eq('category_id', filters.categoryId);
      }

      if (filters.minSalary) {
        query = query.gte('min_salary', filters.minSalary);
      }

      if (filters.maxSalary) {
        query = query.lte('max_salary', filters.maxSalary);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching jobs:', error);
        throw error;
      }
      setJobs(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching jobs';
      setError(errorMessage);
      console.error('Jobs fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const incrementJobViews = async (jobId: string) => {
    try {
      await supabase.rpc('increment_job_views', { job_id: jobId });
    } catch (err) {
      console.error('Error incrementing job views:', err);
    }
  };

  return {
    jobs,
    loading,
    error,
    refetch: fetchJobs,
    incrementJobViews,
  };
};

export const useJobDetails = (jobId: string) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('jobs')
        .select(`
          *,
          companies (
            id,
            company_name,
            logo_url,
            industry,
            description,
            website
          ),
          categories (
            id,
            name
          )
        `)
        .eq('id', jobId)
        .single();

      if (error) throw error;
      setJob(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Job not found');
    } finally {
      setLoading(false);
    }
  };

  return {
    job,
    loading,
    error,
    refetch: fetchJobDetails,
  };
};