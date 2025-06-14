import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devServices = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks and technologies',
      features: ['React/Next.js', 'Node.js/Express', 'TypeScript', 'RESTful APIs'],
      price: 'Starting at $5,000',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend & APIs',
      description: 'Scalable backend systems, microservices architecture, and API development',
      features: ['Microservices', 'Database Design', 'API Integration', 'Performance Optimization'],
      price: 'Starting at $3,500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation',
      features: ['AWS/GCP Setup', 'Docker Containers', 'CI/CD Pipelines', 'Monitoring'],
      price: 'Starting at $2,500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Website speed optimization, code refactoring, and system performance tuning',
      features: ['Code Auditing', 'Performance Analysis', 'Speed Optimization', 'Best Practices'],
      price: 'Starting at $1,500'
    }
  ];

  const designerServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Identity Design',
      description: 'Complete brand identity creation including logo, colors, typography, and guidelines',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
      price: 'Starting at $2,500',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User interface and experience design for web and mobile applications',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
      price: 'Starting at $4,000'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Custom website design that converts visitors into customers',
      features: ['Responsive Design', 'Landing Pages', 'E-commerce Design', 'CMS Integration'],
      price: 'Starting at $3,000'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Design Consultation',
      description: 'Strategic design consultation and existing design audit and improvement',
      features: ['Design Audit', 'Strategy Planning', 'Team Training', 'Design Reviews'],
      price: 'Starting at $150/hr'
    }
  ];

  const currentServices = mode === 'developer' ? devServices : designerServices;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
          }`}>
            {mode === 'developer' ? '// Services Offered' : 'What I Offer'}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${
            mode === 'developer' ? 'font-mono' : ''
          }`}>
            {mode === 'developer' 
              ? '/* Comprehensive development solutions from concept to deployment */'
              : 'Comprehensive design solutions to elevate your brand and create meaningful user experiences'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentServices.map((service, index) => (
            <Card key={index} className={`p-8 bg-card/60 backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
              service.popular ? 'ring-2 ring-primary/30' : ''
            }`}>
              {service.popular && (
                <Badge className={`absolute top-4 right-4 ${mode === 'developer' ? 'font-mono' : ''}`}>
                  {mode === 'developer' ? '// Popular' : 'Most Popular'}
                </Badge>
              )}
              
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${
                  mode === 'developer' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-gradient-to-br from-primary/20 to-accent/20 text-primary'
                }`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-muted-foreground ${
                    mode === 'developer' ? 'font-mono text-sm' : ''
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className={`font-semibold mb-3 ${
                  mode === 'developer' ? 'font-mono text-accent' : 'text-primary'
                }`}>
                  {mode === 'developer' ? '// Includes:' : 'What\'s Included:'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className={`flex items-center gap-2 ${
                      mode === 'developer' ? 'font-mono text-sm' : 'text-sm'
                    }`}>
                      <span className={mode === 'developer' ? 'text-primary' : 'text-primary'}>
                        {mode === 'developer' ? '▶' : '✓'}
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-2xl font-bold ${
                    mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                  }`}>
                    {service.price}
                  </div>
                  <div className={`text-sm text-muted-foreground ${
                    mode === 'developer' ? 'font-mono' : ''
                  }`}>
                    {mode === 'developer' ? '// Contact for quote' : 'Get detailed quote'}
                  </div>
                </div>
                <Button className={mode === 'developer' ? 'font-mono' : ''}>
                  {mode === 'developer' ? '> Get Quote' : 'Get Started'}
                </Button>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className={`p-8 bg-card/40 backdrop-blur-sm rounded-lg border border-primary/20 ${
            mode === 'developer' ? 'font-mono' : ''
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              mode === 'developer' ? 'text-primary' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Custom Solutions Available' : 'Need Something Custom?'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {mode === 'developer' 
                ? 'Every project is unique. Let\'s discuss your specific requirements and create a custom solution that fits your needs perfectly.'
                : 'Every brand is unique. Let\'s create a tailored design solution that perfectly captures your vision and goals.'
              }
            </p>
            <Button size="lg" className={mode === 'developer' ? 'font-mono' : ''}>
              {mode === 'developer' ? '$ discuss --project' : 'Discuss Your Project'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;