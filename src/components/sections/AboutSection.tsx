import { Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            À Propos de <span className="text-primary">Mon Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Passion et Excellence depuis plus de 15 ans
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Combi passionné basé au Cameroun, je mets mon expertise au service de vos projets 
              de construction et de rénovation. Spécialisé dans le carrelage, la climatisation, 
              l'électricité et la maçonnerie, j'apporte un savoir-faire technique reconnu et 
              une attention particulière aux détails.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chaque projet est unique et mérite une approche personnalisée. Mon engagement : 
              vous offrir un travail de qualité irréprochable, dans les délais convenus, 
              avec le respect de votre budget.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Qualité Certifiée</h4>
                  <p className="text-sm text-muted-foreground">Travaux garantis et conformes aux normes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ponctualité</h4>
                  <p className="text-sm text-muted-foreground">Respect des délais convenus</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up-delay">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)]">
              <h4 className="text-xl font-semibold mb-6 text-center">Mes Valeurs</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Écoute Client</h5>
                    <p className="text-sm text-muted-foreground">Comprendre vos besoins pour mieux vous servir</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Excellence</h5>
                    <p className="text-sm text-muted-foreground">Un travail minutieux et de haute qualité</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Fiabilité</h5>
                    <p className="text-sm text-muted-foreground">Engagement et respect des promesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;