import { Car, Users, Plane, Clock, Shield, Star, MapPin } from "lucide-react";

const TransportOptions = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12 border border-primary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texte à gauche */}
        <div>
          <h3 className="text-3xl font-bold text-navy mb-6">
            Deux Solutions de Transport Premium
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Choisissez le service qui correspond parfaitement à vos besoins et à votre budget
          </p>
          
          {/* Navette */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-navy">Navette Gratuite</h4>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Notre service de <strong>navette gratuite</strong> vous transporte depuis notre parking sécurisé vers l'aéroport Bordeaux-Mérignac. 
              Départs réguliers toutes les <strong>5 à 10 minutes</strong> selon l'affluence. Solution économique et écologique pour tous les voyageurs.
            </p>
            <div className="flex items-center gap-4 text-sm text-blue-600">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                10min de trajet
              </span>
              <span className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                100% gratuit
              </span>
            </div>
          </div>

          {/* Voiturier */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-navy">Service Voiturier Premium</h4>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Le <strong>service voiturier premium</strong> : nous récupérons votre véhicule directement à l'aéroport et le ramenons après votre voyage. 
              Aucun déplacement de votre part, <strong>confort absolu</strong>. Idéal pour les voyages d'affaires ou les départs en famille.
            </p>
            <div className="flex items-center gap-4 text-sm text-gold">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Service premium
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Récupération directe
              </span>
            </div>
          </div>
        </div>
        
        {/* Image à droite */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center text-white">
                <Plane className="h-20 w-20 mx-auto mb-4" />
                <p className="text-xl font-bold mb-2">Bordeaux-Mérignac</p>
                <p className="text-lg">Aéroport</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <Users className="h-8 w-8 mx-auto mb-1" />
                <p className="text-xs font-bold">24/7</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-navy rounded-full flex items-center justify-center shadow-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportOptions;