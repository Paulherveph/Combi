import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Combi </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Construction
            </span>
            <br />
            <span className="text-foreground">Expert au Cameroun</span>
          </h1>
        </div>
        
        <div className="fade-in-up-delay">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Spécialisé en carrelage, climatisation, électricité et maçonnerie. 
            Un travail de qualité pour tous vos projets de construction et rénovation.
          </p>
        </div>
        
        <div className="fade-in-up-delay flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            className="btn-hero group"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contactez-moi pour un devis
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            Découvrir mes services
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center fade-in-up">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center fade-in-up">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1">200+</div>
            <div className="text-sm text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="text-center fade-in-up col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;