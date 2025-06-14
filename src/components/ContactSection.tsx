import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection: React.FC = () => {
  const { mode } = usePortfolio();

  return (
    <section className="py-20 px-6 content-layer">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
        }`}>
          {mode === 'developer' ? '// Contact Info' : 'Get In Touch'}
        </h2>

        {mode === 'developer' ? (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/60 backdrop-blur-sm border-primary/20">
              <div className="font-mono space-y-4">
                <div className="text-primary">
                  <span className="text-muted-foreground">const</span> contact = {'{'}
                </div>
                <div className="ml-4 space-y-2">
                  <div>
                    <span className="text-accent">email</span>: <span className="text-primary">"drake.forum@example.com"</span>,
                  </div>
                  <div>
                    <span className="text-accent">github</span>: <span className="text-primary">"github.com/drakeforum"</span>,
                  </div>
                  <div>
                    <span className="text-accent">linkedin</span>: <span className="text-primary">"linkedin.com/in/drakeforum"</span>,
                  </div>
                  <div>
                    <span className="text-accent">twitter</span>: <span className="text-primary">"@drakecodes"</span>
                  </div>
                </div>
                <div className="text-primary">{'}'}</div>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <div className="text-muted-foreground mb-4">// Available for:</div>
                  <div className="space-y-2">
                    <div>▶ Full-stack development projects</div>
                    <div>▶ Technical consulting</div>
                    <div>▶ Code reviews and mentoring</div>
                    <div>▶ Open source collaborations</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-sm border-primary/20">
              <div className="font-mono space-y-4">
                <div className="text-primary mb-6">// Quick Contact</div>
                <form className="space-y-4">
                  <div>
                    <div className="text-muted-foreground text-sm mb-2">const name =</div>
                    <Input 
                      placeholder='"Your Name"'
                      className="bg-background/50 border-border/50 focus:border-primary font-mono"
                    />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-2">const email =</div>
                    <Input 
                      type="email"
                      placeholder='"your@email.com"'
                      className="bg-background/50 border-border/50 focus:border-primary font-mono"
                    />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-2">const message =</div>
                    <Textarea 
                      placeholder='/* Your project details */'
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none font-mono"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 font-mono">
                    {"> Execute Contact"}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete brand identity or a digital experience that stands out, 
                let's bring your vision to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>drake.forum@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <span>drakeforum.design</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  Behance
                </Button>
                <Button variant="outline" size="sm">
                  Dribbble
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Project Type" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;