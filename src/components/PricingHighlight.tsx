
import { Star, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image côté gauche */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl p-8 text-center backdrop-blur-sm border border-gold/20">
              <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <div className="text-6xl">🚗</div>
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">MSParking</h3>
              <p className="text-white/80">Votre parking de confiance</p>
            </div>
          </div>

          {/* Contenu marketing côté droit avec nouveau design */}
          <div>
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold/30">
              <Star className="h-4 w-4" />
              Service Premium
            </div>

            {/* Titre principal avec design amélioré */}
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                Stationnement
                <br />
                <span className="text-gold">sécurisé</span>
              </h2>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl text-white/60">à partir de</span>
                <span className="text-6xl font-bold text-gold">30€</span>
                <span className="text-2xl text-white/60">/jour</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></div>
            </div>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Profitez de notre service premium de gardiennage automobile 
              avec navette gratuite vers les aéroports parisiens. 
              Votre véhicule en sécurité, votre voyage en toute sérénité.
            </p>

            {/* Features avec nouveau design */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="bg-gold/20 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sécurité 24h/24</h4>
                  <p className="text-white/70 text-sm">Surveillance continue et site sécurisé</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400 ml-auto" />
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="bg-gold/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Navette gratuite</h4>
                  <p className="text-white/70 text-sm">Transfer inclus vers tous les aéroports</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400 ml-auto" />
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="bg-gold/20 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Service premium</h4>
                  <p className="text-white/70 text-sm">Qualité et excellence garanties</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400 ml-auto" />
              </div>
            </div>

            {/* Buttons avec nouveau design */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-gold to-gold-light text-navy hover:from-gold-dark hover:to-gold font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <ArrowRight className="h-5 w-5 mr-2" />
                Réserver maintenant
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
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
