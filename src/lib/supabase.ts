import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  console.error('Required variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Database types
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  user_type: 'jobseeker' | 'company';
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  company_name: string;
  company_size?: string;
  industry?: string;
  website?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  logo_url?: string;
  founded_year?: number;
  created_at: string;
  updated_at: string;
}

export interface JobSeeker {
  id: string;
  date_of_birth?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  experience_years?: number;
  current_salary?: number;
  expected_salary?: number;
  resume_url?: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: string;
  company_id: string;
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  category_id?: string;
  job_type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  experience_level: 'entry' | 'mid' | 'senior' | 'executive';
  min_experience?: number;
  max_experience?: number;
  min_salary?: number;
  max_salary?: number;
  currency?: string;
  location: string;
  city?: string;
  state?: string;
  country?: string;
  is_remote?: boolean;
  application_deadline?: string;
  is_active?: boolean;
  views_count?: number;
  applications_count?: number;
  created_at: string;
  updated_at: string;
  companies?: Company;
  categories?: Category;
}

export interface Application {
  id: string;
  job_id: string;
  applicant_id: string;
  status: 'applied' | 'under_review' | 'shortlisted' | 'interview_scheduled' | 'rejected' | 'hired';
  cover_letter?: string;
  resume_url?: string;
  applied_at: string;
  updated_at: string;
  notes?: string;
  jobs?: Job;
  job_seekers?: JobSeeker & { profiles?: Profile };
}

export interface SavedJob {
  id: string;
  job_id: string;
  user_id: string;
  saved_at: string;
  jobs?: Job;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
  created_at: string;
}

export interface UserSkill {
  id: string;
  user_id: string;
  skill_id: string;
  proficiency_level: number;
  created_at: string;
  skills?: Skill;
}

export interface Education {
  id: string;
  user_id: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date?: string;
  end_date?: string;
  grade?: string;
  description?: string;
  created_at: string;
}

export interface Experience {
  id: string;
  user_id: string;
  company_name: string;
  position: string;
  location?: string;
  start_date: string;
  end_date?: string;
  is_current?: boolean;
  description?: string;
  created_at: string;
}