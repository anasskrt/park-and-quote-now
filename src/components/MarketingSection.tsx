import { Button } from "@/components/ui/button";

const MarketingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight">
            MSParking, votre parking 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> à petit prix</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Découvrez une nouvelle façon de voyager sereinement depuis l'aéroport de Bordeaux-Mérignac. 
              Notre service de gardiennage automobile premium vous offre la tranquillité d'esprit que vous méritez, 
              avec des tarifs qui défient toute concurrence.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              <strong>MSParking, c'est l'assurance d'un voyage sans stress.</strong> Pendant que vous explorez le monde, 
              votre véhicule reste en sécurité dans notre parking surveillé 24h/24. Notre équipe de professionnels 
              veille sur votre bien le plus précieux avec le même soin que s'il s'agissait du leur.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Que vous choisissiez notre navette gratuite ou notre service voiturier premium, nous nous adaptons 
              à vos besoins et à votre budget. Plus besoin de chercher une place de parking à l'aéroport, 
              plus besoin de stresser pour votre véhicule. Avec MSParking, partez l'esprit léger et revenez 
              retrouver votre voiture exactement comme vous l'aviez laissée.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 mt-16 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-navy mb-6">
                Un service pensé pour vous
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Notre mission est simple : vous offrir une expérience de parking premium sans vous ruiner. 
                Surveillance constante, navette gratuite, équipe disponible 24h/24, et des prix qui restent 
                accessibles à tous les voyageurs. C'est ça, l'esprit MSParking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold px-8 py-3"
                >
                  Réserver maintenant
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
                >
                  Découvrir nos services
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