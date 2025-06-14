import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ExternalLink, Play, Star } from 'lucide-react';

const FeaturedProjectsSection: React.FC = () => {
  const { mode } = usePortfolio();
  const [activeProject, setActiveProject] = useState(0);

  const devProjects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'A complete e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: 'photo-1556742049-0cfed4f6a45d',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Mobile responsive'],
      github: 'https://github.com',
      live: 'https://example.com',
      highlight: 'Increased sales by 150%'
    },
    {
      id: 'task-management',
      title: 'Task Management System',
      category: 'SaaS',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced reporting.',
      image: 'photo-1611224923853-80b023f02d71',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
      features: ['Real-time collaboration', 'Advanced reporting', 'Team management', 'Mobile app'],
      github: 'https://github.com',
      live: 'https://example.com',
      highlight: '10,000+ active users'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'A comprehensive analytics dashboard for tracking business metrics with interactive charts and real-time data processing.',
      image: 'photo-1551288049-bebda4e38f71',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'ClickHouse'],
      features: ['Interactive charts', 'Real-time data', 'Custom reports', 'API integration'],
      github: 'https://github.com',
      live: 'https://example.com',
      highlight: 'Processes 1M+ events/day'
    }
  ];

  const designerProjects = [
    {
      id: 'fitness-app',
      title: 'FitTrack Mobile App',
      category: 'Mobile UI/UX',
      description: 'A comprehensive fitness tracking app with personalized workout plans, nutrition tracking, and social features.',
      image: 'photo-1571019613454-1cb2f99b2d8b',
      tech: ['Figma', 'Principle', 'Adobe XD', 'Prototyping'],
      features: ['Workout tracking', 'Social features', 'Nutrition plans', 'Progress analytics'],
      behance: 'https://behance.net',
      prototype: 'https://figma.com',
      highlight: '4.8/5 App Store Rating'
    },
    {
      id: 'restaurant-brand',
      title: 'Verde Restaurant Rebrand',
      category: 'Brand Identity',
      description: 'Complete brand identity redesign for a high-end restaurant chain including logo, packaging, and digital presence.',
      image: 'photo-1414235077428-338989a2e8c0',
      tech: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
      features: ['Logo design', 'Packaging system', 'Digital menu', 'Marketing materials'],
      behance: 'https://behance.net',
      website: 'https://example.com',
      highlight: '40% increase in bookings'
    },
    {
      id: 'fintech-platform',
      title: 'FinTech Dashboard',
      category: 'Web UI/UX',
      description: 'A modern financial dashboard for investment tracking with complex data visualization and user-friendly interface.',
      image: 'photo-1559526324-4b87b5e36e44',
      tech: ['Figma', 'Sketch', 'InVision', 'User Testing'],
      features: ['Investment tracking', 'Data visualization', 'Portfolio management', 'Mobile responsive'],
      behance: 'https://behance.net',
      prototype: 'https://figma.com',
      highlight: 'Reduced task completion time by 60%'
    }
  ];

  const currentProjects = mode === 'developer' ? devProjects : designerProjects;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
          }`}>
            {mode === 'developer' ? '// Featured Projects' : 'Featured Work'}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${
            mode === 'developer' ? 'font-mono' : ''
          }`}>
            {mode === 'developer' 
              ? '/* Showcase of recent development projects and technical achievements */'
              : 'A selection of recent design projects that showcase creativity and problem-solving'
            }
          </p>
        </div>

        <Tabs defaultValue={currentProjects[0].category} className="mb-12">
          <TabsList className={`grid w-full ${
            mode === 'developer' ? 'grid-cols-3' : 'grid-cols-3'
          } ${mode === 'developer' ? 'font-mono' : ''}`}>
            {[...new Set(currentProjects.map(p => p.category))].map((category) => (
              <TabsTrigger key={category} value={category} className={mode === 'developer' ? 'font-mono' : ''}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {[...new Set(currentProjects.map(p => p.category))].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid gap-8">
                {currentProjects.filter(p => p.category === category).map((project, index) => (
                  <Card key={project.id} className="overflow-hidden bg-card/60 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Project Image */}
                      <div className="relative group">
                        <img 
                          src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>

                      {/* Project Details */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold mb-2 ${
                              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                            }`}>
                              {project.title}
                            </h3>
                            <Badge variant="secondary" className={mode === 'developer' ? 'font-mono' : ''}>
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <p className={`text-muted-foreground mb-6 leading-relaxed ${
                          mode === 'developer' ? 'font-mono text-sm' : ''
                        }`}>
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className={`font-semibold mb-3 ${
                            mode === 'developer' ? 'font-mono text-accent' : 'text-primary'
                          }`}>
                            {mode === 'developer' ? '// Key Features:' : 'Key Features:'}
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <div key={i} className={`flex items-center gap-2 ${
                                mode === 'developer' ? 'font-mono text-sm' : 'text-sm'
                              }`}>
                                <span className="text-primary">
                                  {mode === 'developer' ? '▶' : '✓'}
                                </span>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className={`font-semibold mb-3 ${
                            mode === 'developer' ? 'font-mono text-accent' : 'text-primary'
                          }`}>
                            {mode === 'developer' ? '// Tech Stack:' : 'Tools Used:'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <Badge key={i} variant="outline" className={`${
                                mode === 'developer' ? 'font-mono text-xs' : 'text-xs'
                              }`}>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className={`p-4 bg-primary/5 rounded-lg mb-6 ${
                          mode === 'developer' ? 'font-mono' : ''
                        }`}>
                          <div className={`text-sm font-semibold ${
                            mode === 'developer' ? 'text-accent' : 'text-primary'
                          }`}>
                            {mode === 'developer' ? '// Impact:' : 'Impact:'}
                          </div>
                          <div className="text-primary font-bold">
                            {project.highlight}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          {mode === 'developer' ? (
                            <>
                              {'github' in project && project.github && (
                                <Button variant="outline" size="sm" className="font-mono">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </Button>
                              )}
                              {'live' in project && project.live && (
                                <Button size="sm" className="font-mono">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Button>
                              )}
                            </>
                          ) : (
                            <>
                              {'behance' in project && project.behance && (
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View on Behance
                                </Button>
                              )}
                              {'prototype' in project && project.prototype && (
                                <Button size="sm">
                                  <Play className="w-4 h-4 mr-2" />
                                  View Prototype
                                </Button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center">
          <Button variant="outline" size="lg" className={mode === 'developer' ? 'font-mono' : ''}>
            {mode === 'developer' ? '$ view --all-projects' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;