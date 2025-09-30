import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import carrelegeHero from "@/assets/carrelage-hero.jpg";
import climatisationHero from "@/assets/climatisation-hero.jpg";
import electriciteHero from "@/assets/electricite-hero.jpg";
import maconnerieHero from "@/assets/maconnerie-hero.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Rénovation Salle de Bain Complète",
      description: "Pose de carrelage grand format, installation de douche italienne et éclairage LED intégré.",
      image: carrelegeHero,
      location: "Kribi",
      date: "Mars 2025",
      category: "Carrelage & Électricité"
    },
    {
      id: 2,
      title: "Installation Climatisation Bureaux",
      description: "Système de climatisation multi-split pour un bureau de 200m² avec VMC double flux.",
      image: climatisationHero,
      location: "Yaounde",
      date: "Février 2025",
      category: "Climatisation"
    },
    {
      id: 3,
      title: "Rénovation Électrique Maison",
      description: "Mise aux normes complète, nouveau tableau électrique et éclairage moderne.",
      image: electriciteHero,
      location: "Douala",
      date: "Janvier 2025",
      category: "Électricité"
    },
    {
      id: 4,
      title: "Extension Maison Individuelle",
      description: "Création d'une extension 40m² avec travaux de maçonnerie et finitions.",
      image: maconnerieHero,
      location: "Yaounde",
      date: "Décembre 2024",
      category: "Maçonnerie"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mes <span className="text-accent">Réalisations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents et la qualité de mon travail
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`project-card overflow-hidden fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Votre projet pourrait être le prochain ! Parlons-en ensemble.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;