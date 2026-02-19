import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Sun, Moon, Leaf } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Overview', path: '/' },
  { name: 'Solar Heating', path: '/solar-heating' },
  { name: 'Solar Cells', path: '/solar-cells' },
  { name: 'Hydropower', path: '/hydropower' },
  { name: 'Wind Power', path: '/wind-power' },
  { name: 'Geothermal', path: '/geothermal' },
  { name: 'Biomass', path: '/biomass' },
  { name: 'Biofuels', path: '/biofuels' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate({ to: path });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors">
          <Leaf className="h-6 w-6" />
          <span className="hidden sm:inline">Renewable Energy</span>
          <span className="sm:hidden">RE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              size="sm"
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="ghost"
                    onClick={() => handleNavClick(link.path)}
                    className="justify-start text-base font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
