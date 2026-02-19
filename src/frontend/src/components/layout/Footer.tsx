import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Heart, Leaf } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const quickLinks = [
  { name: 'Overview', path: '/' },
  { name: 'Solar Heating', path: '/solar-heating' },
  { name: 'Solar Cells', path: '/solar-cells' },
  { name: 'Hydropower', path: '/hydropower' },
  { name: 'Wind Power', path: '/wind-power' },
  { name: 'Geothermal', path: '/geothermal' },
  { name: 'Biomass', path: '/biomass' },
  { name: 'Biofuels', path: '/biofuels' },
];

const socialLinks = [
  { name: 'Facebook', icon: SiFacebook, url: '#' },
  { name: 'X (Twitter)', icon: SiX, url: '#' },
  { name: 'LinkedIn', icon: SiLinkedin, url: '#' },
  { name: 'Instagram', icon: SiInstagram, url: '#' },
  { name: 'YouTube', icon: SiYoutube, url: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'renewable-energy-edu';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg">Renewable Energy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the future through sustainable energy education. Learn about clean, renewable energy sources that power our world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates on renewable energy news and resources.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                aria-label="Email address"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social & References */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <h4 className="font-medium text-sm mb-2">References</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• International Renewable Energy Agency (IRENA)</li>
                <li>• United Nations Sustainable Development</li>
                <li>• U.S. Department of Energy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Renewable Energy Education. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-eco-green fill-eco-green" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
