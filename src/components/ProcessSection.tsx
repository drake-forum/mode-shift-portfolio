import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, TestTube, Users, Zap } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Analyze requirements, define architecture, and create technical specifications',
      icon: <Users className="w-6 h-6" />,
      tools: ['Figma', 'Notion', 'Miro']
    },
    {
      step: '02',
      title: 'Development Setup',
      description: 'Configure development environment, set up CI/CD pipeline and testing framework',
      icon: <Code className="w-6 h-6" />,
      tools: ['Docker', 'GitHub Actions', 'Jest']
    },
    {
      step: '03',
      title: 'Core Development',
      description: 'Build application features using best practices and clean code principles',
      icon: <Zap className="w-6 h-6" />,
      tools: ['React', 'Node.js', 'TypeScript']
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit, integration, and end-to-end tests',
      icon: <TestTube className="w-6 h-6" />,
      tools: ['Cypress', 'Testing Library', 'Postman']
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Deploy to production with monitoring, logging, and performance optimization',
      icon: <Rocket className="w-6 h-6" />,
      tools: ['AWS', 'Vercel', 'DataDog']
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'Understanding user needs, market research, and competitive analysis',
      icon: <Users className="w-6 h-6" />,
      tools: ['Surveys', 'Interviews', 'Analytics']
    },
    {
      step: '02',
      title: 'Ideation & Concept',
      description: 'Brainstorming sessions, mood boards, and initial concept development',
      icon: <Palette className="w-6 h-6" />,
      tools: ['Miro', 'Pinterest', 'Sketch']
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, high-fidelity designs, and interactive prototypes',
      icon: <Code className="w-6 h-6" />,
      tools: ['Figma', 'Adobe XD', 'Principle']
    },
    {
      step: '04',
      title: 'Testing & Iteration',
      description: 'User testing, feedback collection, and design refinement',
      icon: <TestTube className="w-6 h-6" />,
      tools: ['UsabilityHub', 'Hotjar', 'Maze']
    },
    {
      step: '05',
      title: 'Delivery & Handoff',
      description: 'Final designs, style guides, and developer handoff documentation',
      icon: <Rocket className="w-6 h-6" />,
      tools: ['Figma', 'Zeplin', 'Documentation']
    }
  ];

  const currentProcess = mode === 'developer' ? devProcess : designProcess;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// My Process' : 'How I Work'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProcess.map((step, index) => (
            <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              {mode === 'developer' ? (
                <div className="font-mono">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary bg-primary/10 p-2 rounded">
                      {step.icon}
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-xs">// Tools:</div>
                    <div className="flex flex-wrap gap-1">
                      {step.tools.map((tool, i) => (
                        <Badge key={i} variant="secondary" className="font-mono text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-lg">
                      {step.icon}
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    <div className="text-muted-foreground text-sm font-semibold">Tools & Methods:</div>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;