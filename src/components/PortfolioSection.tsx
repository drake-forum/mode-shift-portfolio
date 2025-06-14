import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/alexrivera/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with authentication and real-time updates',
      tech: ['Express', 'Socket.io', 'JWT', 'MongoDB'],
      github: 'https://github.com/alexrivera/task-api',
      demo: 'https://task-api-docs.com'
    },
    {
      title: 'DevOps Pipeline',
      description: 'Automated CI/CD pipeline with Docker and Kubernetes',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      github: 'https://github.com/alexrivera/devops-pipeline',
      demo: null
    }
  ];

  const designerProjects = [
    {
      title: 'TechStart Branding',
      description: 'Complete brand identity for a innovative tech startup',
      category: 'Brand Identity',
      image: '/placeholder-brand.jpg',
      behance: 'https://behance.net/gallery/techstart'
    },
    {
      title: 'EcoApp Mobile Design',
      description: 'Sustainable living app with intuitive user experience',
      category: 'UI/UX Design',
      image: '/placeholder-mobile.jpg',
      behance: 'https://behance.net/gallery/ecoapp'
    },
    {
      title: 'Modern Website Redesign',
      description: 'Complete redesign of corporate website with fresh aesthetics',
      category: 'Web Design',
      image: '/placeholder-web.jpg',
      behance: 'https://behance.net/gallery/website-redesign'
    }
  ];

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// Recent Projects' : 'Featured Work'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mode === 'developer' ? (
            devProjects.map((project) => (
              <Card key={project.title} className="p-6 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-primary font-mono">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="text-primary hover:text-primary/80 font-mono text-sm"
                  >
                    [GitHub]
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="text-primary hover:text-primary/80 font-mono text-sm"
                    >
                      [Demo]
                    </a>
                  )}
                </div>
              </Card>
            ))
          ) : (
            designerProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden bg-card/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🎨</span>
                </div>
                <div className="p-6">
                  <Badge className="mb-3" variant="secondary">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <a 
                    href={project.behance}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    View on Behance →
                  </a>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;