import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';

const StatsSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devStats = [
    { number: '50+', label: 'Projects Completed', sublabel: 'Web Applications' },
    { number: '5+', label: 'Years Experience', sublabel: 'Full-Stack Development' },
    { number: '100k+', label: 'Lines of Code', sublabel: 'Written & Maintained' },
    { number: '99%', label: 'Client Satisfaction', sublabel: 'Happy Customers' },
  ];

  const designerStats = [
    { number: '80+', label: 'Design Projects', sublabel: 'Brands & Products' },
    { number: '6+', label: 'Years Experience', sublabel: 'Creative Design' },
    { number: '40+', label: 'Brand Identities', sublabel: 'Created From Scratch' },
    { number: '95%', label: 'Client Retention', sublabel: 'Long-term Partnerships' },
  ];

  const currentStats = mode === 'developer' ? devStats : designerStats;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// Stats & Numbers' : 'By The Numbers'}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {currentStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm text-center group hover:scale-105 transition-all duration-300">
              {mode === 'developer' ? (
                <div className="font-mono">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">// {stat.sublabel}</div>
                </div>
              ) : (
                <>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8 bg-card/60 backdrop-blur-sm">
            <h3 className={`text-2xl font-bold mb-4 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Recent Achievements' : 'Latest Achievements'}
            </h3>
            <div className="space-y-3">
              {mode === 'developer' ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="text-accent">▶</span>
                    <span className="font-mono text-sm">AWS Solutions Architect Certified (2023)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent">▶</span>
                    <span className="font-mono text-sm">Open Source Contributor of the Month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent">▶</span>
                    <span className="font-mono text-sm">Led team that reduced load time by 60%</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <span className="text-primary">✦</span>
                    <span>Design Excellence Award Winner 2023</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary">✦</span>
                    <span>Featured in Top Design Blogs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary">✦</span>
                    <span>Mentored 20+ Junior Designers</span>
                  </div>
                </>
              )}
            </div>
          </Card>

          <Card className="p-8 bg-card/60 backdrop-blur-sm">
            <h3 className={`text-2xl font-bold mb-4 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Fun Facts' : 'Fun Facts'}
            </h3>
            <div className="space-y-3">
              {mode === 'developer' ? (
                <>
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">coffee_consumed:</span> <span className="text-accent">2847</span> <span className="text-muted-foreground">// cups this year</span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">favorite_language:</span> <span className="text-primary">"TypeScript"</span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">debugging_style:</span> <span className="text-primary">"rubber duck"</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm">
                    ☕ <strong>Coffee consumed:</strong> 1,200+ cups designing
                  </div>
                  <div className="text-sm">
                    🎨 <strong>Favorite color:</strong> Changes daily (currently blue)
                  </div>
                  <div className="text-sm">
                    💡 <strong>Design inspiration:</strong> Nature and architecture
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;