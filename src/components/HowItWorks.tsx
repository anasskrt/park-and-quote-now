
import { Car, Plane, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Car,
      title: "Déposez votre véhicule",
      description: "Choisissez votre mode de transport : avec notre service voiturier, attendez au dépose-minute de notre parking sécurisé. Sinon, venez directement à notre adresse MSParking Bordeaux. Notre équipe de gardiennage professionnel vous accueille 24h/24."
    },
    {
      icon: Users,
      title: "Transport vers l'aéroport",
      description: "Notre service de navette gratuit ou voiturier vous conduit directement à l'aéroport Bordeaux-Mérignac. Gardiennage automobile premium avec transport sécurisé et ponctualité garantie."
    },
    {
      icon: Plane,
      title: "Partez en voyage sereinement",
      description: "Profitez de votre voyage en toute tranquillité. Votre véhicule bénéficie d'un gardiennage professionnel dans notre parking surveillé à Bordeaux, avec sécurité 24h/24."
    },
    {
      icon: ArrowRight,
      title: "Récupération à l'aéroport Bordeaux",
      description: "À votre retour à l'aéroport Bordeaux-Mérignac : avec le voiturier, récupération directe dans le parking aéroport. Avec la navette, rendez-vous dans la zone indiquée sur notre carte interactive."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Comment fonctionne notre service de gardiennage et voiturier ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Service de gardiennage automobile et voiturier professionnel à l'aéroport Bordeaux-Mérignac. 
            Parking sécurisé avec navette gratuite - De la prise en charge à la restitution, 
            nous nous occupons de tout pour vous offrir une expérience de gardiennage sans stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-xl text-navy">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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
