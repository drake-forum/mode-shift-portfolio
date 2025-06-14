import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import { useAuth } from '@/hooks/useAuth';
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
  const { user, isAdmin, loading, signIn, signOut } = useAuth();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isSignUp, setIsSignUp] = useState(false);
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

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolio-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setPortfolioData(parsedData);
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Redirect unauthenticated users
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }

    const { error } = isSignUp 
      ? await signIn(loginForm.email, loginForm.password)
      : await signIn(loginForm.email, loginForm.password);

    if (!error && !isSignUp) {
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!"
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const handleSave = (section: string) => {
    // Save to localStorage for persistence
    localStorage.setItem('portfolio-data', JSON.stringify(portfolioData));
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border/50 shadow-sm flex flex-col">
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

        <nav className="p-4 space-y-1 flex-1">
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

        <div className="p-4 border-t border-border/50">
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
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveSection('hero')}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Update Bio
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveSection('projects')}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Project
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'resume.pdf';
                        link.click();
                        toast({
                          title: "Resume Downloaded",
                          description: "Your resume has been downloaded successfully."
                        });
                      }}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        const dataStr = JSON.stringify(portfolioData, null, 2);
                        const dataBlob = new Blob([dataStr], { type: 'application/json' });
                        const url = URL.createObjectURL(dataBlob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
                        link.click();
                        URL.revokeObjectURL(url);
                        toast({
                          title: "Backup Created",
                          description: "Portfolio data has been backed up successfully."
                        });
                      }}
                    >
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
                        <Select 
                          value={portfolioData.appearance.fontFamily}
                          onValueChange={(value) => updatePortfolioData('appearance', 'fontFamily', value)}
                        >
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

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Skills Management</h2>
                  <p className="text-muted-foreground">Manage your technical and soft skills</p>
                </div>
                <Button onClick={() => handleSave('Skills')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Skills (comma-separated)</Label>
                      <Textarea
                        value={portfolioData.skills.technical.join(', ')}
                        onChange={(e) => updatePortfolioData('skills', 'technical', e.target.value.split(', ').filter(s => s.trim()))}
                        rows={3}
                        placeholder="React, TypeScript, Node.js, Python, PostgreSQL"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Soft Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Skills (comma-separated)</Label>
                      <Textarea
                        value={portfolioData.skills.soft.join(', ')}
                        onChange={(e) => updatePortfolioData('skills', 'soft', e.target.value.split(', ').filter(s => s.trim()))}
                        rows={3}
                        placeholder="Leadership, Communication, Problem Solving, Team Work"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Services Management</h2>
                  <p className="text-muted-foreground">Manage the services you offer</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const newService = {
                        title: 'New Service',
                        description: 'Service description',
                        price: '$0',
                        features: ['Feature 1', 'Feature 2']
                      };
                      setPortfolioData(prev => ({
                        ...prev,
                        services: [...prev.services, newService]
                      }));
                      toast({
                        title: "Service Added",
                        description: "New service has been added successfully."
                      });
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Service
                  </Button>
                  <Button onClick={() => handleSave('Services')} className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {portfolioData.services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          Service {index + 1}
                        </CardTitle>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              services: prev.services.filter((_, i) => i !== index)
                            }));
                            toast({
                              title: "Service Deleted",
                              description: "Service has been removed successfully."
                            });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Service Title</Label>
                          <Input
                            value={service.title}
                            onChange={(e) => {
                              const updatedServices = [...portfolioData.services];
                              updatedServices[index].title = e.target.value;
                              setPortfolioData(prev => ({ ...prev, services: updatedServices }));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Price</Label>
                          <Input
                            value={service.price}
                            onChange={(e) => {
                              const updatedServices = [...portfolioData.services];
                              updatedServices[index].price = e.target.value;
                              setPortfolioData(prev => ({ ...prev, services: updatedServices }));
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea
                          value={service.description}
                          onChange={(e) => {
                            const updatedServices = [...portfolioData.services];
                            updatedServices[index].description = e.target.value;
                            setPortfolioData(prev => ({ ...prev, services: updatedServices }));
                          }}
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Features (comma-separated)</Label>
                        <Textarea
                          value={service.features.join(', ')}
                          onChange={(e) => {
                            const updatedServices = [...portfolioData.services];
                            updatedServices[index].features = e.target.value.split(', ').filter(f => f.trim());
                            setPortfolioData(prev => ({ ...prev, services: updatedServices }));
                          }}
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Projects Management</h2>
                  <p className="text-muted-foreground">Showcase your portfolio projects</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const newProject = {
                        title: 'New Project',
                        description: 'Project description',
                        tech: ['React'],
                        image: '/placeholder.svg',
                        github: 'https://github.com',
                        demo: 'https://demo.com'
                      };
                      setPortfolioData(prev => ({
                        ...prev,
                        projects: [...prev.projects, newProject]
                      }));
                      toast({
                        title: "Project Added",
                        description: "New project has been added successfully."
                      });
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Project
                  </Button>
                  <Button onClick={() => handleSave('Projects')} className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {portfolioData.projects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Image className="h-5 w-5" />
                          Project {index + 1}
                        </CardTitle>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              projects: prev.projects.filter((_, i) => i !== index)
                            }));
                            toast({
                              title: "Project Deleted",
                              description: "Project has been removed successfully."
                            });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Project Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const updatedProjects = [...portfolioData.projects];
                            updatedProjects[index].title = e.target.value;
                            setPortfolioData(prev => ({ ...prev, projects: updatedProjects }));
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea
                          value={project.description}
                          onChange={(e) => {
                            const updatedProjects = [...portfolioData.projects];
                            updatedProjects[index].description = e.target.value;
                            setPortfolioData(prev => ({ ...prev, projects: updatedProjects }));
                          }}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">GitHub URL</Label>
                          <Input
                            value={project.github}
                            onChange={(e) => {
                              const updatedProjects = [...portfolioData.projects];
                              updatedProjects[index].github = e.target.value;
                              setPortfolioData(prev => ({ ...prev, projects: updatedProjects }));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Demo URL</Label>
                          <Input
                            value={project.demo}
                            onChange={(e) => {
                              const updatedProjects = [...portfolioData.projects];
                              updatedProjects[index].demo = e.target.value;
                              setPortfolioData(prev => ({ ...prev, projects: updatedProjects }));
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Technologies (comma-separated)</Label>
                        <Input
                          value={project.tech.join(', ')}
                          onChange={(e) => {
                            const updatedProjects = [...portfolioData.projects];
                            updatedProjects[index].tech = e.target.value.split(', ').filter(t => t.trim());
                            setPortfolioData(prev => ({ ...prev, projects: updatedProjects }));
                          }}
                          placeholder="React, TypeScript, Node.js"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Section */}
          {activeSection === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Testimonials Management</h2>
                  <p className="text-muted-foreground">Manage client testimonials and reviews</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const newTestimonial = {
                        name: 'Client Name',
                        role: 'Job Title, Company',
                        text: 'Testimonial text here...',
                        rating: 5
                      };
                      setPortfolioData(prev => ({
                        ...prev,
                        testimonials: [...prev.testimonials, newTestimonial]
                      }));
                      toast({
                        title: "Testimonial Added",
                        description: "New testimonial has been added successfully."
                      });
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Testimonial
                  </Button>
                  <Button onClick={() => handleSave('Testimonials')} className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {portfolioData.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <MessageSquare className="h-5 w-5" />
                          Testimonial {index + 1}
                        </CardTitle>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              testimonials: prev.testimonials.filter((_, i) => i !== index)
                            }));
                            toast({
                              title: "Testimonial Deleted",
                              description: "Testimonial has been removed successfully."
                            });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Client Name</Label>
                          <Input
                            value={testimonial.name}
                            onChange={(e) => {
                              const updatedTestimonials = [...portfolioData.testimonials];
                              updatedTestimonials[index].name = e.target.value;
                              setPortfolioData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Role & Company</Label>
                          <Input
                            value={testimonial.role}
                            onChange={(e) => {
                              const updatedTestimonials = [...portfolioData.testimonials];
                              updatedTestimonials[index].role = e.target.value;
                              setPortfolioData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Testimonial Text</Label>
                        <Textarea
                          value={testimonial.text}
                          onChange={(e) => {
                            const updatedTestimonials = [...portfolioData.testimonials];
                            updatedTestimonials[index].text = e.target.value;
                            setPortfolioData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                          }}
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Rating (1-5)</Label>
                        <Select 
                          value={testimonial.rating.toString()}
                          onValueChange={(value) => {
                            const updatedTestimonials = [...portfolioData.testimonials];
                            updatedTestimonials[index].rating = parseInt(value);
                            setPortfolioData(prev => ({ ...prev, testimonials: updatedTestimonials }));
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Star</SelectItem>
                            <SelectItem value="2">2 Stars</SelectItem>
                            <SelectItem value="3">3 Stars</SelectItem>
                            <SelectItem value="4">4 Stars</SelectItem>
                            <SelectItem value="5">5 Stars</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Blog Section */}
          {activeSection === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Blog Management</h2>
                  <p className="text-muted-foreground">Manage your blog posts and articles</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const newPost = {
                        title: 'New Blog Post',
                        excerpt: 'Brief description of the blog post...',
                        date: new Date().toISOString().split('T')[0],
                        category: 'General'
                      };
                      setPortfolioData(prev => ({
                        ...prev,
                        blog: [...prev.blog, newPost]
                      }));
                      toast({
                        title: "Blog Post Added",
                        description: "New blog post has been added successfully."
                      });
                    }}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Post
                  </Button>
                  <Button onClick={() => handleSave('Blog')} className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {portfolioData.blog.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Post {index + 1}
                        </CardTitle>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              blog: prev.blog.filter((_, i) => i !== index)
                            }));
                            toast({
                              title: "Blog Post Deleted",
                              description: "Blog post has been removed successfully."
                            });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Post Title</Label>
                        <Input
                          value={post.title}
                          onChange={(e) => {
                            const updatedBlog = [...portfolioData.blog];
                            updatedBlog[index].title = e.target.value;
                            setPortfolioData(prev => ({ ...prev, blog: updatedBlog }));
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Excerpt</Label>
                        <Textarea
                          value={post.excerpt}
                          onChange={(e) => {
                            const updatedBlog = [...portfolioData.blog];
                            updatedBlog[index].excerpt = e.target.value;
                            setPortfolioData(prev => ({ ...prev, blog: updatedBlog }));
                          }}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Date</Label>
                          <Input
                            type="date"
                            value={post.date}
                            onChange={(e) => {
                              const updatedBlog = [...portfolioData.blog];
                              updatedBlog[index].date = e.target.value;
                              setPortfolioData(prev => ({ ...prev, blog: updatedBlog }));
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Category</Label>
                          <Input
                            value={post.category}
                            onChange={(e) => {
                              const updatedBlog = [...portfolioData.blog];
                              updatedBlog[index].category = e.target.value;
                              setPortfolioData(prev => ({ ...prev, blog: updatedBlog }));
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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