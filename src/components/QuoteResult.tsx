
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteData } from "@/lib/types";
import { differenceInDays, differenceInHours } from "date-fns";
import { useState } from "react";

interface QuoteResultProps {
  quote: QuoteData;
}

const calculatePrice = (quote: QuoteData): number => {
  const departureDateTime = new Date(
    `${format(quote.departureDate, "yyyy-MM-dd")}T${quote.departureTime}`
  );
  
  const returnDateTime = new Date(
    `${format(quote.returnDate, "yyyy-MM-dd")}T${quote.returnTime}`
  );
  
  // Calculer la durée en jours (arrondi à l'entier supérieur)
  const durationDays = Math.ceil(
    differenceInHours(returnDateTime, departureDateTime) / 24
  );
  
  // Prix de base par jour
  const basePricePerDay = 25;
  
  // Prix total
  let totalPrice = Math.max(1, durationDays) * basePricePerDay;
  
  // Ajout d'un supplément pour des voitures de luxe (simple exemple)
  const luxuryBrands = ['mercedes', 'bmw', 'audi', 'tesla', 'porsche', 'ferrari', 'lamborghini'];
  const carModelLower = quote.carModel.toLowerCase();
  if (luxuryBrands.some(brand => carModelLower.includes(brand))) {
    totalPrice *= 1.5; // Supplément de 50% pour les voitures de luxe
  }
  
  return totalPrice;
};

const QuoteResult = ({ quote }: QuoteResultProps) => {
  const [saved, setSaved] = useState(false);
  
  const price = calculatePrice(quote);
  const formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  
  const departureDate = format(quote.departureDate, "EEEE d MMMM yyyy", { locale: fr });
  const returnDate = format(quote.returnDate, "EEEE d MMMM yyyy", { locale: fr });
  
  const saveQuote = () => {
    // Simulation d'une sauvegarde
    setTimeout(() => {
      setSaved(true);
    }, 1000);
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="section-heading text-center">Votre Devis</h2>
      
      <Card className="max-w-2xl mx-auto border-2 border-gold/30">
        <CardHeader className="bg-navy text-white">
          <CardTitle className="text-2xl flex justify-between items-center">
            <span>Estimation de prix</span>
            <span className="text-gold-light text-3xl font-bold">{formattedPrice}</span>
          </CardTitle>
          <CardDescription className="text-gray-200">
            Service de voiturier et gardiennage
          </CardDescription>
        </CardHeader>
        
        <CardContent className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-navy">Informations sur la demande</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="text-gray-600">Lieu:</div>
              <div className="font-medium">{quote.location}</div>
              
              <div className="text-gray-600">Départ:</div>
              <div className="font-medium">
                {departureDate} à {quote.departureTime}
              </div>
              
              <div className="text-gray-600">Retour:</div>
              <div className="font-medium">
                {returnDate} à {quote.returnTime}
              </div>
              
              <div className="text-gray-600">Véhicule:</div>
              <div className="font-medium">{quote.carModel}</div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-lg text-navy">Coordonnées client</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="text-gray-600">Nom:</div>
              <div className="font-medium">{quote.name}</div>
              
              <div className="text-gray-600">Email:</div>
              <div className="font-medium">{quote.email}</div>
              
              <div className="text-gray-600">Téléphone:</div>
              <div className="font-medium">{quote.phone}</div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600">
              Ce devis est une estimation basée sur les informations fournies. Le prix final peut varier en fonction 
              des services additionnels et de la durée exacte de gardiennage.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button variant="outline" onClick={() => window.print()}>
            Imprimer ce devis
          </Button>
          
          <Button 
            className="bg-gold hover:bg-gold-dark text-navy font-bold" 
            onClick={saveQuote}
            disabled={saved}
          >
            {saved ? "Devis enregistré" : "Enregistrer ce devis"}
          </Button>
        </CardFooter>
      </Card>
      
      <div className="text-center mt-8">
        <p className="mb-4">
          Vous avez des questions ou souhaitez réserver dès maintenant ?
        </p>
        <Button className="bg-navy hover:bg-navy-light">
          <a href="#contact">Contactez-nous</a>
        </Button>
      </div>
    </div>
  );
};

export default QuoteResult;
