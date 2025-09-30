import { Card } from "@/components/ui/card";
import { Grid3X3, Wind, Zap, Hammer, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Grid3X3,
      title: "Carrelage",
      description: "Pose de carreaux de sol et de mur pour tous types d'espaces. Expertise en faïence, grès cérame et pierre naturelle.",
      features: ["Salle de bain", "Cuisine", "Terrasse", "Sols intérieurs"],
      route: "/service/carrelage"
    },
    {
      icon: Wind,
      title: "Installation de Climatiseurs",
      description: "Installation et maintenance de systèmes de climatisation et ventilation pour votre confort optimal.",
      features: ["Climatisation réversible", "VMC", "Pompe à chaleur", "Maintenance"],
      route: "/service/climatisation"
    },
    {
      icon: Zap,
      title: "Électricité",
      description: "Travaux électriques conformes aux normes en vigueur. Installation et rénovation complètes.",
      features: ["Tableaux électriques", "Éclairage", "Prises et interrupteurs", "Mise aux normes"],
      route: "/service/electricite"
    },
    {
      icon: Hammer,
      title: "Maçonnerie & Technique",
      description: "Travaux de construction et expertise technique générale pour tous vos projets de gros œuvre.",
      features: ["Murs porteurs", "Cloisons", "Fondations", "Rénovation"],
      route: "/service/maconnerie"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mes <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des compétences multiples pour répondre à tous vos besoins en construction et rénovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`service-card fade-in-up group cursor-pointer hover-scale transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(service.route)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary icon-bounce" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-foreground mb-3">Spécialités :</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Voir les réalisations →
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Besoin d'un devis personnalisé ? Contactez-moi pour discuter de votre projet.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-accent"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;