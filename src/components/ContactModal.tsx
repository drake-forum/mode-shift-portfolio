import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { mode } = usePortfolio();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: mode === 'developer' ? '// Message Sent!' : 'Message Sent!',
      description: mode === 'developer' 
        ? '/* Your message has been compiled and deployed successfully */' 
        : 'Thank you for reaching out! I\'ll get back to you soon.',
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  const devServices = [
    'Full-Stack Development',
    'API Development',
    'DevOps & Cloud',
    'Code Review',
    'Technical Consulting'
  ];

  const designServices = [
    'Brand Identity',
    'UI/UX Design',
    'Web Design',
    'Print Design',
    'Consultation'
  ];

  const currentServices = mode === 'developer' ? devServices : designServices;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-2xl max-h-[90vh] overflow-y-auto ${
        mode === 'developer' ? 'bg-card font-mono' : 'bg-card'
      }`}>
        <DialogHeader>
          <DialogTitle className={`text-2xl ${
            mode === 'developer' ? 'text-primary font-mono' : 'text-primary'
          }`}>
            {mode === 'developer' ? '// Contact Form' : 'Let\'s Work Together'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-6">
            {mode === 'developer' ? (
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-mono text-sm">
                    <div className="text-primary mb-2">// Contact Info</div>
                    <div className="space-y-1">
                      <div><span className="text-accent">email</span>: <span className="text-primary">"drake.forum@example.com"</span></div>
                      <div><span className="text-accent">github</span>: <span className="text-primary">"github.com/drakeforum"</span></div>
                      <div><span className="text-accent">linkedin</span>: <span className="text-primary">"linkedin.com/in/drakeforum"</span></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-mono text-primary mb-3">// Services Available</h4>
                  <div className="space-y-2">
                    {currentServices.map((service, index) => (
                      <div key={index} className="flex items-center font-mono text-sm">
                        <span className="text-primary mr-2">▶</span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Ready to Create?</h3>
                  <p className="text-muted-foreground">
                    Let's bring your vision to life with beautiful, functional design.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <span className="text-sm">drake.forum@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🌐</span>
                    <span className="text-sm">drakeforum.design</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Services I Offer</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentServices.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className={mode === 'developer' ? 'font-mono' : ''}>
                {mode === 'developer' ? 'const name =' : 'Name'}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={mode === 'developer' ? '"Your Name"' : 'Your Name'}
                className={`${mode === 'developer' ? 'font-mono' : ''} bg-background/50`}
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className={mode === 'developer' ? 'font-mono' : ''}>
                {mode === 'developer' ? 'const email =' : 'Email'}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={mode === 'developer' ? '"your@email.com"' : 'your@email.com'}
                className={`${mode === 'developer' ? 'font-mono' : ''} bg-background/50`}
                required
              />
            </div>

            <div>
              <Label htmlFor="subject" className={mode === 'developer' ? 'font-mono' : ''}>
                {mode === 'developer' ? 'const subject =' : 'Subject'}
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={mode === 'developer' ? '"Project Description"' : 'Project Subject'}
                className={`${mode === 'developer' ? 'font-mono' : ''} bg-background/50`}
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className={mode === 'developer' ? 'font-mono' : ''}>
                {mode === 'developer' ? 'const message =' : 'Message'}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={mode === 'developer' 
                  ? '/* Tell me about your project requirements */' 
                  : 'Tell me about your project...'
                }
                rows={4}
                className={`${mode === 'developer' ? 'font-mono' : ''} bg-background/50 resize-none`}
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className={`flex-1 ${mode === 'developer' ? 'font-mono' : ''}`}
              >
                {mode === 'developer' ? '> Send Message' : 'Send Message'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className={mode === 'developer' ? 'font-mono' : ''}
              >
                {mode === 'developer' ? '$ cancel' : 'Cancel'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;