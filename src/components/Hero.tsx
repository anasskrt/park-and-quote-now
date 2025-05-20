
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Service de Gardiennage de Voitures Premium avec Voiturier
          </h1>
          
          <p className="text-lg sm:text-xl mb-8">
            Confiez-nous votre véhicule en toute sérénité. Notre équipe de voituriers professionnels prend soin de votre voiture pendant que vous voyagez.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-navy font-bold"
            >
              <a href="#devis">Demander un devis</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              <a href="#services">Nos services</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
