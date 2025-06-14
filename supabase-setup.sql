-- Portfolio Admin Panel Database Setup
-- Execute these commands in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE skill_category AS ENUM (
  'Frontend',
  'Backend', 
  'DevOps',
  'Database',
  'Mobile',
  'Design',
  'Other'
);

-- 1. SKILLS TABLE
CREATE TABLE public.skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
  category skill_category NOT NULL,
  icon VARCHAR(50) DEFAULT 'Code',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SERVICES TABLE
CREATE TABLE public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NOT NULL DEFAULT 'Globe',
  features TEXT[] NOT NULL DEFAULT '{}',
  price_range VARCHAR(50),
  duration VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PROJECTS TABLE
CREATE TABLE public.projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(500),
  technologies TEXT[] NOT NULL DEFAULT '{}',
  live_url VARCHAR(500),
  github_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  status VARCHAR(20) DEFAULT 'completed' CHECK (status IN ('completed', 'in-progress', 'planned')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. TESTIMONIALS TABLE
CREATE TABLE public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  avatar VARCHAR(500),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. BLOG POSTS TABLE
CREATE TABLE public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image VARCHAR(500),
  author VARCHAR(100) NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  tags TEXT[] NOT NULL DEFAULT '{}',
  reading_time INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. ADMIN USERS TABLE (for role-based access)
CREATE TABLE public.admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  permissions TEXT[] DEFAULT '{"read", "write", "delete"}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_skills_category ON public.skills(category);
CREATE INDEX idx_projects_featured ON public.projects(featured);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_testimonials_featured ON public.testimonials(featured);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_admin_users_user_id ON public.admin_users(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers to all tables
CREATE TRIGGER set_updated_at_skills
  BEFORE UPDATE ON public.skills
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_services
  BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_projects
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_testimonials
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_blog_posts
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ POLICIES (for portfolio display)
CREATE POLICY "Enable read access for all users" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.services FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Enable read access for published posts" ON public.blog_posts FOR SELECT USING (published = true);

-- ADMIN WRITE POLICIES
CREATE POLICY "Enable insert for admin users" ON public.skills FOR INSERT 
WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable update for admin users" ON public.skills FOR UPDATE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable delete for admin users" ON public.skills FOR DELETE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable insert for admin users" ON public.services FOR INSERT 
WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable update for admin users" ON public.services FOR UPDATE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable delete for admin users" ON public.services FOR DELETE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable insert for admin users" ON public.projects FOR INSERT 
WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable update for admin users" ON public.projects FOR UPDATE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable delete for admin users" ON public.projects FOR DELETE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable insert for admin users" ON public.testimonials FOR INSERT 
WITH CHECK (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable update for admin users" ON public.testimonials FOR UPDATE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable delete for admin users" ON public.testimonials FOR DELETE 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

CREATE POLICY "Enable all operations for admin users" ON public.blog_posts FOR ALL 
USING (EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()));

-- ADMIN USERS TABLE POLICIES
CREATE POLICY "Enable read for admin users" ON public.admin_users FOR SELECT 
USING (user_id = auth.uid() OR EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND role = 'super_admin'
));

CREATE POLICY "Enable insert for super admin" ON public.admin_users FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND role = 'super_admin'
));