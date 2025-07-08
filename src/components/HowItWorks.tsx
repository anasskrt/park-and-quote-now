
import { Car, Plane, Users, ArrowRight, Clock, MapPin, Shield, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TransportOptions from "@/components/TransportOptions";

const HowItWorks = () => {
  const steps = [
    {
      icon: Car,
      title: "Déposez votre véhicule",
      subtitle: "Service voiturier Bordeaux",
      description: "Choisissez votre mode de transport premium : avec notre service voiturier aéroport Bordeaux-Mérignac, déposez votre véhicule au dépose-minute. Sinon, venez directement à notre parking gardiennage MSParking Bordeaux. Notre équipe de gardiennage automobile professionnel vous accueille 24h/24, 7j/7 pour un service de qualité.",
      features: ["Parking sécurisé Bordeaux", "Accueil 24h/24", "Service voiturier premium"]
    },
    {
      icon: Users,
      title: "Transport vers l'aéroport Bordeaux-Mérignac",
      subtitle: "Navette gratuite incluse",
      description: "Notre service de navette aéroport gratuit ou voiturier vous conduit directement à l'aéroport Bordeaux-Mérignac en moins de 10 minutes. Gardiennage automobile premium avec transport sécurisé, ponctualité garantie et véhicules climatisés pour votre confort.",
      features: ["Navette gratuite", "10min vers aéroport", "Transport sécurisé"]
    },
    {
      icon: Plane,
      title: "Partez en voyage sereinement",
      subtitle: "Parking surveillé 24h/24",
      description: "Profitez de votre voyage en toute tranquillité. Votre véhicule bénéficie d'un gardiennage professionnel dans notre parking surveillé à Bordeaux, avec sécurité 24h/24, caméras de surveillance, éclairage nocturne et patrouilles régulières pour une protection optimale.",
      features: ["Surveillance 24h/24", "Caméras sécurité", "Éclairage nocturne"]
    },
    {
      icon: ArrowRight,
      title: "Récupération aéroport Bordeaux",
      subtitle: "Service retour rapide",
      description: "À votre retour à l'aéroport Bordeaux-Mérignac : avec le voiturier, récupération directe dans le parking aéroport. Avec la navette gratuite, rendez-vous dans la zone indiquée sur notre carte interactive. Votre véhicule vous attend, propre et prêt à partir.",
      features: ["Récupération rapide", "Véhicule nettoyé", "Service personnalisé"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" id="how-it-works">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Service Premium Bordeaux-Mérignac
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Comment fonctionne notre service de 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> gardiennage et voiturier</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Service de gardiennage automobile et voiturier professionnel</strong> à l'aéroport Bordeaux-Mérignac. 
            <br className="hidden md:block" />
            Parking sécurisé avec navette gratuite, surveillance 24h/24 - De la prise en charge à la restitution, 
            nous vous offrons une expérience de <em>gardiennage premium sans stress</em> à Bordeaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-primary" />
              Service 24h/24, 7j/7
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-primary" />
              Bordeaux-Mérignac
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-primary" />
              Parking sécurisé
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-primary" />
              Service premium
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-navy mb-1 group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                    <p className="text-sm text-secondary font-medium">{step.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <TransportOptions />

        <div className="mt-12 bg-navy text-white rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Service disponible 24h/24, 7j/7</h3>
            <p className="text-lg mb-6">
              Nos équipes sont à votre disposition à tout moment pour vous offrir un service irréprochable.
              Réservez dès maintenant et voyagez l'esprit tranquille.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <div>Service continu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">5min</div>
                <div>Temps d'attente navette</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">100%</div>
                <div>Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
