import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPreviewSection: React.FC = () => {
  const { mode } = usePortfolio();

  const devPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for architecting React apps that can grow with your team and user base.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Performance'],
      featured: true
    },
    {
      title: 'Optimizing Database Queries',
      excerpt: 'Techniques to improve database performance and reduce query execution time.',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Database', 'Performance', 'SQL']
    },
    {
      title: 'Modern DevOps Workflows',
      excerpt: 'Setting up CI/CD pipelines with GitHub Actions and Docker for seamless deployments.',
      date: '2024-01-05',
      readTime: '12 min read',
      tags: ['DevOps', 'Docker', 'CI/CD']
    }
  ];

  const designerPosts = [
    {
      title: 'Design Systems That Scale',
      excerpt: 'Creating cohesive design systems that work across multiple products and teams.',
      date: '2024-01-15',
      readTime: '7 min read',
      tags: ['Design Systems', 'UI/UX', 'Branding'],
      featured: true
    },
    {
      title: 'Color Psychology in Digital Design',
      excerpt: 'How color choices impact user behavior and emotional responses in digital interfaces.',
      date: '2024-01-10',
      readTime: '5 min read',
      tags: ['Color Theory', 'Psychology', 'UI Design']
    },
    {
      title: 'Micro-Interactions That Delight',
      excerpt: 'Small design details that create memorable and engaging user experiences.',
      date: '2024-01-05',
      readTime: '9 min read',
      tags: ['Micro-interactions', 'Animation', 'UX']
    }
  ];

  const currentPosts = mode === 'developer' ? devPosts : designerPosts;

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
          }`}>
            {mode === 'developer' ? '// Latest Blog Posts' : 'Latest Insights'}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            mode === 'developer' ? 'font-mono' : ''
          }`}>
            {mode === 'developer' 
              ? '/* Sharing knowledge about development, architecture, and best practices */'
              : 'Sharing thoughts on design trends, creative processes, and industry insights'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <Card key={index} className={`p-6 bg-card/60 backdrop-blur-sm group hover:scale-105 transition-all duration-300 ${
              post.featured ? 'ring-2 ring-primary/20' : ''
            }`}>
              {post.featured && (
                <Badge className={`mb-4 ${mode === 'developer' ? 'font-mono' : ''}`}>
                  {mode === 'developer' ? '// Featured' : 'Featured'}
                </Badge>
              )}
              
              <h3 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors ${
                mode === 'developer' ? 'font-mono' : ''
              }`}>
                {post.title}
              </h3>
              
              <p className={`text-muted-foreground mb-4 leading-relaxed ${
                mode === 'developer' ? 'font-mono text-sm' : ''
              }`}>
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className={mode === 'developer' ? 'font-mono' : ''}>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className={mode === 'developer' ? 'font-mono' : ''}>
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className={`text-xs ${
                    mode === 'developer' ? 'font-mono' : ''
                  }`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button variant="ghost" size="sm" className={`group/btn w-full justify-between ${
                mode === 'developer' ? 'font-mono' : ''
              }`}>
                {mode === 'developer' ? '> Read More' : 'Read Article'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className={mode === 'developer' ? 'font-mono' : ''}>
            {mode === 'developer' ? '$ view --all-posts' : 'View All Posts'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;