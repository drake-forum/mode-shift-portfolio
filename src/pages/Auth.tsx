import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock, UserPlus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { user, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/admin');
    }
  }, [user, loading, navigate]);

  const setupAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase.functions.invoke('setup-admin', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Error setting up admin access:', error);
      }
    } catch (error) {
      console.error('Error setting up admin access:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      return;
    }

    if (isSignUp) {
      const { error } = await signUp(formData.email, formData.password);
      if (!error) {
        // Set up admin access after successful signup
        setTimeout(setupAdminAccess, 1000);
      }
    } else {
      await signIn(formData.email, formData.password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">
              {isSignUp ? 'Create Admin Account' : 'Admin Login'}
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              {isSignUp 
                ? 'Set up your admin account to manage the portfolio'
                : 'Access the portfolio management system'
              }
            </p>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter your password"
                  className="h-11"
                  required
                  minLength={6}
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-11 font-medium">
              {isSignUp ? (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Sign In
                </>
              )}
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : 'Need to create an admin account? Sign up'
                }
              </button>
            </div>
          </form>
          <div className="mt-6 pt-6 border-t border-border/50">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="w-full"
            >
              Back to Portfolio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;