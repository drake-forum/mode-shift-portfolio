import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devSkills = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust'],
    'Frameworks': ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring'],
    'Tools': ['Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis', 'Git']
  };

  const designerSkills = [
    { name: 'UI/UX Design', level: 95, color: '#ff6b6b' },
    { name: 'Brand Identity', level: 90, color: '#4ecdc4' },
    { name: 'Illustration', level: 85, color: '#45b7d1' },
    { name: 'Motion Graphics', level: 80, color: '#f9ca24' },
    { name: 'Typography', level: 92, color: '#6c5ce7' },
    { name: 'Web Design', level: 98, color: '#fd79a8' }
  ];

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// Skills & Technologies' : 'Skills & Expertise'}
        </h2>

        {mode === 'developer' ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(devSkills).map(([category, skills]) => (
              <Card key={category} className="p-6 bg-card/60 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary font-mono">
                  {category}:
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center font-mono text-sm">
                      <span className="text-primary mr-2">▶</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designerSkills.map((skill) => (
              <Card key={skill.name} className="p-6 bg-card/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-2xl font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;