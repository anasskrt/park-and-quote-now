import { Car, Shield, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketingSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            MSParking, votre parking 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> à petit prix</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Découvrez une nouvelle façon de voyager sereinement depuis Bordeaux-Mérignac. 
            <br className="hidden md:block" />
            <strong>Gardiennage professionnel, tarifs imbattables, service premium</strong> - 
            Tout ce dont vous avez besoin pour partir l'esprit tranquille.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Euro className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">À partir de 35€</h3>
              <p className="text-gray-600">Prix imbattables pour un service premium</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Navette Gratuite</h3>
              <p className="text-gray-600">Transport inclus vers l'aéroport</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">100% Sécurisé</h3>
              <p className="text-gray-600">Surveillance 24h/24, caméras, éclairage</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Service 24/7</h3>
              <p className="text-gray-600">Disponible à toute heure, tous les jours</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Pourquoi choisir MSParking ?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Plus qu'un simple parking, MSParking c'est <strong>l'assurance d'un voyage sans stress</strong>. 
                Nos tarifs défient toute concurrence tout en maintenant un niveau de service exceptionnel. 
                Votre véhicule est entre de bonnes mains pendant que vous profitez de votre voyage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold"
                >
                  Réserver maintenant
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Voir nos tarifs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;