-- Drop the problematic policies first
DROP POLICY IF EXISTS "Check admin status" ON public.admin_users;
DROP POLICY IF EXISTS "Admin users can view their own record" ON public.admin_users;
DROP POLICY IF EXISTS "Admin users can update their own record" ON public.admin_users;

-- Create a security definer function to check admin status without recursion
CREATE OR REPLACE FUNCTION public.is_admin(user_id_param uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = user_id_param
  );
$$;

-- Create new policies using the security definer function
CREATE POLICY "Users can view their own admin record" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own admin record" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Allow checking admin status for any authenticated user
CREATE POLICY "Allow admin status check" 
ON public.admin_users 
FOR SELECT 
USING (auth.role() = 'authenticated');