
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Courte durée",
      price: "35",
      duration: "par jour",
      description: "Parfait pour les voyages de 1 à 3 jours",
      features: [
        "Parking sécurisé 24h/24",
        "Navette gratuite aéroport",
        "Surveillance vidéo",
        "Assistance clientèle"
      ],
      popular: false
    },
    {
      name: "Séjour standard",
      price: "30",
      duration: "par jour",
      description: "Idéal pour les voyages de 4 à 14 jours",
      features: [
        "Parking sécurisé 24h/24",
        "Navette gratuite aéroport",
        "Surveillance vidéo",
        "Assistance clientèle",
        "Lavage extérieur gratuit",
        "Contrôle de batterie"
      ],
      popular: true
    },
    {
      name: "Longue durée",
      price: "25",
      duration: "par jour",
      description: "Pour les voyages de plus de 15 jours",
      features: [
        "Parking sécurisé 24h/24",
        "Navette gratuite aéroport",
        "Surveillance vidéo",
        "Assistance clientèle",
        "Lavage extérieur gratuit",
        "Contrôle de batterie",
        "Démarrage périodique",
        "Inspection complète"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nos Tarifs MSParking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des prix transparents et compétitifs pour tous vos besoins de stationnement. 
            Plus vous restez longtemps, plus vous économisez !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-gold border-2 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Plus populaire
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-navy mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gold">{plan.price}€</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gold hover:bg-gold-dark text-navy' : 'bg-navy hover:bg-navy-light text-white'}`}
                >
                  Choisir ce forfait
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-navy mb-4">Tarifs dégressifs automatiques</h3>
          <p className="text-gray-600 mb-6">
            Nos prix s'adaptent automatiquement à la durée de votre séjour. 
            Plus vous stationnez longtemps, moins vous payez par jour !
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy">1-3 jours</div>
              <div className="text-gold font-bold">35€/jour</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy">4-14 jours</div>
              <div className="text-gold font-bold">30€/jour</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-navy">15+ jours</div>
              <div className="text-gold font-bold">25€/jour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
