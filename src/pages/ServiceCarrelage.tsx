import { useState } from "react";
import { ArrowLeft, Grid3X3, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ImageLightbox from "@/components/ui/image-lightbox";
import carrelageHero from "@/assets/carrelage-hero.jpg";
import carrelage1 from "@/assets/carrelage-1.jpg";
import carrelage2 from "@/assets/carrelage-2.jpg";

const ServiceCarrelage = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: carrelageHero, alt: "Carrelage professionnel", title: "Pose de carrelage salle de bain" },
    { src: carrelage1, alt: "Carrelage salle de bain", title: "Carrelage moderne salle de bain" },
    { src: carrelage2, alt: "Carrelage cuisine", title: "Sol carrelé cuisine moderne" }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const services = [
    "Pose de carrelage sol et mur",
    "Faïence salle de bain",
    "Grès cérame grand format",
    "Pierre naturelle",
    "Mosaïque décorative",
    "Carrelage extérieur terrasse"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl mr-4">
                    <Grid3X3 className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Service <span className="text-primary">Carrelage</span>
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert en pose de carrelage depuis plus de 15 ans, je réalise vos projets 
                  de carrelage avec un savoir-faire artisanal et des finitions impeccables.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => navigate('/?section=contact')}
                  className="btn-accent"
                >
                  Demander un devis
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={carrelageHero}
                  alt="Service carrelage professionnel"
                  className="rounded-2xl shadow-[var(--shadow-elegant)] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mes <span className="text-primary">Réalisations</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez quelques-uns de mes projets de carrelage réalisés avec passion et expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <Card key={index} className="overflow-hidden group hover-scale">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openLightbox(index)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-white/20 w-12 h-12"
                      >
                        <Eye className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">
                      Projet réalisé avec des matériaux de qualité et un savoir-faire artisanal
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à démarrer votre projet de carrelage ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-moi pour un devis gratuit et personnalisé. 
              Je vous accompagne de la conception à la réalisation.
            </p>
            <Button 
              onClick={() => navigate('/?section=contact')}
              className="btn-accent text-lg px-8 py-4"
            >
              Obtenir mon devis gratuit
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />

      <ImageLightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default ServiceCarrelage;