
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Info, Shield } from "lucide-react";

const Rules = () => {
  const vehicleRules = [
    {
      title: "État du véhicule",
      description: "Votre véhicule doit être en état de marche et propre",
      details: "Nous inspectons chaque véhicule avant et après le service pour noter tout dommage existant."
    },
    {
      title: "Assurance obligatoire",
      description: "Votre véhicule doit être assuré et en règle",
      details: "Une preuve d'assurance valide est requise lors de la remise du véhicule."
    },
    {
      title: "Carburant minimum",
      description: "Le réservoir doit contenir au minimum 1/4 de carburant",
      details: "Ceci garantit le bon fonctionnement du véhicule pendant le service."
    }
  ];

  const serviceRules = [
    {
      title: "Remise des clés",
      description: "Remise obligatoire de toutes les clés du véhicule",
      details: "Incluant les clés de contact, télécommandes et clés de sécurité."
    },
    {
      title: "Objets de valeur",
      description: "Retirez tous les objets de valeur du véhicule",
      details: "Nous ne sommes pas responsables des objets laissés dans le véhicule."
    },
    {
      title: "Horaires de récupération",
      description: "Respectez les créneaux horaires convenus",
      details: "Prévenez-nous au moins 2h à l'avance en cas de changement d'horaire."
    }
  ];

  const paymentRules = [
    {
      title: "Paiement à l'avance",
      description: "Le service doit être payé lors de la réservation",
      details: "Paiement sécurisé par carte bancaire uniquement."
    },
    {
      title: "Politique d'annulation",
      description: "Annulation gratuite jusqu'à 24h avant le service",
      details: "Passé ce délai, 50% du montant sera retenu."
    },
    {
      title: "Services supplémentaires",
      description: "Les services additionnels sont facturés séparément",
      details: "Lavage, révision technique, etc. selon tarifs en vigueur."
    }
  ];

  const liabilityRules = [
    {
      title: "Responsabilité limitée",
      description: "Notre responsabilité est limitée selon nos conditions générales",
      details: "Couverture maximale de 10 000€ pour les dommages directs."
    },
    {
      title: "Force majeure",
      description: "Nous ne sommes pas responsables des cas de force majeure",
      details: "Conditions météorologiques extrêmes, grèves, événements imprévisibles."
    },
    {
      title: "Utilisation du véhicule",
      description: "Le véhicule sera utilisé uniquement pour le stationnement",
      details: "Aucun déplacement non autorisé ne sera effectué."
    }
  ];

  const RuleSection = ({ title, rules, icon: Icon, color }: { 
    title: string; 
    rules: any[]; 
    icon: any; 
    color: string; 
  }) => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-navy">
          <Icon className={`w-6 h-6 ${color}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="border-l-4 border-gold pl-4">
              <h4 className="font-semibold text-navy mb-2">{rule.title}</h4>
              <p className="text-gray-700 mb-2">{rule.description}</p>
              <p className="text-sm text-gray-600 italic">{rule.details}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4">
              Règles du Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veuillez prendre connaissance de toutes les règles ci-dessous avant d'utiliser notre service de voiturier. 
              Ces règles garantissent la sécurité et la qualité de notre prestation.
            </p>
          </div>

          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Information importante</h3>
                <p className="text-blue-800">
                  L'acceptation de ces règles est obligatoire pour utiliser notre service. 
                  En réservant, vous confirmez avoir lu et accepté l'ensemble de ces conditions.
                </p>
              </div>
            </div>
          </div>

          <RuleSection 
            title="Règles concernant le véhicule"
            rules={vehicleRules}
            icon={Shield}
            color="text-green-600"
          />

          <RuleSection 
            title="Règles du service"
            rules={serviceRules}
            icon={Check}
            color="text-blue-600"
          />

          <RuleSection 
            title="Règles de paiement"
            rules={paymentRules}
            icon={Info}
            color="text-gold"
          />

          <RuleSection 
            title="Responsabilité et limites"
            rules={liabilityRules}
            icon={AlertTriangle}
            color="text-red-600"
          />

          <div className="mt-12 p-6 bg-navy text-white rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Questions sur nos règles ?</h3>
            <p className="mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions concernant nos règles et conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span>contact@valetpark.fr</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rules;
