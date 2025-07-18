/*
  # Initial Schema for Nexus Jobs Portal

  1. New Tables
    - `profiles` - User profiles for both job seekers and companies
    - `companies` - Company-specific information
    - `job_seekers` - Job seeker-specific information
    - `jobs` - Job postings
    - `applications` - Job applications
    - `saved_jobs` - Saved jobs by users
    - `skills` - Skills master data
    - `user_skills` - User skills mapping
    - `categories` - Job categories
    - `locations` - Location master data

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Separate policies for job seekers and companies

  3. Functions
    - Custom functions for complex queries
    - Triggers for data consistency
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_type AS ENUM ('jobseeker', 'company');
CREATE TYPE job_type AS ENUM ('full-time', 'part-time', 'contract', 'internship', 'remote');
CREATE TYPE application_status AS ENUM ('applied', 'under_review', 'shortlisted', 'interview_scheduled', 'rejected', 'hired');
CREATE TYPE experience_level AS ENUM ('entry', 'mid', 'senior', 'executive');

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  user_type user_type NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  company_name text NOT NULL,
  company_size text,
  industry text,
  website text,
  description text,
  address text,
  city text,
  state text,
  country text DEFAULT 'India',
  logo_url text,
  founded_year integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Job seekers table
CREATE TABLE IF NOT EXISTS job_seekers (
  id uuid PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  date_of_birth date,
  gender text,
  address text,
  city text,
  state text,
  country text DEFAULT 'India',
  experience_years integer DEFAULT 0,
  current_salary integer,
  expected_salary integer,
  resume_url text,
  linkedin_url text,
  github_url text,
  portfolio_url text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  category text,
  created_at timestamptz DEFAULT now()
);

-- User skills mapping
CREATE TABLE IF NOT EXISTS user_skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES job_seekers(id) ON DELETE CASCADE,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE,
  proficiency_level integer DEFAULT 1 CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, skill_id)
);

-- Jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  requirements text,
  responsibilities text,
  category_id uuid REFERENCES categories(id),
  job_type job_type NOT NULL DEFAULT 'full-time',
  experience_level experience_level NOT NULL DEFAULT 'entry',
  min_experience integer DEFAULT 0,
  max_experience integer,
  min_salary integer,
  max_salary integer,
  currency text DEFAULT 'INR',
  location text NOT NULL,
  city text,
  state text,
  country text DEFAULT 'India',
  is_remote boolean DEFAULT false,
  application_deadline date,
  is_active boolean DEFAULT true,
  views_count integer DEFAULT 0,
  applications_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  applicant_id uuid REFERENCES job_seekers(id) ON DELETE CASCADE,
  status application_status DEFAULT 'applied',
  cover_letter text,
  resume_url text,
  applied_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  notes text,
  UNIQUE(job_id, applicant_id)
);

-- Saved jobs table
CREATE TABLE IF NOT EXISTS saved_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  user_id uuid REFERENCES job_seekers(id) ON DELETE CASCADE,
  saved_at timestamptz DEFAULT now(),
  UNIQUE(job_id, user_id)
);

-- Education table
CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES job_seekers(id) ON DELETE CASCADE,
  institution text NOT NULL,
  degree text NOT NULL,
  field_of_study text,
  start_date date,
  end_date date,
  grade text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES job_seekers(id) ON DELETE CASCADE,
  company_name text NOT NULL,
  position text NOT NULL,
  location text,
  start_date date NOT NULL,
  end_date date,
  is_current boolean DEFAULT false,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_seekers ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Companies policies
CREATE POLICY "Anyone can read company profiles"
  ON companies
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Companies can update own profile"
  ON companies
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Companies can insert own profile"
  ON companies
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Job seekers policies
CREATE POLICY "Job seekers can read own profile"
  ON job_seekers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Job seekers can update own profile"
  ON job_seekers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Job seekers can insert own profile"
  ON job_seekers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Companies can read job seeker profiles for applications"
  ON job_seekers
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM applications a
      JOIN jobs j ON a.job_id = j.id
      WHERE a.applicant_id = job_seekers.id
      AND j.company_id = auth.uid()
    )
  );

-- Categories and Skills policies (public read)
CREATE POLICY "Anyone can read categories"
  ON categories
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can read skills"
  ON skills
  FOR SELECT
  TO authenticated
  USING (true);

-- User skills policies
CREATE POLICY "Users can manage own skills"
  ON user_skills
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Jobs policies
CREATE POLICY "Anyone can read active jobs"
  ON jobs
  FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Companies can manage own jobs"
  ON jobs
  FOR ALL
  TO authenticated
  USING (auth.uid() = company_id)
  WITH CHECK (auth.uid() = company_id);

-- Applications policies
CREATE POLICY "Job seekers can read own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = applicant_id);

CREATE POLICY "Job seekers can create applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = applicant_id);

CREATE POLICY "Companies can read applications for their jobs"
  ON applications
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM jobs
      WHERE jobs.id = applications.job_id
      AND jobs.company_id = auth.uid()
    )
  );

CREATE POLICY "Companies can update applications for their jobs"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM jobs
      WHERE jobs.id = applications.job_id
      AND jobs.company_id = auth.uid()
    )
  );

-- Saved jobs policies
CREATE POLICY "Users can manage own saved jobs"
  ON saved_jobs
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Education policies
CREATE POLICY "Users can manage own education"
  ON education
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Experience policies
CREATE POLICY "Users can manage own experience"
  ON experience
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert default categories
INSERT INTO categories (name, description) VALUES
  ('Technology', 'Software development, IT, and tech roles'),
  ('Marketing', 'Digital marketing, content, and advertising'),
  ('Sales', 'Sales representatives, business development'),
  ('Finance', 'Accounting, financial analysis, banking'),
  ('Human Resources', 'HR management, recruitment, training'),
  ('Operations', 'Operations management, logistics, supply chain'),
  ('Design', 'UI/UX design, graphic design, creative roles'),
  ('Customer Service', 'Customer support, client relations'),
  ('Healthcare', 'Medical, nursing, healthcare administration'),
  ('Education', 'Teaching, training, educational administration');

-- Insert default skills
INSERT INTO skills (name, category) VALUES
  ('JavaScript', 'Programming'),
  ('React', 'Frontend'),
  ('Node.js', 'Backend'),
  ('Python', 'Programming'),
  ('Java', 'Programming'),
  ('SQL', 'Database'),
  ('HTML/CSS', 'Frontend'),
  ('TypeScript', 'Programming'),
  ('Git', 'Tools'),
  ('AWS', 'Cloud'),
  ('Digital Marketing', 'Marketing'),
  ('SEO', 'Marketing'),
  ('Content Writing', 'Marketing'),
  ('Project Management', 'Management'),
  ('Communication', 'Soft Skills'),
  ('Leadership', 'Soft Skills'),
  ('Problem Solving', 'Soft Skills'),
  ('Teamwork', 'Soft Skills');

-- Functions and triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_seekers_updated_at BEFORE UPDATE ON job_seekers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment job views
CREATE OR REPLACE FUNCTION increment_job_views(job_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE jobs SET views_count = views_count + 1 WHERE id = job_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update application count
CREATE OR REPLACE FUNCTION update_job_application_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE jobs SET applications_count = applications_count + 1 WHERE id = NEW.job_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE jobs SET applications_count = applications_count - 1 WHERE id = OLD.job_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_job_application_count_trigger
  AFTER INSERT OR DELETE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_job_application_count();