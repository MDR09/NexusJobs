import { useState, useEffect } from 'react';
import { supabase, Company } from '../lib/supabase';

interface CompanyFilters {
  search?: string;
  location?: string;
  industry?: string;
}

export const useCompanies = (filters: CompanyFilters = {}) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompanies();
  }, [filters]);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('companies')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply filters
      if (filters.search) {
        query = query.or(`company_name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      if (filters.location) {
        query = query.or(`city.ilike.%${filters.location}%,state.ilike.%${filters.location}%`);
      }

      if (filters.industry) {
        query = query.eq('industry', filters.industry);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching companies:', error);
        throw error;
      }

      // Get job counts for each company
      const companiesWithJobCounts = await Promise.all(
        (data || []).map(async (company) => {
          try {
            const { count } = await supabase
              .from('jobs')
              .select('*', { count: 'exact', head: true })
              .eq('company_id', company.id)
              .eq('is_active', true);

            return {
              ...company,
              openJobs: count || 0,
            };
          } catch (err) {
            console.error('Error fetching job count for company:', company.id, err);
            return {
              ...company,
              openJobs: 0,
            };
          }
        })
      );

      setCompanies(companiesWithJobCounts);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching companies';
      setError(errorMessage);
      console.error('Companies fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    companies,
    loading,
    error,
    refetch: fetchCompanies,
  };
};

export const useCompanyDetails = (companyId: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (companyId) {
      fetchCompanyDetails();
    }
  }, [companyId]);

  const fetchCompanyDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('id', companyId)
        .single();

      if (error) throw error;
      setCompany(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Company not found');
    } finally {
      setLoading(false);
    }
  };

  return {
    company,
    loading,
    error,
    refetch: fetchCompanyDetails,
  };
};