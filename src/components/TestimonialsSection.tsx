import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devTestimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechStartup',
      avatar: 'SC',
      content: 'Drake delivered exceptional code quality and helped us scale our platform to handle millions of users. His expertise in cloud architecture is outstanding.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager, InnovateCorp',
      avatar: 'MR',
      content: 'Working with Drake was a game-changer. He not only wrote clean, efficient code but also provided valuable insights on system architecture.',
    },
    {
      name: 'Emily Thompson',
      role: 'Lead Developer, WebSolutions',
      avatar: 'ET',
      content: 'Drakes attention to detail and problem-solving skills are remarkable. He consistently delivers high-quality solutions on time.',
    },
  ];

  const designerTestimonials = [
    {
      name: 'Jessica Adams',
      role: 'Brand Manager, Creative Co',
      avatar: 'JA',
      content: 'Drake transformed our brand identity completely. His creative vision and attention to detail exceeded all our expectations.',
    },
    {
      name: 'David Kim',
      role: 'CEO, StartupHub',
      avatar: 'DK',
      content: 'The UI/UX designs Drake created for our app resulted in a 60% increase in user engagement. Absolutely phenomenal work!',
    },
    {
      name: 'Lisa Chang',
      role: 'Marketing Director, BrandForge',
      avatar: 'LC',
      content: 'Drake has an incredible ability to understand our vision and translate it into stunning visual designs that resonate with our audience.',
    },
  ];

  const currentTestimonials = mode === 'developer' ? devTestimonials : designerTestimonials;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// Client Reviews' : 'What Clients Say'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm relative">
              {mode === 'developer' ? (
                <div className="font-mono">
                  <div className="text-primary mb-4">/* Client Feedback */</div>
                  <Quote className="w-6 h-6 text-accent mb-4" />
                  <p className="text-sm mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/20 text-primary font-mono text-xs">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;