import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsContent = () => {
  const { mode } = usePortfolio();
  const [filter, setFilter] = useState('all');

  const devProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      longDescription: 'Built with React, Node.js, and PostgreSQL. Features include user authentication, shopping cart, order management, payment integration with Stripe, real-time inventory updates, and comprehensive admin panel.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
      category: 'fullstack',
      image: 'photo-1556742049-0cfed4f6a45d',
      github: 'https://github.com/alexrivera/ecommerce',
      demo: 'https://ecommerce-demo.com',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat app with rooms, file sharing, and message encryption.',
      longDescription: 'Socket.io powered real-time messaging application with multiple chat rooms, file upload/sharing, end-to-end encryption, user presence indicators, and message history.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      image: 'photo-1611224923853-80b023f02d71',
      github: 'https://github.com/alexrivera/chat-app',
      demo: 'https://chat-demo.com',
      status: 'completed'
    },
    {
      id: 3,
      title: 'DevOps Pipeline',
      description: 'Automated CI/CD pipeline with Docker, Kubernetes, and monitoring.',
      longDescription: 'Complete DevOps solution with Jenkins CI/CD, Docker containerization, Kubernetes orchestration, monitoring with Prometheus and Grafana, and automated testing.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Prometheus'],
      category: 'devops',
      image: 'photo-1518770660439-4636190af475',
      github: 'https://github.com/alexrivera/devops-pipeline',
      demo: null,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Machine Learning API',
      description: 'REST API for image classification using TensorFlow and Python.',
      longDescription: 'TensorFlow-powered machine learning API for image classification and object detection. Includes model training pipeline, real-time inference, and performance monitoring.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS Lambda'],
      category: 'ai',
      image: 'photo-1555949963-aa79dcee981c',
      github: 'https://github.com/alexrivera/ml-api',
      demo: 'https://ml-api-docs.com',
      status: 'in-progress'
    }
  ];

  const designerProjects = [
    {
      id: 1,
      title: 'TechStart Brand Identity',
      description: 'Complete brand identity for an innovative AI startup including logo, guidelines, and marketing materials.',
      longDescription: 'Comprehensive brand identity design for TechStart, an AI-focused startup. Includes logo design, color palette, typography system, brand guidelines, business cards, letterheads, and digital marketing templates.',
      category: 'branding',
      image: 'photo-1611224923853-80b023f02d71',
      behance: 'https://behance.net/gallery/techstart',
      client: 'TechStart Inc.',
      year: '2023',
      awards: ['Design Excellence Award 2023']
    },
    {
      id: 2,
      title: 'EcoApp Mobile Design',
      description: 'Sustainable living mobile app with intuitive UX and engaging visual design.',
      longDescription: 'Mobile app design for EcoApp, promoting sustainable living habits. Features include carbon footprint tracking, eco-friendly product recommendations, community challenges, and educational content.',
      category: 'mobile',
      image: 'photo-1512941937669-90a1b58e7e9c',
      behance: 'https://behance.net/gallery/ecoapp',
      client: 'Green Future Ltd.',
      year: '2023',
      awards: ['Mobile Design Award 2023']
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      description: 'Modern website redesign for a consulting firm with focus on user experience and conversion optimization.',
      longDescription: 'Complete website redesign for a management consulting firm. Modernized the visual design, improved user experience, optimized for conversions, and implemented responsive design.',
      category: 'web',
      image: 'photo-1460925895917-afdab827c52f',
      behance: 'https://behance.net/gallery/corporate-redesign',
      client: 'Consulting Pro',
      year: '2022',
      awards: []
    },
    {
      id: 4,
      title: 'Restaurant Brand Package',
      description: 'Full brand package for a premium restaurant including logo, menu design, and interior graphics.',
      longDescription: 'Complete brand package for Saveur, a premium French restaurant. Includes logo design, menu layouts, business cards, signage design, interior graphics, and brand guidelines.',
      category: 'branding',
      image: 'photo-1517248135467-4c7edcad34c4',
      behance: 'https://behance.net/gallery/restaurant-brand',
      client: 'Saveur Restaurant',
      year: '2022',
      awards: ['Branding Excellence 2022']
    },
    {
      id: 5,
      title: 'Fashion E-commerce UI',
      description: 'Modern e-commerce interface design for a fashion brand with focus on visual appeal and usability.',
      longDescription: 'E-commerce website design for Luxe Fashion, featuring product catalogs, shopping cart, user accounts, wishlist functionality, and payment integration with a focus on visual storytelling.',
      category: 'web',
      image: 'photo-1441986300917-64674bd600d8',
      behance: 'https://behance.net/gallery/fashion-ecommerce',
      client: 'Luxe Fashion',
      year: '2023',
      awards: []
    }
  ];

  const currentProjects = mode === 'developer' ? devProjects : designerProjects;
  const categories = mode === 'developer' 
    ? ['all', 'fullstack', 'devops', 'ai']
    : ['all', 'branding', 'web', 'mobile'];

  const filteredProjects = filter === 'all' 
    ? currentProjects 
    : currentProjects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Background Animation */}
      {mode === 'developer' ? <MatrixRain /> : <FloatingBlobs />}
      
      {/* Navigation & Mode Toggle */}
      <Navigation />
      <ModeToggle />
      
      {/* Main Content */}
      <main className="relative pt-20">
        <section className="py-20 px-6 content-layer">
          <div className="max-w-7xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-bold text-center mb-8 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// All Projects' : 'My Projects'}
            </h1>
            
            <p className={`text-center text-xl mb-12 max-w-3xl mx-auto ${
              mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
            }`}>
              {mode === 'developer' 
                ? '/* Explore my development projects, from full-stack applications to DevOps solutions */'
                : 'A showcase of my design work across branding, web design, and user experience projects'
              }
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`${
                    mode === 'developer' ? 'font-mono' : ''
                  } capitalize`}
                >
                  {mode === 'developer' && category !== 'all' ? `--${category}` : category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden bg-card/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {'status' in project && project.status === 'in-progress' && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    {'category' in project && (
                      <Badge variant="secondary" className={`mb-3 ${mode === 'developer' ? 'font-mono' : ''}`}>
                        {project.category}
                      </Badge>
                    )}
                    
                    <h3 className={`text-xl font-bold mb-3 ${
                      mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-4 ${
                      mode === 'developer' ? 'font-mono text-sm text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {project.description}
                    </p>

                    {mode === 'developer' ? (
                      <>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {'tech' in project && project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="font-mono text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {'github' in project && (
                            <a 
                              href={project.github}
                              className="text-primary hover:text-primary/80 font-mono text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              [GitHub]
                            </a>
                          )}
                          {'demo' in project && project.demo && (
                            <a 
                              href={project.demo}
                              className="text-primary hover:text-primary/80 font-mono text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              [Demo]
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center mb-4">
                          {'client' in project && (
                            <span className="text-sm text-muted-foreground">
                              Client: {project.client}
                            </span>
                          )}
                          {'year' in project && (
                            <span className="text-sm text-muted-foreground">
                              {project.year}
                            </span>
                          )}
                        </div>
                        
                        {'awards' in project && project.awards.length > 0 && (
                          <div className="mb-4">
                            {project.awards.map((award, index) => (
                              <Badge key={index} className="mr-2 mb-2 bg-yellow-500 text-black">
                                🏆 {award}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {'behance' in project && (
                          <a 
                            href={project.behance}
                            className="text-primary hover:text-primary/80 font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on Behance →
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const Projects = () => {
  return (
    <PortfolioProvider>
      <ProjectsContent />
    </PortfolioProvider>
  );
};

export default Projects;