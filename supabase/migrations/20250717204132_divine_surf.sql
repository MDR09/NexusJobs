/*
  # Sample Data for Nexus Jobs Portal

  1. Sample Companies
  2. Sample Job Seekers
  3. Sample Jobs
  4. Sample Applications
*/

-- Note: This is sample data for development/testing
-- In production, real users will register through the application

-- Sample company profiles (these would normally be created through registration)
-- You can use these for testing by creating accounts with these emails first

-- Sample jobs data
INSERT INTO jobs (
  id,
  company_id,
  title,
  description,
  requirements,
  responsibilities,
  job_type,
  experience_level,
  min_experience,
  max_experience,
  min_salary,
  max_salary,
  location,
  city,
  state,
  is_remote,
  application_deadline
) VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1), -- This will need to be updated with actual company IDs
    'Senior Software Engineer',
    'We are looking for a Senior Software Engineer to join our dynamic team. You will be responsible for developing high-quality software solutions and mentoring junior developers.',
    'Bachelor''s degree in Computer Science or related field. 5+ years of experience in software development. Strong knowledge of JavaScript, React, Node.js, and databases.',
    'Design and develop software applications. Code review and mentoring. Collaborate with cross-functional teams. Participate in architectural decisions.',
    'full-time',
    'senior',
    5,
    8,
    800000,
    1500000,
    'Jaipur, Rajasthan',
    'Jaipur',
    'Rajasthan',
    false,
    (CURRENT_DATE + INTERVAL '30 days')
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1),
    'Digital Marketing Specialist',
    'Join our marketing team as a Digital Marketing Specialist. You will be responsible for creating and executing digital marketing campaigns across various channels.',
    'Bachelor''s degree in Marketing or related field. 2+ years of experience in digital marketing. Knowledge of SEO, SEM, social media marketing, and analytics tools.',
    'Develop and execute digital marketing strategies. Manage social media accounts. Analyze campaign performance. Create content for various digital platforms.',
    'full-time',
    'mid',
    2,
    4,
    400000,
    800000,
    'Mumbai, Maharashtra',
    'Mumbai',
    'Maharashtra',
    true,
    (CURRENT_DATE + INTERVAL '25 days')
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1),
    'Data Analyst',
    'We are seeking a Data Analyst to join our analytics team. You will work with large datasets to provide insights that drive business decisions.',
    'Bachelor''s degree in Statistics, Mathematics, or related field. 1+ years of experience in data analysis. Proficiency in SQL, Python, and data visualization tools.',
    'Analyze complex datasets. Create reports and dashboards. Collaborate with stakeholders to understand data requirements. Present findings to management.',
    'full-time',
    'entry',
    1,
    3,
    500000,
    900000,
    'Bangalore, Karnataka',
    'Bangalore',
    'Karnataka',
    false,
    (CURRENT_DATE + INTERVAL '20 days')
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1),
    'HR Executive',
    'Looking for an HR Executive to manage recruitment processes and employee relations. This is a great opportunity for someone starting their HR career.',
    'Bachelor''s degree in HR or related field. 0-2 years of experience. Good communication skills and knowledge of HR processes.',
    'Manage recruitment processes. Handle employee onboarding. Maintain employee records. Assist with HR policies and procedures.',
    'full-time',
    'entry',
    0,
    2,
    300000,
    600000,
    'Delhi, NCR',
    'Delhi',
    'Delhi',
    false,
    (CURRENT_DATE + INTERVAL '15 days')
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1),
    'Frontend Developer',
    'Remote Frontend Developer position for creating amazing user experiences. Work with modern technologies and a collaborative team.',
    'Bachelor''s degree in Computer Science or related field. 2+ years of experience in frontend development. Strong knowledge of React, JavaScript, HTML, CSS.',
    'Develop responsive web applications. Collaborate with designers and backend developers. Optimize applications for performance. Write clean, maintainable code.',
    'remote',
    'mid',
    2,
    5,
    600000,
    1200000,
    'Remote',
    'Pune',
    'Maharashtra',
    true,
    (CURRENT_DATE + INTERVAL '35 days')
  ),
  (
    gen_random_uuid(),
    (SELECT id FROM companies LIMIT 1),
    'Business Development Executive',
    'Drive business growth through strategic partnerships and client acquisition. Join our dynamic sales team.',
    'Bachelor''s degree in Business or related field. 2+ years of experience in business development or sales. Excellent communication and negotiation skills.',
    'Identify new business opportunities. Build and maintain client relationships. Prepare proposals and presentations. Meet sales targets.',
    'full-time',
    'mid',
    2,
    4,
    500000,
    1000000,
    'Hyderabad, Telangana',
    'Hyderabad',
    'Telangana',
    false,
    (CURRENT_DATE + INTERVAL '28 days')
  );

-- Update job categories (link jobs to categories)
UPDATE jobs SET category_id = (SELECT id FROM categories WHERE name = 'Technology') 
WHERE title IN ('Senior Software Engineer', 'Frontend Developer', 'Data Analyst');

UPDATE jobs SET category_id = (SELECT id FROM categories WHERE name = 'Marketing') 
WHERE title = 'Digital Marketing Specialist';

UPDATE jobs SET category_id = (SELECT id FROM categories WHERE name = 'Human Resources') 
WHERE title = 'HR Executive';

UPDATE jobs SET category_id = (SELECT id FROM categories WHERE name = 'Sales') 
WHERE title = 'Business Development Executive';