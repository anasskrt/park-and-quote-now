
import { Shield, Clock, Award, HeartHandshake, Camera, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Parking surveillé 24h/24 avec système de vidéosurveillance haute définition et personnel de sécurité sur site."
    },
    {
      icon: Clock,
      title: "Service 24h/24",
      description: "Disponibilité totale, 7 jours sur 7, pour s'adapter à tous vos horaires de vol, même les plus tardifs ou matinaux."
    },
    {
      icon: Award,
      title: "Excellence du service",
      description: "Plus de 10 ans d'expérience dans le gardiennage automobile avec une équipe de voituriers professionnels certifiés."
    },
    {
      icon: HeartHandshake,
      title: "Service personnalisé",
      description: "Chaque client bénéficie d'un service sur-mesure avec prise en charge individuelle et attention aux détails."
    },
    {
      icon: Camera,
      title: "Traçabilité complète",
      description: "Suivi photo de votre véhicule à l'arrivée et au départ pour une transparence totale sur l'état de votre voiture."
    },
    {
      icon: Wrench,
      title: "Services additionnels",
      description: "Lavage, contrôle technique, entretien... Profitez de votre voyage pour prendre soin de votre véhicule."
    }
  ];

  return (
    <section className="py-16 bg-navy text-white" id="why-choose-us">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir MSParking ?
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous offrons à nos clients un service de gardiennage automobile 
            haut de gamme alliant sécurité, confort et professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <advantage.icon className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-xl text-white">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gold/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Notre engagement qualité</h3>
          <p className="text-lg opacity-90 mb-6">
            Nous nous engageons à vous offrir une expérience exceptionnelle, 
            de la prise en charge à la restitution de votre véhicule.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">10+</div>
              <div className="text-sm">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">15000+</div>
              <div className="text-sm">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">99.8%</div>
              <div className="text-sm">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">0</div>
              <div className="text-sm">Incident sécurité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
