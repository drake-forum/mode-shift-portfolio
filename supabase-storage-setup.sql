-- Storage Buckets Setup
-- Execute these commands in your Supabase SQL Editor

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('project-images', 'project-images', true),
('blog-images', 'blog-images', true),
('avatars', 'avatars', true),
('service-icons', 'service-icons', true);

-- Storage policies for project-images bucket
CREATE POLICY "Public read access for project images" ON storage.objects FOR SELECT 
USING (bucket_id = 'project-images');

CREATE POLICY "Admin can upload project images" ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'project-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can update project images" ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'project-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can delete project images" ON storage.objects FOR DELETE 
USING (
  bucket_id = 'project-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

-- Storage policies for blog-images bucket
CREATE POLICY "Public read access for blog images" ON storage.objects FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can upload blog images" ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'blog-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can update blog images" ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'blog-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can delete blog images" ON storage.objects FOR DELETE 
USING (
  bucket_id = 'blog-images' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

-- Storage policies for avatars bucket
CREATE POLICY "Public read access for avatars" ON storage.objects FOR SELECT 
USING (bucket_id = 'avatars');

CREATE POLICY "Admin can upload avatars" ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'avatars' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can update avatars" ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'avatars' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can delete avatars" ON storage.objects FOR DELETE 
USING (
  bucket_id = 'avatars' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

-- Storage policies for service-icons bucket
CREATE POLICY "Public read access for service icons" ON storage.objects FOR SELECT 
USING (bucket_id = 'service-icons');

CREATE POLICY "Admin can upload service icons" ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'service-icons' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can update service icons" ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'service-icons' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);

CREATE POLICY "Admin can delete service icons" ON storage.objects FOR DELETE 
USING (
  bucket_id = 'service-icons' 
  AND EXISTS (SELECT 1 FROM public.admin_users WHERE user_id = auth.uid())
);