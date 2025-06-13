
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PostBookingSignup from "./PostBookingSignup";
import { createStripeSession, PaymentIntentData } from "@/lib/stripe";

interface PaymentFormProps {
  totalAmount: number;
  services: any[];
  userInfo: any;
  bookingDetails: any;
  onBack: () => void;
}

const PaymentForm = ({ totalAmount, services, userInfo, bookingDetails, onBack }: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleStripePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Préparer les données pour Stripe
      const paymentData: PaymentIntentData = {
        amount: Math.round(totalAmount * 100), // Stripe utilise les centimes
        currency: 'eur',
        services,
        userInfo,
        bookingDetails
      };

      console.log('Initialisation du paiement Stripe...');
      
      // Créer la session Stripe
      const { url } = await createStripeSession(paymentData);
      
      if (url) {
        // Rediriger vers Stripe Checkout dans un nouvel onglet
        window.open(url, '_blank');
        
        toast.success("Redirection vers Stripe en cours...");
        
        // Simuler un délai puis continuer le flow normal
        setTimeout(() => {
          setIsProcessing(false);
          
          // Simuler un paiement réussi pour la démo
          toast.success("Paiement effectué avec succès !");
          
          const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
          
          if (!isLoggedIn) {
            setShowSignup(true);
          } else {
            navigate("/", { 
              state: { 
                validationComplete: true,
                bookingDetails: {
                  ...bookingDetails,
                  services,
                  userInfo,
                  totalAmount
                }
              }
            });
          }
        }, 3000);
      } else {
        throw new Error('Impossible de créer la session Stripe');
      }
      
    } catch (error) {
      setIsProcessing(false);
      console.error('Erreur Stripe:', error);
      toast.error("Erreur lors de l'initialisation du paiement");
    }
  };

  const handleSignupClose = () => {
    setShowSignup(false);
    navigate("/", { 
      state: { 
        validationComplete: true,
        bookingDetails: {
          ...bookingDetails,
          services,
          userInfo,
          totalAmount
        }
      }
    });
  };

  const handleSignupSkip = () => {
    setShowSignup(false);
    navigate("/", { 
      state: { 
        validationComplete: true,
        bookingDetails: {
          ...bookingDetails,
          services,
          userInfo,
          totalAmount
        }
      }
    });
  };

  const formattedAmount = new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'EUR' 
  }).format(totalAmount);

  return (
    <>
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-navy">Finaliser votre réservation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Récapitulatif */}
          <Card>
            <CardHeader>
              <CardTitle className="text-navy">Récapitulatif de votre commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-navy mb-2">Services sélectionnés:</h4>
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span>{service.name}</span>
                    <span className="font-semibold">{service.price}€/jour</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-2">
                <h4 className="font-semibold text-navy mb-2">Informations client:</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Nom:</strong> {userInfo.name}</p>
                  <p><strong>Email:</strong> {userInfo.email}</p>
                  <p><strong>Téléphone:</strong> {userInfo.phone}</p>
                  <p><strong>Lieu:</strong> {userInfo.location}</p>
                  <p><strong>Véhicule:</strong> {userInfo.carModel}</p>
                </div>
              </div>

              <div className="border-t pt-2">
                <h4 className="font-semibold text-navy mb-2">Période:</h4>
                <div className="text-sm">
                  <p><strong>Départ:</strong> {bookingDetails.departureDate?.toLocaleDateString()} à {bookingDetails.departureTime}</p>
                  <p><strong>Retour:</strong> {bookingDetails.returnDate?.toLocaleDateString()} à {bookingDetails.returnTime}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-gold">{formattedAmount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Paiement Stripe */}
          <Card>
            <CardHeader>
              <CardTitle className="text-navy">Paiement sécurisé avec Stripe</CardTitle>
              <CardDescription>
                Vous serez redirigé vers Stripe pour finaliser votre paiement de manière sécurisée
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Paiement via Stripe</h4>
                <p className="text-blue-700 text-sm">
                  Vous serez redirigé vers la page de paiement sécurisée de Stripe. 
                  Toutes les principales cartes bancaires sont acceptées.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Montant à payer:</h5>
                  <div className="text-2xl font-bold text-gold">{formattedAmount}</div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-green-700 text-sm font-medium">Paiement 100% sécurisé</span>
                  </div>
                  <p className="text-green-600 text-xs mt-1">Cryptage SSL et conformité PCI DSS</p>
                </div>

                <Button
                  onClick={handleStripePayment}
                  disabled={isProcessing}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3 text-lg"
                >
                  {isProcessing ? "Redirection en cours..." : "Payer avec Stripe"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button variant="outline" onClick={onBack}>
            Retour
          </Button>
          <p className="text-sm text-gray-500">
            Paiement sécurisé par Stripe
          </p>
        </div>
      </div>

      {/* Post-booking signup modal */}
      {showSignup && (
        <PostBookingSignup
          userInfo={{
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone
          }}
          onClose={handleSignupClose}
          onSkip={handleSignupSkip}
        />
      )}
    </>
  );
};

export default PaymentForm;
