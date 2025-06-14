import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devExperience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      role: 'Backend Developer',
      company: 'StartupVenture',
      period: '2020 - 2022',
      description: 'Built microservices architecture and API infrastructure',
      tech: ['Python', 'Docker', 'Kubernetes', 'Redis']
    },
    {
      role: 'Junior Developer',
      company: 'WebAgency Pro',
      period: '2019 - 2020',
      description: 'Developed client websites and internal tools',
      tech: ['JavaScript', 'PHP', 'MySQL', 'Git']
    }
  ];

  const designerExperience = [
    {
      role: 'Senior UI/UX Designer',
      company: 'Creative Studios Inc',
      period: '2022 - Present',
      description: 'Lead design for mobile apps and web platforms with focus on user experience',
      achievements: ['Increased user engagement by 40%', 'Led team of 5 designers']
    },
    {
      role: 'Brand Designer',
      company: 'Brand Collective',
      period: '2020 - 2022',
      description: 'Created brand identities for 50+ clients across various industries',
      achievements: ['Won Design Excellence Award 2021', 'Featured in Design Magazine']
    },
    {
      role: 'Graphic Designer',
      company: 'Freelance',
      period: '2018 - 2020',
      description: 'Provided design services for small businesses and startups',
      achievements: ['100+ successful projects', '5-star client satisfaction']
    }
  ];

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// About Me' : 'About Me'}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-card/60 backdrop-blur-sm">
            <h3 className={`text-2xl font-bold mb-6 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Background' : 'My Story'}
            </h3>
            <div className={`space-y-4 ${mode === 'developer' ? 'font-mono text-sm' : ''}`}>
              {mode === 'developer' ? (
                <>
                  <p className="text-muted-foreground">
                    {"// Started coding at age 14 with Python"}
                  </p>
                  <p>
                    Passionate full-stack developer with 5+ years of experience building scalable web applications. 
                    I specialize in modern JavaScript frameworks, cloud architecture, and DevOps practices.
                  </p>
                  <p>
                    When not coding, I contribute to open source projects, write technical blogs, 
                    and mentor junior developers in the community.
                  </p>
                  <div className="mt-6">
                    <span className="text-accent">interests</span>: [<span className="text-primary">"AI/ML", "Web3", "Performance Optimization"</span>]
                  </div>
                </>
              ) : (
                <>
                  <p>
                    I'm a passionate designer who believes that great design has the power to transform 
                    businesses and create meaningful connections with users. With over 6 years of experience 
                    in the design industry, I've had the privilege of working with startups, agencies, and 
                    established brands.
                  </p>
                  <p>
                    My approach combines strategic thinking with creative execution, always keeping the 
                    user at the center of every design decision. I'm constantly exploring new design trends, 
                    tools, and methodologies to deliver exceptional results.
                  </p>
                  <p>
                    Outside of design, I love photography, traveling to find inspiration, and teaching 
                    design workshops for aspiring creatives.
                  </p>
                </>
              )}
            </div>
          </Card>

          <Card className="p-8 bg-card/60 backdrop-blur-sm">
            <h3 className={`text-2xl font-bold mb-6 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Education & Certifications' : 'Education & Achievements'}
            </h3>
            <div className="space-y-4">
              {mode === 'developer' ? (
                <>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold font-mono">B.S. Computer Science</h4>
                    <p className="text-muted-foreground font-mono text-sm">Stanford University • 2019</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold font-mono">AWS Solutions Architect</h4>
                    <p className="text-muted-foreground font-mono text-sm">Amazon Web Services • 2021</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold font-mono">Google Cloud Professional</h4>
                    <p className="text-muted-foreground font-mono text-sm">Google Cloud • 2022</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">B.A. Graphic Design</h4>
                    <p className="text-muted-foreground">Art Institute of California • 2018</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">UX Design Certificate</h4>
                    <p className="text-muted-foreground">Google UX Design Professional • 2020</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">Adobe Certified Expert</h4>
                    <p className="text-muted-foreground">Adobe Creative Suite • 2021</p>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 ${
            mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
          }`}>
            {mode === 'developer' ? '// Work Experience' : 'Professional Journey'}
          </h3>
          
          <div className="space-y-8">
            {(mode === 'developer' ? devExperience : designerExperience).map((exp, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-bold ${
                      mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                    }`}>
                      {exp.role}
                    </h4>
                    <p className={`text-lg ${
                      mode === 'developer' ? 'font-mono text-accent' : 'text-accent font-semibold'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className={mode === 'developer' ? 'font-mono' : ''}>
                    {exp.period}
                  </Badge>
                </div>
                
                <p className={`mb-4 ${mode === 'developer' ? 'font-mono text-sm' : ''}`}>
                  {exp.description}
                </p>
                
                {mode === 'developer' ? (
                  <div className="flex flex-wrap gap-2">
                    {'tech' in exp && exp.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1">
                    {'achievements' in exp && exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-primary mr-2">✦</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className={`${
            mode === 'developer' 
              ? 'font-mono bg-primary hover:bg-primary/90' 
              : 'bg-primary hover:bg-primary/90'
          }`}>
            {mode === 'developer' ? '> Download Resume' : 'Download Resume'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;