
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, CreditCard, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentFailed = () => {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    navigate("/booking-process");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleContactSupport = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            <CardTitle className="text-2xl text-red-600">Paiement échoué</CardTitle>
            <CardDescription className="text-lg">
              Votre paiement n'a pas pu être traité
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Que s'est-il passé ?</h4>
              <p className="text-red-700 text-sm">
                Le paiement a été annulé ou a rencontré un problème technique. 
                Aucun montant n'a été prélevé sur votre compte.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-navy">Que faire maintenant ?</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Vérifiez vos informations de paiement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Assurez-vous d'avoir des fonds suffisants
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Contactez votre banque si le problème persiste
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleRetryPayment}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Réessayer le paiement
              </Button>
              
              <Button
                variant="outline"
                onClick={handleContactSupport}
                className="w-full"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Contacter le support
              </Button>
              
              <Button
                variant="ghost"
                onClick={handleBackToHome}
                className="w-full text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentFailed;
