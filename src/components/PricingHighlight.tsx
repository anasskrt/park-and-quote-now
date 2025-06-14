
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-8 border border-gold/30">
            <Star className="h-4 w-4" />
            Service Premium
          </div>

          {/* Titre principal avec design amélioré */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Stationnement
              <br />
              <span className="text-gold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                sécurisé
              </span>
            </h2>
            <div className="flex items-baseline justify-center gap-4 mb-6">
              <span className="text-3xl text-white/60">à partir de</span>
              <div className="relative">
                <span className="text-8xl font-bold text-gold drop-shadow-lg">30€</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl text-white/60">/jour</span>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-8"></div>
            
            <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Profitez de notre service premium de gardiennage automobile 
              avec navette gratuite vers les aéroports parisiens. 
              Votre véhicule en sécurité, votre voyage en toute sérénité.
            </p>
          </div>

          {/* Features avec nouveau design en grille */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-gold/20 p-4 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Sécurité 24h/24</h4>
              <p className="text-white/70">Surveillance continue et site sécurisé</p>
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mt-4" />
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-gold/20 p-4 rounded-xl w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Navette gratuite</h4>
              <p className="text-white/70">Transfer inclus vers tous les aéroports</p>
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mt-4" />
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-gold/20 p-4 rounded-xl w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Service premium</h4>
              <p className="text-white/70">Qualité et excellence garanties</p>
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mt-4" />
            </div>
          </div>

          {/* Buttons avec nouveau design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-gold to-gold-light text-navy hover:from-gold-dark hover:to-gold font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <ArrowRight className="h-6 w-6 mr-3" />
              Réserver maintenant
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-10 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHighlight;
