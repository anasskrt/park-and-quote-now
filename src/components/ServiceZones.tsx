
import { MapPin, Plane, Train } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceZones = () => {
  const airports = [
    {
      name: "Aéroport Charles de Gaulle (CDG)",
      code: "CDG",
      distance: "25 min",
      description: "Navette directe vers tous les terminaux"
    },
    {
      name: "Aéroport d'Orly (ORY)",
      code: "ORY", 
      distance: "35 min",
      description: "Desserte Orly Sud et Orly Ouest"
    }
  ];

  const stations = [
    {
      name: "Gare du Nord",
      distance: "15 min",
      description: "Eurostar, Thalys, TER"
    },
    {
      name: "Gare Montparnasse", 
      distance: "20 min",
      description: "TGV Atlantique, TER"
    },
    {
      name: "Gare de Lyon",
      distance: "18 min", 
      description: "TGV Sud-Est, TER"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="service-zones">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nos Zones de Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MSParking dessert les principaux aéroports et gares de Paris. 
            Notre parking central situé au <strong>123 Avenue des Champs-Élysées, 75008 Paris</strong> 
            vous permet un accès rapide à tous vos points de départ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Aéroports */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Plane className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-navy">Aéroports Parisiens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {airports.map((airport, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-navy">{airport.name}</h4>
                        <p className="text-gray-600 text-sm">{airport.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-gold font-bold">{airport.code}</div>
                        <div className="text-sm text-gray-500">{airport.distance}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gares */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Train className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-navy">Gares Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stations.map((station, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-navy">{station.name}</h4>
                        <p className="text-gray-600 text-sm">{station.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-gold font-bold">{station.distance}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notre parking central */}
        <Card className="bg-navy text-white">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-2xl">Notre Parking MSParking</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gold mb-2">123 Avenue des Champs-Élysées</h4>
              <p className="text-lg mb-4">75008 Paris, France</p>
              <p className="opacity-90">
                Idéalement situé au cœur de Paris, notre parking sécurisé vous offre 
                un accès privilégié à tous les grands axes de transport parisiens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gold mb-2">500</div>
                <div className="text-sm">Places disponibles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm">Accès sécurisé</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold mb-2">5★</div>
                <div className="text-sm">Note moyenne</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceZones;
