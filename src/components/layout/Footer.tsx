import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Combi <span className="text-primary">Expert</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction 
              et rénovation en France. Qualité, expertise et satisfaction garanties.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-accent" />
                <span>15+ ans d'expérience</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: 'Accueil', href: '#home' },
                { label: 'À Propos', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Réalisations', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+237 6 54 20 69 35</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">jeanromaric@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Tout le Cameroun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Combi Expert Construction. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;