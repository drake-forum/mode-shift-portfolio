import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogContent = () => {
  const { mode } = usePortfolio();

  const devBlogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Best practices for structuring large-scale React applications using TypeScript, including folder organization, component patterns, and state management.',
      content: 'In this comprehensive guide, we\'ll explore how to build maintainable React applications...',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Architecture'],
      image: 'photo-1461749280684-dccba630e2f6',
      featured: true
    },
    {
      id: 2,
      title: 'Docker and Kubernetes: A Complete DevOps Guide',
      excerpt: 'From containerization to orchestration - learn how to deploy applications efficiently using Docker and Kubernetes.',
      content: 'Container orchestration has become essential for modern applications...',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
      image: 'photo-1518770660439-4636190af475',
      featured: false
    },
    {
      id: 3,
      title: 'API Design Best Practices for RESTful Services',
      excerpt: 'Learn how to design clean, maintainable APIs that scale with your application needs.',
      content: 'Well-designed APIs are the backbone of modern applications...',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['API', 'REST', 'Backend'],
      image: 'photo-1487058792275-0ad4aaf24ca7',
      featured: false
    },
    {
      id: 4,
      title: 'Performance Optimization in Node.js Applications',
      excerpt: 'Techniques and tools for identifying and fixing performance bottlenecks in Node.js applications.',
      content: 'Performance optimization is crucial for delivering fast user experiences...',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Node.js', 'Performance', 'Optimization'],
      image: 'photo-1498050108023-c5249f4df085',
      featured: false
    }
  ];

  const designerBlogPosts = [
    {
      id: 1,
      title: 'The Psychology of Color in Brand Design',
      excerpt: 'Understanding how colors influence emotions and decision-making in brand identity design.',
      content: 'Color is one of the most powerful tools in a designer\'s arsenal...',
      date: '2024-01-15',
      readTime: '7 min read',
      tags: ['Branding', 'Color Theory', 'Psychology'],
      image: 'photo-1541961017774-22349e4a1262',
      featured: true
    },
    {
      id: 2,
      title: 'Creating Accessible UI Designs',
      excerpt: 'Best practices for designing inclusive user interfaces that work for everyone.',
      content: 'Accessibility in design isn\'t just about compliance...',
      date: '2024-01-12',
      readTime: '9 min read',
      tags: ['Accessibility', 'UI Design', 'UX'],
      image: 'photo-1581291518857-4e27b48ff24e',
      featured: false
    },
    {
      id: 3,
      title: 'Typography Trends in Modern Web Design',
      excerpt: 'Exploring current typography trends and how to implement them effectively in web design.',
      content: 'Typography is experiencing a renaissance in web design...',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['Typography', 'Web Design', 'Trends'],
      image: 'photo-1586953209642-b5d7b2d1f36e',
      featured: false
    },
    {
      id: 4,
      title: 'Building Design Systems That Scale',
      excerpt: 'How to create and maintain design systems that grow with your product and team.',
      content: 'Design systems have become essential for consistent user experiences...',
      date: '2024-01-03',
      readTime: '11 min read',
      tags: ['Design Systems', 'UI', 'Workflow'],
      image: 'photo-1507003211169-0a1dd7228f2d',
      featured: false
    }
  ];

  const currentPosts = mode === 'developer' ? devBlogPosts : designerBlogPosts;
  const featuredPost = currentPosts.find(post => post.featured);
  const regularPosts = currentPosts.filter(post => !post.featured);

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
          <div className="max-w-6xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-bold text-center mb-8 ${
              mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
            }`}>
              {mode === 'developer' ? '// Dev Blog' : 'Design Blog'}
            </h1>
            
            <p className={`text-center text-xl mb-16 max-w-3xl mx-auto ${
              mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
            }`}>
              {mode === 'developer' 
                ? '/* Sharing insights on development, architecture, and best practices */'
                : 'Thoughts and insights on design, creativity, and user experience'
              }
            </p>

            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-16 overflow-hidden bg-card/60 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-video md:aspect-auto">
                    <img 
                      src={`https://images.unsplash.com/${featuredPost.image}?w=800&h=500&fit=crop`}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary">
                      Featured Post
                    </Badge>
                    <h2 className={`text-3xl font-bold mb-4 ${
                      mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                    }`}>
                      {featuredPost.title}
                    </h2>
                    <p className={`mb-6 ${
                      mode === 'developer' ? 'font-mono text-sm text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className={mode === 'developer' ? 'font-mono' : ''}>
                          {mode === 'developer' ? `#${tag.toLowerCase()}` : tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={`flex items-center justify-between mb-6 text-sm ${
                      mode === 'developer' ? 'font-mono' : ''
                    }`}>
                      <span className="text-muted-foreground">{featuredPost.date}</span>
                      <span className="text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                    <Button className={mode === 'developer' ? 'font-mono' : ''}>
                      {mode === 'developer' ? '> Read Article' : 'Read More'}
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden bg-card/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?w=600&h=400&fit=crop`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                      mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`mb-4 line-clamp-3 ${
                      mode === 'developer' ? 'font-mono text-sm text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className={`text-xs ${mode === 'developer' ? 'font-mono' : ''}`}>
                          {mode === 'developer' ? `#${tag.toLowerCase()}` : tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={`flex items-center justify-between text-sm ${
                      mode === 'developer' ? 'font-mono' : ''
                    }`}>
                      <span className="text-muted-foreground">{post.date}</span>
                      <span className="text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-16 p-12 text-center bg-card/60 backdrop-blur-sm">
              <h2 className={`text-3xl font-bold mb-6 ${
                mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
              }`}>
                {mode === 'developer' ? '// Stay Updated' : 'Stay in Touch'}
              </h2>
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                mode === 'developer' ? 'font-mono text-muted-foreground' : 'text-muted-foreground'
              }`}>
                {mode === 'developer' 
                  ? '/* Subscribe to get the latest posts about development, tools, and best practices */'
                  : 'Get the latest design insights, trends, and creative inspiration delivered to your inbox'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={mode === 'developer' ? 'your@email.com' : 'Enter your email'}
                  className={`flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none ${
                    mode === 'developer' ? 'font-mono' : ''
                  }`}
                />
                <Button className={mode === 'developer' ? 'font-mono' : ''}>
                  {mode === 'developer' ? '> Subscribe' : 'Subscribe'}
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

const Blog = () => {
  return (
    <PortfolioProvider>
      <BlogContent />
    </PortfolioProvider>
  );
};

export default Blog;