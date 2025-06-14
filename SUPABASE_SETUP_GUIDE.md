# Supabase Setup Guide for Portfolio Admin Panel

Follow these steps to set up your complete Supabase backend:

## Step 1: Access Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to the **SQL Editor** (left sidebar)

## Step 2: Create Database Tables
1. In the SQL Editor, create a new query
2. Copy and paste the entire content from `supabase-setup.sql`
3. Click **Run** to execute the script
4. This creates all tables, indexes, triggers, and Row Level Security policies

## Step 3: Set Up Storage Buckets
1. Still in the SQL Editor, create another new query
2. Copy and paste the content from `supabase-storage-setup.sql`
3. Click **Run** to create storage buckets and policies

## Step 4: Add Sample Data (Optional)
1. Create another query in SQL Editor
2. Copy and paste content from `sample-data.sql`
3. Click **Run** to populate tables with sample data

## Step 5: Configure Authentication
1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Enable **Email** provider
3. Set up your site URL in **URL Configuration**
4. Configure email templates if needed

## Step 6: Create Your Admin User
1. Go to **Authentication** → **Users**
2. Click **Add user** to create your admin account
3. Note the User ID from the created user
4. In SQL Editor, run this command (replace with your actual user ID):
   ```sql
   INSERT INTO public.admin_users (user_id, role) 
   VALUES ('your-actual-user-id-here', 'super_admin');
   ```

## Step 7: Configure Storage
1. Go to **Storage** in your Supabase dashboard
2. Verify these buckets were created:
   - `project-images`
   - `blog-images` 
   - `avatars`
   - `service-icons`
3. All buckets should be public for read access

## Step 8: Get Your Credentials
1. Go to **Settings** → **API**
2. Copy your:
   - Project URL
   - Anon (public) key
3. These will be automatically configured in your Lovable project

## Step 9: Test the Setup
1. Try logging into your admin panel
2. Test creating/editing content in each section
3. Verify file uploads work properly

## Database Schema Overview

### Tables Created:
- **skills** - Technical skills with categories and levels
- **services** - Service offerings with features and pricing
- **projects** - Portfolio projects with technologies and links
- **testimonials** - Client testimonials with ratings
- **blog_posts** - Blog content with publishing status
- **admin_users** - Admin user roles and permissions

### Storage Buckets:
- **project-images** - Screenshots and project media
- **blog-images** - Blog post featured images
- **avatars** - User profile pictures and testimonial photos
- **service-icons** - Custom service icon uploads

### Security Features:
- Row Level Security (RLS) enabled on all tables
- Public read access for portfolio display
- Admin-only write access with proper authentication
- Secure file upload policies

## Troubleshooting

### Common Issues:
1. **Permission Denied**: Make sure your user is added to `admin_users` table
2. **Storage Upload Fails**: Check bucket policies and user authentication
3. **Data Not Showing**: Verify RLS policies allow public read access

### Useful SQL Queries:
```sql
-- Check if user is admin
SELECT * FROM admin_users WHERE user_id = auth.uid();

-- View all published blog posts
SELECT * FROM blog_posts WHERE published = true;

-- Check storage bucket policies
SELECT * FROM storage.objects WHERE bucket_id = 'project-images';
```

Your Supabase backend is now fully configured for the admin panel!