-- Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users table
CREATE POLICY "Admin users can view their own record" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admin users can update their own record" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policy to allow checking if user is admin
CREATE POLICY "Check admin status" 
ON public.admin_users 
FOR SELECT 
USING (true);