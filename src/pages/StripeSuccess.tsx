
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { verifyPaymentStatus } from "@/lib/stripe";
import { toast } from "sonner";

const StripeSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [paymentVerified, setPaymentVerified] = useState(false);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        toast.error("Session ID manquant");
        navigate("/");
        return;
      }

      try {
        console.log('Vérification du paiement Stripe...');
        const { status } = await verifyPaymentStatus(sessionId);
        
        if (status === 'complete' || status === 'paid') {
          setPaymentVerified(true);
          toast.success("Paiement confirmé avec succès !");
        } else {
          toast.error("Le paiement n'a pas été confirmé");
          navigate("/payment-failed");
        }
      } catch (error) {
        console.error('Erreur de vérification:', error);
        toast.error("Erreur lors de la vérification du paiement");
        navigate("/payment-failed");
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [sessionId, navigate]);

  const handleBackToHome = () => {
    navigate("/", { 
      state: { 
        validationComplete: true 
      }
    });
  };

  const handleViewBookings = () => {
    // Rediriger vers une page de gestion des réservations si elle existe
    navigate("/profile"); // ou vers une page dédiée aux réservations
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow bg-gray-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Vérification du paiement...</h3>
              <p className="text-gray-600">Nous vérifions votre paiement auprès de Stripe</p>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">Paiement réussi !</CardTitle>
            <CardDescription className="text-lg">
              Votre réservation a été confirmée
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Confirmation</h4>
              <p className="text-green-700 text-sm">
                Votre paiement a été traité avec succès par Stripe. 
                Vous recevrez un email de confirmation sous peu.
              </p>
              {sessionId && (
                <p className="text-green-600 text-xs mt-2">
                  ID de session: {sessionId.substring(0, 20)}...
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-navy">Prochaines étapes</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Vous recevrez un email avec tous les détails
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Notre équipe vous contactera pour organiser la prise en charge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Gardez ce numéro de confirmation précieusement
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleViewBookings}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Voir mes réservations
              </Button>
              
              <Button
                variant="outline"
                onClick={handleBackToHome}
                className="w-full"
              >
                <Home className="h-4 w-4 mr-2" />
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

export default StripeSuccess;
