import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesContent = () => {
  const { mode } = usePortfolio();

  const devServices = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web application development with modern technologies',
      features: [
        'React/Vue.js frontend development',
        'Node.js/Python backend APIs',
        'Database design & optimization',
        'Authentication & security',
        'Payment integration',
        'Third-party API integration'
      ],
      pricing: 'Starting at $150/hour',
      timeline: '4-12 weeks',
      icon: '💻'
    },
    {
      title: 'DevOps & Cloud Architecture',
      description: 'Scalable infrastructure setup and deployment automation',
      features: [
        'AWS/GCP cloud setup',
        'Docker containerization',
        'Kubernetes orchestration',
        'CI/CD pipeline setup',
        'Monitoring & logging',
        'Performance optimization'
      ],
      pricing: 'Starting at $200/hour',
      timeline: '2-6 weeks',
      icon: '☁️'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL API design and implementation',
      features: [
        'REST API development',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting & security',
        'Testing & validation',
        'Performance monitoring'
      ],
      pricing: 'Starting at $120/hour',
      timeline: '2-8 weeks',
      icon: '🔌'
    },
    {
      title: 'Code Review & Consultation',
      description: 'Technical guidance and code quality improvement',
      features: [
        'Code architecture review',
        'Performance optimization',
        'Security audit',
        'Best practices guidance',
        'Team mentoring',
        'Technology recommendations'
      ],
      pricing: 'Starting at $100/hour',
      timeline: '1-2 weeks',
      icon: '🔍'
    }
  ];

  const designerServices = [
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages that tell your story',
      features: [
        'Logo design & variations',
        'Color palette & typography',
        'Brand guidelines',
        'Business card design',
        'Letterhead & stationery',
        'Social media templates'
      ],
      pricing: 'Starting at $2,500',
      timeline: '3-5 weeks',
      icon: '🎨'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual interface design',
        'Interaction design',
        'Usability testing',
        'Design system creation'
      ],
      pricing: 'Starting at $120/hour',
      timeline: '4-8 weeks',
      icon: '📱'
    },
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors',
      features: [
        'Custom website design',
        'Responsive layouts',
        'Landing page design',
        'E-commerce design',
        'CMS integration',
        'SEO optimization'
      ],
      pricing: 'Starting at $3,000',
      timeline: '4-6 weeks',
      icon: '🌐'
    },
    {
      title: 'Print & Marketing Design',
      description: 'Eye-catching print materials and marketing collateral',
      features: [
        'Brochure & flyer design',
        'Poster & banner design',
        'Packaging design',
        'Trade show materials',
        'Magazine ads',
        'Print-ready files'
      ],
      pricing: 'Starting at $500',
      timeline: '1-3 weeks',
      icon: '📄'
    }
  ];

  const currentServices = mode === 'developer' ? devServices : designerServices;

  const processSteps = mode === 'developer' 
    ? [
        { step: 1, title: 'Discovery', description: 'Understanding requirements and technical constraints' },
        { step: 2, title: 'Planning', description: 'Architecture design and technology selection' },
        { step: 3, title: 'Development', description: 'Agile development with regular updates' },
        { step: 4, title: 'Testing', description: 'Comprehensive testing and quality assurance' },
        { step: 5, title: 'Deployment', description: 'Production deployment and monitoring setup' },
        { step: 6, title: 'Support', description: 'Ongoing maintenance and support' }
      ]
    : [
        { step: 1, title: 'Brief', description: 'Understanding your vision and project goals' },
        { step: 2, title: 'Research', description: 'Market analysis and competitor research' },
        { step: 3, title: 'Concept', description: 'Initial concepts and creative direction' },
        { step: 4, title: 'Design', description: 'Detailed design development and refinement' },
        { step: 5, title: 'Review', description: 'Client feedback and revisions' },
        { step: 6, title: 'Delivery', description: 'Final files and brand guidelines delivery' }
      ];

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
              {mode === 'developer' ? '// Services Offered' : 'My Services'}
            </h1>
            
            <p className={`text-center text-xl mb-16 max-w-3xl mx-auto ${
              mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
            }`}>
              {mode === 'developer' 
                ? '/* Professional development services to bring your ideas to life */'
                : 'Professional design services to help your brand stand out and connect with your audience'
              }
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {currentServices.map((service, index) => (
                <Card key={index} className="p-8 bg-card/60 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className={`text-2xl font-bold ${
                      mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className={`mb-6 ${
                    mode === 'developer' ? 'font-mono text-sm text-muted-foreground' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className={`flex items-center ${
                        mode === 'developer' ? 'font-mono text-sm' : ''
                      }`}>
                        <span className="text-primary mr-2">
                          {mode === 'developer' ? '▶' : '✦'}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className={`font-bold text-lg ${
                        mode === 'developer' ? 'font-mono text-primary' : 'text-primary'
                      }`}>
                        {service.pricing}
                      </p>
                      <p className={`text-sm ${
                        mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
                      }`}>
                        Timeline: {service.timeline}
                      </p>
                    </div>
                  </div>

                  <Button className={`w-full ${
                    mode === 'developer' ? 'font-mono' : ''
                  }`}>
                    {mode === 'developer' ? '> Get Quote' : 'Get Started'}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
              }`}>
                {mode === 'developer' ? '// Work Process' : 'My Process'}
              </h2>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {processSteps.map((step) => (
                  <Card key={step.step} className="p-6 text-center bg-card/60 backdrop-blur-sm">
                    <div className={`w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 ${
                      mode === 'developer' ? 'font-mono font-bold' : 'font-bold'
                    }`}>
                      {step.step}
                    </div>
                    <h4 className={`font-bold mb-2 ${
                      mode === 'developer' ? 'font-mono text-primary' : 'text-primary'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${
                      mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <Card className="p-12 text-center bg-card/60 backdrop-blur-sm">
              <h2 className={`text-3xl font-bold mb-6 ${
                mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
              }`}>
                {mode === 'developer' ? '// Ready to Start?' : 'Ready to Work Together?'}
              </h2>
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
              }`}>
                {mode === 'developer' 
                  ? '/* Let\'s discuss your project requirements and build something amazing together */'
                  : 'Let\'s bring your vision to life with thoughtful design and creative solutions'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className={mode === 'developer' ? 'font-mono' : ''}>
                  {mode === 'developer' ? '> Schedule Call' : 'Schedule a Call'}
                </Button>
                <Button variant="outline" size="lg" className={mode === 'developer' ? 'font-mono' : ''}>
                  {mode === 'developer' ? '$ get --quote' : 'Get Quote'}
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

const Services = () => {
  return (
    <PortfolioProvider>
      <ServicesContent />
    </PortfolioProvider>
  );
};

export default Services;