import { Button } from "@/components/ui/button";

const MarketingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight">
            MSParking, votre parking 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> à petit prix</span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
            Découvrez une nouvelle façon de voyager sereinement depuis Bordeaux-Mérignac. 
            <br className="hidden md:block" />
            <strong>Gardiennage professionnel, tarifs imbattables, service premium</strong> - 
            Tout ce dont vous avez besoin pour partir l'esprit tranquille.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-3">À partir de 35€</h3>
              <p className="text-lg text-gray-600">Prix imbattables pour un service premium</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-3">Navette Gratuite</h3>
              <p className="text-lg text-gray-600">Transport inclus vers l'aéroport</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-navy mb-3">100% Sécurisé</h3>
              <p className="text-lg text-gray-600">Surveillance 24h/24, caméras, éclairage</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gold mb-3">Service 24/7</h3>
              <p className="text-lg text-gray-600">Disponible à toute heure, tous les jours</p>
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