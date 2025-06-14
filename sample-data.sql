-- Sample data for testing the admin panel
-- Execute this after creating the tables

-- Insert sample skills
INSERT INTO public.skills (name, level, category, icon) VALUES
('React', 95, 'Frontend', 'Atom'),
('TypeScript', 90, 'Frontend', 'Code'),
('Node.js', 85, 'Backend', 'Server'),
('PostgreSQL', 80, 'Database', 'Database'),
('Docker', 75, 'DevOps', 'Container'),
('AWS', 70, 'DevOps', 'Cloud'),
('Figma', 85, 'Design', 'Palette'),
('Next.js', 90, 'Frontend', 'Globe');

-- Insert sample services
INSERT INTO public.services (title, description, icon, features, price_range, duration) VALUES
(
  'Web Development',
  'Custom web applications built with modern technologies',
  'Globe',
  ARRAY['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'],
  '$2,000 - $10,000',
  '2-8 weeks'
),
(
  'Mobile App Development',
  'Native and cross-platform mobile applications',
  'Smartphone',
  ARRAY['iOS Development', 'Android Development', 'React Native', 'App Store Deployment'],
  '$5,000 - $25,000',
  '3-12 weeks'
),
(
  'UI/UX Design',
  'User-centered design solutions for digital products',
  'Palette',
  ARRAY['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  '$1,500 - $8,000',
  '2-6 weeks'
);

-- Insert sample projects
INSERT INTO public.projects (title, description, image, technologies, live_url, github_url, featured, status) VALUES
(
  'E-commerce Platform',
  'A full-stack e-commerce solution with payment integration and admin dashboard',
  '/placeholder.svg',
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  'https://example-ecommerce.com',
  'https://github.com/username/ecommerce',
  true,
  'completed'
),
(
  'Task Management App',
  'Collaborative task management application with real-time updates',
  '/placeholder.svg',
  ARRAY['React', 'Socket.io', 'MongoDB', 'Express'],
  'https://example-tasks.com',
  'https://github.com/username/tasks',
  true,
  'completed'
),
(
  'Portfolio Website',
  'Personal portfolio website with blog and contact functionality',
  '/placeholder.svg',
  ARRAY['Next.js', 'Tailwind CSS', 'Supabase'],
  'https://example-portfolio.com',
  'https://github.com/username/portfolio',
  false,
  'completed'
);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, company, content, avatar, rating, featured) VALUES
(
  'Sarah Johnson',
  'Product Manager',
  'TechCorp Inc.',
  'Outstanding work on our web application. The attention to detail and technical expertise exceeded our expectations.',
  '/placeholder.svg',
  5,
  true
),
(
  'Michael Chen',
  'CEO',
  'StartupXYZ',
  'Delivered our mobile app on time and within budget. Great communication throughout the project.',
  '/placeholder.svg',
  5,
  true
),
(
  'Emily Rodriguez',
  'Marketing Director',
  'Creative Agency',
  'The website redesign significantly improved our conversion rates. Highly recommend!',
  '/placeholder.svg',
  5,
  false
);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, image, author, published, published_at, tags, reading_time) VALUES
(
  'Getting Started with React and TypeScript',
  'getting-started-react-typescript',
  'Learn how to set up a React project with TypeScript for better type safety and developer experience.',
  '# Getting Started with React and TypeScript\n\nTypeScript has become increasingly popular in the React community...\n\n## Setting Up Your Project\n\n```bash\nnpx create-react-app my-app --template typescript\n```\n\nThis command creates a new React project with TypeScript configuration...',
  '/placeholder.svg',
  'John Developer',
  true,
  NOW() - INTERVAL '7 days',
  ARRAY['React', 'TypeScript', 'Web Development'],
  5
),
(
  'Building Scalable APIs with Node.js',
  'building-scalable-apis-nodejs',
  'Best practices for creating maintainable and scalable REST APIs using Node.js and Express.',
  '# Building Scalable APIs with Node.js\n\nCreating scalable APIs is crucial for modern web applications...\n\n## Project Structure\n\nA well-organized project structure is the foundation of a scalable API...',
  '/placeholder.svg',
  'John Developer',
  true,
  NOW() - INTERVAL '14 days',
  ARRAY['Node.js', 'API', 'Backend'],
  8
),
(
  'The Future of Web Development',
  'future-of-web-development',
  'Exploring upcoming trends and technologies that will shape the future of web development.',
  '# The Future of Web Development\n\nWeb development is constantly evolving...',
  '/placeholder.svg',
  'John Developer',
  false,
  NULL,
  ARRAY['Web Development', 'Trends', 'Future'],
  6
);

-- Note: You'll need to manually add your admin user after authentication setup
-- Example: INSERT INTO public.admin_users (user_id, role) VALUES ('your-auth-user-id', 'super_admin');