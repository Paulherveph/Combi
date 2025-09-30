import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home, User, Briefcase, Camera, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#home', icon: Home },
    { label: 'À Propos', href: '#about', icon: User },
    { label: 'Services', href: '#services', icon: Briefcase },
    { label: 'Réalisations', href: '#projects', icon: Camera },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleNavigation = (href: string) => {
    if (!isHome) {
      navigate('/' + href);
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Combi <span className="text-primary">Expert</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <Button 
                onClick={() => handleNavigation('#contact')}
                className="btn-accent ml-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium rounded-xl space-x-3"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-4">
                <Button 
                  onClick={() => handleNavigation('#contact')}
                  className="w-full btn-accent py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Direct
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;