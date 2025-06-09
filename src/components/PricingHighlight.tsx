
import { Star, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image côté gauche */}
          <div className="relative">
            <div className="bg-gold/10 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-6xl">🚗</div>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">MSParking</h3>
              <p className="text-white/80">Votre parking de confiance</p>
            </div>
          </div>

          {/* Contenu marketing côté droit */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Stationnement sécurisé à partir de{" "}
              <span className="text-gold">30€/jour</span>
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Profitez de notre service premium de gardiennage automobile 
              avec navette gratuite vers les aéroports parisiens. 
              Votre véhicule en sécurité, votre voyage en toute sérénité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-gold mx-auto mb-2" />
                  <div className="text-sm text-white">Sécurisé 24h/24</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-gold mx-auto mb-2" />
                  <div className="text-sm text-white">Navette gratuite</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-gold mx-auto mb-2" />
                  <div className="text-sm text-white">Service premium</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gold text-navy hover:bg-gold-dark font-bold px-8 py-3">
                Réserver maintenant
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHighlight;
