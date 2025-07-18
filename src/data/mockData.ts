// Mock data for the application
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  experience: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive';
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  logo: string;
  category: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  description: string;
  website: string;
  openJobs: number;
  founded: string;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    experience: 'Senior Level',
    salary: '₹8-15 LPA',
    description: 'Join our dynamic team as a Senior Frontend Developer and work on cutting-edge web applications using modern technologies.',
    requirements: ['React.js', 'TypeScript', 'Next.js', '5+ years experience'],
    posted: '2 days ago',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Digital Marketing Manager',
    company: 'Creative Agency',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: 'Mid Level',
    salary: '₹6-12 LPA',
    description: 'Lead our digital marketing initiatives and drive brand growth through innovative campaigns.',
    requirements: ['Digital Marketing', 'SEO/SEM', 'Social Media', '3+ years experience'],
    posted: '1 day ago',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Marketing'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: 'Mid Level',
    salary: '₹10-18 LPA',
    description: 'Work with big data to extract meaningful insights and drive business decisions.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
    posted: '3 days ago',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Technology'
  },
  {
    id: '4',
    title: 'HR Business Partner',
    company: 'Global Enterprises',
    location: 'Delhi, NCR',
    type: 'Full-time',
    experience: 'Senior Level',
    salary: '₹7-14 LPA',
    description: 'Partner with business leaders to develop HR strategies and drive organizational excellence.',
    requirements: ['HR Management', 'Business Partnering', 'Leadership', '5+ years experience'],
    posted: '1 week ago',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Human Resources'
  },
  {
    id: '5',
    title: 'Product Designer',
    company: 'Design Studio',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: 'Mid Level',
    salary: '₹5-10 LPA',
    description: 'Create exceptional user experiences through innovative design solutions.',
    requirements: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
    posted: '4 days ago',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Design'
  },
  {
    id: '6',
    title: 'Sales Executive',
    company: 'Business Solutions',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: 'Entry Level',
    salary: '₹3-6 LPA',
    description: 'Drive sales growth and build strong client relationships in our expanding market.',
    requirements: ['Sales', 'Communication', 'CRM', 'Business Development'],
    posted: '5 days ago',
    logo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    category: 'Sales'
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Technology',
    location: 'Jaipur, Rajasthan',
    size: '100-500 employees',
    description: 'Leading technology company specializing in innovative software solutions for businesses worldwide.',
    website: 'www.techcorp.com',
    openJobs: 12,
    founded: '2015'
  },
  {
    id: '2',
    name: 'Creative Agency',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Marketing & Advertising',
    location: 'Mumbai, Maharashtra',
    size: '50-100 employees',
    description: 'Full-service creative agency helping brands tell their stories through innovative marketing campaigns.',
    website: 'www.creativeagency.com',
    openJobs: 8,
    founded: '2018'
  },
  {
    id: '3',
    name: 'Analytics Pro',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Data & Analytics',
    location: 'Bangalore, Karnataka',
    size: '200-500 employees',
    description: 'Data analytics company providing insights and intelligence solutions for enterprise clients.',
    website: 'www.analyticspro.com',
    openJobs: 15,
    founded: '2012'
  },
  {
    id: '4',
    name: 'Global Enterprises',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Consulting',
    location: 'Delhi, NCR',
    size: '1000+ employees',
    description: 'Global consulting firm providing strategic business solutions across multiple industries.',
    website: 'www.globalenterprises.com',
    openJobs: 25,
    founded: '2008'
  },
  {
    id: '5',
    name: 'Design Studio',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Design',
    location: 'Pune, Maharashtra',
    size: '20-50 employees',
    description: 'Award-winning design studio creating beautiful and functional digital experiences.',
    website: 'www.designstudio.com',
    openJobs: 6,
    founded: '2020'
  },
  {
    id: '6',
    name: 'Business Solutions',
    logo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    industry: 'Business Services',
    location: 'Hyderabad, Telangana',
    size: '500-1000 employees',
    description: 'Comprehensive business solutions provider helping companies optimize their operations.',
    website: 'www.businesssolutions.com',
    openJobs: 18,
    founded: '2010'
  }
];

export const jobCategories = [
  'Technology',
  'Marketing',
  'Sales',
  'Design',
  'Human Resources',
  'Finance',
  'Operations',
  'Customer Service',
  'Healthcare',
  'Education'
];

export const locations = [
  'Jaipur, Rajasthan',
  'Mumbai, Maharashtra',
  'Delhi, NCR',
  'Bangalore, Karnataka',
  'Pune, Maharashtra',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal'
];