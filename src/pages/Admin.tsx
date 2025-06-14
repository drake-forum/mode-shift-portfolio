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
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Lock, 
  Settings, 
  User, 
  Briefcase, 
  FileText, 
  Image, 
  MessageSquare, 
  BarChart3, 
  Palette, 
  Code, 
  LogOut,
  Home,
  Phone,
  Mail,
  Globe,
  Calendar,
  Edit,
  Trash2,
  Plus,
  Upload,
  Eye,
  EyeOff,
  Save,
  Download,
  RefreshCw,
  Star,
  Award,
  Target,
  TrendingUp,
  Users,
  Database
} from 'lucide-react';
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
    },
    // SEO & Analytics
    seo: {
      title: 'Portfolio - John Doe',
      description: 'Professional portfolio showcasing web development skills',
      keywords: 'web developer, react, javascript, portfolio',
      ogImage: '/og-image.jpg'
    },
    // Theme & Appearance
    appearance: {
      primaryColor: '#3b82f6',
      fontFamily: 'Poppins',
      layout: 'modern',
      animations: true,
      darkMode: true
    },
    // Site Settings
    settings: {
      siteName: 'John Doe Portfolio',
      maintenanceMode: false,
      allowComments: true,
      googleAnalytics: '',
      favicon: '/favicon.ico'
    }
  });
  const [activeSection, setActiveSection] = useState('dashboard');

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

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'hero', label: 'Hero Section', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Image },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'seo', label: 'SEO & Analytics', icon: TrendingUp },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'settings', label: 'Site Settings', icon: Settings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
              <p className="text-muted-foreground mt-2">
                Secure access to portfolio management
              </p>
            </div>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter your username"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter your password"
                    className="h-11"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-11 font-medium">
                <Lock className="mr-2 h-4 w-4" />
                Access Admin Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border/50 shadow-sm">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Portfolio Management</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-2 text-sm">
            <Badge variant={mode === 'developer' ? 'default' : 'secondary'} className="text-xs">
              {mode === 'developer' ? (
                <>
                  <Code className="mr-1 h-3 w-3" />
                  Developer
                </>
              ) : (
                <>
                  <Palette className="mr-1 h-3 w-3" />
                  Designer
                </>
              )}
            </Badge>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm ${
                activeSection === item.id
                  ? 'bg-primary/10 text-primary font-medium border border-primary/20 shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground hover:border hover:border-border/30'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout} 
            className="w-full hover:scale-[1.02] transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 hover:shadow-sm"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Dashboard */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
                <p className="text-muted-foreground">Welcome to your portfolio management center</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-blue-500/10">
                        <Eye className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Page Views</p>
                        <p className="text-2xl font-bold">12,543</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-green-500/10">
                        <Users className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Visitors</p>
                        <p className="text-2xl font-bold">8,921</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <MessageSquare className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Messages</p>
                        <p className="text-2xl font-bold">47</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-orange-500/10">
                        <Download className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Downloads</p>
                        <p className="text-2xl font-bold">234</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <Edit className="h-4 w-4 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Hero section updated</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <Plus className="h-4 w-4 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New project added</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <Upload className="h-4 w-4 text-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Resume uploaded</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Edit className="mr-2 h-4 w-4" />
                      Update Bio
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Project
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Resume
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Backup Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Hero Section */}
          {activeSection === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Hero Section</h2>
                  <p className="text-muted-foreground">Manage your main introduction content</p>
                </div>
                <Button onClick={() => handleSave('Hero')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        value={portfolioData.hero.name}
                        onChange={(e) => updatePortfolioData('hero', 'name', e.target.value)}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-sm font-medium">Professional Title</Label>
                      <Input
                        id="title"
                        value={portfolioData.hero.title}
                        onChange={(e) => updatePortfolioData('hero', 'title', e.target.value)}
                        className="h-11"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subtitle" className="text-sm font-medium">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={portfolioData.hero.subtitle}
                      onChange={(e) => updatePortfolioData('hero', 'subtitle', e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sm font-medium">Bio Description</Label>
                    <Textarea
                      id="bio"
                      value={portfolioData.hero.bio}
                      onChange={(e) => updatePortfolioData('hero', 'bio', e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* SEO & Analytics Section */}
          {activeSection === 'seo' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">SEO & Analytics</h2>
                  <p className="text-muted-foreground">Optimize your portfolio for search engines</p>
                </div>
                <Button onClick={() => handleSave('SEO')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Search Engine Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="seo-title" className="text-sm font-medium">Page Title</Label>
                    <Input
                      id="seo-title"
                      value={portfolioData.seo.title}
                      onChange={(e) => updatePortfolioData('seo', 'title', e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seo-description" className="text-sm font-medium">Meta Description</Label>
                    <Textarea
                      id="seo-description"
                      value={portfolioData.seo.description}
                      onChange={(e) => updatePortfolioData('seo', 'description', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seo-keywords" className="text-sm font-medium">Keywords</Label>
                    <Input
                      id="seo-keywords"
                      value={portfolioData.seo.keywords}
                      onChange={(e) => updatePortfolioData('seo', 'keywords', e.target.value)}
                      className="h-11"
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Appearance Section */}
          {activeSection === 'appearance' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Appearance</h2>
                  <p className="text-muted-foreground">Customize the look and feel of your portfolio</p>
                </div>
                <Button onClick={() => handleSave('Appearance')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Theme Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Primary Color</Label>
                        <Input
                          type="color"
                          value={portfolioData.appearance.primaryColor}
                          onChange={(e) => updatePortfolioData('appearance', 'primaryColor', e.target.value)}
                          className="h-11 w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Font Family</Label>
                        <Select value={portfolioData.appearance.fontFamily}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Poppins">Poppins</SelectItem>
                            <SelectItem value="Inter">Inter</SelectItem>
                            <SelectItem value="JetBrains Mono">JetBrains Mono</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm font-medium">Enable Animations</Label>
                        <p className="text-xs text-muted-foreground">Smooth transitions and hover effects</p>
                      </div>
                      <Switch
                        checked={portfolioData.appearance.animations}
                        onCheckedChange={(checked) => updatePortfolioData('appearance', 'animations', checked)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Site Settings */}
          {activeSection === 'settings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Site Settings</h2>
                  <p className="text-muted-foreground">General configuration and preferences</p>
                </div>
                <Button onClick={() => handleSave('Settings')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="site-name" className="text-sm font-medium">Site Name</Label>
                    <Input
                      id="site-name"
                      value={portfolioData.settings.siteName}
                      onChange={(e) => updatePortfolioData('settings', 'siteName', e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">Maintenance Mode</Label>
                      <p className="text-xs text-muted-foreground">Temporarily disable public access</p>
                    </div>
                    <Switch
                      checked={portfolioData.settings.maintenanceMode}
                      onCheckedChange={(checked) => updatePortfolioData('settings', 'maintenanceMode', checked)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="analytics" className="text-sm font-medium">Google Analytics ID</Label>
                    <Input
                      id="analytics"
                      value={portfolioData.settings.googleAnalytics}
                      onChange={(e) => updatePortfolioData('settings', 'googleAnalytics', e.target.value)}
                      className="h-11"
                      placeholder="G-XXXXXXXXXX"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other sections can be added similarly */}
          {activeSection === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">About Section</h2>
                  <p className="text-muted-foreground">Manage your professional background and experience</p>
                </div>
                <Button onClick={() => handleSave('About')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">About Description</Label>
                    <Textarea
                      id="description"
                      value={portfolioData.about.description}
                      onChange={(e) => updatePortfolioData('about', 'description', e.target.value)}
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-sm font-medium">Years of Experience</Label>
                      <Input
                        id="experience"
                        value={portfolioData.about.experience}
                        onChange={(e) => updatePortfolioData('about', 'experience', e.target.value)}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projects-count" className="text-sm font-medium">Completed Projects</Label>
                      <Input
                        id="projects-count"
                        value={portfolioData.about.projects}
                        onChange={(e) => updatePortfolioData('about', 'projects', e.target.value)}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clients" className="text-sm font-medium">Happy Clients</Label>
                      <Input
                        id="clients"
                        value={portfolioData.about.clients}
                        onChange={(e) => updatePortfolioData('about', 'clients', e.target.value)}
                        className="h-11"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">Update your contact details and social links</p>
                </div>
                <Button onClick={() => handleSave('Contact')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={portfolioData.contact.email}
                        onChange={(e) => updatePortfolioData('contact', 'email', e.target.value)}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={portfolioData.contact.phone}
                        onChange={(e) => updatePortfolioData('contact', 'phone', e.target.value)}
                        className="h-11"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={portfolioData.contact.location}
                      onChange={(e) => updatePortfolioData('contact', 'location', e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-medium mb-4">Social Media Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-sm font-medium">GitHub</Label>
                        <Input
                          id="github"
                          value={portfolioData.contact.social.github}
                          onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, github: e.target.value })}
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={portfolioData.contact.social.linkedin}
                          onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, linkedin: e.target.value })}
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter" className="text-sm font-medium">Twitter</Label>
                        <Input
                          id="twitter"
                          value={portfolioData.contact.social.twitter}
                          onChange={(e) => updatePortfolioData('contact', 'social', { ...portfolioData.contact.social, twitter: e.target.value })}
                          className="h-11"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <PortfolioProvider>
      <AdminContent />
    </PortfolioProvider>
  );
};

export default Admin;