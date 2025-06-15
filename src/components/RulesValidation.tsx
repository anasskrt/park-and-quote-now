
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";

interface RulesValidationProps {
  onNext: () => void;
  onBack: () => void;
}

const RulesValidation = ({ onNext, onBack }: RulesValidationProps) => {
  const [rulesAccepted, setRulesAccepted] = useState(false);

  const handleRulesToggle = (checked: boolean) => {
    setRulesAccepted(checked);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-navy">Validation des règles</h2>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-navy">Acceptation des conditions générales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 mb-4">
                Avant de finaliser votre réservation, vous devez accepter nos règles du service.
              </p>
              
              <div className="mb-4">
                <a 
                  href="/rules" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold underline"
                >
                  Consulter les règles du service
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-lg border border-gold bg-white">
                <Checkbox
                  id="accept-rules"
                  checked={rulesAccepted}
                  onCheckedChange={handleRulesToggle}
                  className="mt-1"
                />
                <label 
                  htmlFor="accept-rules" 
                  className="text-sm font-medium leading-relaxed cursor-pointer flex-1"
                >
                  J'ai lu et j'accepte toutes les règles du service, y compris les conditions 
                  concernant mon véhicule, l'assurance obligatoire, la remise des clés, les 
                  conditions de paiement, la politique d'annulation, les limites de responsabilité 
                  et la protection des données.
                </label>
              </div>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-navy mb-2">Rappel important :</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Véhicule en état de marche et assuré</li>
                <li>• Remise obligatoire de toutes les clés</li>
                <li>• Annulation gratuite jusqu'à 24h avant</li>
                <li>• Paiement sécurisé par Stripe</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onBack}>
          Retour
        </Button>
        
        <Button 
          onClick={onNext}
          disabled={!rulesAccepted}
          className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
        >
          {rulesAccepted ? "Continuer vers le paiement" : "Accepter les règles pour continuer"}
        </Button>
      </div>
    </div>
  );
};

export default RulesValidation;
