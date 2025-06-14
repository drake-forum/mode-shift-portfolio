import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Settings, User, Briefcase, FileText, Image, MessageSquare, BarChart3, Palette, Code, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminContent = () => {
  const { mode } = usePortfolio();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [portfolioData, setPortfolioData] = useState({
    // Hero Section
    hero: {
      name: 'John Doe',
      title: mode === 'developer' ? 'Full Stack Developer' : 'UI/UX Designer',
      subtitle: mode === 'developer' 
        ? 'Building scalable web applications with modern technologies' 
        : 'Creating beautiful and intuitive user experiences',
      bio: 'Passionate about creating digital solutions that make a difference.',
    },
    // About Section
    about: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      experience: '5+ years',
      projects: '50+',
      clients: '25+',
      background: 'Computer Science graduate with expertise in modern web technologies.',
      education: [
        { degree: 'Bachelor of Computer Science', school: 'University Name', year: '2019' }
      ],
      timeline: [
        { year: '2024', title: 'Senior Developer', company: 'Tech Corp' },
        { year: '2022', title: 'Full Stack Developer', company: 'StartupXYZ' }
      ]
    },
    // Skills
    skills: {
      technical: mode === 'developer' 
        ? ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL']
        : ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle', 'InVision'],
      soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Work']
    },
    // Services
    services: [
      {
        title: mode === 'developer' ? 'Web Development' : 'UI/UX Design',
        description: 'Custom solutions tailored to your needs',
        price: '$5000',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
      }
    ],
    // Projects
    projects: [
      {
        title: 'Project One',
        description: 'Amazing project description',
        tech: ['React', 'Node.js'],
        image: '/placeholder.svg',
        github: 'https://github.com',
        demo: 'https://demo.com'
      }
    ],
    // Testimonials
    testimonials: [
      {
        name: 'Client One',
        role: 'CEO, Company',
        text: 'Excellent work and professional service.',
        rating: 5
      }
    ],
    // Blog
    blog: [
      {
        title: 'Blog Post Title',
        excerpt: 'Brief description of the blog post...',
        date: '2024-01-15',
        category: 'Development'
      }
    ],
    // Contact
    contact: {
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    // Resume
    resume: {
      url: '/resume.pdf',
      lastUpdated: '2024-01-15'
    }
  });

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('admin-authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual authentication logic
    // For now, just simulate authentication
    if (loginForm.username && loginForm.password) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-authenticated', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!"
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both username and password.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-authenticated');
    navigate('/');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
  };

  const handleSave = (section: string) => {
    // TODO: Implement actual save functionality
    toast({
      title: "Changes Saved",
      description: `${section} has been updated successfully.`
    });
  };

  const updatePortfolioData = (section: string, field: string, value: any) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-muted-foreground">
              Enter your credentials to access the admin panel
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="Enter username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter password"
                />
              </div>
              <Button type="submit" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Portfolio Admin</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Badge variant={mode === 'developer' ? 'default' : 'secondary'}>
              {mode === 'developer' ? (
                <>
                  <Code className="mr-1 h-3 w-3" />
                  Developer Mode
                </>
              ) : (
                <>
                  <Palette className="mr-1 h-3 w-3" />
                  Designer Mode
                </>
              )}
            </Badge>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="container mx-auto py-6">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid grid-cols-8 w-full">
            <TabsTrigger value="hero" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-1">
              <Image className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={portfolioData.hero.name}
                      onChange={(e) => updatePortfolioData('hero', 'name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={portfolioData.hero.title}
                      onChange={(e) => updatePortfolioData('hero', 'title', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={portfolioData.hero.subtitle}
                    onChange={(e) => updatePortfolioData('hero', 'subtitle', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={portfolioData.hero.bio}
                    onChange={(e) => updatePortfolioData('hero', 'bio', e.target.value)}
                    rows={3}
                  />
                </div>
                <Button onClick={() => handleSave('Hero')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section */}
          <TabsContent value="about">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={portfolioData.about.description}
                      onChange={(e) => updatePortfolioData('about', 'description', e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience</Label>
                      <Input
                        id="experience"
                        value={portfolioData.about.experience}
                        onChange={(e) => updatePortfolioData('about', 'experience', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projects-count">Projects</Label>
                      <Input
                        id="projects-count"
                        value={portfolioData.about.projects}
                        onChange={(e) => updatePortfolioData('about', 'projects', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clients">Clients</Label>
                      <Input
                        id="clients"
                        value={portfolioData.about.clients}
                        onChange={(e) => updatePortfolioData('about', 'clients', e.target.value)}
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleSave('About')}>Save Changes</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="technical-skills">Technical Skills (comma separated)</Label>
                  <Textarea
                    id="technical-skills"
                    value={portfolioData.skills.technical.join(', ')}
                    onChange={(e) => updatePortfolioData('skills', 'technical', e.target.value.split(', '))}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soft-skills">Soft Skills (comma separated)</Label>
                  <Textarea
                    id="soft-skills"
                    value={portfolioData.skills.soft.join(', ')}
                    onChange={(e) => updatePortfolioData('skills', 'soft', e.target.value.split(', '))}
                    rows={2}
                  />
                </div>
                <Button onClick={() => handleSave('Skills')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Section */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage your service offerings, pricing, and descriptions
                </p>
                <Button onClick={() => handleSave('Services')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Section */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Add, edit, and organize your project portfolio
                </p>
                <Button onClick={() => handleSave('Projects')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Section */}
          <TabsContent value="testimonials">
            <Card>
              <CardHeader>
                <CardTitle>Client Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage client reviews and testimonials
                </p>
                <Button onClick={() => handleSave('Testimonials')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Section */}
          <TabsContent value="blog">
            <Card>
              <CardHeader>
                <CardTitle>Blog Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create and manage blog posts
                </p>
                <Button onClick={() => handleSave('Blog')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={portfolioData.contact.email}
                      onChange={(e) => updatePortfolioData('contact', 'email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={portfolioData.contact.phone}
                      onChange={(e) => updatePortfolioData('contact', 'phone', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={portfolioData.contact.location}
                    onChange={(e) => updatePortfolioData('contact', 'location', e.target.value)}
                  />
                </div>
                <Separator />
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={portfolioData.contact.social.github}
                      onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, github: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={portfolioData.contact.social.linkedin}
                      onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, linkedin: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={portfolioData.contact.social.twitter}
                      onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, twitter: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSave('Contact')}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <PortfolioProvider>
      <AdminContent />
    </PortfolioProvider>
};

export default Admin;